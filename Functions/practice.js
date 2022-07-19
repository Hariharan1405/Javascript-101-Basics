//function with name called sayMyName has no arguments
function sayMyName(){
    console.log('Hii');
}

// sayMyName('Hari');

/**
 * function with name sayMyName2 has 1 arguments
 */
function sayMyName2(name){
    console.log(`Hi, ${name} how was your day!`)
}

//sayMyName2('Raghul');

/*
    * function named calculateTotalFoodAmount with 2 arguments 
    * calculate the food amount and inside for finding total a function named sum is used
*/
function sum(a, b){
    return a+b;
}

function calculateTotalFoodAmount(food, tip){
    tipPercentage = tip/100;
    tipAmount = food*tipPercentage;
    total = sum(food, tipAmount);
    return total; 
}

//console.log(calculateTotalFoodAmount(300,20));

