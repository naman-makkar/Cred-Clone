const hero4 = document.querySelector('.hero-4')

const hero4Left1 = document.querySelector('.hero-4-left-1')
const hero4Left2 = document.querySelector('.hero-4-left-2')
const hero4Left3 = document.querySelector('.hero-4-left-3')
const hero4Left4 = document.querySelector('.hero-4-left-4')

const hero4RightImg = document.querySelector('.hero-4-right-img')

const hero4RightImg1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png";
const hero4RightImg2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png";
const hero4RightImg3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png";
const hero4RightImg4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png";

// add scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    const hero4OffsetTop = hero4.offsetTop
    const hero4Height = hero4.clientHeight

    if ((scrollPosition > hero4OffsetTop) && (scrollPosition < hero4Height + hero4OffsetTop)) {
        if (scrollPosition > hero4OffsetTop && scrollPosition < hero4OffsetTop + 300) {
            hero4Left1.style.opacity = 1
            hero4Left1.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > hero4OffsetTop + innerHeight && scrollPosition < hero4OffsetTop + innerHeight + 300) {
            hero4Left2.style.opacity = 1
            hero4Left2.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > hero4OffsetTop + innerHeight * 2 && scrollPosition < hero4OffsetTop + innerHeight * 2 + 300) {
            hero4Left3.style.opacity = 1
            hero4Left3.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > hero4OffsetTop + innerHeight * 3 && scrollPosition < hero4OffsetTop + innerHeight * 3 + 300) {
            hero4Left4.style.opacity = 1
            hero4Left4.style.transition = 'opacity 1s ease-in-out'
        } else {
            hero4Left1.style.opacity = 0
            hero4Left2.style.opacity = 0
            hero4Left3.style.opacity = 0
            hero4Left4.style.opacity = 0
        }

        if (scrollPosition > hero4OffsetTop && scrollPosition < hero4OffsetTop + innerHeight) {
            hero4RightImg.src = hero4RightImg1
            hero4RightImg.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > hero4OffsetTop + innerHeight && scrollPosition < hero4OffsetTop + innerHeight * 2) {
            hero4RightImg.src = hero4RightImg2
            hero4RightImg.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > hero4OffsetTop + innerHeight * 2 && scrollPosition < hero4OffsetTop + innerHeight * 3) {
            hero4RightImg.src = hero4RightImg3
            hero4RightImg.style.transition = 'opacity 1s ease-in-out'
        } else if (scrollPosition > hero4OffsetTop + innerHeight * 3 && scrollPosition < hero4OffsetTop + innerHeight * 4) {
            hero4RightImg.src = hero4RightImg4
            hero4RightImg.style.transition = 'opacity 1s ease-in-out'
        } else {
            hero4RightImg.src = hero4RightImg1
        }
    }
})