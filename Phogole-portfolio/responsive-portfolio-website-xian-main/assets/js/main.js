/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('', '', '', '')
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUP = () => {
    const scrollUP = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUP.classList.add('show-scroll')
        : scrollUP.classList.remove('show-scoll')
}
window.addEventListener('scroll', scrollUP)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {

        const sectionHeight=current.offsetHeight,
             sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/

