const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]
const main = document.getElementsByClassName('main')[0]


toggleButton.addEventListener('click', () => {
	navbarlinks.classList.toggle('active')
	main.classList.toggle('active')
})
