const { readFileSync, writeFileSync }  = require('fs')
console.log('start');
const firstFile = readFileSync('./content/first.txt', 'utf8')
console.log(firstFile);

writeFileSync(
'./content/result-sync.text', 
`Here is the result: ${firstFile}`,
 {flag: 'a'}
)

console.log('done with this task');
console.log('starting the next one');