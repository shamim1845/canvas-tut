import utils from "./utils";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  console.log(mouse);
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Objects
class Ball {
  constructor({ x, y, dy, radius, color }) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    // this.velocity = { x: 1, y: 1 };
  }

  update() {
    if (
      this.y + this.radius > canvas.height ||
      this.y + this.radius < canvas.height / 2
    ) {
      this.dy = -this.dy;
    } else {
      this.dy += 2;
    }

    this.y += this.dy;
    this.draw();
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}

// Implementation
let ball;
function init() {
  ball = new Ball({
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    dy: 3,
    color: utils.randomColor(colors),
  });

  // for (let i = 0; i < 400; i++) {
  //   ball = new Ball(
  //     canvas.width / 2,
  //     canvas.height / 2,
  //     30,
  //     utils.randomColor(colors)
  //   );
  // }
}

// Animation Loop
function animate() {
  console.log("animate");

  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  ball.update();
}

init();
animate();
