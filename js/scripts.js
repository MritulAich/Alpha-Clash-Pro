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
    // console.log('your random alphabet', alphabet);

    //set it to screen show
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set bg color
    setBgColorById(alphabet);
}

//..alternative of hide & show..//
function play() {
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame();
}



function gameOver(){
    hideElementById('play-ground');
    showElementById('score');


    ///get final score
    const finalScore = getTextElementValueById('current-score');
    console.log(finalScore);
    setTextElementValueById('final-score', finalScore);


    //clear previous alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBgColor(currentAlphabet);
}



function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    } 


    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);


    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');

      //update score: 
        const currentScoreText = document.getElementById('current-score');
        const currentScore = parseInt(currentScoreText.innerText);

        const newScore = currentScore + 1;

        currentScoreText.innerText = newScore;


        //start new round
        removeBgColor(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed');

        //get current life number
        const currentLifeText = document.getElementById('current-life');
        const currentLife = parseInt(currentLifeText.innerText);
        //reduce
        const newLife = currentLife - 1;
        //then display it
        currentLifeText.innerText = newLife;

        if(newLife === 0){
            gameOver() ;
        }
    } 
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);