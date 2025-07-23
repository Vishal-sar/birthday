const canvas = document.getElementById('balloonsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Balloon {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 200;
    this.size = 20 + Math.random() * 30;
    this.speed = 1 + Math.random() * 2;
    this.color = `hsl(${Math.random()*360},70%,70%)`;
  }
  update() {
    this.y -= this.speed;
    if (this.y < -this.size) {
      this.y = canvas.height + this.size;
      this.x = Math.random()*canvas.width;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size*0.8, this.size, 0,0,2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.moveTo(this.x, this.y+this.size);
    ctx.lineTo(this.x, this.y+this.size+25);
    ctx.stroke();
  }
}
const balloons = Array.from({length:50},() => new Balloon());
function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  balloons.forEach(b => { b.update(); b.draw(); });
  requestAnimationFrame(animate);
}
animate();

function showSurprise() {
  document.getElementById('popup').style.display = 'flex';
}
function closeSurprise() {
  document.getElementById('popup').style.display = 'none';
}
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
