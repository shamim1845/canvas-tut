var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 16;
canvas.height = window.innerHeight;

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

var x = 200;
var dx = 5;
const radius = 30;
var move = "right";

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, 200, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "purple";
  c.stroke();

  if (x)
    //   if (move === "right") {
    //     x += dx;

    //     if (x + radius > innerWidth - 16) {
    //       move = "left";
    //     }
    //   }

    //   if (move === "left") {
    //     x -= dx;

    //     if (x - radius <= 0) {
    //       move = "right";
    //     }
    //   }

    console.log({ x, innerWidth, move });
}

animate();
