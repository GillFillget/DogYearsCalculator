/* Dogs age 15 human years during their first year.
The second year of life for dogs equals 9 human years.
Then, every subsequent year is equivalent to 5 human years. */


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your age?`, ageInput => {
    ageMath(ageInput);
    readline.close();
  });

let ageOutput;


function ageMath(input){
    if(input < 1){
        ageOutput = (15 * input);
        console.log("In dog years you are " + ageOutput + " years old.");
    }
    if(input >= 1 && input < 2){
        ageOutput = 15 + (9 * (input-1));
        console.log("In dog years you are " + ageOutput + " years old.");
    }
    if(input >= 2){
        ageOutput = 24 + (5 * (input-2));
        console.log("In dog years you are " + ageOutput + " years old.");
    }
}