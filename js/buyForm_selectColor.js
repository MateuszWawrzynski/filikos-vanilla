const buyForm_selectColor = e => {
	document.querySelectorAll(`.buyform-colors-options img`)
	.forEach(item => {
		item.classList.remove(`buyform-colors-options-active`)
	})
	e.target.classList.add(`buyform-colors-options-active`)
}