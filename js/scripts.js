// function play(){
//     //hide home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // and show playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    //set it to screen show
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}

//..alternative of hide & show..//
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}



