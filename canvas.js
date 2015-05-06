function drawRectangle(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = { x: canvas.width, y: canvas.height };
    context.strokeStyle = "Purple";
    context.strokeRect(0,0, size.x, size.y);
    context.fillStyle = "Violet";
    context.fillRect(1, 1, (size.x - 2), (size.y - 2));

}

function quarterRectangle(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.fillStyle = "Blue";
  context.fillRect(0, 0, (size.x/2), (size.y/2));
}

function redRectangle(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height};
  context.fillStyle = "Red";
  context.fillRect((size.x/2), (size.y/2), (size.x/2), (size.y/2));
}


function randomRectangle(color) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  var gradient = context.createLinearGradient(0,0,(Math.random() * (size.x - 100) + 100),0);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "violet");
  context.fillStyle = gradient;
  context.fillRect((Math.random() * (size.x - 10) + 10), (Math.random() * (size.y - 10) + 10), (Math.random() * (size.x - 10) + 10), (Math.random() * (size.y - 10) + 10));

}

function colorCircle() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.globalAlpha = Math.random();
  context.beginPath();
  context.arc((Math.random() * (size.x - 10) + 10), (Math.random() * (size.y - 10) + 10), 60, 0, 2 * Math.PI, false);
  context.fillStyle = getRandomColor();
  context.fill();
}

function whiteCircle() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.globalAlpha = Math.random();
  context.beginPath();
  context.arc((Math.random() * (size.x - 10) + 10), (Math.random() * (size.y - 10) + 10), 60, 0, 2 * Math.PI, false);
  context.fillStyle = "white";
  context.fill();
}

function fib(x) {
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return fib(x-1)+fib(x-2);
  }
}

pixel_size = canvas.width/100;

function drawPixel(x, y, color) {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.fillStyle = color;
  context.fillRect(y*pixel_size, x*pixel_size, pixel_size, pixel_size);

}

function drawRow(rowNumber, rowLength){
  for(i = 0; i < rowLength; i++)
  {
    drawPixel(rowNumber, i, getRandomColor());
  }
}

function drawFibonacci(){
  for(rowNumber = 1; rowNumber < 14; rowNumber++){
    rowLength = fib(rowNumber);
    drawRow(rowNumber, rowLength);
  }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function automate() {
  setInterval(function(){drawFibonacci();}, 500);
  setInterval(function(){whiteCircle();}, 800);
  setInterval(function(){colorCircle();}, 700);
  setInterval(function(){randomRectangle(getRandomColor());}, 900);
}

drawRectangle();
