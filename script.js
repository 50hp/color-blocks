$(onReady)

function onReady() {
    console.log('JQuery Ready');

$('#red-btn').on('click', addRed);
$('#blue-btn').on('click', addBlue);
$('#green-btn').on('click', addGreen);
$('#yellow-btn').on('click', addYellow);
$('#blocks').on('click','.block', removeBlock);









}

function addRed(){
        $('#blocks').append('<div class="block red-fill"></div>')

}

function addBlue(){
        $('#blocks').append('<div class="block blue-fill"></div>')

}


function addGreen(){
        $('#blocks').append('<div class="block green-fill"></div>')

}


function addYellow(){
        $('#blocks').append('<div class="block yellow-fill"></div>')

}


function removeBlock(){
        $(this).remove();

}
console.log('🟥 🟦 🟩 🟨');