const compliments = document.querySelector('.c-compliments__wrapper')
const gallery = document.querySelector('.c-gallery__wrapper')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
let number = 0
let photoNumber = 0
// Автоматическое перелистывание элементов
const autoSlide = () => {
	if(number == 13) {
		compliments.style.transition = `0s`
		compliments.style.left = `0%`
		number = 0
	} else {
		compliments.style.transition = `1s`
		number += 1
		compliments.style.left = `-${number * 100}%`
	}
}

setInterval(autoSlide, 1000);

// Перелистывание фоток
const gallerySlideNext = () => {
	if( photoNumber - 1 != -9) {
		photoNumber -= 1
		gallery.style.transform = `translateX(${photoNumber * 350}px)`
	}
}

const gallerySlidePrev = () => {
	if( photoNumber + 1 != 1) {
		photoNumber += 1
		gallery.style.transform = `translateX(${photoNumber * 350}px)`
	}
}

next.addEventListener('click', gallerySlideNext)
prev.addEventListener('click', gallerySlidePrev)