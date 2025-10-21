var canvas = document.querySelector("canvas");
function resizeCanvas() {
  // keep a small margin for scrollbar/padding
  canvas.width = window.innerWidth - 3;
  canvas.height = window.innerHeight - 3;
}
resizeCanvas();

var c = canvas.getContext("2d");
console.log(canvas);

// Rectangle
// c.fillStyle = "red";
// const firstPlayerBoard = c.fillRect(100, 100, 100, 100);

// c.fillStyle = "green";
// const SecondPlayerBoard = c.fillRect(400, 100, 100, 100);

// c.fillStyle = "yellow";
// const ThirdPlayerBoard = c.fillRect(400, 400, 100, 100);

// c.fillStyle = "blue";
// const FourthPlayerBoard = c.fillRect(100, 400, 100, 100);

// center
// c.fillStyle = "#dbcacaff";
// c.fillRect(200, 200, 200, 200);

// Line
// c.beginPath();
// c.moveTo(100, 100);
// c.lineTo(500, 100);
// c.lineTo(500, 500);
// c.lineTo(100, 500);
// c.lineTo(100, 100);

// c.strokeStyle = "black";
// c.stroke();

// Arc / Circle
// for (let i = 0; i < 200; i++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   const radius = Math.random() * 30;
//   const strokeColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
//     Math.random() * 255
//   })`;

//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   //   c.fillStyle = "orange";
//   //   c.fill();
//   c.strokeStyle = strokeColor;
//   c.stroke();
// }

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color || "purple";
    c.fill();
    c.lineWidth = 2;
    c.strokeStyle = "rgba(0,0,0,0.2)";
    c.stroke();
  }
  update() {
    // bounce on canvas edges
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
      this.x = Math.max(
        this.radius,
        Math.min(this.x, canvas.width - this.radius)
      );
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
      this.y = Math.max(
        this.radius,
        Math.min(this.y, canvas.height - this.radius)
      );
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

// utility to pick a random color
function randomColor() {
  const r = Math.floor(Math.random() * 200) + 55;
  const g = Math.floor(Math.random() * 200) + 55;
  const b = Math.floor(Math.random() * 200) + 55;
  return `rgb(${r}, ${g}, ${b})`;
}

// create many circles
const circles = [];
const CIRCLE_COUNT = 250; // change this number to add/remove circles
for (let i = 0; i < CIRCLE_COUNT; i++) {
  const radius = Math.random() * 30 + 8;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  // velocity between -3 and 3 but not zero
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;
  if (Math.abs(dx) < 0.5) dx = dx < 0 ? -0.5 : 0.5;
  if (Math.abs(dy) < 0.5) dy = dy < 0 ? -0.5 : 0.5;
  const circle = new Circle(x, y, dx, dy, radius);
  circle.color = randomColor();
  circles.push(circle);
}

// single animation loop for all circles
function animateAll() {
  requestAnimationFrame(animateAll);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].draw();
  }
}

animateAll();

// handle resize: update canvas and reposition circles inside bounds
window.addEventListener("resize", function () {
  resizeCanvas();
  // ensure circles remain inside the new canvas size
  for (const circ of circles) {
    circ.x = Math.max(
      circ.radius,
      Math.min(circ.x, canvas.width - circ.radius)
    );
    circ.y = Math.max(
      circ.radius,
      Math.min(circ.y, canvas.height - circ.radius)
    );
  }
});

// var x = 200;
// var y = 200;
// var dx = 5;
// var dy = 5;
// const radius = 30;

// function animate() {
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.strokeStyle = "purple";
//   c.stroke();

//   if (x + radius > innerWidth || x - radius < 0) {
//     dx = -dx;
//   }

//   if (y + radius > innerHeight || y - radius < 0) {
//     dy = -dy;
//   }

//   x += dx;
//   y += dy;

//   console.log({ x, innerWidth });
//   requestAnimationFrame(animate);
// }

// animate();
