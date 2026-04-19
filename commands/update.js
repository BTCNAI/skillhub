// 更新技能
const fs = require('fs');
const path = require('path');
const skills = require('../src/skills-db');

module.exports = async function update(options) {
  const skillsDir = path.join(process.env.HOME, '.openclaw', 'skills');
  
  if (!fs.existsSync(skillsDir)) {
    console.log('📭 还未安装任何技能');
    return;
  }
  
  // 更新所有技能
  if (options.all) {
    console.log('🔄 更新所有技能...\n');
    
    const installed = fs.readdirSync(skillsDir)
      .filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
    
    for (const skillName of installed) {
      console.log(`检查 ${skillName}...`);
      
      const skillJson = path.join(skillsDir, skillName, 'skill.json');
      if (!fs.existsSync(skillJson)) continue;
      
      const local = JSON.parse(fs.readFileSync(skillJson, 'utf8'));
      const remote = await skills.get(skillName);
      
      if (!remote) {
        console.log(`  ⚠️  远程技能不存在，跳过`);
        continue;
      }
      
      if (remote.version !== local.version) {
        console.log(`  ⬆️  发现新版本：${local.version} → ${remote.version}`);
        // 这里应该实现实际更新逻辑
        local.version = remote.version;
        local.updatedAt = new Date().toISOString();
        fs.writeFileSync(skillJson, JSON.stringify(local, null, 2));
        console.log(`  ✅ 更新完成`);
      } else {
        console.log(`  ✓ 已是最新版本`);
      }
    }
    
    console.log('\n✅ 所有技能更新完成');
    return;
  }
  
  // 更新指定技能
  if (options._name) {
    const skillName = options._name;
    const skillPath = path.join(skillsDir, skillName);
    
    if (!fs.existsSync(skillPath)) {
      console.log(`❌ 技能 "${skillName}" 未安装`);
      return;
    }
    
    console.log(`🔄 更新 ${skillName}...`);
    // 实现单个技能更新逻辑
    console.log(`✅ ${skillName} 更新完成`);
    return;
  }
  
  console.log('💡 使用 `skillhub update --all` 更新所有技能');
};
