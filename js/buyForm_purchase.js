const buyForm_purchase = e => {
	e.target.classList.add(`buyform-purchase-form-quantity-button-animate`)
	setTimeout(() => e.target.classList.remove(`buyform-purchase-form-quantity-button-animate`), 1000)
}