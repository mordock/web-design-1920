let button = document.getElementById('nextButton');
let backButton = document.getElementById('TerugButton2');
let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');

let body = document.getElementsByTagName('body');

button.addEventListener('click', function(){
    table1.classList.add('hidden');
    table2.classList.remove('hidden');
    document.body.style.background = 'grey';
});

backButton.addEventListener('click', function(){
    table1.classList.remove('hidden');
    table2.classList.add('hidden');
    document.body.style.background = 'black';

});