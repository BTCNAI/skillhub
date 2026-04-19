// 卸载技能
const fs = require('fs');
const path = require('path');

module.exports = async function remove(skillName) {
  console.log(`🗑️  卸载技能：${skillName}\n`);
  
  const skillsDir = path.join(process.env.HOME, '.openclaw', 'skills');
  const skillPath = path.join(skillsDir, skillName);
  
  if (!fs.existsSync(skillPath)) {
    console.log(`❌ 技能 "${skillName}" 未安装`);
    return;
  }
  
  // 删除技能目录
  fs.rmSync(skillPath, { recursive: true, force: true });
  
  console.log(`✅ 技能 "${skillName}" 已卸载`);
};
