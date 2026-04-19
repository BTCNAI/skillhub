// 查看技能详情
const skills = require('../src/skills-db');

module.exports = async function info(skillName) {
  console.log(`📋 技能详情：${skillName}\n`);
  
  const skill = await skills.get(skillName);
  
  if (!skill) {
    console.log(`❌ 技能 "${skillName}" 不存在`);
    return;
  }
  
  console.log(`名称：${skill.name}`);
  console.log(`版本：v${skill.version || '1.0.0'}`);
  console.log(`描述：${skill.description}`);
  console.log(`作者：${skill.author || 'Unknown'}`);
  console.log(`安装量：${skill.installs || 0}`);
  console.log(`评分：${skill.rating ? skill.rating.toFixed(1) : 'N/A'} ⭐`);
  console.log(`仓库：${skill.repository || 'N/A'}`);
  console.log(`许可证：${skill.license || 'MIT'}`);
  
  if (skill.keywords && skill.keywords.length > 0) {
    console.log(`标签：${skill.keywords.join(', ')}`);
  }
  
  console.log(`\n📦 安装：skillhub install ${skillName}`);
  console.log(`📖 文档：${skill.docsUrl || skill.repository}`);
};
