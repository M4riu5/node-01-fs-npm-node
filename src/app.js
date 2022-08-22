'use strict';
//es6 module syntax
// import { hoursToMin } from "./helper";
//commonJs import
const {hoursToMin, yearsToDays} = require("./modules/helper")
const sum  = require('./modules/sum')
console.log('app.js');

const name = 'James'

const fullNmame = `${name} Bond`

console.log('fullNmame ---->', fullNmame);

console.log('minutes(12) ---->', hoursToMin(12));
console.log('yearsToDays ---->', yearsToDays(26));
console.log('sum(70,30) ---->', sum(70,30));

// ctrl + c iseiti is  node
// node app.js - ijungti node
// touch - sukurti faila
// cd switch derectory

//npm init
// license MIT