// burger start
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav-burger');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav-burger-active')
    });
    const menuCloseItem = document.querySelector('.nav-burger-close');
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const Howworks = document.querySelector('.burger-text-linl-1');
    Howworks.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const Plan = document.querySelector('.burger-text-linl-2')
    Plan.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const Destinations = document.querySelector('.burger-text-linl-3')
    Destinations.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const Stories = document.querySelector('.burger-text-linl-4')
    Stories.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const Account = document.querySelector('.burger-text-linl-5')
    Account.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const LinkSocial = document.querySelector('.burger-text-linl-6');
    LinkSocial.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const mainClose = document.querySelector('.other-2');
    mainClose.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });
    const footerClose = document.querySelector('.other-3');
    footerClose.addEventListener('click', () => {
        menu.classList.remove('nav-burger-active')
    });

    //     const headerClose = document.querySelector('.other-1');
    //     headerClose.addEventListener('click', () => {
    //         menu.classList.remove('nav-burger-active')
    // });

}());
// burger finish


// slider start full
window.addEventListener('load', () => {
    // button
    const left = document.querySelector('.arrow-prew-full');
    const right = document.querySelector('.arrow-next-full');
    // carusel
    const slider = document.querySelector(".destinations-list");
    const sliderLi = document.querySelectorAll(".mySlides");

    // counter
    let counter = 0;
    const stepSize = sliderLi[0].clientWidth + 60;
    console.log(stepSize);

    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    //  translateX(-100%);
    right.addEventListener('click', () => {
        if (counter >= sliderLi.length - 4) counter = -2;
        console.log('counter', counter);
        console.log('sliderLi', sliderLi.length);
        slider.classList.add('transform-animation')
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
    left.addEventListener('click', () => {
        if (counter <= -1) counter = sliderLi.length - 3;
        console.log('counter', counter);
        console.log('sliderLi', sliderLi.length);
        slider.classList.add('transform-animation')
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    });
});
// slider full finish


// slider start mobile
window.addEventListener('load', () => {
    // button
    const left = document.querySelector('.arrow-prew');
    const right = document.querySelector('.arrow-next');
    // carusel
    const slider = document.querySelector(".destinations-list");
    const sliderLi = document.querySelectorAll(".mySlides");

    // counter
    let counter = 0;
    const stepSize = sliderLi[0].clientWidth;
    console.log(stepSize);

    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    //  translateX(-100%);
    right.addEventListener('click', () => {
        if (counter >= sliderLi.length - 3) counter = -1;
        console.log('counter', counter);
        console.log('sliderLi', sliderLi.length);
        slider.classList.add('transform-animation')
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
    left.addEventListener('click', () => {
        if (counter <= 0) counter = sliderLi.length - 2;
        console.log('counter', counter);
        console.log('sliderLi', sliderLi.length);
        slider.classList.add('transform-animation')
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    });
});
// slider mobile finish


// slider start
/* const slideIndex = 1;
showSlider(slideIndex);

function plusSlide() {
    showSlider(slideIndex += 1);
}
function minusSlide() {
    showSlider(slideIndex -= 1);
}
function currentSlide() {
    showSlider(slideIndex = n);
}
function showSlider(n) {
    let i;
    const slider = document.getElementsByClassName(".mySlides");
    const dots = document.getElementsByClassName(".ellipse");

    if (n > slider.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slider.length
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("  active", "");
    }
    slider[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} */
// slider finish


// start modal 1
const openFormModalBtn = document.querySelector('#open-form-modal-btn');
const openFormModalBtnMobile = document.querySelector('#open-form-modal-btn-mobile');
const modal = document.querySelector('.modal-bgd')

openFormModalBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
});
openFormModalBtnMobile.addEventListener('click', () => {
    modal.classList.toggle('hidden')
});
modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('close-modal')) {
        modal.classList.toggle('hidden')
    }
    console.log(event)
});

// finish modal 1


// start modal 2
const buttonRegister = document.querySelector('#button-register');

const socialLink = document.querySelector('.modal-social-links');
const toggleSocialLinkDisplayNoneClass = () => {
    socialLink.classList.toggle('display-none')
}
const or = document.querySelector('.-or-');
const toggleOrDisplayNoneClass = () => {
    or.classList.toggle('display-none')
}
const forgotPassword = document.querySelector('.forgot-password-link');
const toggleForgotPasswordDisplayNoneClass = () => {
    forgotPassword.classList.toggle('display-none')
}
const modalContainer = document.querySelector('.modal-container');
const modalContainerSizeClass = () => {
    modalContainer.classList.toggle('size')
}

const modalTitle = document.querySelector('.modal-title');
const modalTitleToggleText = (element, text) => {
    modalTitle.innerHTML = text
}
const modalButtonText = document.querySelector('#modal-button-text');
const modalButtonTextToggleText = (element, text) => {
    modalButtonText.innerHTML = text
}
const textForRegister = document.querySelector('.text-for-register');
const textForRegisterToggleText = (element, text) => {
    textForRegister.innerHTML = text
}
const modalToggleText = (element, text) => {
    buttonRegister.innerHTML = text
}

const hendleClick = (event) => {
    const element = event.target;
    modalContainerSizeClass(element);
    toggleForgotPasswordDisplayNoneClass(element);
    toggleOrDisplayNoneClass(element);
    toggleSocialLinkDisplayNoneClass(element);
    modalTitleToggleText(element, 'Create account');
    modalButtonTextToggleText(element, 'Sign Up');
    textForRegisterToggleText(element, 'Already have an account?');
    modalToggleText(element, 'Log in');
}

buttonRegister.addEventListener('click', hendleClick)

// finish modal 2


// alert

const form1 = document.querySelector('#user-email');
const form2 = document.querySelector('#user-password');
// const signAlert1 = form1.elements.Email;
// const signAlert2 = form2.elements.Password;

const popUpSignInBtn = document.querySelector('#alert');

popUpSignInBtn.addEventListener('click', () => {
    alert('Your E-Mail: ' + signAlert1.value + '\nYour Password: ' + signAlert2.value);
});