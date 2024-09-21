const mobileButtons = document.querySelector('.mobile-buttons');
const navbar = document.querySelector('nav');


mobileButtons.addEventListener('click', () => {
    const isOpen = mobileButtons.src.includes('bars')

    if (isOpen) {
        mobileButtons.src = './svg/x.svg'
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateX(0)'
        navbar.style.pointerEvents = 'all'
        
    } else {
        mobileButtons.src = './svg/bars.svg'
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateX(100%)'
        navbar.style.pointerEvents = 'none'
    }
})
