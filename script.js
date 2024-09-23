const  toggleBtn = document.querySelector('.toggle_btn')
const  toggleBtnIcon = document.querySelector('.toggle_btn i')
const  dropDownMenu = document.querySelector('.drop-down-menu ')
  const readMore = document.querySelector('.review-read-container')
  const readMore2 = document.querySelector('.review-read-container2')
  const readMore3 = document.querySelector('.review-read-container3')
  const readMore4 = document.querySelector('.review-read-container4')
  const readMore5 = document.querySelector('.review-read-container5')
 




readMore.addEventListener('click', event=>{
  const current = event.target; 
  const isReadmoreBtn = current.className.includes('read-more-btn');
  if(!isReadmoreBtn) return;
   
  const currentText = event.target.parentNode.querySelector('.read-more-content');
  currentText.classList.toggle('read-more-content--show');

  current.textContent = current.textContent.includes('Read More') ?
  "Read Less..." :"Read More..."

})
readMore2.addEventListener('click', event=>{
  const current = event.target; 
  const isReadmoreBtn = current.className.includes('read-more-btn');
  if(!isReadmoreBtn) return;
   
  const currentText = event.target.parentNode.querySelector('.read-more-content');
  currentText.classList.toggle('read-more-content--show');

  current.textContent = current.textContent.includes('Read More') ?
  "Read Less..." :"Read More..."

})


readMore3.addEventListener('click', event=>{
  const current = event.target; 
  const isReadmoreBtn = current.className.includes('read-more-btn');
  if(!isReadmoreBtn) return;
   
  const currentText = event.target.parentNode.querySelector('.read-more-content');
  currentText.classList.toggle('read-more-content--show');

  current.textContent = current.textContent.includes('Read More') ?
  "Read Less..." :"Read More..."

})
readMore4.addEventListener('click', event=>{
  const current = event.target; 
  const isReadmoreBtn = current.className.includes('read-more-btn');
  if(!isReadmoreBtn) return;
   
  const currentText = event.target.parentNode.querySelector('.read-more-content');
  currentText.classList.toggle('read-more-content--show');

  current.textContent = current.textContent.includes('Read More') ?
  "Read Less..." :"Read More..."

})

readMore5.addEventListener('click', event=>{
  const current = event.target; 
  const isReadmoreBtn = current.className.includes('read-more-btn');
  if(!isReadmoreBtn) return;
   
  const currentText = event.target.parentNode.querySelector('.read-more-content');
  currentText.classList.toggle('read-more-content--show');

  current.textContent = current.textContent.includes('Read More') ?
  "Read Less..." :"Read More..."

})

// toggleBtn.addEventListener ( 'click' ,function (){
//     dropDownMenu.classList.toggle('open');
//     const isOpen = dropDownMenu.classList.contains('open')

//     toggleBtnIcon.classList = isOpen
//     ?'fa-solid fa-xmark'
//     :'fa-solid fa-bars'

// })

// toggleBtn.addEventListener('click', function() {
//   dropDownMenu.classList.toggle('open');

//   const isOpen = dropDownMenu.classList.contains('open');
  
//   // Toggle between the two icons
//   toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
//   toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
// });
 
toggleBtn.addEventListener('click', function() {
  // Toggle the 'open' class for the dropdown menu
  dropDownMenu.classList.toggle('open');

  // Check if the dropdown menu is open
  const isOpen = dropDownMenu.classList.contains('open');

  // Update the icon based on the open state
  if (isOpen) {
    toggleBtnIcon.classList.remove('fa-bars');
    toggleBtnIcon.classList.add('fa-xmark');
  } else {
    toggleBtnIcon.classList.remove('fa-xmark');
    toggleBtnIcon.classList.add('fa-bars');
  }
});
 

gsap.to("#nav",{
    backgroundColor:"#ffffff",
    height:'70px',
    duration:0.5,
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})

gsap.to('#main',{
    backgroundColor:"#ffffff",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: 'top -40%',
        end:"top -80%",
        scrub:1

    }
})






var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

     breakpoints: {
        1000: {
          slidesPerView: 3, // 3 slides for screens wider than 1400px
          spaceBetween: 30,
        },

        200: {
          slidesPerView: 1, // 1 slide for screens narrower than 450px
          spaceBetween: 8,
        },
        675: {
          slidesPerView: 2, // 1 slide for screens narrower than 450px
          spaceBetween: 8,
        },
      }
  });


  




// const screenWidth = window.innerWidth;

// if (screenWidth <= 550) {
//     // Animation for screens 550px and below
//     gsap.to('#main', {
//         backgroundColor: "#ffffff",
//         scrollTrigger: {
//             trigger: "#main",
//             scroller: "body",
//             start: 'top -20%',  // Adjust start point
//             end: "top -40%",    // Adjust end point
//             scrub: 1
//         }
    
//     }
// )}