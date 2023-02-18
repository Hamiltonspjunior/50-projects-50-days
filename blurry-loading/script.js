let counter = 0
let opacity = null
let blur = null

const counterLimit = 100
const timeInterval = 30
const $counter = document.querySelector('.counter')

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const interval = setInterval(() => {
  if (counter === counterLimit) {
    clearInterval(interval)
    return
  }

  counter++
  opacity = scale(counter, 0, counterLimit, 1, 0)
  blur = scale(counter, 0, counterLimit, 30, 0)

  $counter.textContent = `${counter}%`
  $counter.style.opacity = opacity
  document.body.style.backdropFilter = `blur(${blur}px)`
}, timeInterval);