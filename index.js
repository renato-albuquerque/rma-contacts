// VARIABLES

const buttonDarkMode = document.querySelector('.darkMode')
const buttonLightMode = document.querySelector('.lightMode')
const html = document.querySelector('html')


// EVENTS

buttonLightMode.addEventListener('click', function() {
    html.classList.add('lightMode')
    buttonLightMode.classList.add('iconTurnsColor')
    buttonDarkMode.classList.add('iconTurnsColor')
})

buttonDarkMode.addEventListener('click', function() {
    html.classList.remove('lightMode')
    buttonLightMode.classList.remove('iconTurnsColor')
    buttonDarkMode.classList.remove('iconTurnsColor')
})
  
