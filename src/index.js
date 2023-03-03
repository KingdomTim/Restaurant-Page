import homePage from './homePage'
import Background from './background.jpg'
import './styles.css'

function content() {

    const content = document.querySelector('#content')

    const myBackground = new Image() 
    myBackground.src = Background
    myBackground.style.width = '50px'

    content.appendChild(myBackground)
    content.appendChild(homePage())

    return content
    
}

document.body.appendChild(content())