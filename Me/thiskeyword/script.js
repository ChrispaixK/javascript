'use strict';

//this log a window object
console.log(this);
/**********IN FUNCTIONS***********/
const calcAge= function (birthYear) {
    console.log(2091 - birthYear);
    // in regular fx this is pointing to itself
    // in regular function this pointing to undefined
    console.log(this);
}

calcAge(1996)

const calcAgeArrow= (birthYear)=> {
    console.log(2091 - birthYear);
    // arroW functions point to their parent
    //this will point on window Obj
    console.log(this);
}

calcAgeArrow(1996)

/**********IN OBJECTS***********/

const jonas = {
    year:1991,
    calcAge: function(){
        console.log(this);
        console.log(2037- this.year);
    },
}

// this will pointing to the object calling it's method
//in this case we call the method on jonas object
//tht's why this will point on jonas object
jonas.calcAge();

const garry ={
    year:1998
};

// method borowing
garry.calcAge=jonas.calcAge;

//this will point on garry object
garry.calcAge()


const f =jonas.calcAge;
