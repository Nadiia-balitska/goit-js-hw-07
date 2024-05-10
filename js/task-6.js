const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const divControlsEl = document.querySelector('div#controls');
const divBoxesEl = document.querySelector('div#boxes');





btnCreateEl.addEventListener('click', createBoxes);

btnDestroyEl.addEventListener('click', destroyBoxes);



function createBoxes() {
  divBoxesEl.innerHTML = '';
  const amount = Number(inputEl.value);
  console.log(amount);
  if (amount < 1 || amount >= 100) {
    return alert('error');
    // return inputEl.innerHTML = "";
  }
  
   inputEl.value = '';

  const container = document.createDocumentFragment();
  for (let i = 0; i < amount; i++){
    const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
    newDiv.style.width = `${30 + 10* i}px`;
    newDiv.style.height = `${30 + 10* i}px`;
    // divBoxesEl.appendChild(newDiv);
    
    newDiv.style.backgroundColor = getRandomHexColor();
    
    container.appendChild(newDiv);
  
  }
  divBoxesEl.append(container);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
  

 inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





