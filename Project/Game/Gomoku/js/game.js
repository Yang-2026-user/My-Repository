const BOARD_SIZE = 15;
const board = Array(BOARD_SIZE).fill().map(() => Array(BOARD_SIZE).fill(null));
let currentPlayer = 'black';
let gameOver = false;
let gameMode = 'ai';
let aiLevel = 'medium';
let aiPlayer = 'white';

const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const gameModeSelect = document.getElementById('game-mode');
const aiLevelSelect = document.getElementById('ai-level');
const resetBtn = document.getElementById('reset-btn');

function getCellSize() {
    return window.innerWidth <= 600 ? 20 : 30;
}

function createBoard() {
    boardElement.innerHTML = '';
    const cellSize = getCellSize();

    // 动态设置网格大小
    boardElement.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, ${cellSize}px)`;
    boardElement.style.gridTemplateRows = `repeat(${BOARD_SIZE}, ${cellSize}px)`;

    // 行坐标 (1-15)
    for (let i = 0; i < BOARD_SIZE; i++) {
        const rowCoord = document.createElement('div');
        rowCoord.className = 'coordinates row-coords';
        rowCoord.style.top = `${i * cellSize}px`;
        rowCoord.style.height = `${cellSize}px`;   // 同步高度
        rowCoord.textContent = BOARD_SIZE - i;
        boardElement.appendChild(rowCoord);

        // 列坐标 (A-O)
        const colCoord = document.createElement('div');
        colCoord.className = 'coordinates col-coords';
        colCoord.style.left = `${i * cellSize}px`;
        colCoord.style.width = `${cellSize}px`;    // 同步宽度
        colCoord.textContent = String.fromCharCode(65 + i);
        boardElement.appendChild(colCoord);
    }

    // 星位点
    const starPoints = [[3, 3], [3, 11], [7, 7], [11, 3], [11, 11]];
    const halfCell = cellSize / 2;
    const starHalf = cellSize <= 20 ? 2 : 3;

    starPoints.forEach(([x, y]) => {
        const star = document.createElement('div');
        star.className = 'star-point';
        star.style.left = `${y * cellSize + halfCell - starHalf}px`;
        star.style.top = `${x * cellSize + halfCell - starHalf}px`;
        boardElement.appendChild(star);
    });

    // 棋盘格子
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
    }
}

function handleCellClick(e) {
    if (gameOver) return;

    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);

    if (board[row][col]) return;

    placePiece(row, col, currentPlayer);
    board[row][col] = currentPlayer;

    if (checkWin(row, col, currentPlayer)) {
        gameOver = true;
        const winner = currentPlayer === 'black' ? '黑子' : '白子';
        statusElement.textContent = `${gameMode === 'ai' && currentPlayer === aiPlayer ? 'AI' : winner}获胜!`;
        return;
    }

    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    updateStatus();

    if (gameMode === 'ai' && currentPlayer === aiPlayer && !gameOver) {
        setTimeout(aiMove, 500);
    }
}

function placePiece(row, col, player) {
    const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    const piece = document.createElement('div');
    piece.className = `piece ${player}`;
    cell.appendChild(piece);
}

function checkWin(row, col, player) {
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

    for (const [dx, dy] of directions) {
        let count = 1;

        for (let i = 1; i < 5; i++) {
            const newRow = row + dx * i;
            const newCol = col + dy * i;
            if (newRow < 0 || newRow >= BOARD_SIZE || newCol < 0 || newCol >= BOARD_SIZE || board[newRow][newCol] !== player) break;
            count++;
        }

        for (let i = 1; i < 5; i++) {
            const newRow = row - dx * i;
            const newCol = col - dy * i;
            if (newRow < 0 || newRow >= BOARD_SIZE || newCol < 0 || newCol >= BOARD_SIZE || board[newRow][newCol] !== player) break;
            count++;
        }

        if (count >= 5) return true;
    }
    return false;
}

function aiMove() {
    let row, col;

    switch (aiLevel) {
        case 'easy': [row, col] = aiEasyMove(); break;
        case 'medium': [row, col] = aiMediumMove(); break;
        case 'hard': [row, col] = aiHardMove(); break;
        case 'expert': [row, col] = aiExpertMove(3); break;
        case 'master': [row, col] = aiExpertMove(4); break;
        default: [row, col] = aiMediumMove();
    }

    placePiece(row, col, aiPlayer);
    board[row][col] = aiPlayer;

    if (checkWin(row, col, aiPlayer)) {
        gameOver = true;
        statusElement.textContent = 'AI获胜!';
        return;
    }

    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    updateStatus();
}

function aiEasyMove() {
    const emptyCells = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (!board[i][j]) emptyCells.push([i, j]);
        }
    }
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function aiMediumMove() {
    const moves = getPossibleMoves();
    let bestScore = -Infinity;
    let bestMove = moves[0];

    for (const [i, j] of moves) {
        const score = evaluatePosition(i, j, aiPlayer);
        if (score > bestScore) {
            bestScore = score;
            bestMove = [i, j];
        }
    }
    return bestMove;
}

function aiHardMove() {
    const moves = getPossibleMoves();
    let bestScore = -Infinity;
    let bestMove = moves[0];

    for (const [i, j] of moves) {
        const attackScore = evaluatePosition(i, j, aiPlayer);
        const defendScore = evaluatePosition(i, j, currentPlayer === 'black' ? 'white' : 'black');
        const totalScore = attackScore * 1.2 + defendScore;
        if (totalScore > bestScore) {
            bestScore = totalScore;
            bestMove = [i, j];
        }
    }
    return bestMove;
}

function aiExpertMove(depth) {
    let bestScore = -Infinity;
    let bestMove = [7, 7];
    const alpha = -Infinity;
    const beta = Infinity;
    const moves = getPossibleMoves();

    for (const [i, j] of moves) {
        board[i][j] = aiPlayer;
        const score = minimax(depth - 1, false, alpha, beta);
        board[i][j] = null;

        if (score > bestScore) {
            bestScore = score;
            bestMove = [i, j];
        }
        if (bestScore >= 100000) break;
    }
    return bestMove;
}

function minimax(depth, isMaximizing, alpha, beta) {
    const winner = checkGameWinner();
    if (winner !== null || depth === 0) return evaluateBoard();

    if (isMaximizing) {
        let maxEval = -Infinity;
        const moves = getPossibleMoves();
        for (const [i, j] of moves) {
            board[i][j] = aiPlayer;
            const eval_ = minimax(depth - 1, false, alpha, beta);
            board[i][j] = null;
            maxEval = Math.max(maxEval, eval_);
            alpha = Math.max(alpha, eval_);
            if (beta <= alpha) break;
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        const moves = getPossibleMoves();
        for (const [i, j] of moves) {
            board[i][j] = currentPlayer === 'black' ? 'white' : 'black';
            const eval_ = minimax(depth - 1, true, alpha, beta);
            board[i][j] = null;
            minEval = Math.min(minEval, eval_);
            beta = Math.min(beta, eval_);
            if (beta <= alpha) break;
        }
        return minEval;
    }
}

function getPossibleMoves() {
    const moves = [];
    const directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const candidateMoves = new Set();

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j]) {
                for (const [di, dj] of directions) {
                    const ni = i + di, nj = j + dj;
                    if (ni >= 0 && ni < BOARD_SIZE && nj >= 0 && nj < BOARD_SIZE && !board[ni][nj]) {
                        candidateMoves.add(`${ni},${nj}`);
                    }
                }
            }
        }
    }

    if (candidateMoves.size === 0) {
        for (let i = 6; i <= 8; i++) {
            for (let j = 6; j <= 8; j++) {
                if (!board[i][j]) moves.push([i, j]);
            }
        }
        return moves.length > 0 ? moves : [[7, 7]];
    }

    for (const move of candidateMoves) {
        const [i, j] = move.split(',').map(Number);
        moves.push([i, j]);
    }
    return moves;
}

function evaluateBoard() {
    let score = 0;
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === aiPlayer && checkWin(i, j, aiPlayer)) return 1000000;
            if (board[i][j] && board[i][j] !== aiPlayer && checkWin(i, j, board[i][j])) return -1000000;
        }
    }

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (!board[i][j]) continue;
            const player = board[i][j];
            const isAI = player === aiPlayer;

            for (const [dx, dy] of directions) {
                if (i - dx >= 0 && i - dx < BOARD_SIZE && j - dy >= 0 && j - dy < BOARD_SIZE && board[i - dx][j - dy] === player) continue;

                let sequence = [];
                for (let k = 0; k < 6; k++) {
                    const ni = i + dx * k, nj = j + dy * k;
                    if (ni < 0 || ni >= BOARD_SIZE || nj < 0 || nj >= BOARD_SIZE) { sequence.push(-1); break; }
                    if (board[ni][nj] === player) sequence.push(1);
                    else if (board[ni][nj] === null) sequence.push(0);
                    else { sequence.push(-1); break; }
                }
                const patternScore = evaluateSequence(sequence, isAI);
                score += isAI ? patternScore : -patternScore;
            }
        }
    }

    for (let i = 5; i <= 9; i++) {
        for (let j = 5; j <= 9; j++) {
            if (board[i][j] === aiPlayer) score += 10;
            else if (board[i][j] && board[i][j] !== aiPlayer) score -= 10;
        }
    }
    return score;
}

function evaluatePosition(row, col, player) {
    let score = 0;
    const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

    for (const [dx, dy] of directions) {
        let sequence = [];
        for (let i = -4; i <= 4; i++) {
            const newRow = row + dx * i, newCol = col + dy * i;
            if (newRow < 0 || newRow >= BOARD_SIZE || newCol < 0 || newCol >= BOARD_SIZE) { sequence.push(-1); continue; }
            if (i === 0) sequence.push(1);
            else if (board[newRow][newCol] === player) sequence.push(1);
            else if (board[newRow][newCol] === null) sequence.push(0);
            else sequence.push(-1);
        }

        const str = sequence.join('');
        if (str.includes('11111')) score += 100000;
        if (str.includes('011110')) score += 10000;
        if (str.includes('11110') || str.includes('01111') || str.includes('10111') || str.includes('11011') || str.includes('11101')) score += 1000;
        if (str.includes('01110')) score += 1000;
        if (str.includes('011010') || str.includes('010110')) score += 500;
        if (str.includes('11100') || str.includes('00111') || str.includes('10101') || str.includes('11001') || str.includes('10011') || str.includes('01100') || str.includes('00110') || str.includes('01010')) score += 200;
        if (str.includes('001100') || str.includes('011000') || str.includes('000110') || str.includes('01010') || str.includes('010010')) score += 100;
        if (str.includes('11000') || str.includes('00011') || str.includes('10100') || str.includes('00101') || str.includes('10001') || str.includes('01000') || str.includes('00010')) score += 50;
    }

    const centerDist = Math.abs(row - 7) + Math.abs(col - 7);
    score += (14 - centerDist) * 10;
    return score;
}

function evaluateSequence(sequence, isAI) {
    const str = sequence.join('');
    if (str.includes('11111')) return 100000;
    if (str.includes('011110')) return 10000;
    if (str.includes('11110') || str.includes('01111') || str.includes('10111') || str.includes('11011') || str.includes('11101')) return 1000;
    if (str.includes('01110')) return 1000;
    if (str.includes('011010') || str.includes('010110')) return 500;
    if (str.includes('11100') || str.includes('00111') || str.includes('10101') || str.includes('11001') || str.includes('10011') || str.includes('01100') || str.includes('00110') || str.includes('01010')) return 200;
    if (str.includes('001100') || str.includes('011000') || str.includes('000110') || str.includes('01010') || str.includes('010010')) return 100;
    if (str.includes('11000') || str.includes('00011') || str.includes('10100') || str.includes('00101') || str.includes('10001') || str.includes('01000') || str.includes('00010')) return 50;
    return 0;
}

function checkGameWinner() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] && checkWin(i, j, board[i][j])) return board[i][j];
        }
    }
    return null;
}

function updateStatus() {
    if (gameOver) return;
    if (gameMode === 'ai' && currentPlayer === aiPlayer) {
        statusElement.textContent = 'AI思考中...';
    } else {
        statusElement.textContent = `当前轮到：${currentPlayer === 'black' ? '黑子' : '白子'}`;
    }
}

function resetGame() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            board[i][j] = null;
        }
    }

    document.querySelectorAll('.piece').forEach(p => p.remove());

    currentPlayer = 'black';
    gameOver = false;
    updateStatus();

    if (gameMode === 'ai' && aiPlayer === 'black') {
        setTimeout(aiMove, 500);
    }
}

// 窗口缩放时更新坐标、星位点及网格大小
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        const cellSize = getCellSize();
        // 更新网格
        boardElement.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, ${cellSize}px)`;
        boardElement.style.gridTemplateRows = `repeat(${BOARD_SIZE}, ${cellSize}px)`;

        const rowCoords = document.querySelectorAll('.row-coords');
        const colCoords = document.querySelectorAll('.col-coords');
        const stars = document.querySelectorAll('.star-point');

        rowCoords.forEach((el, i) => {
            el.style.top = `${i * cellSize}px`;
            el.style.height = `${cellSize}px`;
        });
        colCoords.forEach((el, i) => {
            el.style.left = `${i * cellSize}px`;
            el.style.width = `${cellSize}px`;
        });

        const starPoints = [[3, 3], [3, 11], [7, 7], [11, 3], [11, 11]];
        const halfCell = cellSize / 2;
        const starHalf = cellSize <= 20 ? 2 : 3;
        stars.forEach((star, idx) => {
            if (idx < starPoints.length) {
                const [x, y] = starPoints[idx];
                star.style.left = `${y * cellSize + halfCell - starHalf}px`;
                star.style.top = `${x * cellSize + halfCell - starHalf}px`;
            }
        });
    }, 100);
});

gameModeSelect.addEventListener('change', (e) => {
    gameMode = e.target.value;
    resetGame();
});

aiLevelSelect.addEventListener('change', (e) => {
    aiLevel = e.target.value;
});

resetBtn.addEventListener('click', resetGame);

createBoard();