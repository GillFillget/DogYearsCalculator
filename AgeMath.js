const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your age?`, ageInput => {
    ageMath(ageInput,false);
    readline.close();
  });

function htmlInput(){
    let htInput = document.getElementById('ageIn').value;
    ageMath(htInput,true)
}


function ageMath(input,outputState){
    if(input < 1){
        let ageOutput = (15 * input);
        if(outputState == true){
            document.getElementById('ageOut').innerHTML = "In dog years you are " + ageOutput + " years old.";
        }else{
            console.log("In dog years you are " + ageOutput + " years old.");
        }
        
    }
    if(input >= 1 && input < 2){
        let ageOutput = 15 + (9 * (input-1));
        if(outputState == true){
            document.getElementById('ageOut').innerHTML = "In dog years you are " + ageOutput + " years old.";
        }else{
        console.log("In dog years you are " + ageOutput + " years old.");
        }
    }
    if(input >= 2){
        let ageOutput = 24 + (5 * (input-2));
        if(outputState == true){
            document.getElementById('ageOut').innerHTML = "In dog years you are " + ageOutput + " years old.";
        }else{
        console.log("In dog years you are " + ageOutput + " years old.");
        }
    }
}