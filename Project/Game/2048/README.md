# 2048 Game 🧩

一个经典的数字合并游戏，直接在浏览器中运行。通过 **滑动 (Swipe)** 或 **键盘方向键 (Arrow Keys)** 移动所有方块，相同数字会 **合并 (Merge)**，目标是拼出 **2048** 这个数字！

![游戏截图](screenshot.png)
👉 **在线试玩 (Play Online)**：https://github.com/Yang-2026-user/My-Repository/Game/2048/

## ✨ 特性 (Features)

-   **核心玩法 (Core Gameplay)**：经典的 4x4 网格滑动合并，规则简单，令人上瘾。
-   **双控制方式 (Dual Controls)**：完美支持 **键盘方向键 (Keyboard Arrow Keys)** 和 **触摸滑动 (Touch Swipe)**，在电脑和手机上都能流畅游玩。
-   **分数追踪 (Score Tracking)**：实时记录当前 **得分 (Score)**，并自动将 **最高分 (Best Score)** 保存在你的浏览器中，挑战自己的记录。
-   **响应式设计 (Responsive Design)**：界面适配各种屏幕尺寸，无论在桌面、平板还是手机上，都能获得最佳的游戏体验。
-   **视觉反馈 (Visual Feedback)**：方块合并与出现带有流畅的 **动画效果 (Animation)**，操作反馈清晰直观。
-   **游戏状态 (Game States)**：当拼出 2048 时，会显示胜利祝贺；当所有格子填满且无路可走时，游戏结束并显示最终得分。

## 🚀 如何开始 (How to Play)

1.  **访问游戏 (Access)**：点击上面的链接或直接打开仓库中的 `index.html` 文件。
2.  **开始移动 (Start Moving)**：
    -   在 **电脑 (Desktop)** 上：使用键盘的 **方向键 (↑ ↓ ← →)** 控制方块滑动方向。
    -   在 **触屏设备 (Touch Device)** 上：在游戏面板上 **滑动 (Swipe)** 手指控制方向。
3.  **合并与得分 (Merge & Score)**：每次滑动，所有方块会向该方向移动。两个相同数字的方块相撞时会 **合并 (Merge)** 成一个数字，并增加相应 **得分 (Score)**。
4.  **目标 (Goal)**：不断合并，直到拼出数字 **2048**！

## 🗂️ 项目结构 (Project Structure)

```text
My-Repository/
└── Game/
    └── 2048/
        └── index.html   # 完整的游戏代码 (All-in-one HTML file)
```

## 🛠️ 技术实现 (Tech Stack)

-   **纯前端 (Pure Frontend)**：所有代码集成在一个 `index.html` 文件中，无需任何外部依赖或构建工具。
-   **原生 JavaScript (Vanilla JS)**：使用原生 JavaScript 实现游戏逻辑、DOM 操作和动画控制。
-   **CSS3 动画 (CSS3 Animations)**：利用 CSS 实现方块生成和合并的过渡效果，提升用户体验。
-   **本地存储 (LocalStorage)**：使用浏览器的 `localStorage` API 持久化保存玩家的最高分。

## 🤝 贡献 (Contributing)

欢迎提出 Issue 或 Pull Request 来帮助改进这个项目。

1.  Fork 本仓库 (Fork the repo)
2.  创建你的特性分支 (Create your feature branch: `git checkout -b feature/AmazingFeature`)
3.  提交你的更改 (Commit your changes: `git commit -m 'Add some AmazingFeature'`)
4.  推送到分支 (Push to the branch: `git push origin feature/AmazingFeature`)
5.  打开一个 Pull Request (Open a Pull Request)

## 📝 致谢 (Acknowledgements)

-   感谢 **Gabriele Cirulli** 创造的经典 2048 游戏，为这个世界带来了如此多的乐趣。
-   感谢所有为开源社区贡献力量的开发者，你们的分享精神让学习和创作变得更加美好。

## 📌 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0 | 2026-06-28 | 初始发布 |
