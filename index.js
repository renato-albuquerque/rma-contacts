// VARIABLES

const buttonDarkMode = document.querySelector('.darkMode')
const buttonLightMode = document.querySelector('.lightMode')
const buttonShare = document.querySelector('.share')
const html = document.querySelector('html')

// EVENTS

buttonLightMode.addEventListener('click', function() {
    html.classList.add('lightMode')
})

buttonDarkMode.addEventListener('click', function() {
    html.classList.remove('lightMode')
})

// FUNCTION

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Digital Business Card - Renato Albuquerque',
			text: 'Front-End Web Developer',
			url: 'https://rma-contacts.vercel.app/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}