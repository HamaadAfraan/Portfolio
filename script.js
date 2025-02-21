//section tab

let sec = document.querySelectorAll('section');
let Links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 75;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            Links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + id +']').classList.add('active');
            });
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
}


//menu for small screen
const menuIcon = document.querySelector('#menu-icon');
const navbar= document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});


//resume section tab
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx)=>{
    btn.addEventListener('click', ()=>{
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach((btn=>{
            btn.classList.remove('active');
        }));
        btn.classList.add('active');

        resumeDetails.forEach((detail=>{
            detail.classList.remove('active');
        }));
        resumeDetails[idx].classList.add('active');
    });
});


//carausel navigation

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click',()=>{
    if(index < 6){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 7;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click',()=>{
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});




//dark mode

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkMode();

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    if(darkmode !== "active"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
});



//form submission
    let formpage = document.getElementById("formpage");

    let popupSuccess = document.getElementById("popupSuccess");
    let popupError = document.getElementById("popupError");

    let fullName = document.getElementById("fullName");
    let tele = document.getElementById("tele");
    let mail = document.getElementById("mail");
    let message = document.getElementById("message");
    let selectDiv = document.getElementById("selectdiv");


    let scriptURL = 'https://script.google.com/macros/s/AKfycbxlS5CbLsRZq8OK1VSCreXJFXWXXIrWCeirGH3YpkdJMJhD1mYjWRQA8wEzOOA5fjMy/exec';

    let form = document.forms['contact-form']


    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }

    async function submitForm()
         {       
            formpage.classList.add("form-opacity");
            if(fullName.value.length !==0 && tele.value.length !==0 && mail.value.length !==0 && message.value.length !==0 && selectDiv.value.length!==0)
                {
                    
                    fetch(scriptURL, { method: 'POST', body: new FormData(form)})

                    await delay(3000);

                    popupSuccess.classList.add("visible");
                    popupError.classList.remove("visible-error");
                    formpage.classList.remove("form-opacity");
                }
                else{
                    popupError.classList.add("visible-error");
                    popupSuccess.classList.remove("visible");
                    formpage.classList.remove("form-opacity");
                }
        }