#!/usr/bin/env node

const { program } = require('commander');
const pkg = require('../package.json');

// 命令
const search = require('../commands/search');
const install = require('../commands/install');
const list = require('../commands/list');
const remove = require('../commands/remove');
const create = require('../commands/create');
const info = require('../commands/info');
const update = require('../commands/update');
const publish = require('../commands/publish');

program
  .name('skillhub')
  .description(pkg.description)
  .version(pkg.version);

// 搜索技能
program
  .command('search <query>')
  .description('搜索技能')
  .option('-l, --limit <number>', '结果数量', '10')
  .option('--popular', '按热门排序')
  .action((query, options) => search(query, options));

// 安装技能
program
  .command('install <skill>')
  .description('安装技能')
  .option('-g, --global', '全局安装')
  .action((skill, options) => install(skill, options));

// 列出技能
program
  .command('list')
  .description('列出技能')
  .option('--installed', '已安装的技能')
  .option('--popular', '热门技能')
  .option('--trending', '趋势技能')
  .action((options) => list(options));

// 卸载技能
program
  .command('remove <skill>')
  .description('卸载技能')
  .action((skill) => remove(skill));

// 创建技能
program
  .command('create <name>')
  .description('创建新技能模板')
  .action((name) => create(name));

// 技能详情
program
  .command('info <skill>')
  .description('查看技能详情')
  .action((skill) => info(skill));

// 更新技能
program
  .command('update')
  .description('更新技能')
  .option('<skill>', '技能名称')
  .option('--all', '更新所有技能')
  .action((options) => update(options));

// 发布技能
program
  .command('publish')
  .description('发布技能到市场')
  .option('--dry-run', '测试发布')
  .action((options) => publish(options));

program.parse(process.argv);
