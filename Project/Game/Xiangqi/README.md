# 中国象棋 (Chinese Chess) ♟️

> 一款基于 HTML5 Canvas 的交互式中国象棋游戏，支持双人对战与人机对战。  
> An interactive Chinese Chess game powered by HTML5 Canvas, supporting both PvP and AI modes.

**在线试玩 (Play Online)：** [https://yang-2026-user.github.io/My-Repository/Project/Game/Xiangqi/](https://yang-2026-user.github.io/My-Repository/Project/Game/Xiangqi/)  
**源代码仓库 (Repository)：** [https://github.com/Yang-2026-user/My-Repository/tree/main/Project/Game/Xiangqi](https://github.com/Yang-2026-user/My-Repository/tree/main/Project/Game/Xiangqi/)

![游戏截图](https://yang-2026-user.github.io/My-Repository/Project/Game/Xiangqi/screenshot.png)

---

## ✨ 核心特性 (Core Features)

- **双人对战 / 人机对战 (PvP & AI Modes)** — 自由切换，与朋友对弈或挑战 AI。
- **AI 难度可调 (Adjustable AI Difficulty)** — 从「简单」到「大师」4 档，适配不同水平玩家。
- **悔棋功能 (Undo Move)** — 支持玩家请求悔棋（人机模式下需 AI 同意）。
- **主题换肤 (Theme Switching)** — 5 套配色方案（经典/暗黑/明亮/翡翠/海军），自动保存偏好。
- **音效反馈 (Sound Effects)** — 走子、吃子、将军、胜负均有对应音效，可随时开关。
- **局面保存/加载 (Save/Load)** — 随时存档，随时续盘。
- **FEN 导入/导出 (FEN Support)** — 支持导出 FEN 串、复制到剪贴板或下载 `.fen` 文件，也支持导入标准 FEN 局面。

---

## 🚀 快速开始 (Quick Start)

**方式一：直接访问在线版本**  
打开 [https://yang-2026-user.github.io/My-Repository/Project/Game/Xiangqi/](https://yang-2026-user.github.io/My-Repository/Project/Game/Xiangqi/) 即可游玩，无需安装。

**方式二：本地运行 (Run Locally)**  
```bash
git clone https://github.com/Yang-2026-user/My-Repository.git
cd My-Repository/Project/Game/Xiangqi
# 直接用浏览器打开 index.html 即可
```

所有代码均整合在单个 `index.html` 文件中，零依赖，开箱即用。

---

## 🎮 游戏指南 (Game Guide)

### 基本操作 (Basic Controls)
| 操作 (Action) | 说明 (Description) |
|--------------|-------------------|
| **点击棋子 + 点击目标格** | 走子 (Make a move) |
| **悔棋 (Undo)** | 回退一步（人机模式需 AI 同意）|
| **重新开始 (Restart)** | 重置对局 |
| **保存 / 加载 (Save/Load)** | 存档与读档 |
| **FEN 按钮** | 展开 FEN 面板，支持导入/导出 |

### 模式说明 (Modes)
- **双人对战 (PvP)** — 红黑双方轮流操作，适合线下对弈。
- **人机对战 (vs AI)** — 玩家执红方（先行），AI 执黑方。可在右侧调整 AI 难度。

### 主题切换 (Theme)
点击主题按钮可实时切换棋盘与棋子配色，选择自动保存至浏览器本地。

---

## 🛠️ 技术栈 (Tech Stack)

- **前端 (Frontend)**：原生 HTML5 + CSS3 + Canvas
- **AI 引擎**：纯 JavaScript 实现 Negamax 搜索 + Alpha-Beta 剪枝 + 走法排序 + 置换表 (Transposition Table)
- **存储 (Storage)**：localStorage（存档 + 主题偏好）
- **国际化 (i18n)**：内置中/英文双语支持

> **开发方式 (Development Approach)：** 本人设计 + AI 辅助编码 (Designed by myself, with AI-assisted coding)

---

## 📄 许可证 (License)

MIT License © 2026 Yang-2026-user

详见仓库根目录的 LICENSE 文件。
See the LICENSE file in the repository root for details.

---

## 📁 文件结构 (File Structure)

```
Xiangqi/
├── index.html          # 完整游戏（含所有样式、逻辑、AI）
├── README.md           # 项目说明（即本文件）
└── screenshot.png      # 游戏截图（可选）
```

---

## 🧠 AI 难度参考 (AI Difficulty Reference)

| 难度 (Level) | 搜索深度 (Depth) | 思考时间 (ms) | 特点 (Features) |
|-------------|----------------|--------------|----------------|
| 简单 (Easy) | 1 | 300 | 极低强度，适合新手 |
| 普通 (Normal) | 3 | 1000 | 基础 AI，适合休闲 |
| 困难 (Hard) | 6 | 5000 | 启用开局库 + 残局知识 |
| 大师 (Master) | 10 | 12000 | 全功能，较强挑战性 |

---

## 🙋 反馈与建议 (Feedback)

如有问题或建议，欢迎通过 GitHub Issues 提交。  
If you have any questions or suggestions, feel free to open an issue on GitHub.

---

**Enjoy the game! 祝您对弈愉快！🎉**

