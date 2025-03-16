const progress = document.querySelector('.js-progress')
const prev = document.querySelector('.js-prev')
const next = document.querySelector('.js-next')
const steps = document.querySelectorAll('.js-step')

let currentStep = 1

const handleButtons = () => {
	const isTheFirstStep = currentStep === 1
	const isLastStep = currentStep === steps.length

	prev.disabled = isTheFirstStep
	next.disabled = isLastStep
}

const update = stepIndex => {
	const progressPercentage = 100 / (steps.length - 1) * (currentStep - 1)

	steps[stepIndex].classList.toggle('is-active')
	progress.style.width = `${progressPercentage}%`

	handleButtons()
}

prev.addEventListener('click', () => {
	update(--currentStep)	
})

next.addEventListener('click', () => {
	update(currentStep++)
})
