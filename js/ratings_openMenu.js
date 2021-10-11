const ratings_openMenu = e => {
	if(e.target.dataset.menuOpen === 'true') {
		e.target.dataset.menuOpen = 'false'
	} 
	else {
		e.target.dataset.menuOpen = 'true'
	}
}