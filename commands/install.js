// 安装技能
const fs = require('fs');
const path = require('path');
const skills = require('../src/skills-db');

module.exports = async function install(skillName, options) {
  console.log(`📦 安装技能：${skillName}\n`);
  
  // 获取技能信息
  const skill = await skills.get(skillName);
  
  if (!skill) {
    console.log(`❌ 技能 "${skillName}" 不存在`);
    console.log('💡 使用 `skillhub search ${skillName}` 搜索可用技能');
    return;
  }
  
  // 确定安装路径
  const installPath = options.global 
    ? path.join(process.env.HOME, '.openclaw', 'skills', skillName)
    : path.join(process.cwd(), 'skills', skillName);
  
  // 创建目录
  fs.mkdirSync(path.dirname(installPath), { recursive: true });
  
  console.log(`⬇️  下载技能...`);
  console.log(`📁 安装路径：${installPath}`);
  
  // 模拟下载（实际应该从 GitHub 或 npm 下载）
  const skillData = {
    name: skill.name,
    version: skill.version,
    description: skill.description,
    installedAt: new Date().toISOString(),
    source: skill.repository
  };
  
  fs.writeFileSync(
    path.join(installPath, 'skill.json'),
    JSON.stringify(skillData, null, 2)
  );
  
  console.log(`✅ 技能 "${skillName}" 安装成功！`);
  console.log(`\n📖 查看文档：skillhub info ${skillName}`);
  console.log(`🗑️  卸载技能：skillhub remove ${skillName}`);
};
