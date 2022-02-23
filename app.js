const DisplayTextHolder = document.querySelector('.DisplayTextHolder');
const DisplayText = document.querySelector('.DisplayText');
const ChangingDiv = document.querySelector('.ChangingDiv');
const DisplayButtonHolder = document.querySelector('.DisplayButtonHolder');


const charactersImagesArray = [
    {
        name: 'Abu',
        pathway: 'Images/Abu.gif',
        movie: 'Disney\'s Aladdin' 
    },
    {
        name: 'Aladdin',
        pathway: 'Images/Aladdin.png',
        movie: 'Disney\'s Aladdin' 
    },
    {
        name: 'Genie',
        pathway: 'Images/Genie.gif',
        movie: 'Disney\'s Aladdin' 
    },
    {
        name: 'Iago',
        pathway: 'Images/Iago.png',
        movie: 'Disney\'s Aladdin' 
    },
    {
        name: 'Jafar',
        pathway: 'Images/Jafar.png',
        movie: 'Disney\'s Aladdin' 
    },
    {
        name: 'Jasmine',
        pathway: 'Images/Jasmine.png',
        movie: 'Disney\'s Aladdin' 
    },
    //Wizard of Oz
    {
        name: 'Tin Man',
        pathway: 'Images/Tin Man.png',
        movie: 'Disney\'s Wizard of Oz' 
    },
    {
        name: 'Dorothy',
        pathway: 'Images/Dorothy.png',
        movie: 'Disney\'s Wizard of Oz' 
    },
    {
        name: 'Strawman',
        pathway: 'Images/Strawman.png',
        movie: 'Disney\'s Wizard of Oz' 
    },
    {
        name: 'Lion',
        pathway: 'Images/Lion.png',
        movie: 'Disney\'s Wizard of Oz' 
    },
    {
        name: 'Glinda',
        pathway: 'Images/Glinda.png',
        movie: 'Disney\'s Wizard of Oz' 
    },
    {
        name: 'Wicked Witch',
        pathway: 'Images/Wicked Witch.png',
        movie: 'Disney\'s Wizard of Oz' 
    },
    {
        name: 'Toto',
        pathway: 'Images/Toto.png',
        movie: 'Disney\'s Wizard of Oz' 
    },
    //Snow white
    {
        name: 'Snow White',
        pathway: 'Images/Snow White.png',
        movie: 'Disney\'s Snow White' 
    },
    {
        name: 'Hag',
        pathway: 'Images/Hag.png',
        movie: 'Disney\'s Snow White' 
    },
    {
        name: 'Mirror',
        pathway: 'Images/Mirror.png',
        movie: 'Disney\'s Snow White' 
    },
    {
        name: 'Prince Florian',
        pathway: 'Images/Prince Florian.png',
        movie: 'Disney\'s Snow White' 
    },
    {
        name: 'Queen',
        pathway: 'Images/Queen.png',
        movie: 'Disney\'s Snow White' 
    },
    //Pinocchio
    {
        name: 'Pinocchio',
        pathway: 'Images/Pinocchio.png',
        movie: 'Disney\'s Pinocchio' 
    },
    {
        name: 'Jiminy Cricket',
        pathway: 'Images/Jiminy Cricket.png',
        movie: 'Disney\'s Pinocchio' 
    },
    //Dumbo
    {
        name: 'Dumbo',
        pathway: 'Images/Dumbo.png',
        movie: 'Disney\'s Dumbo' 
    },
    //Bambi
    {
        name: 'Bambi',
        pathway: 'Images/Bambi.png',
        movie: 'Disney\'s Bambi' 
    },
    {
        name: 'Flower',
        pathway: 'Images/Flower.png',
        movie: 'Disney\'s Bambi' 
    },
    {
        name: 'Thumper',
        pathway: 'Images/Thumper.png',
        movie: 'Disney\'s Bambi' 
    },
    //Cinderella
    {
        name: 'Cinderella',
        pathway: 'Images/Cinderella.png',
        movie: 'Disney\'s Cinderella' 
    },
    {
        name: 'Prince Charming',
        pathway: 'Images/Prince Charming.png',
        movie: 'Disney\'s Cinderella' 
    },
    {
        name: 'Fairy God Mother',
        pathway: 'Images/Fairy God Mother.png',
        movie: 'Disney\'s Cinderella' 
    },
    {
        name: 'Jaq and Gus',
        pathway: 'Images/Jaq and Gus.png',
        movie: 'Disney\'s Cinderella' 
    },
    //Alice in Wonderland
    {
        name: 'Queen of Hearts',
        pathway: 'Images/Queen of Hearts.png',
        movie: 'Disney\'s Alice in Wonderland' 
    },
    {
        name: 'Alice',
        pathway: 'Images/Alice.png',
        movie: 'Disney\'s Alice in Wonderland' 
    },
    {
        name: 'Mad Hatter',
        pathway: 'Images/Mad Hatter.png',
        movie: 'Disney\'s Alice in Wonderland' 
    },
    {
        name: 'Cheshire Cat',
        pathway: 'Images/Cheshire Cat.png',
        movie: 'Disney\'s Alice in Wonderland' 
    },
    {
        name: 'Card Soldiers',
        pathway: 'Images/Card Soldiers.png',
        movie: 'Disney\'s Alice in Wonderland' 
    },
    {
        name: 'March Hare',
        pathway: 'Images/March Hare.png',
        movie: 'Disney\'s Alice in Wonderland' 
    },
    {
        name: 'Caterpillar',
        pathway: 'Images/Caterpillar.png',
        movie: 'Disney\'s Alice in Wonderland' 
    },
    //Peter Pan
    {
        name: 'Tinkerbell',
        pathway: 'Images/Tinkerbell.png',
        movie: 'Disney\'s Peter Pan' 
    },
    {
        name: 'Peter Pan',
        pathway: 'Images/Peter Pan.png',
        movie: 'Disney\'s Peter Pan' 
    },
    {
        name: 'Tick-Tock',
        pathway: 'Images/Tick-Tock.png',
        movie: 'Disney\'s Peter Pan' 
    },
    {
        name: 'Captain Hook',
        pathway: 'Images/Captain Hook.png',
        movie: 'Disney\'s Peter Pan' 
    },
    //Jungle Book
    {
        name: 'Kaa',
        pathway: 'Images/Kaa.png',
        movie: 'Disney\'s Jungle Book' 
    },
    {
        name: 'Baloo',
        pathway: 'Images/Baloo.png',
        movie: 'Disney\'s Jungle Book' 
    },
    {
        name: 'Shere Khan',
        pathway: 'Images/Shere Khan.png',
        movie: 'Disney\'s Jungle Book' 
    },
    {
        name: 'Mowgli',
        pathway: 'Images/Mowgli.png',
        movie: 'Disney\'s Jungle Book' 
    },
    {
        name: 'King Louie',
        pathway: 'Images/King Louie.png',
        movie: 'Disney\'s Jungle Book' 
    },
    //Mary Poppins
    {
        name: 'Mary Popppins',
        pathway: 'Images/Mary Poppins.png',
        movie: 'Disney\'s Mary Poppins' 
    },
    //DalmationsCruella de Vil
    {
        name: 'Cruella de Vil',
        pathway: 'Images/Cruella de Vil.png',
        movie: 'Disney\'s Cruella de Vil' 
    },
    //Sleeping Beauty
    {
        name: 'Aurora',
        pathway: 'Images/Aurora.png',
        movie: 'Disney\'s Sleeping Beauty' 
    },
    {
        name: 'Malificent',
        pathway: 'Images/Malificent.png',
        movie: 'Disney\'s Sleeping Beauty' 
    },
    //Winnie-the-Pooh
    {
        name: 'Winnie-the-Pooh',
        pathway: 'Images/Winnie-the-Pooh.png',
        movie: 'Disney\'s Winnie-the-Pooh' 
    },
    {
        name: 'Piglet',
        pathway: 'Images/Piglet.png',
        movie: 'Disney\'s Winnie-the-Pooh' 
    },
    {
        name: 'Eeyore',
        pathway: 'Images/Eeyore.png',
        movie: 'Disney\'s Winnie-the-Pooh' 
    },
    {
        name: 'Christopher Robin',
        pathway: 'Images/Christopher Robin.png',
        movie: 'Disney\'s Winnie-the-Pooh' 
    },
    {
        name: 'Tigger',
        pathway: 'Images/Tigger.png',
        movie: 'Disney\'s Winnie-the-Pooh' 
    },
    //Little Mermaid
    {
        name: 'Ariel',
        pathway: 'Images/Ariel.png',
        movie: 'Disney\'s The Little Mermaid' 
    },
    {
        name: 'Sebastian',
        pathway: 'Images/Sebastian.png',
        movie: 'Disney\'s The Little Mermaid' 
    },
    {
        name: 'Ursula',
        pathway: 'Images/Ursula.png',
        movie: 'Disney\'s The Little Mermaid' 
    },
    {
        name: 'Flounder',
        pathway: 'Images/Flounder.png',
        movie: 'Disney\'s The Little Mermaid' 
    },
    {
        name: 'Prince Eric',
        pathway: 'Images/Prince Eric.png',
        movie: 'Disney\'s The Little Mermaid' 
    },
    {
        name: 'King Triton',
        pathway: 'Images/King Triton.png',
        movie: 'Disney\'s The Little Mermaid' 
    },
    //Beauty and the Beast
    {
        name: 'Belle',
        pathway: 'Images/Belle.png',
        movie: 'Disney\'s Beauty and the Beast' 
    },
    {
        name: 'The Beast',
        pathway: 'Images/The Beast.png',
        movie: 'Disney\'s Beauty and the Beast' 
    },
    {
        name: 'Gaston',
        pathway: 'Images/Gaston.png',
        movie: 'Disney\'s Beauty and the Beast' 
    },
    {
        name: 'Chip',
        pathway: 'Images/Chip.png',
        movie: 'Disney\'s Beauty and the Beast' 
    },
    {
        name: 'Lumiere',
        pathway: 'Images/Lumiere.png',
        movie: 'Disney\'s Beauty and the Beast' 
    },
    {
        name: 'Mrs. Potts',
        pathway: 'Images/Mrs. Potts.png',
        movie: 'Disney\'s Beauty and the Beast' 
    },
    {
        name: 'Cogsworth',
        pathway: 'Images/Cogsworth.png',
        movie: 'Disney\'s Beauty and the Beast' 
    },
    //Lion King
    {
        name: 'Mufasa',
        pathway: 'Images/Mufasa.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Simba',
        pathway: 'Images/Simba.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Nala',
        pathway: 'Images/Nala.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Zazu',
        pathway: 'Images/Zazu.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Scar',
        pathway: 'Images/Scar.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Rafiki',
        pathway: 'Images/Rafiki.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Pumbaa',
        pathway: 'Images/Pumbaa.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Timon',
        pathway: 'Images/Timon.png',
        movie: 'Disney\'s Lion King' 
    },
    {
        name: 'Shenzi',
        pathway: 'Images/Shenzi.png',
        movie: 'Disney\'s Lion King' 
    },
    // Pocahontas 
    {
        name: 'Pocahontas',
        pathway: 'Images/Pocahontas.png',
        movie: 'Disney\'s Pocahontas' 
    },
    {
        name: 'Meeko',
        pathway: 'Images/Meeko.png',
        movie: 'Disney\'s Pocahontas' 
    },
    //Toy Story
    {
        name: 'Jessie',
        pathway: 'Images/Jessie.png',
        movie: 'Disney\'s Toy Story' 
    },
    {
        name: 'Woody',
        pathway: 'Images/Woody.png',
        movie: 'Disney\'s Toy Story' 
    },
    {
        name: 'Buzz',
        pathway: 'Images/Buzz.png',
        movie: 'Disney\'s Toy Story' 
    },
    {
        name: 'Alien',
        pathway: 'Images/Alien.png',
        movie: 'Disney\'s Toy Story' 
    },
    {
        name: 'Rex',
        pathway: 'Images/Rex.png',
        movie: 'Disney\'s Toy Story' 
    },
    {
        name: 'Hamm',
        pathway: 'Images/Hamm.png',
        movie: 'Disney\'s Toy Story' 
    },
    {
        name: 'Mr. Potato Head',
        pathway: 'Images/Mr. Potato Head.png',
        movie: 'Disney\'s Toy Story' 
    },
    {
        name: 'Slinky Dog',
        pathway: 'Images/Slinky Dog.png',
        movie: 'Disney\'s Toy Story' 
    },
    //Hercules
    {
        name: 'Hades',
        pathway: 'Images/Hades.png',
        movie: 'Disney\'s Hercules' 
    },
    {
        name: 'Hercules',
        pathway: 'Images/Hercules.png',
        movie: 'Disney\'s Hercules' 
    },
    {
        name: 'Megara',
        pathway: 'Images/Megara.png',
        movie: 'Disney\'s Hercules' 
    },
    //Mulan
    {
        name: 'Mulan',
        pathway: 'Images/Mulan.png',
        movie: 'Disney\'s Mulan' 
    },
    {
        name: 'Mushu',
        pathway: 'Images/Mushu.png',
        movie: 'Disney\'s Mulan' 
    },
    {
        name: 'Li Shang',
        pathway: 'Images/Li Shang.png',
        movie: 'Disney\'s Mulan' 
    },
    //Bugs life
    {
        name: 'Flik',
        pathway: 'Images/Flik.png',
        movie: 'Disney\'s A Bug\'s Life' 
    },
    {
        name: 'Heimlich',
        pathway: 'Images/Heimlich.png',
        movie: 'Disney\'s A Bug\'s Life' 
    },

    //Tarzan
    {
        name: 'Tarzan',
        pathway: 'Images/Tarzan.png',
        movie: 'Disney\'s Tarzan' 
    },
    {
        name: 'Jane',
        pathway: 'Images/Jane.png',
        movie: 'Disney\'s Tarzan' 
    },
    {
        name: 'Clayton',
        pathway: 'Images/Clayton.png',
        movie: 'Disney\'s Tarzan' 
    },
    {
        name: 'Terk',
        pathway: 'Images/Terk.png',
        movie: 'Disney\'s Tarzan' 
    },
    // Emperors new Groove
    {
        name: 'Kuzco',
        pathway: 'Images/Kuzco.png',
        movie: 'Disney\'s The Emperor\'s New Groove' 
    },
    {
        name: 'Yzma',
        pathway: 'Images/Yzma.png',
        movie: 'Disney\'s The Emperor\'s New Groove' 
    },
    {
        name: 'Kronk',
        pathway: 'Images/Kronk.png',
        movie: 'Disney\'s The Emperor\'s New Groove' 
    },
    {
        name: 'Pacha',
        pathway: 'Images/Pacha.png',
        movie: 'Disney\'s The Emperor\'s New Groove' 
    },
    //Monsters Inc
    {
        name: 'Mike',
        pathway: 'Images/Mike.png',
        movie: 'Disney\'s Monster\'s Inc.' 
    },
    {
        name: 'Sully',
        pathway: 'Images/Sully.png',
        movie: 'Disney\'s Monster\'s Inc.' 
    },
    {
        name: 'Boo',
        pathway: 'Images/Boo.png',
        movie: 'Disney\'s Monster\'s Inc.' 
    },
    {
        name: 'Randall',
        pathway: 'Images/Randall.png',
        movie: 'Disney\'s Monster\'s Inc.' 
    },

    //Lilo
    //Nemo
    //POTC
    //Ratouille
    //WallE
    //Princess and the frog
    //Cars
    //Kermit and pig
    //Wrekit ralph
    //Frozen
    //Big Hero6
    //Zootopia
    //Moana
    //Coco

    //Anime
    //Nausica
    //Totro
    //Kikis
    //Mononoke
    //SpiritedAway
    //Howls
//Demon Slayer
//Hunter x
//Dragon ball
//Onepiece
//Konan
//Inuyasha
//YuYuhakusho
//Sailormoon
//POkemon
//Death Note


//Cartoons
//FostersHome
//JohnnyBravo
//Felix the cat
//Peanuts
//Mask
//KND
//Cow and chicken
//Teen titans
//Billy and mandy
//Power puff girls
//Dexters lab
//Samurai Jack
//Courage
//Ed ed and eddie
//popeye
//Green Lantern
//Flash
//Wonder woman
//Super man
//Pinky and the brain
//Jetsons
//Flintstones
//Garfield
//Smurfs
//Spiderman
//Spongebob
//Looney 
//Looney Tunes
//Batman
//Scooby doo
//TMNT
//Avatar TLA
//WHeres waldo 
//Casper




];

