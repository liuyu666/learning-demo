const clear = require("clear")
const chalk = require("chalk")
const { clone } = require("./download-template")
const log = content => console.log(chalk.green(content))
module. exports = async(name)=> {
  clear()
  log('下载模板中...')
  await clone('github:liuyu666/template-generator', name)
}