const splitColumnsContainer = document.querySelector('[data-js="split-columns"]');
const splitColumnLeft = document.querySelector('[data-js="split-left"]');
const splitColumnRight = document.querySelector('[data-js="split-right"]');

splitColumnLeft.addEventListener('mouseenter', () => 
    splitColumnsContainer.classList.add('hover-left'))

splitColumnLeft.addEventListener('mouseleave', () => 
    splitColumnsContainer.classList.remove('hover-left'))

splitColumnRight.addEventListener('mouseenter', () => 
    splitColumnsContainer.classList.add('hover-right'))

splitColumnRight.addEventListener('mouseleave', () => 
    splitColumnsContainer.classList.remove('hover-right'))