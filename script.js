//get computer choice
function getComputerChoice (){
    const computerChoice = ['gunting','batu','kertas'];
    const random = Math.floor(Math.random() * computerChoice.length)
    return computerChoice[random];
}
//get player choice
function getPlayerChoice (){
    const playerChoice = prompt("Batu, Gunting, Kertas")
    return playerChoice;
}

function game () {
    let roundsPlayed = 1;
    let playerScore = 0
    let computerScore = 0
    let winResult = ""
    for (let i = 0; i < 3; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        //output
        console.log("Ronde ke " + roundsPlayed)
        console.log("Player : " + playerSelection + " X Computer : " + computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        console.log("Skor Sementara")
        console.log("Player : " + playerScore + " || Computer : " + computerScore)
        console.log("")

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
                    playerScore++
                    return "Anda Menang " + player + " mengalahkan " + computer;
                }
            if (
                (player == 'batu' && computer == 'kertas') ||
                (player == 'gunting' && computer == 'batu') ||
                (player == 'kertas' && computer == 'gunting'))
                {
                    computerScore++

                    return "Anda Kalah. " + computer + " mengalahkan " + player;
                }
        }
        roundsPlayed++
     }

     if (playerScore > computerScore){
        winResult = 'Selamat. Anda Menang'
     } else if ( playerScore < computerScore){
        winResult = 'Computer Menang'
    } else if ( playerScore == computerScore){
        winResult = 'Hasil Akhir Seri'
     }

     console.log(winResult)
}

game();

