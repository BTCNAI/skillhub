// 搜索技能
const skills = require('../src/skills-db');

module.exports = async function search(query, options) {
  console.log(`🔍 搜索技能：${query}\n`);
  
  const results = await skills.search(query, {
    limit: parseInt(options.limit),
    sortBy: options.popular ? 'installs' : 'relevance'
  });
  
  if (results.length === 0) {
    console.log('❌ 未找到相关技能');
    return;
  }
  
  console.log(`找到 ${results.length} 个技能:\n`);
  console.log('┌──────┬─────────────────────┬──────────────┬─────────┐');
  console.log('│ 名称  │ 描述                │ 安装量        │ 评分     │');
  console.log('├──────┼─────────────────────┼──────────────┼─────────┤');
  
  results.forEach(skill => {
    const name = skill.name.padEnd(18);
    const desc = (skill.description || '').substring(0, 19).padEnd(19);
    const installs = String(skill.installs || 0).padEnd(12);
    const rating = (skill.rating || 0).toFixed(1).padEnd(7);
    console.log(`│ ${name} │ ${desc} │ ${installs} │ ${rating} │`);
  });
  
  console.log('└──────┴─────────────────────┴──────────────┴─────────┘');
  console.log('\n💡 使用 `skillhub install <技能名>` 安装技能');
};
