'use strict';

//this log a window object
console.log(this);

const calcAge= function (birthYear) {
    console.log(2091 - birthYear);
    // in regular function this pointing to undefined
    console.log(this);
}

calcAge(1996)

const calcAgeArrow= (birthYear)=> {
    console.log(2091 - birthYear);
    // arroe functions point to their parent
    //this will point on window Obj
    console.log(this);
}

calcAgeArrow(1996)

const jonas = {
    year:1991,
    calcAge: function(){
        //this will point to the parent object
        //which is jonas Object
        console.log(this);
    },
}

jonas.calcAge();