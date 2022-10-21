console.log('script running...')

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})


// & This removes the class list of 'active' from hamburger menu on link click making the menu collapse
document.querySelectorAll(".nav-link").forEach(n => n, addEventListener('click', () => {
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

// & Screen Text Animation Function

// ^ Setting up variables needed
let introText = 'Hi, my name is Michael! 👋🏾'
let welcomeText = document.querySelector('.welcome-text')

let nextMessage = 'This is the next message'
// welcomeText.textContent = ''


let guestWelcomed = false
let tickComplete = false

const checkComplete = () => {
    tickComplete = true
}




// TODO Change this to "animateScreen" so that it is re-usable for other messages
// ^ Function that animates screen by splitting, looping, print within span and styling that span
const animateText = (str) => {
    welcomeText.textContent = ''
    displayText = str
    let splitText = Array.from(displayText)
    console.log(splitText)
    for (let i = 0; i < splitText.length; i++) {
        welcomeText.innerHTML += `<span>${splitText[i]}</span>`
    }

    const onTick = () => {
        const span = welcomeText.querySelectorAll("span")[char]
        span.classList.add('fade')
        char++
        if (char === splitText.length) {
            complete()
            return 
        }
    }
    let char = 0
    let timer = setInterval(onTick, 50)

    const complete = () => {
        clearInterval(timer)
        timer = null;
        setTimeout(checkComplete, 1100)
    }

}

animateText(introText)
// setTimeout(function () {animateText(nextMessage); }, 5000)



let guestQuestion = document.querySelector('.guest-question')
let guestInput = document.querySelector('.guest-input')

const guestPrompt = () => {
    if (tickComplete) {
        guestQuestion.style.display = 'block',
        guestInput.style.display = 'block'
    } else {
        setTimeout(guestPrompt, 30)
    }

}

guestPrompt()

// const loadGuest = async () => {
//     const loaded = await
// }


// ^ Creating function to capture and store guest input
let guestBox = document.querySelector('.guest-text')

const getGuest = () => {
    let guestInput = guestBox.value
    console.log(guestInput)
    return guestInput
}



const enterBtn = document.querySelector('.enter-btn')
enterBtn.addEventListener('click', getGuest)


const welcomeGuest = () => {
    let guestName = getGuest()
    if (guestName.length > 0) {
        greetingText = `Nice to meet you, ${guestName}!`
        guestBox.value = ''
        guestQuestion.style.display = '',
        guestInput.style.display = ''
        animateText(greetingText)
    } else {
        console.log('Not long enough')
    }

}


enterBtn.addEventListener('click', welcomeGuest)


