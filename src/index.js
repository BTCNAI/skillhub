// SkillHub - OpenClaw Skill Discovery & Management Platform

const skills = require('./skills-db');

module.exports = {
  version: '1.0.0',
  
  // 搜索技能
  search: async (query, options) => skills.search(query, options),
  
  // 获取技能详情
  getSkill: async (name) => skills.get(name),
  
  // 获取热门技能
  getPopular: async (limit) => skills.getPopular(limit),
  
  // 获取趋势技能
  getTrending: async (limit) => skills.getTrending(limit),
  
  // 安装技能
  install: async (name, options) => {
    const installCmd = require('../commands/install');
    return installCmd(name, options);
  },
  
  // 创建技能
  create: async (name) => {
    const createCmd = require('../commands/create');
    return createCmd(name);
  }
};
