const accordionTrigger = document.querySelectorAll('.accordion .trigger')

accordionTrigger.forEach((trigger) =>{
    trigger.addEventListener('click', () => {
        const accordion = trigger.parentElement
        const isOpen = accordion.classList.contains('open')

        if (isOpen) {
            accordion.classList.remove('open')
        } else {
            accordion.classList.add('open')
        }
    })
})