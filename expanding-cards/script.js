document.addEventListener('click', (event) => {
	if (!event.target.closest('.c-panel')) return

  const panelClicked = event.target.closest('.c-panel')
	const panelOpened = document.querySelector('.c-panel.is-active')

	panelClicked.classList.toggle('is-active')
  
  if (panelOpened && panelOpened !== panelClicked)
    panelOpened.classList.remove('is-active')
})