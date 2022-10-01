console.log('script running...')

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})


// & This removes the class list of 'active' from hamburger menu on link click making the menu collapse
document.querySelectorAll(".nav-link").forEach(n => n,addEventListener('click', () => {
    hamburger.classList.remove('active')
}))



//  ^ Creating class constructor for projects

class Project {
    constructor(title, imgSrc, linkSrc, technologies) {
        this.title = title
        this.imgSrc = imgSrc
        this.linkSrc = linkSrc
        this.technologies = technologies
    }
}

const simonApp = new Project('Simon (Sinclair) Says!(Work in Progress)', './images/ss-new-ui.png', 'https://msi-ism.github.io/projects/simon-game/', 'Javascript, CSS, HTML')
const passwordApp = new Project('Password Generator (Work in Progress)', './images/password-img.png', 'https://msi-ism.github.io/password_generator.html', 'Javascript, Canvas, CSS, HTML')

const projectBox = document.querySelector('.project-box')


const createProject = (Project) => {
    let newTable = document.createElement('table')
    newTable.style.border = '3px solid black'
    newTable.style.backgroundColor = 'white'
    newTable.style.boxShadow = '0px 0px 20px 5px rgba(253, 245, 232, 0.5)'
    newTable.style.color = 'black'
    newTable.classList.add('project-table')
    let row1 = newTable.insertRow()
    row1.innerHTML = `<h3>${Project.title}</h3>`
    let row2 = newTable.insertRow()
    row2.innerHTML = `<img class='project-img' src=${Project.imgSrc}>`
    let row3 = newTable.insertRow()
    row3.innerHTML = `<a href=${Project.linkSrc}></a>`
    let row4 = newTable.insertRow()
    row4.textContent = 'Technologies:'
    row4.style.fontFamily = "'DM Sans', sans-serif"
    let row5 = newTable.insertRow()
    row5.innerHTML = `<p>${Project.technologies}</p>`
    return newTable
}

const simonDOM = createProject(simonApp)
const passDOM = createProject(passwordApp)
projectBox.appendChild(simonDOM)
projectBox.appendChild(passDOM)

console.log()
console.log(simonApp)
