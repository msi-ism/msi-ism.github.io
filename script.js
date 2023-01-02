
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
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}))

// ** Projects

//  ^ Creating class constructor for projects

class Project {
    constructor(type, title, imgSrc, appSrc, appRepo, technologies, competencies) {
        this.type = type
        this.title = title
        this.imgSrc = imgSrc
        this.appSrc = appSrc
        this.appRepo = appRepo
        this.technologies = technologies
        this.competencies = competencies
    }
}

const simonApp = new Project('Memory Game/Instrument ', 'Sinclair (Simon) Says!', './images/ss-new-ui.png', 'https://msi-ism.github.io/sinclair_says/', 'https://github.com/msi-ism/sinclair_says', 'Javascript, CSS, HTML', 'Asynchronous Programming, Game Design, UI Design')
const passwordApp = new Project('Utility','Password Generator', './images/password-img.png', 'https://msi-ism.github.io/password_generator.html', 'https://github.com/msi-ism/msi-ism.github.io', 'Javascript, CSS, HTML', 'Algorithms, Canvas, DOM Manipulation')
const blogApp = new Project('Blog', 'Notes App', './images/notestoself.png', 'https://ms-blogapp.herokuapp.com/', 'https://github.com/msi-ism/blog_app','React, Express, Node, MongoDB', 'User Authentication, CRUD Functionality, Server-side Rendering')

const portApp = new Project('Portfolio', 'My Portfolio', 'images/msiport.png', 'https://msi-ism.github.io/', 'https://github.com/msi-ism/msi-ism.github.io', 'Javascript, CSS, HTML', 'DOM Manipulation, UI/UX Design' )

const ayaApp = new Project('Journal, Social Media', 'asyouare.community', 'images/aya.png', 'https://asyouare.herokuapp.com', 'https://github.com/msi-ism/aya-journal-app', 'React, Express, Node, MongoDB', 'Client-side Rendering, CRUD Functionality, useState, Custom Hooks, User Authentication' )




const projectBox = document.querySelector('.project-box')
const createProject = (Project) => {
    let newTable = document.createElement('table')
    newTable.style.backgroundColor = 'white'
    newTable.style.boxShadow = '0px 0px 15px 5px rgba(0, 0, 32, 0.5)'
    newTable.style.color = 'black'
    newTable.classList.add('project-table')
    let row1 = newTable.insertRow()
    row1.innerHTML = `<a href=${Project.appSrc} target="_blank"><h3>${Project.title}</h3></a>`
    let row2 = newTable.insertRow()
    row2.innerHTML = `<a href=${Project.appSrc} target="_blank"><img class='project-img' alt=${Project.title}image src=${Project.imgSrc}></a>`
    let row3 = newTable.insertRow()
    row3.innerHTML = `<a href=${Project.appRepo} target="_blank">Repo</a>`
    let row4 = newTable.insertRow()
    row4.innerHTML = `<div class='row-title'><h4>App Type: </h4><p>${Project.type}</p></div>`
    let row5 = newTable.insertRow()
    row5.innerHTML = `<div class='row-title'><h4>Technologies: </h4><p> ${Project.technologies}</p></div>`
    row5.style.fontFamily = "'DM Sans', sans-serif"
    let row6 = newTable.insertRow()
    row6.innerHTML = `<div class='row-title'><h4>Competencies Displayed:</h4></div>`
    row6.style.fontFamily = "'DM Sans', sans-serif"
    let row7 = newTable.insertRow()
    row7.innerHTML = `<p>${Project.competencies}</p>`

    return newTable
}

const simonDOM = createProject(simonApp)
const passDOM = createProject(passwordApp)
const blogDOM = createProject(blogApp)
const portDOM = createProject(portApp)
const ayaDOM = createProject(ayaApp)