let randomNumber = 0;
let chosenCharacter = '';

let phase = 0;


const chooseCharacterButtonClicked = () => {
    //randomNumber = charactersImagesArray.length-8
    randomNumber = Math.floor(Math.random()*charactersImagesArray.length);
    console.log('New character being chosen:  ' + randomNumber)
    chosenCharacter = charactersImagesArray[randomNumber].pathway 
    let text = charactersImagesArray[randomNumber].name + ' from ' + charactersImagesArray[randomNumber].movie
    DisplayText.innerHTML = text;
    if(text.length >= 30) {
        DisplayText.style.fontSize = 'calc(3vh + 3vw)';
    }
    if(text.length >= 45) {
        DisplayText.style.fontSize = 'calc(2vh + 2vw)';
    }
    phase = 1;
    changeButton();
}
const alottedTime = 100;
let seconds = 0;

const renderTimer = (timeRemaining) => {

    ChangingDiv.innerHTML = '';

    let div = document.createElement('div');
    div.innerHTML = timeRemaining;

    ChangingDiv.appendChild(div);

}

let timerInterval;

const decreaseSeconds = () => {
        let start = Date.now();
        timerInterval = setInterval(() => {
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

const timerSkipped = () => {
    clearInterval(timerInterval)
    phase = 3;
    changeButton();
}


const showPictureButtonClicked = () => {
    ChangingDiv.innerHTML = '';
    let img = document.createElement('img');
    img.src = chosenCharacter ;
    ChangingDiv.appendChild(img);
    phase = 4;
    changeButton();
}

const playAgainButtonClicked = () => {
    DisplayText.innerHTML = 'Click the button to start!';
    ChangingDiv.innerHTML = '';
    phase = 1;
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
            case 2: 
                DisplayButton = document.createElement('button');
                DisplayButton.innerHTML = 'Skip Timer'
                DisplayButton.addEventListener('click', timerSkipped);
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


