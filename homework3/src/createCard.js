export function createCards (item) {
	const card = document.createElement('div')
	card.classList.add('card')

	const cardTitle = document.createElement('h3')
	cardTitle.classList.add('cardTitle')
	cardTitle.innerText = item.title
	card.appendChild(cardTitle)

	if (item.type === 'img') {
		const cardImg = document.createElement('img')
		cardImg.classList.add('cardImg')
		cardImg.src = item.img
		card.appendChild(cardImg)
	} else if (item.type === 'audio') {
		const cardAudio = document.createElement('audio')
		cardAudio.classList.add('cardAudio')
		cardAudio.controls = true
		cardAudio.src = item.audio
		card.appendChild(cardAudio)
	} else {
		const cardVideo = document.createElement('video')
		cardVideo.classList.add('cardVideo')
		cardVideo.controls = true
		cardVideo.src = item.video
		card.appendChild(cardVideo)
	}

	return card
}