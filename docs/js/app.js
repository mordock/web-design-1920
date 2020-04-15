let button = document.getElementById('nextButton');
let button2 = document.getElementById('nextButton2');
let backButton = document.getElementById('backButton2');
let table1 = document.getElementById('table1Box');
let table2 = document.getElementById('table2Box');
let table3 = document.getElementById('table3Box');

let body = document.getElementsByTagName('body');

button.addEventListener('click', function(){
    table1.classList.add('hidden');
    table2.classList.remove('hidden');
    document.body.style.background = 'lightgrey';
});

backButton.addEventListener('click', function(){
    table1.classList.remove('hidden');
    table2.classList.add('hidden');
    document.body.style.background = 'black';

});

button2.addEventListener('click', function(){
    table2.classList.add('hidden');
    table3.classList.remove('hidden');
    document.body.style.background = 'black';
});