projectBox.appendChild(blogDOM)
projectBox.appendChild(simonDOM)
projectBox.appendChild(ayaDOM)
projectBox.appendChild(portDOM)
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
        welcomeText.innerHTML += `<span class='split'>${splitText[i]}</span>`
    }
    // ^ Creating function that adds class of fade to the spans created above
    const onTick = () => {
        const span = welcomeText.querySelectorAll(".split")[char]
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
        guestQuestion.innerHTML += `<span class='split'>${splitText[i]}</span>`
    }

    const onTick = () => {
        const span = guestQuestion.querySelectorAll(".split")[char]
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


guestBox.addEventListener('keydown', (event) => {
    if (this.value.length === 8 && event.keyCode != 13) {
        event.preventDefault()
    }
})

const getGuest = () => {
    let guestValue = guestBox.value
    console.log(guestValue)
    return guestValue
}


let colorText = "What's your favorite color?"
const enterBtn = document.querySelector('.enter-btn')
enterBtn.addEventListener('click', getGuest)


let guestWelcomed = false
const checkWelcome = () => {
    return guestWelcomed = true
}


const displayElement = (ele) => {
    ele.style.display = 'flex'
}


let navLogo = document.querySelector('.nav-logo')
let logoName = document.querySelector('.logo-name')
let bigGuest = document.querySelector('.big-guest')





const welcomeGuest = () => {
    clickCount++
    let thankYouText = 'Thanks for visiting my portfolio.'
    let colorEle = document.querySelector('.colors')
    let guestName = getGuest() 
    bigGuest.textContent = guestName
    greetingText = `Nice to meet you, ${guestName}!`
    navLogo.textContent = `Welcome, ${guestName} 👋🏾`
    hand.textContent =''
    guestBox.value = ''
    guestQuestion.style.display = '',
    guestInput.style.display = ''
    animateText(greetingText)
    setTimeout(function () { animateText(thankYouText); }, 2500)
    setTimeout(function () {hand.textContent = '🤝'}, 2000)
    setTimeout(handShake, 2000)
    setTimeout(function () { animateSubText(colorText); }, 4500)
    setTimeout(function () { displayElement(colorEle); }, 7000)
    setTimeout(checkWelcome, 7000)
}



// * Assigning colors to buttons

const colorArr = ['rgba(204, 0, 0, .5)', 'rgba(255, 153, 51, .5)', 'rgba(255, 255, 102, .5)', 'rgba(102, 255, 102, .5)', 'rgba(102, 153, 255, .5)', 'rgba(153, 0, 204, .5)',]


let colors = document.querySelector('.colors').children
Array.from(colors).forEach(color => color.style.backgroundColor = colorArr[color.id])



// ^ Creating 'Color' class 

class Color { 
    constructor(name, bgColor, navColor, txtColor, accColor, emoji) {
        this.name = name
        this.bgColor = bgColor
        this.navColor = navColor
        this.txtColor = txtColor
        this.accColor = accColor
        this.emoji = emoji
    }

}



const shadesOfRed = new Color('red', 'linear-gradient(-45deg, #a7202d, #E8A0BF, #E64848)', 'rgba(0, 0, 0, .9)', 'white', '-webkit-linear-gradient(#C21010, #FF5858, #a7202d)')

const shadesOfOrange = new Color('orange', 'linear-gradient(-45deg, #F1A661,#FFD8A9, #E38B29)', 'rgba(0, 0, 0, .9)', 'white', '-webkit-linear-gradient(#e0ad4a, #c45335, #a77220)')

const shadesOfYellow = new Color('yellow', 'linear-gradient(-45deg, #F4E06D, #FFF38C, #F0E161)', 'rgba(0, 0, 0, .9)', 'white', '-webkit-linear-gradient(-45deg, rgba(225,230,53,0.8646052170868348) 20%, rgba(214,205,45,1) 56%, rgba(253,187,45,1) 100%)')

const shadesOfGreen = new Color('green', 'linear-gradient(-45deg, rgba(138,207,104,0.6265099789915967) 26%, rgba(48,250,192,0.7189469537815126) 54%, rgba(13,164,47,1) 94%)', 'rgba(0, 0, 0, .9)', 'white', '-webkit-linear-gradient( #97e04a, #4cc435)')

const shadesOfBlue = new Color('blue', 'linear-gradient(-45deg, #AAC4FF, rgba(65,100,166,1) 55%, #B1B2FF)', 'rgba(0, 0, 0, .9)', 'white', '-webkit-linear-gradient(#354ac4, #5c20a7)')

const shadesOfViolet = new Color('violet', 'linear-gradient(-45deg, #C689C6, #C8B6E2, #80558C)', 'rgba(0, 0, 0, .9)', 'white', '-webkit-linear-gradient(#b888da, #7148d5, #5c4080)')



const colorChoiceText = () => {
    animateSubText("Great choice!")
    setTimeout(function () { animateSubText("Feel free to pick another."); }, 2000)
    setTimeout(function () { animateSubText("When you're satisfied, scroll down to learn more about me!"); }, 5000)
}


let colorChoice = 0
let clickCount = 0
const changeTheme = (Color) => {
    let body = document.querySelector('body')
    body.style.background = Color.bgColor
    body.style.backgroundSize = '400% 400%'
    body.style.animation = 'gradient 5s ease infinite'
    let navBar = document.querySelector('.navbar')
    navBar.style.backgroundColor = Color.navColor
    navLogo.style.color = Color.accColor
    bigGuest.style.visibility = 'visible'
    bigGuest.style.backgroundImage = Color.accColor
    let aboutMe = document.querySelector('.about')
    aboutMe.style.display = 'block'
    let doneBtn = document.querySelector('.done')
    doneBtn.style.visibility = 'visible'
    let aboutBoxes = document.querySelectorAll('.about-sub')
    aboutBoxes.forEach((box) => box.style.backgroundImage = Color.accColor)
    hand.textContent = '🎉'
    let projectBox = document.querySelector('.project-box')
    projectBox.style.backgroundColor = Color.bgColor
    let profilePic = document.querySelector('.pp-div')
    profilePic.style.background = Color.bgColor
    colorChoice++
    if (guestWelcomed && clickCount === 1 && colorChoice < 2) {
        colorChoiceText()
    }
    console.log(clickCount)
}

let redBtn = document.getElementById('0')
redBtn.addEventListener('click', () => {changeTheme(shadesOfRed); })
let orgBtn = document.getElementById('1')
orgBtn.addEventListener('click', () => {changeTheme(shadesOfOrange); })
let yellowBtn = document.getElementById('2')
yellowBtn.addEventListener('click', () => {changeTheme(shadesOfYellow); })
let greenBtn = document.getElementById('3')
greenBtn.addEventListener('click', () => {changeTheme(shadesOfGreen); })
let blueBtn = document.getElementById('4')
blueBtn.addEventListener('click', () => {changeTheme(shadesOfBlue); })
let violetBtn = document.getElementById('5')
violetBtn.addEventListener('click', () => {changeTheme(shadesOfViolet ); })



// * Calling Page Scripts

animateText(introText)



enterBtn.addEventListener('click', welcomeGuest)



document.addEventListener('keypress', (e) => {
    let name = e.key
    let code = e.code
    console.log(e.key)
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`); }, false)
    if (clickCount < 1 && name === 'Enter') {
        enterBtn.click()
        console.log(clickCount)
    }
})

