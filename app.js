window.onload = function() {
    let userScore = 0;
    let computerScore = 0;
    const userScore_span = document.getElementById("user-score");
    const computerScore_span = document.getElementById("computer-score");
    const result_p = document.querySelector(".result > p");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");

    function getcomputerChoice(){
        const choices = ['r', 'p', 's'];
        const randoMNumber = Math.floor(Math.random() * 3);
        return choices[randoMNumber];
    }

    function converToWord(letter) {
        if (letter ===  'r') return "ROCK";
        if (letter === 'p') return "PAPER";
        return "SCISSORS";
    }

    function win(userChoice, computerChoice) {
        const smallUserWord = 'user'.fontsize(3).sup();
        const smallComputerWord = 'computer'.fontsize(3).sup();
        const userChoice_div = document.getElementById(userChoice);
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} beats ${converToWord(computerChoice)}${smallComputerWord} | You win!`;
        userChoice_div.classList.add('green-glow');
        setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
    }

    function lost(userChoice, computerChoice) {
        const smallUserWord = 'user'.fontsize(3).sup();
        const smallComputerWord = 'computer'.fontsize(3).sup();
        const userChoice_div = document.getElementById(userChoice);
        computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} loses to ${converToWord(computerChoice)}${smallComputerWord} | You lost!`;
        userChoice_div.classList.add('red-glow');
        setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
    }

    function draw(userChoice, computerChoice) {
        const smallUserWord = 'user'.fontsize(3).sup();
        const smallComputerWord = 'computer'.fontsize(3).sup();
        const userChoice_div = document.getElementById(userChoice);
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} equals ${converToWord(computerChoice)}${smallComputerWord} | It's a draw!`;
        userChoice_div.classList.add('grey-glow');
        setTimeout(() => userChoice_div.classList.remove('grey-glow'), 1000);
    }


    function game(userChoice) {
        const computerChoice = getcomputerChoice();
        switch (userChoice + computerChoice) {
            case 'rs':
            case 'pr':
            case 'sp':
                win(userChoice, computerChoice);
                break;
            case 'rp':
            case 'ps':
            case 'sr':
                lost(userChoice, computerChoice);
                break;
            case 'rr':
            case 'pp':
            case 'ss':
                draw(userChoice, computerChoice);
                break;
        }

    }
    function main () {
        rock_div.addEventListener("click", () =>game("r"));
        paper_div.addEventListener("click", () => game("p"));
        scissors_div.addEventListener("click", () => game("s"));
    }

    main();
};
