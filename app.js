let readlineSync = require('readline-sync');
let fs = require("fs");
let finaljson
let deslang
console.log("㊗️"," Welcome to translation helper for i-18 Vue.js ⌨️ ️")
let src=readlineSync.question("please provide src file name: ")

fs.readFile(src, function(err, buf) {
  let j
  try {
   j=JSON.parse(buf.toString());
  } catch (error) {
    console.log("Sorry, something went wrong. File doesn't exist")  
    process.exit()
  }
  
   deslang=readlineSync.question("What is the language code you are translating to? en for English  ")
  const key = Object.keys(j)
  const vls=Object.values(j)
  
  //logic

key.forEach((item,index)=>{
  let word = readlineSync.question('🌐  translate the word  '+ item + "  ");
  vls[index]=word  
});


 finaljson = key.reduce((obj, key, index) => ({ ...obj, [key]: vls[index] }), {});
 
 fs.writeFile(deslang+".json", JSON.stringify(finaljson), (err) => {
   if (err) console.log(err);
   console.log("Your translation json is ready.", "㊗️");
 });
});
