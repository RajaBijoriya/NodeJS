// function demo() {
//     console.log("hello words");
// }
// demo()


const fs = require("fs");

// fs.writeFileSync("hello.txt", "HEllo world");
// console.log("done")


// fs.writeFile("new.txt", "helo", (err) => {console.log(err)})
// console.log("Done");


// read 
// const neww = fs.readFileSync("new.txt","utf-8")
// console.log(neww);


// fs.readFile("new.txt","utf-8", (err, result) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }
// })

// const hel = fs.appendFileSync("hello.txt","hello kese he aappp");
// console.log(hel)

// fs.appendFile("new.txt","helo ji kese he file",(err) => console.log(err))
// console.log("done");


// fs.copyFileSync("hello.txt","new.txt");
// console.log("Done");

// fs.unlinkSync("")

// fs.mkdirSync("my-appp", ({recursive : true}));

const  Path =  require("path");

const dirPath = Path.join(__dirname, "exmpale/ab");

fs.mkdirSync(dirPath , {recursive: true})