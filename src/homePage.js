import Background from './background.jpg'

function homePage() {

    const home = document.createElement('div')
    home.classList.add('home')
        const homeMain = document.createElement('div')
        homeMain.classList.add('homeMain')
            const myBackground = new Image() 
            myBackground.src = Background
            myBackground.classList.add('background')
            const text = document.createElement('div')
            text.classList.add('text')
            const title = document.createElement('h1')
            const description = document.createElement('div')
            title.classList.add('title')
            description.classList.add('description')
            homeMain.appendChild(myBackground)
            homeMain.appendChild(text)
            text.appendChild(title)
            text.appendChild(description)
            title.textContent = `Billy Bob's Finger Lickin' Burgers`
            description.textContent = `At Billy Bob's, we ensure everyone is happy!`

    home.appendChild(homeMain)

    return home
}

export default homePage