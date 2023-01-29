const searchWidget = document.querySelector('.search-widget')
const searchWidgetInput = document.querySelector('.search-widget__input')
const searchWidgetButton = document.querySelector('.search-widget__button')

searchWidgetButton.addEventListener('click', (event) => {
  event.preventDefault()
  
  searchWidget.classList.toggle('active')
  searchWidgetInput.focus()
})