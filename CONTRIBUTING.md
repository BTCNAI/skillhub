# 贡献指南

欢迎为 SkillHub 做贡献！🎉

## 如何贡献

### 1. 报告 Bug

发现 Bug？[提交 Issue](https://github.com/btcnai/skillhub/issues)

### 2. 提交功能建议

有新想法？[提交 Feature Request](https://github.com/btcnai/skillhub/issues)

### 3. 提交代码

```bash
# Fork 仓库
git clone https://github.com/YOUR_USERNAME/skillhub.git
cd skillhub

# 创建分支
git checkout -b feature/your-feature

# 修改代码
# ...

# 提交
git commit -m "feat: add your feature"

# 推送
git push origin feature/your-feature

# 创建 Pull Request
```

### 4. 创建技能

想分享你的技能？

```bash
skillhub create my-skill
# 开发你的技能
skillhub publish
```

## 开发设置

```bash
# 安装依赖
npm install

# 运行测试
npm test

# 本地测试 CLI
node bin/skillhub.js --help
```

## 代码风格

- 使用 2 空格缩进
- 使用单引号
- 异步代码用 async/await
- 添加适当的注释

## 提交信息规范

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档更新
- `style:` 代码格式
- `refactor:` 重构
- `test:` 测试
- `chore:` 构建/工具

## 许可证

MIT License - 贡献即表示你同意使用 MIT 许可证

---

感谢你的贡献！🙏
