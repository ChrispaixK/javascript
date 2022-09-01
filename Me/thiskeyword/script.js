'use strict';

//this log a window object
console.log(this);

const calcAge= (birthYear)=> {
    console.log(2091 - birthYear);
    console.log(this);
}

calcAge(1996)