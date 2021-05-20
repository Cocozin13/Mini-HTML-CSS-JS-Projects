const color = document.querySelector('.color');
const btn = document.querySelector('button');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e','f'];

btn.onclick = function() {
  let hexColor = '#';
  for (let i = 0 ; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  color.style.color = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}