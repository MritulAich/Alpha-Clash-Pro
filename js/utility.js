function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet() {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const randomNumber = Math.round(Math.random() * 25);
   
    const alphabet = alphabets[randomNumber];
    return alphabet;
}




function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}



function removeBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}



function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}