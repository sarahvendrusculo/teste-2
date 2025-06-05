let x;
let y;

function setup() {
  createCanvas(600,600);
  
  x= random (500);
  x=int (x);
  y= random (500);
  y=int (y);
}

function draw() {
  background(255,182,193);
  fill(0)
  circle (x,y,15);
  console.log(mouseX,x);
  if (mouseX==x && mouseY==y)
    {text('ENCONTREI!',250,300)
    noloop()}
}
