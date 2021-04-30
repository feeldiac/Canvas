const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

// Create constructor function

function Particle(x, y, directionX, directionY, size, color) {
  this.x = x;
  this.y = y;
  this.directionX = directionX;
  this.directionY = directionY;
  this.size = size;
  this.color = color;
}

// Add draw method to particle prototype

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = this.color;
  ctx.fill();
};

//Add update method to particle prototype

Particle.prototype.update = function () {
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.directionX = -this.directionX;
  }

  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.directionY = -this.directionY;
  }

  this.draw();
};
