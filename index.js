// VARIABLES

const buttonDarkMode = document.querySelector('.darkMode')
const buttonLightMode = document.querySelector('.lightMode')
const html = document.querySelector('html')


// EVENTS

buttonLightMode.addEventListener('click', function() {
    html.classList.add('lightMode')
    buttonLightMode.classList.add('iconTurnsBlack')
    buttonDarkMode.classList.add('iconTurnsBlack')
})

buttonDarkMode.addEventListener('click', function() {
    html.classList.remove('lightMode')
    buttonLightMode.classList.remove('iconTurnsBlack')
    buttonDarkMode.classList.remove('iconTurnsBlack')
})
  
