// GLOBALS - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use module (commonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed


// MODULES

// CommonJS - every file in node is module (by default)
// Modules - Encapsulated Code (Only share minimun)

const secret = `super secret`
const varun  = 'varun'
const arpit = 'arpit'

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi(varun)

console.log(__dirname)
// setInterval(() => {
// console.log('hello, world');
// },1000)