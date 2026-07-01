# 中国象棋 (Chinese Chess / Xiangqi)

> 一款基于HTML5/Canvas的交互式中国象棋游戏，支持双人对战、人机对战、主题切换与对局保存。  
> An interactive Xiangqi game with PvP, AI, themes, and save/load support.

**在线试玩 (Play Now)**：[https://yang-2026-user.github.io/My-Repository/Project/Game/Xiangqi/](https://yang-2026-user.github.io/My-Repository/Project/Game/Xiangqi/)
**项目地址 (Repository)**：[https://github.com/Yang-2026-user/My-Repository/tree/main/Project/Game/Xiangqi](https://github.com/Yang-2026-user/My-Repository/tree/main/Project/Game/Xiangqi)

![游戏截图示意](./screenshot.png)

## ✨ 核心特性 (Core Features)

*   **双模式对战**：支持 **双人对战 (PvP)** 与 **人机对战 (AI)**，人机难度可调（简单/普通/困难/大师）。
*   **智能AI引擎**：基于 **Negamax搜索**、**Alpha-Beta剪枝**、**开局库**、**置换表** 与 **杀手走法启发**，提供有挑战性的对手。
*   **沉浸式交互**：点击棋子高亮合法走法，实时显示将军、胜负及回合状态，并配有 **音效反馈**。
*   **个性化主题**：内置 **经典、暗黑、明亮、翡翠、海军** 五套配色方案，且偏好设置会保存在浏览器中。
*   **完整的对局管理**：支持 **悔棋**、**保存/加载** 对局状态，以及 **FEN串导入/导出**，方便复盘与分享。

## 🚀 快速开始 (Quick Start)

1.  **获取代码**：克隆本仓库或直接下载 `index.html` 文件。
2.  **运行游戏**：无需任何依赖或构建工具，直接在浏览器中打开 `index.html` 即可开始游戏。
3.  **开始对弈**：
    *   默认模式为 **“双人对战”**，红方先行，点击棋子即可走子。
    *   点击 **“人机对战”** 切换模式，并可在下方选择AI难度。
    *   使用 **“悔棋”**、**“保存”**、**“加载”** 等按钮管理对局。

## 🎮 游戏指南 (Game Guide)

*   **走法规则 (Movement)**：完全遵循中国象棋标准规则，包括马脚、象田、炮架、将帅对面等。
*   **界面操作 (Controls)**：
    *   **鼠标/触屏**：点击棋子选中，再点击高亮格子或目标棋子即可走子。
    *   **音效**：点击 🔊/🔇 按钮可开启或关闭音效。
    *   **FEN**：点击“FEN”按钮，可展开面板进行FEN串的导出、复制、下载或导入。
*   **AI策略 (AI Strategy)**：AI会根据难度调整搜索深度（1~10层）和思考时间。大师级AI会使用更复杂的评估函数和迭代加深。

## 🛠️ 技术栈 (Tech Stack)

*   **前端**：原生 JavaScript (ES6+)
*   **渲染**：HTML5 Canvas
*   **核心算法**：Negamax 搜索、Alpha-Beta 剪枝、Quiescence Search (静态搜索)、Zobrist 哈希、置换表 (Transposition Table)
*   **存储**：localStorage (用于保存对局和主题偏好)

## 📄 许可证 (License)

本项目采用 **MIT 许可证**。您可以自由使用、修改、分发本软件，详情请参阅 [LICENSE](./LICENSE) 文件。

##开发方式##
本人设计 + AI 辅助编码

