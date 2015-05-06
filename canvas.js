function drawRectangle(){
   var canvas = document.getElementById("canvas");
   var context = canvas.getContext('2d');
   var size = { x: canvas.width, y: canvas.height };
    context.strokeStyle = "Purple";
    context.strokeRect(0,0, size.x, size.y);
    context.fillStyle = "Orange";
    context.fillRect(10, 10, (size.x - 20), (size.y - 20));

}

function quarterRectangle(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.fillStyle = "Blue";
  context.fillRect(10, 10, (size.x/2), (size.y/2));
}

function redRectangle(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext('2d');
  var size = { x: canvas.width, y: canvas.height };
  context.fillStyle = "Red";
  context.fillRect(((size.x/2)-10), ((size.y/2)-10), (size.x/2), (size.y/2));
}
drawRectangle();
