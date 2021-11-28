const fs = require('fs');
const handlebars = require('handlebars')
const readline = require('readline');

module.exports = async () => {
  const config = JSON.parse(fs.readFileSync('./template-generator/config.json').toString());
  let file = config.file.name
  
  console.log(config, 'config');
  fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? '' : '已存在'}`);
    fs.mkdir('apps', (err)=> {
      if(!err) {
        // 加 js erb css
        compile(conn, './apps/12d3.htnml.erb', './template-generator/template/index.html.erb.hbs')
        // compile(conn, './apps/12d3.htnml.erb', './template-generator/template/index.html.erb.hbs')
        // compile(conn, './apps/12d3.htnml.erb', './template-generator/template/index.html.erb.hbs')
      }
    })
  });

  //调用方法
  const rulesPath = config.rules;
  const actionPath = config.action;
  const lastMenuName = "查看" + config.lastMenuName
  const menuName = "查看" + config.menuName

  generateActionFile(actionPath)
  
  const resIndex = await findLineBywords(rulesPath, lastMenuName);
  console.log(resIndex, 'resindex');
  writeInLine(rulesPath, resIndex, `{ id: 2007, name: '${menuName}', action_ids: [2007], parent_id: 2006 },`)

  function writeInLine(filePath, line, content) {
    const arrData = fs.readFileSync(filePath, 'utf8').split('\n')
    arrData.splice(line, 0, content)
    fs.writeFileSync(filePath, arrData.join('\n'), 'utf8')
  }
  function endStrInLine(filePath, line, end = ',') {
    const arrData = fs.readFileSync(filePath, 'utf8').split('\n')
    let str = arrData[line].trim()
    console.log(str, 'string');
    if(str[str.length-1] !== end) {
      arrData.splice(line, 1, str+end)
      fs.writeFileSync(filePath, arrData.join('\n'), 'utf8')
    }
  }
  async function generateActionFile(path){
    return new Promise(resolve=> {
      // 创建可读流
      const fData = fs.createReadStream(path);
      const rl = readline.createInterface({
        input: fData
      })
      let index = 0;
      let resIndex = 0;
      let id = 0
      rl.on('line', (data)=>{
        index++
        if(data.includes('id')&&data.includes('action_name')&&data.includes('controller_name')){
          try {
            data = data.trim()
            if(data[data.length-1] == ','){
              data = data.substring(0, data.length - 1)
            }
            data = eval("("+data+")");
            if(data.id){
              resIndex = index
              id = data.id
            }
          } catch (error) {
            
          }
        }
      })
      rl.on('close',function () {
        endStrInLine(actionPath, resIndex-1, ',')
        writeInLine(actionPath, resIndex, `{ id: ${id+1}, action_name: '${actionPath}', controller_name: 'enterprise/${actionPath}' }`)
        resolve(id)
      });
    })
    
  }
  async function findLineBywords(path, words) {
    return new Promise(resolve=>{
      // 创建可读流
      const fData = fs.createReadStream(path);
      const rl = readline.createInterface({
        input: fData
      })
      let index = 0;
      
      rl.on('line', (data)=>{
        index++
        if(data.includes(words)){
          try {
            data = data.trim()
            if(data[data.length-1] == ','){
              data = data.substring(0, data.length - 1)
            }
            data = eval("("+data+")");
            console.log(data, "ttt");
            if(data.name == words){
              // res = index
              resolve(index)
            }
          } catch (error) {
            // console.log(error);
          }
        }
      })
      rl.on('close',function () {
        // console.log(res, 9998888);
      });
    })
  }
  
}
