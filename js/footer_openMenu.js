const footer_openMenu = e => {
	if(e.target.dataset.menuOpen === 'false') e.target.dataset.menuOpen = 'true'
	else e.target.dataset.menuOpen = 'false'

	// if(e.target.dataset.menuOpen === 'true') {
	// 	e.target.dataset.menuOpen = 'false'
	// } 
	// else {
	// 	document.querySelectorAll(`.footer-menu-section-title`).forEach(item => item.dataset.menuOpen = 'false')
	// 	e.target.dataset.menuOpen = 'true'
	// }
}