const color = document.querySelector('.color');
const btn = document.querySelector('button');

btn.onclick = function(){
  const randomNumber = getRandomNumber();

  color.textContent = randomNumber;
  document.body.style.backgroundColor = randomNumber;
 
}

function getRandomNumber() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  randomNumber = `rgb(${r}, ${g}, ${b})`;
}