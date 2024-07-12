
var human_score = 0;
var computer_score = 0;


main();

function main() {
    rounds = parseInt(prompt("How many rounds? "));

    for (i = 0; i < rounds; i++) {
        playRound();
        
        console.log("Wins\nHuman: " + human_score + "\nComputer: " + computer_score);
    }
}

function playRound() {
    var human_choice = getHumanChoice();
    var computer_choice = getComputerChoice();

    console.log("Human: " + human_choice);
    console.log("Computer: " + computer_choice);

    if (human_choice == computer_choice) {
        console.log("Tie");
    }
    else if (human_choice == "rock" && computer_choice == "scissors") {
        console.log("Winner");
        human_score++;
    }
    else if (human_choice == "paper" && computer_choice == "rock") {
        console.log("Winner");
        human_score++;
    }
    else if (human_choice == "scissors" && computer_choice == "paper") {
        console.log("Winner");
        human_score++;
    }
    else {
        console.log("Lose");
        computer_score++;
    }
}

function getComputerChoice() {
    const names = ["rock", "paper", "scissors"];
    var i = Math.floor(Math.random()*1001) % 3;
    return names[i];
}

function getHumanChoice() {
    var choice = prompt("What is your choice: ['rock', 'paper', 'scissors']");
    choice = choice.toLowerCase();
    return choice;
}