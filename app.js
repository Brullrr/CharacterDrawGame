const DisplayTextHolder = document.querySelector('.DisplayTextHolder');
const DisplayText = document.querySelector('.DisplayText');
const ChangingDiv = document.querySelector('.ChangingDiv');
const DisplayButtonHolder = document.querySelector('.DisplayButtonHolder');


const charactersImagesArray = [
    '/images/Abu.gif',
    '/images/Aladdin.png',
    '/images/Genie.gif',
    '/images/Iago.jpg',
    '/images/Jafar.png',
    '/images/Jasmine.png',
];

let randomNumber = 0;
let chosenCharacter = '';

let phase = 0;


const chooseCharacterButtonClicked = () => {
    randomNumber = Math.floor(Math.random()*charactersImagesArray.length);
    chosenCharacter = charactersImagesArray[randomNumber]  
    position1 = chosenCharacter.indexOf('.')
    chosenCharacterNameOnly = chosenCharacter.substring(7, position1)
    DisplayText.innerHTML = chosenCharacterNameOnly;
    phase = 1;
    changeButton();
}
const alottedTime = 5;
let seconds = 0;

const renderTimer = (timeRemaining) => {

    ChangingDiv.innerHTML = '';

    let div = document.createElement('div');
    div.innerHTML = timeRemaining;

    ChangingDiv.appendChild(div);

}

const decreaseSeconds = () => {
        let start = Date.now();
        let timerInterval = setInterval(() => {
                let delta = Date.now() - start;
                seconds = Math.floor(delta / 1000);
                let renderTime = alottedTime - seconds;
                if((alottedTime - seconds) <= 0) {
                    clearInterval(timerInterval)
                    phase = 3;
                    changeButton();
                }
                renderTimer(renderTime);
            }, 1000);
}

const startGameButtonClicked = () => {
    decreaseSeconds();
    phase = 2;
    changeButton();
}


const showPictureButtonClicked = () => {
    ChangingDiv.innerHTML = '';
    let img = document.createElement('img');
    img.src = chosenCharacter ;
    console.log(img.src)
    ChangingDiv.appendChild(img);
    phase = 4;
    changeButton();
}

const playAgainButtonClicked = () => {
    DisplayText.innerHTML = 'Click the button to start!';
    ChangingDiv.innerHTML = '';
    phase = 0;
    changeButton();
}
 

const changeButton = () => {
    DisplayButtonHolder.innerHTML = '';
    let DisplayButton = null;

    switch (phase) {
        case 0:
                DisplayButton = document.createElement('button');
                DisplayButton.innerHTML = 'Choose Character'
                DisplayButton.addEventListener('click', chooseCharacterButtonClicked);
                DisplayButtonHolder.appendChild(DisplayButton)
            break;
        case 1: 
                DisplayButton = document.createElement('button');
                DisplayButton.innerHTML = 'Start Game'
                DisplayButton.addEventListener('click', startGameButtonClicked);
                DisplayButtonHolder.appendChild(DisplayButton);
            break;
        case 3: 
                DisplayButton = document.createElement('button');
                DisplayButton.innerHTML = 'Show Character'
                DisplayButton.addEventListener('click', showPictureButtonClicked);
                DisplayButtonHolder.appendChild(DisplayButton);
            break;
        case 4: 
                DisplayButton = document.createElement('button');
                DisplayButton.innerHTML = 'Play Again'
                DisplayButton.addEventListener('click', playAgainButtonClicked);
                DisplayButtonHolder.appendChild(DisplayButton);
            break;
        default:

            break;
    }

}

changeButton();


