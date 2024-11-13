const prompt=require('prompt-sync')();

const pl_name = prompt("WELCOME,PLEASE ENTER YOUR NAME(CAN BE IN CAPS): ");


rps = (x) => {
    const question = `A MATCH BETWEEN [ ${pl_name}] AND POLAR SOLVENT  `
    let pl_selection = prompt("CHOOSE BETWEEN:ROCK,PAPER AND SCISSORS(MUST NOT BE IN CAPS): ");
    console.log(question);
    function good() { 
        console.log("loading.....wait for the computer to choose its option");
        
    }
    good();
    


    
    
    const com_array = ["rock", "paper", "scissors"];
    const com_selection = Math.floor(Math.random() * com_array.length);
    const com_answer = com_array[com_selection];let answer =(`You chose: ${pl_selection} \n  Computer AI chose: ${com_answer}\n`);


    if (pl_selection == com_answer) {
        answer += "\n ITS A TIE";
    }
    else if (pl_selection == "rock" && com_answer == "paper") {
        answer += "\n COMPUTER AI WINS";
    }
    else if (pl_selection == "rock" && com_answer == "scissors") {
        answer += "\n YOU WIN";
    }
    else if (pl_selection == "paper" && com_answer == "scissors") {
        answer += "\n COMPUER AI WINS";
    }
    else if (pl_selection == "paper" && com_answer == "rock") {
        answer += "\n YOU WIN";
    }
    else if (pl_selection == "scissors" && com_answer == "paper") {
        answer += " \nYOU WIN";
    }
    else if (pl_selection == "scissors" && com_answer == "rock") {
        answer += "\n COMPUER AI WINS";
    }
    else {
        answer += "\n try again ,your input is not recognised";
    }
    console.log(answer);

    

    if (x < 3) {
        rps(++x);
    }

    
}

rps(1);





