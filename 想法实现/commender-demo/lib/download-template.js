const {promisify} = require("util")
module.exports.clone = async(url, name) =>{
  const download = promisify(require('download-git-repo'))
  const ora = require("ora")
  const process = ora(`下载${url}`)
  process.start()
  await download(url, name)
  process.succeed()
}