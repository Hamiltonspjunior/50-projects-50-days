const navButtonOpen = document.querySelector('.js-button-open')
const navButtonClose = document.querySelector('.js-button-close')
const container = document.querySelector('.container')

navButtonOpen.addEventListener('click', () => 
  container.classList.add('show-nav'))

navButtonClose.addEventListener('click', () => 
    container.classList.remove('show-nav'))