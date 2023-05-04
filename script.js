$(onReady)

function onReady() {

$('#red-btn').on('click', addRed);
$('#blue-btn').on('click', addBlue);
$('#green-btn').on('click', addGreen);
$('#yellow-btn').on('click', addYellow);
$('#blocks').on('click','.block', removeBlock);

}
let red = 1, blue = 1, green = 1, yellow = 1;
//Each add function adds a new colored block.
function addRed(){
        $('#blocks').append('<div class="block red-fill"></div>');
        $('#red-count').empty();
        red++;
        $('#red-count').append(red);
}
function addBlue(){
        $('#blocks').append('<div class="block blue-fill"></div>');
        $('#blue-count').empty();
        blue++;
        $('#blue-count').append(blue);
}
function addGreen(){
        $('#blocks').append('<div class="block green-fill"></div>');
        $('#green-count').empty();
        green++;
        $('#green-count').append(green);
}
function addYellow(){
        $('#blocks').append('<div class="block yellow-fill"></div>');
        $('#yellow-count').empty();
        yellow++;
        $('#yellow-count').append(yellow);
}
//Each recount function empties the count div and adds the amount left on screen
function redRecount(){
        $('#red-count').empty();
        $('#red-count').append($('.red-fill').length);
}
function blueRecount(){
        $('#blue-count').empty();
        $('#blue-count').append($('.blue-fill').length);
}
function greenRecount(){
        $('#green-count').empty();
        $('#green-count').append($('.green-fill').length);
}
function yellowRecount(){
        $('#yellow-count').empty();
        $('#yellow-count').append($('.yellow-fill').length);
}
//removes the div clicked on and recounts all the remaining divs in the block section.
function removeBlock(){
        $(this).remove();
        redRecount();
        blueRecount();
        greenRecount();
        yellowRecount();
}
console.log('🟥 🟦 🟩 🟨');