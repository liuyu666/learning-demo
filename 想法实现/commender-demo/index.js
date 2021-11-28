const { Command } = require('commander')

const programe = new Command()
programe
  .version('0.1.0')
  .parse(process.argv)