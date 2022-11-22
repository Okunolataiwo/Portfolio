  
const nav = document.getElementById('nav');
// const btn1 = document.getElementById('btn1');
// const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const btn2 = document.getElementById('btn2');
// const more = document.getElementById('more');
const resume = document.getElementById('resume');
const header = document.getElementById('header');
const bar = document.querySelector('.bar');
const close = document.getElementById('close');
const list = document.querySelector('.list');
const logo = document.querySelector('.name');
const all = document.querySelectorAll('.all');

// btn1.addEventListener('click', ()=>{
//     // more.classList.add('active');
//     header.classList.add('active');
// });

// btn11.addEventListener('click', ()=>{
//     // more.classList.remove('active');
//     header.classList.remove('active');
// });


btn2.addEventListener('click', ()=>{
    resume.classList.add('active');
    header.classList.add('active');
});

btn12.addEventListener('click', ()=>{
    resume.classList.remove('active');
    header.classList.remove('active');
});


window.addEventListener('scroll', ()=>{
    nav.classList.toggle('active', window.scrollY >= 80);
    logo.classList.toggle('active', window.scrollY >= 80)
    

    nav.classList.toggle('active-two', window.scrollY >= 500);
})

bar.addEventListener('click', () =>{
    list.classList.add('active');
})

close.addEventListener('click', () =>{
    list.classList.remove('active');
})

window.addEventListener('click', (event) => {
    if(!event.target.matches('.bar')){
        // alert('vws')
        if(list.classList.contains('active')){
            // console.log('vws')
            // list.classList.remove('active')
        }
    
        // if(blur.classList.contains('active')){
            // alert('vws')
            // blur.classList.remove('active')
    
        // }
    
    }
    });
    
    list.addEventListener('click', event=>
        event.stopPropagation());
    
// about section
const skillBtn = document.getElementById('skillBtn');
const experienceBtn = document.getElementById('experienceBtn');
const eduBtn = document.getElementById('eduBtn');
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const education = document.getElementById('education');

skillBtn.addEventListener('click', ()=>{
    experience.style.display ='none';
    education.style.display ='none'; 
    skills.style.display = 'block';
    skillBtn.classList.add('active-link');
    experienceBtn.classList.remove('active-link');
    eduBtn.classList.remove('active-link');
});

experienceBtn.addEventListener('click', ()=>{
    experience.style.display ='block';
    education.style.display ='none'; 
    skills.style.display = 'none';
    experienceBtn.classList.add('active-link');
    skillBtn.classList.remove('active-link');
    eduBtn.classList.remove('active-link');
});

eduBtn.addEventListener('click', ()=>{
    experience.style.display ='none';
    education.style.display ='block'; 
    skills.style.display = 'none';
    experienceBtn.classList.remove('active-link');
    skillBtn.classList.remove('active-link');
    eduBtn.classList.add('active-link');
});


// top links
// const topLinks = document.querySelectorAll('.toplink');

// topLinks.forEach(function (el) {
//     el.addEventListener('click', (event)=>{
//         if(event.target.matches('.skillBtn')){
//             console.log('yes');
//         }
//     })
// })
const home = document.querySelector('.home');
const aboutTop = document.querySelector('.About');
const  services = document.querySelector('.services');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');
aboutTop.addEventListener('click', ()=>{
    aboutTop.classList.add('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    contact.classList.remove('active');
    home.classList.remove('active');
});

services.addEventListener('click', ()=>{
    aboutTop.classList.remove('active');
    services.classList.add('active');
    portfolio.classList.remove('active');
    contact.classList.remove('active');
});
portfolio.addEventListener('click', ()=>{
    aboutTop.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.add('active');
    contact.classList.remove('active');
});
contact.addEventListener('click', ()=>{
    aboutTop.classList.remove('active');
    services.classList.remove('active');
    portfolio.classList.remove('active');
    contact.classList.add('active');
});


// swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

  });


  if(window.outerWidth <= 500){
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
    
      });
  }

  
//   const form = document.getElementById('form');
//   form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//   })
