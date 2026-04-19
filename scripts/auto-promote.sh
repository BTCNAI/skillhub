#!/bin/bash

# SkillHub 自动推广脚本
# 使用方法：./auto-promote.sh

REPO_URL="https://github.com/BTCNAI/skillhub"
TITLE="Show HN: SkillHub - Package Manager for OpenClaw AI Skills"
DESCRIPTION="Discover, install, and manage OpenClaw skills with one command. Like npm for AI agent skills."

echo "🚀 SkillHub 自动推广开始..."

# 1. Twitter (需要安装 twurl 或 twitter-cli)
if command -v twurl &> /dev/null; then
  echo "📱 发布 Twitter..."
  twurl -X POST -d "status=🚀 发布了 SkillHub - OpenClaw 技能管理平台

让 AI Agent 技能像 App Store 一样简单！

✨ 功能:
- 一键安装技能
- 技能发现/搜索
- 热门/趋势排行榜
- 技能创作模板

GitHub: $REPO_URL

#OpenClaw #AI #OpenSource #NodeJS" /1.1/statuses/update.json
  echo "✅ Twitter 发布成功"
else
  echo "⚠️  跳过 Twitter - 未安装 twurl"
fi

# 2. Reddit (需要安装 reddit-cli)
if command -v reddit &> /dev/null; then
  echo "📢 发布 Reddit..."
  reddit submit r/opensource "$TITLE" "$REPO_URL"
  reddit submit r/node "SkillHub - NPM-like Package Manager for OpenClaw AI Skills" "$REPO_URL"
  reddit submit r/ChatGPT "SkillHub - AI Skill Management Platform" "$REPO_URL"
  echo "✅ Reddit 发布成功"
else
  echo "⚠️  跳过 Reddit - 未安装 reddit-cli"
fi

# 3. Hacker News (使用 hn CLI)
if command -v hn &> /dev/null; then
  echo "📰 提交 Hacker News..."
  hn submit -t "$TITLE" -u "$REPO_URL" -c "$DESCRIPTION"
  echo "✅ Hacker News 提交成功"
else
  echo "⚠️  跳过 Hacker News - 未安装 hn-cli"
  echo "💡 手动提交：https://news.ycombinator.com/submit"
fi

# 4. LinkedIn (需要安装 linkedin-cli)
if command -v linkedin &> /dev/null; then
  echo "💼 发布 LinkedIn..."
  linkedin post "🚀 Excited to announce SkillHub - a package manager for OpenClaw AI skills!

Key features:
- Discover and search skills
- One-click install/update
- Popular and trending rankings
- Skill creation templates

Check it out: $REPO_URL

#OpenSource #AI #DeveloperTools"
  echo "✅ LinkedIn 发布成功"
else
  echo "⚠️  跳过 LinkedIn - 未安装 linkedin-cli"
fi

# 5. 中文社区
echo ""
echo "🇳 中文社区推广:"
echo ""
echo "微博/知乎文案:"
echo "🚀 发布了个新项目：SkillHub"
echo "OpenClaw 技能管理平台，让 AI 技能像 App Store 一样简单"
echo "GitHub: $REPO_URL"
echo "目标 1000 star，求支持！⭐"
echo ""
echo "V2EX 提交链接：https://www.v2ex.com/submit"
echo ""

# 6. GitHub Stars 自动化 (给相关项目 star 的人)
echo "⭐ 准备给相关项目 star 的用户发送消息..."
echo "💡 可以使用 gh-cli 搜索并关注潜在用户"

# 搜索给类似项目 star 的用户
echo ""
echo "📊 潜在用户列表:"
gh search repos "openclaw" --sort stars --limit 10 | while read repo; do
  echo "  - $repo 的 stargazers"
done

echo ""
echo "✅ 推广脚本执行完成!"
echo ""
echo "📈 下一步:"
echo "1. 手动提交 Hacker News: https://news.ycombinator.com/submit"
echo "2. 手动提交 Product Hunt: https://www.producthunt.com/posts/new"
echo "3. 手动提交 Reddit: https://www.reddit.com/r/opensource/submit"
echo "4. 发送 Twitter/微博"
echo "5. 联系 AI/开发者 KOL"
echo ""
echo "🎯 目标：1000 ⭐"
