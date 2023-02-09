const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const playButton = document.querySelector('#play-btn')
const squares = document.querySelectorAll('.container div')
var kermit = document.createElement('div')
kermit.id = "kermit";
let currentIndex = 76;
const byNine = 9;

function movingKermit(e){
    console.log(e.key);

    switch(e.key){
        case 'ArrowLeft': 
            currentIndex -= 1;
            console.log(e)
            break
        case 'ArrowRight': 
            currentIndex += 1
            console.log(e)
            break
        case 'ArrowUp': 
            currentIndex -= byNine;
            console.log(e)
            break
        case 'ArrowDown': 
            currentIndex += byNine;
            console.log(e)
            break
    }
    console.log(squares[currentIndex])
    //squares[currentIndex].classList.add("kermit")
    squares[currentIndex].appendChild(kermit)
   
}

document.addEventListener('keyup',movingKermit)