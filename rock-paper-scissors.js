const getUserChoice = userInput => {
    userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log("Invalid choice");
    }
};

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        case 3:
            return 'bomb';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === "bomb") {
        if (computerChoice === "rock" || computerChoice === "paper" || computerChoice === "scissors") {
            console.log("You automatically win!")
        }
    }
    if (userChoice === computerChoice) {
        return console.log('The game is a tie!');
    }

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Sorry, the computer won!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Sorry, the computer won!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Sorry, the computer won!";
        } else {
            return "You win!";
        }
    }


};

const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();