let body = document.getElementsByTagName('body');

//buttons
let testButton = document.getElementById('button');
// let stopB = document.getElementById('stop');
let nextButton = document.getElementById('next');
let introButton = findElement('chromeIntro');
let repeatButton = findElement('repeatButton');
let pauseButton = findElement('pauseButton');

//sections
let beginning = findElement('beginning');
let tutorial = findElement('tutorial');
let table = findElement('tableDiv');

//speech vars
let synth = window.speechSynthesis;
let utter = new SpeechSynthesisUtterance();

let lastSpokenText = '';

let range = findElement('rangeSpeed');
let rangeVolume = findElement('rangeVolume');

//control booleans
let isOnNext = false;
let playedCurrent = false;

let isPaused = false;

//control vars
let controlInt = 1;

preInit();

function preInit(){
    rangeVolume.value = 1;
    range.value = .9;
}

function init(){
    //inital setup of speech


    utter.pitch = 1;
    utter.rate = .9;
    utter.volume = 1;
    utter.lang = 'nl-NL';
    console.log('bob');
    speak('deze start knop is nog steeds groot genoeg hoop ik, ha ha ha.   Hallo Rogé, hoe gaat het met je vandaag? Je kan hier verderop een tabel vinden over wat informatie van kolencentrales in Nederland.');
    speak('Voor deze site kan je je screen reader uitzetten. Je kan de muis of de tab toets gebruiken om de site te navigeren.')
}

window.addEventListener('keydown', function(e){
    //check if shift is being pressed(16 = shift key)
    if(e.which == 16 && isPaused == false){
        synth.pause();
        isPaused = true;
    }else if(e.which == 16 && isPaused == true){
        synth.resume();
        isPaused = false;
    }

    //pressed r key
    if(e.which == 82){
        speak(lastSpokenText);
    }

});

//update loop
window.onload = function(){
    function test(){

        //check if next is selected
        isOnNext = (document.activeElement === nextButton);

        //play next sound once
        if(isOnNext && !playedCurrent){
            speak('Volgende, druk op spatie om verder te gaan.');
            playedCurrent = true;
        }

        if(!isOnNext){
            playedCurrent = false;
        }
    }
    this.setInterval(test, 50);
}

// event listeners
// stopB.addEventListener('focus', function(){
//     synth.cancel();
// });

range.addEventListener('input', function(){
    utter.rate = range.value;
    synth.cancel();
    let rate = utter.rate * 100;
    rate = rate.toFixed(0);
    let speechSpeed = 'spraak snelheid veranderd naar' + rate + 'procent';
    utter.text = speechSpeed;
    synth.speak(utter);
    speak(lastSpokenText);
});

rangeVolume.addEventListener('input', function(){
    utter.volume = rangeVolume.value;
    synth.cancel();
    let volume = utter.volume * 100;
    volume = volume.toFixed(0);
    let speechVolume = 'spraak volume veranderd naar' + volume + 'procent';
    utter.text = speechVolume;
    synth.speak(utter);
    speak(lastSpokenText);
});

repeatButton.addEventListener('click', function(){
    speak(lastSpokenText);
});

pauseButton.addEventListener('click', function(){
    if(isPaused == false){
        synth.pause();
        isPaused = true;
    }else if(isPaused == true){
        synth.resume();
        isPaused = false;
    }
});

introButton.addEventListener('click', function(){
    init();
    beginning.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    introButton.classList.add('hidden');
});

nextButton.addEventListener('click', function(){
    synth.cancel();
    if(controlInt === 1){
        hideAndReveal(beginning, tutorial);
        synth.cancel();
        speak('Ik ga je nu een snelle uitleg geven over de site. Onderaan de website staan enkele knoppen om te de screen reader te gebruiken. Hiermee kan je de tekst pauzeren en de laatst gesproken tekst herhalen. Pauzeren kan ook met shift en herhalen met de r toets.');
        speak('Met de vakjes daarnaast kan je het volume en de spraak snelheid van de stem aanpassen als dit nodig is. ');
        controlInt++;
    }else if(controlInt === 2){
        hideAndReveal(tutorial, table);
        speak('In deze tabel kan je enkele gegevens zien over kolencentrales in Nederland. Deze zijn opgedeeld in 3 groepen, centrales voor jaren 90, centrales na jaren 90 en centrales in de laatje 10 jaar.');
        speak('Er is  bijvoorbeeld te zien dat het rendement over de laatste 30 jaar gestegen is. Het vermogen is hierdoor ook gestegen. De uitstoot is echter ook omhoog gegaan in enkele nieuwe centrales.');
        controlInt++;
    }
});

function speak(message){
    console.log('boe');
    utter.text = message;
    lastSpokenText = message;
    synth.speak(utter);
}

function hideAndReveal(elementToHide, elementToReveal){
    elementToHide.classList.add('hidden');
    elementToReveal.classList.remove('hidden');
}

function findElement(ID){
    let element =  document.getElementById(ID);
    return element;
}

