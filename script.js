function getComputerChoice (){
    let ComputerChoice = Math.floor(Math.random() * 3)

    switch (ComputerChoice){
        case 0 :
            return 'Gunting';
            break;
        case 1 :
            return 'Batu';
            break;
        case 2 :
            return 'Kertas';
            break;
    }
}

function playRound (playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        return 'Seri';
    }

    if (
        (player == 'batu' && computer == 'gunting') ||
        (player == 'gunting' && computer == 'kertas') ||
        (player == 'kertas' && computer == 'batu'))
        {
            return "Anda Menang " + player + " mengalahkan " + computer;
        }
    if (
        (player == 'batu' && computer == 'kertas') ||
        (player == 'gunting' && computer == 'batu') ||
        (player == 'kertas' && computer == 'gunting'))
        {
            return "Anda Kalah. " + computer + " mengalahkan " + player;
        }
}

const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection))