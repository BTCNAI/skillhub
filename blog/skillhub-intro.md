# SkillHub：让 AI Agent 技能像 App Store 一样简单

> 作者：@btcnai | 发布时间：2026-04-20

---

## 背景

我在使用 OpenClaw 时遇到了一个问题：

OpenClaw 有强大的技能系统，可以让 AI Agent 做各种事情——查天气、操作 GitHub、管理日历、控制智能家居...

但是：

- ❌ 技能分散在各个仓库，难以发现
- ❌ 安装需要手动复制粘贴文件
- ❌ 没有版本管理和更新机制
- ❌ 想自己写技能，不知道从哪开始

**这就像 2008 年之前的 iPhone——没有 App Store。**

于是我做了 SkillHub。

---

## SkillHub 是什么？

SkillHub 是 OpenClaw 技能的**包管理器**。

就像 `npm` 之于 Node.js，`pip` 之于 Python，SkillHub 让 AI 技能的管理变得简单：

```bash
# 搜索技能
skillhub search weather

# 安装技能
skillhub install weather

# 查看已安装
skillhub list --installed

# 更新所有技能
skillhub update --all
```

就这么简单。

---

## 核心功能

### 1. 技能发现

```bash
# 搜索
skillhub search github

# 查看热门
skillhub list --popular

# 今日趋势
skillhub trending
```

输出：

```
🔍 搜索技能：github

找到 3 个技能:

┌──────┬─────────────────────┬──────────────┬─────────┐
│ 名称  │ 描述                │ 安装量        │ 评分     │
├──────┼─────────────────────┼──────────────┼─────────┤
│ github │ GitHub 操作 - issues │ 892          │ 4.7     │
│ gh-issues │ 自动修复 issues   │ 445          │ 4.5     │
│ gitlab │ GitLab 集成        │ 123          │ 4.2     │
└───────────────────────────┴──────────────┴─────────┘
```

### 2. 一键安装

```bash
skillhub install weather
```

自动下载、安装、配置。无需手动复制文件。

### 3. 技能创作

```bash
# 创建模板
skillhub create my-skill

# 编辑
cd my-skill
vim SKILL.md

# 发布
skillhub publish
```

模板包含完整的目录结构：

```
my-skill/
├── SKILL.md        # 技能描述
├── package.json    # 项目配置
├── README.md       # 使用文档
├── src/
│   └── index.js    # 主逻辑
└── commands/       # CLI 命令
```

---

## 技术实现

SkillHub 用 Node.js 编写，依赖 Commander.js 处理 CLI。

### 架构

```
skillhub/
├── bin/
│   └── skillhub.js    # CLI 入口
├── commands/          # 命令实现
│   ├── search.js
│   ├── install.js
│   ├── list.js
│   └── ...
├── src/
│   ├── index.js       # 主模块
│   └── skills-db.js   # 技能数据库
└── package.json
```

### 技能数据库

目前使用内置的模拟数据库（`src/skills-db.js`），未来会：

- 连接远程 API
- 支持社区贡献
- 实现评分和评论系统

---

## 使用场景

### 场景 1：给 AI 助手装个天气技能

```bash
skillhub install weather
```

然后你的 AI 助手就可以：
- 每小时检查天气
- 出门前提醒你带伞
- 根据天气调整日程

### 场景 2：自动化 GitHub 工作流

```bash
skillhub install github
```

AI 可以：
- 自动修复 issues
- 创建 PR
- 监控 CI 状态

### 场景 3：创建自己的技能

比如我写了个"心跳"技能，让 AI 每小时主动检查：
- 邮件
- 日历
- 待办事项

然后给我惊喜。

代码：

```javascript
// my-heartbeat/src/index.js
module.exports = {
  name: 'heartbeat',
  
  async execute(context, params) {
    // 检查邮件
    const emails = await checkEmails();
    
    // 检查日历
    const events = await checkCalendar();
    
    // 检查天气
    const weather = await checkWeather();
    
    // 生成报告
    return { emails, events, weather };
  }
};
```

---

## 路线图

### v1.0 (当前版本)
- ✅ 技能搜索
- ✅ 一键安装
- ✅ 技能模板

### v1.1
- [ ] 远程技能市场
- [ ] 自动更新
- [ ] 技能依赖管理

### v1.2
- [ ] Web UI
- [ ] 技能评分和评论
- [ ] 创作者仪表板

### v2.0
- [ ] 多平台支持（不仅是 OpenClaw）
- [ ] 技能付费市场
- [ ] 自动化工作流编排

---

## 贡献

欢迎贡献！

```bash
git clone https://github.com/BTCNAI/skillhub.git
cd skillhub
npm install
npm run dev
```

阅读 [CONTRIBUTING.md](https://github.com/BTCNAI/skillhub/blob/main/CONTRIBUTING.md) 了解详情。

---

## 目标

**1000 GitHub Stars!** ⭐

每一个 star 都是动力。

https://github.com/BTCNAI/skillhub

---

## 联系

- Twitter: [@btcnai](https://twitter.com/btcnai)
- Email: specx@btcnai.com
- GitHub: [BTCNAI](https://github.com/BTCNAI)

---

**Made with ❤️ by @btcnai**

> "让每个 AI Agent 都能找到需要的技能"
