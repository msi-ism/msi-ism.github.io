console.log('script running...')

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})


// This removes the class list of 'active' from hamburger menu on link click making the menu collapse
document.querySelectorAll(".nav-link").forEach(n => n,addEventListener('click', () => {
    hamburger.classList.remove('active')
}))