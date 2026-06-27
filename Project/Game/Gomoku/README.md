# 🎮 五子棋大师 (Goban Master)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/HTML-100%25-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)

> **English** | [中文](#项目简介)

A classic **Gomoku (Five-in-a-Row)** game with a sleek UI and multiple AI difficulty levels, from **Easy** to **Master**. Play against AI or challenge a friend locally.

一款界面优雅、AI难度分级（从“简单”到“大师”）的五子棋对战游戏。支持**人机对战**与**双人对战**两种模式。

🔗 **Live Demo**: [Play Now](https://yang-2026-user.github.io/My-Repository/Project/Game/Gomoku/)  
📦 **Repository**: [Yang-2026-user/My-Repository](https://github.com/Yang-2026-user/My-Repository)

---

## ✨ 功能特性 (Features)

- **🤖 智能AI对手 (AI Opponent)**
  - **5个难度等级 (5 Difficulty Levels)**: Easy, Medium, Hard, Expert, Master
  - 从随机走法 (Random) → 基础评分 (Basic Scoring) → **Minimax with Alpha-Beta Pruning** (深度达4层)
- **👥 双人对战模式 (Two-Player Mode)**: 好友间轮流落子，乐趣翻倍
- **🎨 精美界面 (Elegant UI)**
  - 传统木质棋盘风格，配合**书法字体 (Ma Shan Zheng)**
  - 坐标轴 (A-O, 1-15) 辅助定位，**星位 (Star Points)** 点缀
  - **响应式设计 (Responsive)**，在手机和电脑上均有出色体验
- **⚡ 即时反馈**: 落子动画、状态提示、胜负判定一气呵成

---

## 🎯 游戏截图 (Screenshots)

| 人机对战 (AI Mode) | 双人对战 (Two-Player) |
| :---: | :---: |
| *(请在此处替换为你的游戏截图1)* | *(请在此处替换为你的游戏截图2)* |

---

## 🚀 快速开始 (Getting Started)

无需安装任何依赖，打开浏览器即可游玩。

### 在线游玩 (Play Online)
直接访问 GitHub Pages 部署的链接：
👉 **[https://yang-2026-user.github.io/My-Repository/Project/Game/Gomoku/](https://yang-2026-user.github.io/My-Repository/Project/Game/Gomoku/)**

### 本地运行 (Run Locally)
1.  **Clone** 本仓库到本地：
    ```bash
    git clone https://github.com/Yang-2026-user/My-Repository.git
    ```
2.  进入游戏目录：
    ```bash
    cd My-Repository/Project/Game/Gomoku/
    ```
3.  双击 `index.html` 文件，即可在浏览器中打开游戏。

---

## 🎮 游戏指南 (How to Play)

1.  **选择模式**: 通过顶部下拉菜单切换 **“人机对战 (AI)”** 或 **“双人对战 (Human)”**。
2.  **调整难度**: (仅AI模式) 从 **简单 (Easy)** 到 **大师 (Master)** 任你挑选。
    -   *大师难度 (Master)* 使用了**深度为4的Minimax搜索**，具有一定的棋力。
3.  **开始对弈**: 黑子 (Black) 先行。点击棋盘交叉点落子。
4.  **胜利条件**: 在横、竖、斜任一方向上率先连成 **五子 (Five-in-a-Row)** 的一方获胜。

---

## 🧠 AI 逻辑解析 (AI Logic)

本项目AI的核心实现分为几个层次：

| 难度 (Level) | 核心算法 (Core Algorithm) | 描述 (Description) |
| :--- | :--- | :--- |
| **简单 (Easy)** | `Random` | 在所有空位中随机落子。 |
| **中等 (Medium)** | `Greedy Scoring` | 遍历候选位置，选择对己方**进攻评分 (Attack Score)** 最高的点。 |
| **困难 (Hard)** | `Offensive-Defensive` | 综合计算**进攻 (Attack)** 与**防守 (Defense)** 评分，防守权重更高。 |
| **专家 (Expert)** | `Minimax (Depth 3)` | 使用 **Minimax** 算法并加入 **Alpha-Beta剪枝**，搜索深度为3层。 |
| **大师 (Master)** | `Minimax (Depth 4)` | 在专家级基础上，将搜索深度提升至4层，棋力更强。 |

**评分函数 (Score Pattern)**: 核心评分基于对五子棋常见棋型（如“活四”、“冲四”、“活三”等）的量化评估。

---

## 🛠️ 技术栈 (Tech Stack)

- **HTML5**: 页面结构
- **CSS3**: Flexbox/Grid 布局、渐变、动画、响应式设计
- **Vanilla JavaScript**: 纯原生JS实现全部游戏逻辑与AI算法，无任何第三方依赖

---

## 📂 项目结构 (Project Structure)

```

My-Repository/
└── Project/
└── Game/
├── index.html          # 游戏主文件 (包含所有HTML, CSS, JS)
└── README.md           # (此文件)

```

---

## 📄 许可证 (License)

本项目采用 **MIT License** 开源协议。你可以自由地使用、修改和分发。详见 [LICENSE](https://github.com/Yang-2026-user/My-Repository/blob/main/LICENSE) 文件。

---

## 🤝 贡献 (Contributing)

欢迎提交 Issue 或 Pull Request 来帮助改进这个项目！

---

## 📧 联系 (Contact)

- **Author**: Yang
- **GitHub**: [Yang-2026-user](https://github.com/Yang-2026-user)

---

**Enjoy the game! 享受对弈的乐趣！** 🎉
```
