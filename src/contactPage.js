
function contactPage() {

    

    const contactMain = document.createElement('div')
    contactMain.classList.add('contactMain')
        const hours = document.createElement('div')
        hours.classList.add('hours')
        hours.innerHTML = `<h3>Hours of Business</h3>
                            <p>Monday 11-8</p>
                            <p>Tuesday 11-8</p>
                            <p>Wednesday 11-8</p>
                            <p>Thursday 11-8</p>
                            <p>Friday 11-8</p>
                            <p>Saturday 11-7</p>
                            <p>Sunday 12-7</p>`
        const contactInfo = document.createElement('div')
        contactInfo.classList.add('contactInfo')
        contactInfo.innerHTML = `<h3>Contact</h3>
                                    <p>Phone: 999-999-9999</p>
                                    <p>Email: BillyBob@fakeemail.com`

        const address = document.createElement('div')
        address.classList.add('address')
        address.innerHTML= `<h3>Address</h3>
                            <p>34 Fake Avenue</p>
                            <p>New York, NY</p>
                            <p>99999</p>`
        
        contactMain.appendChild(hours)
        contactMain.appendChild(contactInfo)
        contactMain.appendChild(address)

    return contactMain
}

export default contactPage