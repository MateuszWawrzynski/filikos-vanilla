const faq_openAnswer = e => {
	if(e.target.dataset.questionOpen === 'true') {
		e.target.dataset.questionOpen = 'false'
	} else {
		document.querySelectorAll(`.faq-content-questions-question`).forEach(item => item.dataset.questionOpen = 'false')
		e.target.dataset.questionOpen = 'true'
	}
}