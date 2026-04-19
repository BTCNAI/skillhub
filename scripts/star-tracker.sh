#!/bin/bash

# SkillHub Star Tracker
# 追踪 GitHub star 增长并报告

REPO="BTCNAI/skillhub"
GOAL=1000
LOG_FILE="/tmp/skillhub-stars.log"

# 获取当前 star 数
get_stars() {
    curl -s "https://api.github.com/repos/$REPO" | jq -r '.stargazers_count'
}

# 获取上次记录
last_stars=0
if [ -f "$LOG_FILE" ]; then
    last_stars=$(tail -1 "$LOG_FILE" | awk '{print $2}')
fi

# 获取当前 star 数
current_stars=$(get_stars)

# 记录
echo "$(date '+%Y-%m-%d %H:%M:%S') $current_stars" >> "$LOG_FILE"

# 计算增长
if [ "$last_stars" -gt 0 ]; then
    growth=$((current_stars - last_stars))
else
    growth=0
fi

# 进度
progress=$(echo "scale=2; $current_stars * 100 / $GOAL" | bc)
remaining=$((GOAL - current_stars))

# 输出
echo ""
echo "📊 SkillHub Star Tracker"
echo "========================"
echo "当前：$current_stars ⭐"
echo "目标：$GOAL ⭐"
echo "进度：$progress%"
echo "剩余：$remaining ⭐"
echo "增长：+$growth (上次记录)"
echo ""

# 里程碑提醒
if [ "$current_stars" -ge 100 ] && [ "$last_stars" -lt 100 ]; then
    echo "🎉 突破 100 stars!"
fi

if [ "$current_stars" -ge 500 ] && [ "$last_stars" -lt 500 ]; then
    echo "🚀 突破 500 stars!"
fi

if [ "$current_stars" -ge 1000 ]; then
    echo "🏆 达成 1000 stars 目标!"
fi

# 显示最近记录
echo ""
echo "最近记录:"
tail -5 "$LOG_FILE"
