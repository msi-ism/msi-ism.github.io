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

const simonApp = new Project('Simon (Sinclair) Says!', './images/ss-new-ui.png', 'https://msi-ism.github.io/projects/simon-game/', 'Javascript, CSS, HTML')

const projectBox = document.querySelector('.project-box')


const createProject = (Project) => {
    let newTable = document.createElement('table')
    newTable.style.border = '5px solid red'
    let row1 = newTable.insertRow()
    row1.innerHTML = `<h3>${Project.title}</h3>`
    let row2 = newTable.insertRow()
    row2.innerHTML = `<img class='project-img' src=${Project.imgSrc}>`
    let row3 = newTable.insertRow()
    row3.innerHTML = `<a href=${Project.linkSrc}></a>`
    let row4 = newTable.insertRow()
    row4.innerHTML = `<p>${Project.technologies}</p>`
    return newTable
}

const simonDOM = createProject(simonApp)
projectBox.appendChild(simonDOM)

console.log()
console.log(simonApp)
