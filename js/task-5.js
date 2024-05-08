const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
const divEl = document.querySelector('.widget')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener('click', () => {
    const click = getRandomHexColor();

  divEl.style.backgroundColor = click;
  spanEl.textContent = click;
  
});

