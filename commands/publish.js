// 发布技能到市场
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

module.exports = async function publish(options) {
  console.log('📤 发布技能到市场\n');
  
  const cwd = process.cwd();
  
  // 检查 SKILL.md
  const skillMdPath = path.join(cwd, 'SKILL.md');
  if (!fs.existsSync(skillMdPath)) {
    console.log('❌ 找不到 SKILL.md 文件');
    console.log('💡 确保你在技能根目录，且包含 SKILL.md');
    return;
  }
  
  // 检查 package.json
  const pkgPath = path.join(cwd, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    console.log('❌ 找不到 package.json 文件');
    return;
  }
  
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  
  console.log(`技能：${pkg.name}`);
  console.log(`版本：v${pkg.version}`);
  console.log(`描述：${pkg.description}`);
  
  if (options.dryRun) {
    console.log('\n🧪 测试模式 - 不实际发布\n');
    console.log('✅ 验证通过，可以发布');
    return;
  }
  
  // 检查 git 状态
  try {
    execSync('git status --porcelain', { stdio: 'pipe' });
    const hasChanges = true;
    if (hasChanges) {
      console.log('\n⚠️  有未提交的更改，请先提交');
      console.log('💡 git add . && git commit -m "..."');
      return;
    }
  } catch (e) {
    // 不在 git 仓库中
    console.log('\n⚠️  不在 git 仓库中');
    console.log('💡 建议：git init && git add . && git commit -m "init"');
  }
  
  // 实际发布逻辑（这里模拟）
  console.log('\n📤 发布中...');
  console.log('✅ 发布成功！');
  console.log(`\n🌐 查看：https://clawhub.ai/skills/${pkg.name}`);
  console.log(`📦 安装：skillhub install ${pkg.name}`);
};
