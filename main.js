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
            if(currentIndex % byNine !==0) currentIndex -= 1;
            console.log(e)
            break
        case 'ArrowRight': 
            if (currentIndex % byNine < byNine -1) currentIndex += 1;
            console.log(e)
            break
        case 'ArrowUp': 
             if (currentIndex - byNine < squares.length &&  currentIndex - byNine >= 0) currentIndex -= byNine;
            console.log(e)
            break
        case 'ArrowDown': 
              if (currentIndex + byNine < squares.length && currentIndex + byNine > 0) currentIndex += byNine;
            console.log(e)
            break
    }
    console.log(squares[currentIndex])
    //squares[currentIndex].classList.add("kermit")
    squares[currentIndex].appendChild(kermit)

   
}

document.addEventListener('keyup',movingKermit)