
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
    constructor(title, imgSrc, appSrc, appRepo, technologies) {
        this.title = title
        this.imgSrc = imgSrc
        this.appSrc = appSrc
        this.appRepo = appRepo
        this.technologies = technologies
    }
}

const simonApp = new Project('Sinclair (Simon) Says!', './images/ss-new-ui.png', 'https://msi-ism.github.io/sinclair_says/', 'https://github.com/msi-ism/sinclair_says', 'Javascript, CSS, HTML')
const passwordApp = new Project('Password Generator', './images/password-img.png', 'https://msi-ism.github.io/password_generator.html', 'https://github.com/msi-ism/msi-ism.github.io', 'Javascript, CSS, HTML')

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
    row2.innerHTML = `<a href=${Project.appSrc} target="_blank"><img class='project-img' src=${Project.imgSrc}></a>`
    let row3 = newTable.insertRow()
    row3.innerHTML = `<a href=${Project.appRepo} target="_blank">Repo</a>`
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
        guestQuestion.innerHTML += `<span id='split'>${splitText[i]}</span>`
    }

    const onTick = () => {
        const span = guestQuestion.querySelectorAll("#split")[char]
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
    constructor(name, bgColor, navColor, txtColor, accColor) {
        this.name = name
        this.bgColor = bgColor
        this.navColor = navColor
        this.txtColor = txtColor
        this.accColor = accColor
    }

}

const shadesOfRed = new Color('red', 'rgba(255, 186, 186, .75)', 'rgba(255, 82, 82, .75)', 'white', '-webkit-linear-gradient(#e04a4a, #c4357f, #a7202d)')
const shadesOfOrange = new Color('orange', 'rgba(240, 161, 80, .75)', 'rgba(240, 128, 32, .75)', 'white', '-webkit-linear-gradient(#e0ad4a, #c45335, #a77220)')
const shadesOfYellow = new Color('yellow', 'rgba(255, 249, 174, .75)', 'rgba(233, 215, 0, .75)', 'white', '-webkit-linear-gradient(#d9e04a, #c48f35, #a7a420)')
const shadesOfGreen = new Color('green', 'rgba(164, 251, 166,.75)', 'rgba(48, 203, 0, .75)', 'white', '-webkit-linear-gradient(#97e04a, #4cc435, #a7a400)')
const shadesOfBlue = new Color('blue', 'rgba(172, 203, 255, .75)', 'rgba(120, 170, 255, .75)', 'white', '-webkit-linear-gradient(#4acce0, #354ac4, #5c20a7)')
const shadesOfViolet = new Color('violet', 'rgba(195, 112, 253, .75)', 'rgba(155, 58, 215, .75)', 'white', '-webkit-linear-gradient(#b888da, #7148d5, #5c4080)')



const colorChoiceText = () => {
    animateSubText("Great choice!")
    setTimeout(function () { animateSubText("Feel free to pick another."); }, 2000)
    setTimeout(function () { animateSubText("Whenever you're satisfied, click 'done' & I'll tell you a bit about myself."); }, 5000)
}


let colorChoice = 0
let clickCount = 0
const changeTheme = (Color) => {
    let body = document.querySelector('body')
    body.style.backgroundColor = Color.bgColor
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

