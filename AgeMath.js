/* Dogs age 15 human years during their first year.
The second year of life for dogs equals 9 human years.
Then, every subsequent year is equivalent to 5 human years. */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your age?`, ageInput => {
    ageMath(ageInput,false);
    readline.close();
  });

let ageOutput;

function htmlInput(){
    let htInput = document.getElementById('').value;
    ageMath(htInput,true)
}


function ageMath(input,outputState){
    if(input < 1){
        ageOutput = (15 * input);
        if(outputState == true){
            document.getElementById('').innerHTML;
        }else{
            console.log("In dog years you are " + ageOutput + " years old.");
        }
        
    }
    if(input >= 1 && input < 2){
        ageOutput = 15 + (9 * (input-1));
        if(outputState == true){
            document.getElementById('').innerHTML;
        }else{
        console.log("In dog years you are " + ageOutput + " years old.");
        }
    }
    if(input >= 2){
        ageOutput = 24 + (5 * (input-2));
        if(outputState == true){
            document.getElementById('').innerHTML;
        }else{
        console.log("In dog years you are " + ageOutput + " years old.");
        }
    }
}