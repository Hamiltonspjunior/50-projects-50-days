const boxes = document.querySelectorAll('.box')

const checkBoxDistanceFromTop = () => {
  const triggerBottom = window.innerHeight - 200

  for (box of boxes) {
    const distanceFromTop = box.getBoundingClientRect().top

    if (distanceFromTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  }
}
checkBoxDistanceFromTop()

window.addEventListener('scroll', checkBoxDistanceFromTop)