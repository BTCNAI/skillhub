// 创建技能模板
const fs = require('fs');
const path = require('path');

module.exports = async function create(name) {
  console.log(`🛠️  创建技能：${name}\n`);
  
  const skillDir = path.join(process.cwd(), name);
  
  // 检查是否已存在
  if (fs.existsSync(skillDir)) {
    console.log(`❌ 目录 "${name}" 已存在`);
    return;
  }
  
  // 创建目录结构
  const dirs = ['src', 'commands', 'docs', 'tests'];
  dirs.forEach(dir => {
    fs.mkdirSync(path.join(skillDir, dir), { recursive: true });
  });
  
  // 创建 SKILL.md
  const skillMd = `---
name: ${name}
description: ${name} - OpenClaw Skill
triggers:
  - ${name}
  - ${name.replace('-', ' ')}
metadata:
  openclaw:
    emoji: 🚀
---

# ${name} Skill

## 功能

在此描述技能的功能...

## 使用

\`\`\`bash
# 示例命令
\`\`\`

## 依赖

\`\`\`bash
# 需要的依赖
\`\`\`

## 配置

\`\`\`json
{
  "apiKey": "your-api-key"
}
\`\`\`
`;
  
  fs.writeFileSync(path.join(skillDir, 'SKILL.md'), skillMd);
  
  // 创建 package.json
  const packageJson = {
    name: name,
    version: '1.0.0',
    description: `${name} - OpenClaw Skill`,
    main: 'src/index.js',
    keywords: ['openclaw', 'skill', name],
    author: 'Your Name',
    license: 'MIT'
  };
  
  fs.writeFileSync(
    path.join(skillDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  // 创建 README.md
  const readme = `# ${name}

> OpenClaw Skill

## 安装

\`\`\`bash
skillhub install ${name}
\`\`\`

## 使用

\`\`\`bash
# 示例用法
\`\`\`

## 开发

\`\`\`bash
npm install
npm test
\`\`\`

## License

MIT
`;
  
  fs.writeFileSync(path.join(skillDir, 'README.md'), readme);
  
  // 创建示例代码
  const indexJs = `// ${name} Skill

module.exports = {
  name: '${name}',
  
  async execute(context, params) {
    // 实现你的技能逻辑
    console.log('Executing ${name}...');
    return { success: true };
  }
};
`;
  
  fs.writeFileSync(path.join(skillDir, 'src', 'index.js'), indexJs);
  
  // 创建 .gitignore
  const gitignore = `node_modules/
.env
*.log
.DS_Store
`;
  
  fs.writeFileSync(path.join(skillDir, '.gitignore'), gitignore);
  
  console.log('✅ 技能模板创建成功！\n');
  console.log(`📁 目录结构:`);
  console.log(`  ${name}/`);
  console.log(`    ├── SKILL.md        # 技能描述`);
  console.log(`    ├── package.json    # 项目配置`);
  console.log(`    ├── README.md       # 使用文档`);
  console.log(`    ├── .gitignore`);
  console.log(`    ├── src/`);
  console.log(`    │   └── index.js    # 主逻辑`);
  console.log(`    ├── commands/       # CLI 命令`);
  console.log(`    ├── docs/           # 文档`);
  console.log(`    └── tests/          # 测试`);
  console.log(`\n📝 下一步:`);
  console.log(`  1. cd ${name}`);
  console.log(`  2. 编辑 SKILL.md 和 src/index.js`);
  console.log(`  3. skillhub publish 发布`);
};
