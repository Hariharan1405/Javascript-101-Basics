// FOR loops
//const numbers=[1, 2, 3, 4, 5, 6, 7];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

//Modern way

// for(const number of numbers){
//     console.log(number);
// }

//Excercise 1
//result -> [2, 4, 6, 8, 10, 12, 14]

// let result = [];

// for(const number of numbers) {
//     result.push(number * 2);    
// }
// console.log(result);

//Excercise 2 
//Doubling the array of numbers using the function

const double = (numbers) => {
    let result = [];
    for(const number of numbers){
        result.push(number * 2);
    }
    return result;
}

// console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Excercise 
//How many letters in the phrase?
//for of -> letters, numbers, content
//for in -> index

const howManyLetters = (phrase) => {
    
    //counter
    let result = 0;
    for(const index in phrase){
        //console.log(Number(index)+1);
        result = Number(index)+1;
    }
    return { result };

    // //Easy way
    // let result = 0;
    // return { result: phrase.length};
}

//console.log(howManyLetters('Raghul'));

//Excercise 
//Sum of numbers in an array

const sumOfNumbers = (numbers) => {
    let result = 0 ;
    for(const count of numbers){
        result+=count;
    }
    return result;
}

// console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//Excercise 
//Max of Array
const max = (numbers) => {
    //assign the value to initial number of array not to 0
    //if 0 is assigned, then if the negative numbers are present it shows wrong as 0 will be the highest number 
    let result = numbers[0];
    for(const number of numbers){
        if(number > result){
            result=number;
        }
    }
    //return the output as object key: value (result: answer) 
    return { result };

}

// console.log(max([1, 2, 3, 4, 10]));

//Excercise
//Frequency of a number
const letterFrequency = (phrase) => {
    //make a empty frequecy object {}
    let frequency = {};
    for(const letter of phrase){
        console.log(letter);
        //check whether if letter in frequency
        if(letter in frequency){
            //increment by 1, if exists
            frequency[letter] = frequency[letter] +1;
        } else{
            //else set the value to 1 to the letter 
            frequency[letter] = 1;
        } 
    }
    return frequency;

}

//console.log(letterFrequency('Hariharan'));

//Excercise
//wordFrequency
const wordFrequency = (phrase) => {
    //create empty object frequency {}
    let frequency = {};
    //split the string using array method -> split
    //common thing in the phrase is (' ), so separate it by (' ')
    let arrayOfWords = phrase.split(' ');
    //loop through the array 
    for(const word of arrayOfWords){
        //check whether the word is present in the frequency object {}
        if(word in frequency){
            //if exists, increment by 1
            frequency[word]++;
        } else{
            //if not present, set value to 1
            frequency[word] = 1;
        }
    }
    return frequency;
}

console.log(wordFrequency('what is what is the the as the the '));

































































