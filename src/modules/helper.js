// sukurti funkcija kuri pavercia valandas i minutes
//es6 export export function hoursToMin(hoursAmmount)
function hoursToMin(hoursAmmount) {
    return hoursAmmount*60
}
const n1 = hoursToMin(10)
console.log('n1 ---->', n1);

//parasyti funkcija kuri pavercia metu i dienas 365d
function yearsToDays(years){
return years*365
}
//exportuoti ir panaudoti app.js

module.exports = {
    hoursToMin,
    yearsToDays
}