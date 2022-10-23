console.log('script running...')

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

// ^ Creating handshake function
let hand = document.querySelector('.hand-shake')
const handShakeOn = () => {
    hand.style.visibility = 'visible'
    hand.style.animation = 'shake 2s'
}
const handShakeOff = () => {
    hand.style.animation = ''
}

const handShake = () => {
    handShakeOn()
    setTimeout(handShakeOff, 2000)
}

setTimeout(handShake, 2000)

// & This removes the class list of 'active' from hamburger menu on link click making the menu collapse
document.querySelectorAll(".nav-link").forEach(n => n, addEventListener('click', () => {
    hamburger.classList.remove('active')
}))

// ** Projects

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


// * Screen Text Animation Function

// ^ Setting up variables needed
let welcomeText = document.querySelector('.welcome-text')
let introText = welcomeText.textContent
let tickComplete = false
let testString1 = 'The quick brown fox ran as quickly as he could from the rabid dog.'


const checkComplete = () => {
    tickComplete = true
}

// ^ Function that animates screen by splitting, looping, print within span and styling that span
const animateText = (str) => {
    // ^ 1st Wipe Content
    welcomeText.textContent = ''
    // ^ 2nd set parameter to displayText for manipulation
    displayText = str
    // ^ 3rd create an array from input string 
    let splitText = Array.from(displayText)
    // ^ Testing
    console.log(splitText)
    // ^ 4th loop through split text array & add letter from splitText[i] to welcomeText inner HTML within a span tag
    for (let i = 0; i < splitText.length; i++) {
        welcomeText.innerHTML += `<span id='split'>${splitText[i]}</span>`
    }
    // ^ Creating function that adds class of fade to the spans created above
    const onTick = () => {
        const span = welcomeText.querySelectorAll("#split")[char]
        span.classList.add('fade')
        // ^ Counts how many characters the span class has been added to
        char++
        if (char === splitText.length) {
            // ^ if char length is equal to the length of the split text array, run complete function which stops
            complete()
            return
        }
    }
    let char = 0
    // ^ Setting an interval that runs onTick every .5 secs - below is where onTick is being called
    let timer = setInterval(onTick, 50)
    let tickLength = 1750
    const complete = () => {
        // ^ Timeout function that runs "checkComplete" after the ticklength
        setTimeout(checkComplete, tickLength)
        clearInterval(timer)
        timer = null;
    }

}


const animateSubText = (str) => {
    guestQuestion.style.display = 'block'
    guestQuestion.textContent = ''
    displayText = str
    let splitText = Array.from(displayText)
    console.log(splitText)
    for (let i = 0; i < splitText.length; i++) {
        guestQuestion.innerHTML += `<span>${splitText[i]}</span>`
    }

    const onTick = () => {
        const span = guestQuestion.querySelectorAll("span")[char]
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





let guestQuestion = document.querySelector('.guest-question')
let guestInput = document.querySelector('.guest-input')

const guestPrompt = () => {
    if (tickComplete) {
        guestQuestion.style.display = 'block',
            guestInput.style.display = 'block'
    } else {
        setTimeout(guestPrompt, 50)
    }

}

guestPrompt()

// const loadGuest = async () => {
//     const loaded = await
// }









// ^ Creating function to capture and store guest input
let guestBox = document.querySelector('.guest-text')

const getGuest = () => {
    let guestValue = guestBox.value
    console.log(guestValue)
    return guestValue
}


let colorText = "What's your favorite color?"
const enterBtn = document.querySelector('.enter-btn')
enterBtn.addEventListener('click', getGuest)

let guestWelcomed = false


const displayElement = (ele) => {
    ele.style.display = 'flex'
}

const welcomeGuest = () => {
    let thankYouText = 'Thanks for visiting my portfolio.'
    let colorEle = document.querySelector('.colors')
    let navLogo = document.querySelector('.nav-logo')
    let guestName = getGuest() 
    // if (guestName.length > 0) {
    greetingText = `Nice to meet you, ${guestName}!`
    navLogo.textContent = `Welcome, ${guestName}`
    guestBox.value = ''
    guestQuestion.style.display = '',
    guestInput.style.display = ''
    guestWelcomed = true
    animateText(greetingText)
    setTimeout(function () { animateText(thankYouText); }, 2500)
    setTimeout(handShake, 2000)
    setTimeout(function () { animateSubText(colorText); }, 4500)
    setTimeout(function () { displayElement(colorEle); }, 7000)

}


// * Assigning colors to buttons

const colorArr = ['rgba(204, 0, 0, .5)', 'rgba(255, 153, 51, .5)', 'rgba(255, 255, 102, .5)', 'rgba(102, 255, 102, .5)', 'rgba(102, 153, 255, .5)', 'rgba(153, 0, 204, .5)',]


let colors = document.querySelector('.colors').children
Array.from(colors).forEach(color => color.style.backgroundColor = colorArr[color.id])



// ^ Creating 'Color' class 

class Color { 
    constructor(name, bgColor, navColor, txtColor, accColor) {
        this.name = name
        this.bgColor = bgColor
        this.navColor = navColor
        this.txtColor = txtColor
        this.accColor = accColor
    }

}

const shadesOfRed = new Color('red', 'rgba(255, 186, 186, .75)', 'rgba(255, 82, 82, .75)', 'white', 'rgba(167, 0, 0)')
const shadesOfOrange = new Color('red', 'rgba(240, 161, 80, .75)', 'rgba(240, 128, 32, .75)', 'white', 'rgba(240, 117, 15)')
const shadesOfYellow = new Color('red', 'rgba(255, 186, 186, .75)', 'rgba(255, 82, 82, .75)', 'white', 'rgba(167, 0, 0)')
const shadesOfGreen = new Color('red', 'rgba(255, 186, 186, .75)', 'rgba(255, 82, 82, .75)', 'white', 'rgba(167, 0, 0)')
const shadesOfBlue = new Color('red', 'rgba(255, 186, 186, .75)', 'rgba(255, 82, 82, .75)', 'white', 'rgba(167, 0, 0)')
const shadesOfViolet = new Color('red', 'rgba(255, 186, 186, .75)', 'rgba(255, 82, 82, .75)', 'white', 'rgba(167, 0, 0)')



const changeTheme = (Color) => {
    let body = document.querySelector('body')
    body.style.backgroundColor = Color.bgColor
    let navBar = document.querySelector('.navbar')
    navBar.style.backgroundColor = Color.navColor

}

let redBtn = document.getElementById('0')
redBtn.addEventListener('click', () => {changeTheme(shadesOfRed); })
let orgBtn = document.getElementById('1')
orgBtn.addEventListener('click', () => {changeTheme(shadesOfOrange); })



// * Calling Page Scripts

animateText(introText)



enterBtn.addEventListener('click', welcomeGuest)



