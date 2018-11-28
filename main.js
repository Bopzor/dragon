const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const getDirection = () => {
  let next = prev + 0 + reverse();

  prev = next;

  return next;
}

const reverse = () => {
  let rev = '';

  for (let i = prev.length - 1; i >= 0; i--) {
    if (prev[i] === '0') {
      rev += '1';
    }
    else if (prev[i] === '1')
      rev += '0';
  }

  return rev;
}

const draw = (direction) => {
  ctx.beginPath();
  ctx.translate(start.x, start.y);

  if (direction === '0') {
    ctx.rotate(Math.PI / 2);
  } else if (direction === '1') {
    ctx.rotate(-Math.PI / 2);
  }

  ctx.translate(-start.x, -start.y);

  ctx.moveTo(start.x, start.y);
  ctx.lineTo(start.x - offset, start.y);

  ctx.strokeStyle = 'red';
  ctx.stroke();
  ctx.closePath();

  start.x = start.x - offset;
}


let prev = '0';
let start = { x: 400, y: 500 };
const offset= 10;

let directions = null;

for (let j = 0; j < 9; j++) {
  directions = getDirection();
}

for (let i = 0; i < directions.length; i++) {
  draw(directions[i]);
}
