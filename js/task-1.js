const item = document.querySelectorAll('.item')
const itemLength = `Number of categories: ${item.length}`
console.log(itemLength);

item.forEach(itm => {
    const subtitleEls = itm.querySelector('h2');
    const categoryItem = itm.querySelectorAll('li');
    console.log(`Category: ${subtitleEls.textContent}`);
    console.log(`Elements: ${categoryItem.length}`)
})
