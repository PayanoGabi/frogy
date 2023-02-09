const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const playButton = document.querySelector('#play-btn')
const squares = document.querySelectorAll('.container div')
console.log(squares)
let currentIndex = 76;
const byNine = 9;

function movingKermit(e){
    console.log(e);

    switch(e.key){

        case 'ArrowLeft': 
            console.log(e)
            currentIndex -= 1;
            break
        case 'ArrowRight': 
            console.log(e)
            currentIndex += 1
            break
        case 'ArrowUp': 
            console.log(e)
            currentIndex += byNine;
            break
        case 'ArrowDown': 
            console.log(e)
            currentIndex -= byNine;
            break
    }
    console.log(squares[currentIndex])
    //squares[currentIndex].classList.add("kermit")
}

document.addEventListener('keyup',movingKermit)