'use strict';
console.log('fs.js');

const fs = require('fs')
// irasyti i failu sistema
//fs.writeFile('failo pavadinimas su keliu , duomenys i faila, callback funmckcija su klaidos oobjektu)
function irasyt() {fs.writeFile('./user.txt', 'Username=James\nage=27', (err) => {
    if (err){
        //ivyko klaida
        console.log(err)
        return
    }
    console.log('Failas sukurtas sekmingai')
})}
//perskaityti faila
function skaitom(path) {
    fs.readFile(path , (err, data)=>{
    if (err){
        //ivyko klaida
        console.log(err.message)
        return
    }
    //klaidos nera
    console.log('data ---->', data.toString());
    const rows = data.toString().split('\n')
    console.log('rows ---->', rows);
})}
// skaitom('./user.txt')

//istrinti faila is failu sistemos
//fs.unlink
function istrink(path) {
    if (fs.existsSync(path)) {
    console.log('file exists')
    fs.unlink(path, (err)=> {
        if (err){
            //ivyko klaida
            console.log(err.message)
            return
        }
        console.log(path ,'file deleted successfuly')
     })
} else {
    console.log('file not found')
}}
istrink('./delete.txt')