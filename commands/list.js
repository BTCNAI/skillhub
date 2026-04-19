// 列出技能
const skills = require('../src/skills-db');
const fs = require('fs');
const path = require('path');

module.exports = async function list(options) {
  if (options.installed) {
    // 列出已安装的技能
    const skillsDir = path.join(process.env.HOME, '.openclaw', 'skills');
    
    if (!fs.existsSync(skillsDir)) {
      console.log('📭 还未安装任何技能');
      console.log('💡 使用 `skillhub search` 搜索技能，`skillhub install` 安装');
      return;
    }
    
    const installed = fs.readdirSync(skillsDir)
      .filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
    
    if (installed.length === 0) {
      console.log('📭 还未安装任何技能');
      return;
    }
    
    console.log(`📦 已安装 ${installed.length} 个技能:\n`);
    installed.forEach(skill => {
      const skillJson = path.join(skillsDir, skill, 'skill.json');
      if (fs.existsSync(skillJson)) {
        const data = JSON.parse(fs.readFileSync(skillJson, 'utf8'));
        console.log(`  ✓ ${skill} v${data.version}`);
      } else {
        console.log(`  ✓ ${skill}`);
      }
    });
    return;
  }
  
  if (options.popular) {
    console.log('🔥 热门技能:\n');
    const popular = await skills.getPopular(10);
    popular.forEach((skill, i) => {
      console.log(`  ${i + 1}. ${skill.name} - ${skill.installs} 次安装`);
    });
    return;
  }
  
  if (options.trending) {
    console.log('📈 今日趋势技能:\n');
    const trending = await skills.getTrending(10);
    trending.forEach((skill, i) => {
      console.log(`  ${i + 1}. ${skill.name} ↑ ${skill.growth}%`);
    });
    return;
  }
  
  // 默认显示所有可用技能
  console.log('🌐 可用技能:\n');
  const all = await skills.getAll();
  console.log(`共 ${all.length} 个技能`);
};
