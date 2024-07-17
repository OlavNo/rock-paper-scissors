
var human_score = 0;
var computer_score = 0;

const buttons = document.querySelectorAll("button");

const container = document.querySelector("body");

const eventGame = document.createElement("div");
eventGame.classList.add("eventGame");
eventGame.textContent = "";
container.appendChild(eventGame);

const human = document.createElement("div");
human.classList.add("human");
human.textContent = "Human: " + human_score;
container.appendChild(human);

const computer = document.createElement("div");
computer.classList.add("computer");
computer.textContent = "Computer: " + computer_score;
container.appendChild(computer);

const endGame = document.createElement("h2");
endGame.classList.add("endGame");
endGame.textContent = "";
container.appendChild(endGame);


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id);
    human.textContent = "Human: " + human_score;
    computer.textContent = "Computer: " + computer_score;
    if (human_score > 4) {
        endGame.textContent = "Winner!";
    }
    else if (computer_score > 4) {
        endGame.textContent = "Lose!";
    }
  });
});

function playRound(choice) {
    var human_choice = choice;
    var computer_choice = getComputerChoice();

    eventGame.textContent = "You chose " + human_choice + " and computer chose " + computer_choice + "!\n";

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