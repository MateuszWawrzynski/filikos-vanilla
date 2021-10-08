const version_purchase = e => {
	e.target.classList.add(`version-content-form-quantity-button-animate`)
	setTimeout(() => e.target.classList.remove(`version-content-form-quantity-button-animate`), 1000)
}