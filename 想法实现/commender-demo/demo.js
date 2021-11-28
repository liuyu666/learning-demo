// const readline = require('readline')
// let rl  = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.write('haha')
// rl.question('Do you kow how to use it?', (input)=> {
//   console.log('你输入了：', input);
//   rl.write('nihao')
//   rl.close();
// })
const { spawn } = require('child_process');
    const ls = spawn('ls', ['-lh', '/commender-demo']);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
