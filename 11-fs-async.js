
const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./content/first.txt','utf-8', (err, result) => {
if(err) {
    console.log(arr);
    return
}
console.log(result);

writeFile('./content/result-async.txt', `This comes from ${result}`, {flag: 'a'},(err, result)=>{
    if(err) {
        console.log(err);
        return
    }
    console.log(result);
})
})

console.log('done with this task');
console.log('starting the new one'); 