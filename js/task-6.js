const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const divControlsEl = document.querySelector('div#controls');
const divBoxesEl = document.querySelector('div#boxes');

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');



btnCreateEl.addEventListener('click', createBoxes);

btnDestroyEl.addEventListener('click', destroyBoxes);



function createBoxes() {
  const amount = Number(inputEl.value);
  if (amount > 1 || amount <= 100) {
    return  inputEl.value = '';
    // return inputEl.innerHTML = "";
  }
  
  alert('error');


  for (let i = 0; i < amount; i++){
    newDiv.style.width = `${newDiv.style.offsetWidth + 10}px`;
    newDiv.style.height = `${newDiv.style.offsetHeight + 10}px`;
    divBoxesEl.appendChild(newDiv);
    newDiv.style.backgroundColor = getRandomHexColor();
  
  }

  inputEl.value = '';
}

function destroyBoxes(){
  divBoxesEl.innerHTML = "";
 inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





