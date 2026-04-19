# SkillHub 快速开始指南

> 3 分钟上手 SkillHub

---

## 1. 安装

```bash
npm install -g skillhub
```

或者从源码：

```bash
git clone https://github.com/BTCNAI/skillhub.git
cd skillhub
npm install -g .
```

---

## 2. 搜索技能

```bash
# 搜索天气技能
skillhub search weather

# 搜索 GitHub 相关
skillhub search github

# 查看热门技能
skillhub list --popular
```

---

## 3. 安装技能

```bash
# 安装天气技能
skillhub install weather

# 安装 GitHub 技能
skillhub install github

# 查看已安装
skillhub list --installed
```

---

## 4. 使用技能

安装后，技能会自动集成到 OpenClaw。

在你的 OpenClaw 配置中：

```json
{
  "skills": {
    "enabled": ["weather", "github"]
  }
}
```

---

## 5. 更新技能

```bash
# 更新所有技能
skillhub update --all

# 更新指定技能
skillhub update weather
```

---

## 6. 卸载技能

```bash
skillhub remove weather
```

---

## 7. 创建你的技能

```bash
# 创建模板
skillhub create my-skill
cd my-skill

# 编辑 SKILL.md 和 src/index.js
vim SKILL.md

# 测试
skillhub test

# 发布
skillhub publish
```

---

## 常用命令速查

| 命令 | 说明 |
|------|------|
| `skillhub search <query>` | 搜索技能 |
| `skillhub install <skill>` | 安装技能 |
| `skillhub list --installed` | 查看已安装 |
| `skillhub list --popular` | 查看热门 |
| `skillhub info <skill>` | 技能详情 |
| `skillhub update --all` | 更新所有 |
| `skillhub remove <skill>` | 卸载技能 |
| `skillhub create <name>` | 创建模板 |
| `skillhub publish` | 发布技能 |

---

## 帮助

```bash
# 查看帮助
skillhub --help

# 查看命令帮助
skillhub search --help
```

---

## 问题排查

### 安装失败

```bash
# 检查 npm 权限
npm config get prefix

# 如果是 /usr/local，可能需要 sudo
sudo npm install -g skillhub
```

### 找不到技能

```bash
# 刷新技能列表
skillhub search --refresh

# 检查网络
curl https://api.github.com/repos/BTCNAI/skillhub
```

### 技能不工作

```bash
# 查看技能详情
skillhub info <skill>

# 重新安装
skillhub remove <skill>
skillhub install <skill>
```

---

## 下一步

- 📚 阅读完整文档：[Wiki](https://github.com/BTCNAI/skillhub/wiki)
- 💬 加入社区：[Discord](https://discord.gg/skillhub)
- 🐛 报告问题：[Issues](https://github.com/BTCNAI/skillhub/issues)
- ⭐ 支持项目：[GitHub](https://github.com/BTCNAI/skillhub)

---

**Happy Coding!** 🚀
