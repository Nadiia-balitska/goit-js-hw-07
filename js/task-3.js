const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector("span#name-output");

inputEl.addEventListener('input', e => {
    const input = e.target.value.trim();
    spanEl.textContent = input || 'Anonymous';
});