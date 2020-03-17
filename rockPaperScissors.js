const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', (e) => {

    h1.classList.add('headeron')
})

h1.addEventListener('mouseout', (e) => {

    h1.classList.remove('headeron')
})

const btn = document.querySelectorAll('.gameButton');

for (let button of btn) {
    button.addEventListener('click', (e) => {
        const place = document.querySelector('#computer')
        const machineGuess = document.createElement('h4')
        const value = button.value;
        
        machineGuess.innerText = randomer();
        const machineResult = machineGuess.innerText

        const pcGuess = document.querySelector('#pcGuess')
        pcGuess.innerText = machineResult 
        // place.appendChild(machineGuess)

        
        let score;
       
        if (value === machineResult) {
            score = 'Draw'            
        }   else if (value === 'paper' && machineResult === 'rock') {
            score = 'You win'
        }   else if (value === 'rock' && machineResult === 'scissors') {
            score = 'You win'
        }   else if (value === 'scissors' && machineResult === 'paper') {
            score = 'You win'
        } else {
            score = 'You lose'
        }
        
        const scoreDisplay = document.querySelector('#result')
        scoreDisplay.innerText = score
        })
    }

// const isWinner = (playerPick, computerPick) => {
//     if (playerPick === machineResult) {
//         return 'Draw'            
//     }   else if (playerPic === 'paper' && computerPick === 'rock') {
//         return 'You win'
//     }   else if (playerPic === 'rock' && computerPick === 'scissors') {
//         return 'You win'
//     }   else if (playerPic === 'scissors' && computerPick === 'paper') {
//         return  'You win'
//     } else {
//         return 'You lose'
//     }
// }

const randomer = () => {
    const guess = Math.floor(Math.random() * 3) +1
    if (guess === 1) {
        return 'rock'
    } else if (guess === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

 // let playerScore = 0;
    // let computerScore = 0;

    // if (scoreDisplay.innerText === 'You win') {
    //     playerScore++
    // } else if (score === 'You lose') {
    //     computerScore++
    // }

    // console.log(`${playerScore} ${computerScore}`)