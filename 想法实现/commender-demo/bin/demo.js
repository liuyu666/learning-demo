#! /usr/bin/env node
const { program } = require('commander')
program
  .version('0.0.1')
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', '- small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);
const options = program.opts();
if (options.debug) console.log(options);
if (options.small) console.log('- small pizza size')
if (options.pizzaType) console.log(options.pizzaType)