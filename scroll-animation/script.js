const boxes = document.querySelectorAll('.box')

const checkBoxesDistanceFromTop = () => {
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
checkBoxesDistanceFromTop()

window.addEventListener('scroll', checkBoxesDistanceFromTop)