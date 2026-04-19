# SkillHub 🚀

> **OpenClaw 技能发现与管理平台** - 让 AI Agent 技能像 App Store 一样简单

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm](https://img.shields.io/npm/v/skillhub.svg)](https://www.npmjs.com/package/skillhub)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-skill-green.svg)](https://openclaw.ai)

---

## 🎯 为什么需要 SkillHub？

OpenClaw 有强大的技能系统，但：
- ❌ 技能分散在各处，难以发现
- ❌ 安装需要手动复制粘贴
- ❌ 没有版本管理和更新机制
- ❌ 缺少社区分享平台

**SkillHub 解决这些问题。**

---

## ✨ 功能

### 1. 技能发现
```bash
skillhub search weather    # 搜索天气相关技能
skillhub list --popular    # 查看热门技能
skillhub trending          # 今日趋势技能
```

### 2. 一键安装
```bash
skillhub install weather   # 安装天气技能
skillhub install github    # 安装 GitHub 技能
skillhub update --all      # 更新所有技能
```

### 3. 技能管理
```bash
skillhub list --installed  # 查看已安装技能
skillhub remove weather    # 卸载技能
skillhub info weather      # 查看技能详情
```

### 4. 技能创作
```bash
skillhub create my-skill   # 创建新技能模板
skillhub publish           # 发布到技能市场
```

---

## 🚀 快速开始

### 安装

```bash
# 从 npm 安装（推荐）
npm install -g skillhub

# 或从源码安装
git clone https://github.com/btcnai/skillhub.git
cd skillhub
npm install -g .
```

### 使用

```bash
# 搜索技能
skillhub search github

# 安装技能
skillhub install github

# 查看已安装
skillhub list --installed
```

---

## 📦 内置技能

| 技能 | 描述 | 安装量 |
|------|------|--------|
| weather | 天气预报 | 1.2k |
| github | GitHub 操作 | 890 |
| google | Google Workspace | 756 |
| telegram | Telegram 机器人 | 623 |
| notion | Notion 集成 | 445 |

---

## 🛠️ 创建你的技能

```bash
# 创建技能模板
skillhub create my-awesome-skill

# 编辑技能
cd my-awesome-skill
vim SKILL.md

# 测试技能
skillhub test

# 发布技能
skillhub publish
```

### 技能结构

```
my-skill/
├── SKILL.md          # 技能描述和元数据
├── src/
│   └── index.js      # 技能逻辑
├── commands/         # CLI 命令
└── README.md         # 使用文档
```

---

## 🌍 社区

- 📚 [文档](https://github.com/btcnai/skillhub/wiki)
- 💬 [Discord](https://discord.gg/skillhub)
- 🐛 [提交 Issue](https://github.com/btcnai/skillhub/issues)
- 🔧 [贡献指南](CONTRIBUTING.md)

---

## 📊 路线图

- [ ] Web UI - 可视化技能市场
- [ ] 技能评分和评论系统
- [ ] 自动更新通知
- [ ] 技能依赖管理
- [ ] 技能模板市场
- [ ] 多语言支持

---

## 🤝 贡献

欢迎贡献！

```bash
git clone https://github.com/btcnai/skillhub.git
cd skillhub
npm install
npm run dev
```

阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详情。

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

---

## 🙏 致谢

- [OpenClaw](https://openclaw.ai) - AI Agent 框架
- 所有贡献者

---

**Made with ❤️ by @btcnai**

> "让每个 AI Agent 都能找到需要的技能"

---

## 📮 联系

- Twitter: [@btcnai](https://twitter.com/btcnai)
- Email: specx@btcnai.com
- Website: https://btcnai.com
