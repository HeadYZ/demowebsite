//nav

const navBtn = document.querySelector('.navbar__btn')
const navList = document.querySelector('.navbar__list')
const navItems = document.querySelectorAll('.navbar__list-item')
const allSections = document.querySelectorAll('section')

//footer

const footerDate = document.querySelector('.footer__date')

window.onscroll = () => {
	allSections.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 100
		let height = sec.offsetHeight

		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navItems.forEach(links => {
				links.classList.remove('active')
				document.querySelector('a[href*=' + id + ']').parentElement.classList.add('active')
			})
		}
	})
}

const yearUpdate = () => {
	const fullDate = new Date()
	footerDate.textContent = fullDate.getFullYear()
}

const toggleNav = () => {
	navBtn.classList.toggle('active')
	document.body.classList.toggle('sticky-body')

	if (navBtn.classList.contains('active')) {
		navList.classList.add('show-menu')
	} else {
		navList.classList.remove('show-menu')
	}
}

navItems.forEach(item => {
	item.addEventListener('click', () => {
		toggleNav(), document.body.classList.remove('sticky-body')
	})
})

navBtn.addEventListener('click', toggleNav)
yearUpdate()
