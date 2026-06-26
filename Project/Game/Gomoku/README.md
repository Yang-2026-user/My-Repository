# Gomoku (五子棋)

> 一个全功能、高颜值、AI 智能的五子棋对战应用，支持 **双人对战 (Human vs Human)** 与 **人机对战 (Human vs AI)**，内置多级 AI 引擎，从「简单」到「大师」五种难度，满足从入门到挑战的全场景需求。

---

## ✨ 核心特性 (Key Features)

- **双模式对战**：一键切换「人机对战 (AI Mode)」与「双人对战 (Human Mode)」，适配单人娱乐与朋友切磋场景。
- **多级 AI 引擎 (AI Engine)**：
  - **简单 (Easy)**：随机落子，适合新手熟悉规则。
  - **中等 (Medium)**：基于位置评分 (Heuristic Scoring) 的贪心策略，具备基本攻防意识。
  - **困难 (Hard)**：攻击与防守加权评分，能主动堵截对手的「活三」和「冲四」。
  - **专家 (Expert)**：3 层 **Minimax 搜索 + Alpha-Beta 剪枝**，具备前瞻性棋局判断。
  - **大师 (Master)**：4 层搜索，结合中心偏好与高价值模式识别，提供更具挑战性的对局体验。
- **沉浸式视觉与交互 (UI/UX)**：
  - 15×15 标准棋盘，带有 **坐标标注 (Coordinates)** 和 **星位 (Star Points)**。
  - 3D 立体棋子 (Radial Gradient + Highlight)，黑子白子质感分明。
  - 全局毛玻璃 (Glassmorphism) 风格，棋盘木纹底纹，多种视觉细节打磨。
  - **响应式设计 (Responsive Design)**：桌面与移动端自动适配，触控友好。
- **即时状态反馈**：清晰显示当前轮到谁，AI 思考时展示「AI思考中...」，胜负结果一目了然。

---

## 🧠 技术亮点 (Technical Highlights)

### 1. 智能走法生成 (Move Generation)
采用 **邻域扩展策略 (Neighborhood Expansion)**：仅对已有棋子周围的空位进行评估，大幅减少搜索空间，提升 AI 响应速度。若棋盘为空，则默认落子天元 (7,7)。

### 2. 模式识别与评分系统 (Pattern Recognition & Scoring)
内置多种 **棋型模式 (Patterns)**，包括：
- **连五 (Five-in-a-row)**：最高优先级，直接获胜。
- **活四 (Live Four)** / **冲四 (Broken Four)** / **活三 (Live Three)** 等。
- 通过字符串匹配 (`011110`、`11110` 等) 快速识别棋型，并赋予不同权重，实现精准局势评估。

### 3. 博弈搜索算法 (Game Tree Search)
- **Minimax 算法**：模拟双方最优落子，评估未来局势。
- **Alpha-Beta 剪枝**：剪除无效分支，在相同深度下显著提升搜索效率。
- 结合 **中心偏好 (Center Bias)**，引导 AI 优先占据棋盘核心区域。

### 4. 模块化代码结构 (Code Architecture)
所有逻辑封装于单一 `game.js` 文件，与 `style.css` 和 `index.html` 完全解耦，便于二次开发和维护。

---

## 📁 项目结构 (Project Structure)

```
Gomoku/
├── index.html          # 主页面结构 (HTML)
├── css/
│   └── style.css       # 完整样式 (含响应式布局)
├── js/
│   └── game.js         # 全部游戏逻辑 (棋盘管理、AI、交互)
└── README.md           # 项目文档 (当前文件)
```

---

## 🚀 快速开始 (Quick Start)

### 本地运行 (Local Run)
1. 克隆本仓库或下载所有文件。
2. 用任意现代浏览器打开 `index.html` 即可开始游戏。
3. 无需安装任何依赖，纯前端 (Vanilla JS)，即开即用。

### 在线体验 (Online Demo)
> 本项目已部署至 **GitHub Pages**，可在线试玩：
> [https://yang-2026-user.github.io/My-Repository/Project/Game/Gomoku/](https://yang-2026-user.github.io/My-Repository/Project/Game/Gomoku/)

---

## 🎮 操作指南 (How to Play)

1. **选择模式**：在顶部下拉菜单选择「人机对战 (AI)」或「双人对战 (Human)」。
2. **调整 AI 难度**（仅人机模式有效）：从「简单」到「大师」共五档，难度逐级递增。
3. **开始对局**：点击棋盘交叉点落子。黑方先行，白方后行。
4. **重置游戏**：点击「重新开始 (Reset)」按钮随时重置棋盘。
5. **胜负判定**：任意一方在横、竖、斜方向上率先连成五子即获胜。

---

## 🖼️ 界面预览 (UI Preview)

| 桌面端 (Desktop) | 移动端 (Mobile) |
|------------------|----------------|
| 完整坐标、星位、立体棋子 | 自适应网格、触控优化 |

> *（注：此处可插入实际截图，请替换为真实图片链接）*

---

## 📦 依赖与环境 (Dependencies & Environment)

- **浏览器**：Chrome / Firefox / Safari / Edge 等现代浏览器。
- **字体**：使用 Google Fonts 的 `Ma Shan Zheng`（马善政毛笔体），在线加载，网络不佳时自动回退至系统无衬线字体。
- **无任何第三方库**：纯原生 JavaScript (ES6+) 实现，零依赖。

---

## 🔧 自定义与扩展 (Customization)

### 修改棋盘大小 (Board Size)
在 `game.js` 顶部修改 `BOARD_SIZE` 常量（建议保持 15，以符合标准五子棋规则）。

### 调整 AI 搜索深度 (Search Depth)
在 `aiExpertMove(depth)` 调用处修改深度值：
- `expert` 模式当前为 3 层
- `master` 模式当前为 4 层
可根据硬件性能适当增加，但注意响应时间会线性上升。

### 更换棋盘主题 (Theme)
修改 `style.css` 中 `#board` 的 `background-image` 及 `border-color`，或替换为图片背景。

---

## 📄 开源协议 (License)

本项目采用 **MIT License**，可自由使用、修改、分发，详情见仓库根目录下的 `LICENSE` 文件。
