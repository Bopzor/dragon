const canvas = document.getElementById('canvas');
const cxt = canvas.getContext('2d');

const getDirection = () => {
  let next = prev + 0 + reverse();

  prev = next;

  return next;
}

const reverse = () => {
  let rev = '';

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] === '0') {
      rev += '1';
    }
    else if (prev[i] === '1')
    rev += '0';
  }

  return rev;
}

const draw = (direction, start) => {
  const offset= 50;

  cxt.beginPath();

  cxt.translate(start.x, start.y);

  if (direction === '0') {
    cxt.rotate(Math.PI / 2);
  } else if (direction === '1') {
    cxt.rotate(Math.PI / 4);
  }

  cxt.translate(-start.x, -start.y);

  cxt.moveTo(start.x, start.y);
  cxt.lineTo(start.x - offset, start.y);

  cxt.stroke();
  cxt.closePath();

  start.x = start.x - offset;
}

let prev = '0';
let start = { x: 960, y: 540 };

draw(prev, start);

for (let j = 0; j < 11; j++) {
  direction = getDirection();
  for (let i = 0; i < direction.length; i++) {
    draw(direction[i], start);
  }
  console.log(direction);
}
