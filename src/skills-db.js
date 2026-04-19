// 技能数据库（模拟）
// 实际应该连接远程 API 或数据库

const skills = [
  {
    name: 'weather',
    description: '天气预报和实时天气查询',
    version: '2.1.0',
    author: 'openclaw',
    installs: 1234,
    rating: 4.8,
    repository: 'https://github.com/openclaw/skill-weather',
    keywords: ['weather', 'forecast', 'wttr'],
    license: 'MIT'
  },
  {
    name: 'github',
    description: 'GitHub 操作 - issues, PRs, CI',
    version: '1.5.0',
    author: 'openclaw',
    installs: 892,
    rating: 4.7,
    repository: 'https://github.com/openclaw/skill-github',
    keywords: ['github', 'git', 'pr', 'issues'],
    license: 'MIT'
  },
  {
    name: 'google',
    description: 'Google Workspace - Gmail, Calendar, Drive',
    version: '1.3.0',
    author: 'openclaw',
    installs: 756,
    rating: 4.6,
    repository: 'https://github.com/openclaw/skill-google',
    keywords: ['google', 'gmail', 'calendar', 'drive'],
    license: 'MIT'
  },
  {
    name: 'telegram',
    description: 'Telegram 机器人和消息管理',
    version: '2.0.0',
    author: 'openclaw',
    installs: 623,
    rating: 4.5,
    repository: 'https://github.com/openclaw/skill-telegram',
    keywords: ['telegram', 'bot', 'message'],
    license: 'MIT'
  },
  {
    name: 'notion',
    description: 'Notion 集成 - 页面、数据库管理',
    version: '1.2.0',
    author: 'community',
    installs: 445,
    rating: 4.4,
    repository: 'https://github.com/openclaw/skill-notion',
    keywords: ['notion', 'notes', 'database'],
    license: 'MIT'
  },
  {
    name: 'spotify',
    description: 'Spotify 音乐播放控制',
    version: '1.1.0',
    author: 'community',
    installs: 389,
    rating: 4.3,
    repository: 'https://github.com/openclaw/skill-spotify',
    keywords: ['spotify', 'music', 'play'],
    license: 'MIT'
  },
  {
    name: 'twitter',
    description: 'Twitter/X 推文发布和搜索',
    version: '1.4.0',
    author: 'community',
    installs: 312,
    rating: 4.2,
    repository: 'https://github.com/openclaw/skill-twitter',
    keywords: ['twitter', 'x', 'tweet', 'social'],
    license: 'MIT'
  },
  {
    name: 'youtube',
    description: 'YouTube 视频搜索和下载',
    version: '1.0.0',
    author: 'community',
    installs: 278,
    rating: 4.1,
    repository: 'https://github.com/openclaw/skill-youtube',
    keywords: ['youtube', 'video', 'download'],
    license: 'MIT'
  },
  {
    name: 'slack',
    description: 'Slack 消息和频道管理',
    version: '1.2.0',
    author: 'community',
    installs: 245,
    rating: 4.0,
    repository: 'https://github.com/openclaw/skill-slack',
    keywords: ['slack', 'message', 'channel'],
    license: 'MIT'
  },
  {
    name: 'obsidian',
    description: 'Obsidian 笔记管理',
    version: '1.1.0',
    author: 'community',
    installs: 198,
    rating: 4.5,
    repository: 'https://github.com/openclaw/skill-obsidian',
    keywords: ['obsidian', 'notes', 'markdown'],
    license: 'MIT'
  }
];

module.exports = {
  // 搜索技能
  async search(query, options = {}) {
    const limit = options.limit || 10;
    const results = skills.filter(skill => 
      skill.name.toLowerCase().includes(query.toLowerCase()) ||
      skill.description.toLowerCase().includes(query.toLowerCase()) ||
      skill.keywords?.some(k => k.toLowerCase().includes(query.toLowerCase()))
    );
    
    if (options.sortBy === 'installs') {
      results.sort((a, b) => (b.installs || 0) - (a.installs || 0));
    }
    
    return results.slice(0, limit);
  },
  
  // 获取技能详情
  async get(name) {
    return skills.find(s => s.name.toLowerCase() === name.toLowerCase());
  },
  
  // 获取所有技能
  async getAll() {
    return skills;
  },
  
  // 获取热门技能
  async getPopular(limit = 10) {
    return [...skills]
      .sort((a, b) => (b.installs || 0) - (a.installs || 0))
      .slice(0, limit);
  },
  
  // 获取趋势技能
  async getTrending(limit = 10) {
    return [...skills]
      .map(s => ({ ...s, growth: Math.floor(Math.random() * 50) + 10 }))
      .sort((a, b) => b.growth - a.growth)
      .slice(0, limit);
  }
};
