#! /usr/bin/env node
const commander = require('commander'); // include commander in git clone of commander repo
const program = new commander.Command();

program
  .command('init [name]')
  .description('download init template')
  .action((name = "template-generator") => {
    require('../lib/init')(name)
  });

program
  .command('generator')
  .description('generate pages (先修改template-generator/config的配置，再执行此操作)')
  .action(() => {
    require('../lib/generator')()
  });
program.parse(process.argv);