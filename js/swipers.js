const swiper = new Swiper('.banner-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

});

let createStatus=0;
  function createGallery(){
    console.log("Создаю галерею")
    if (createStatus==0){
      createStatus=1;
  let gallerySlider = new Swiper(".gallery__right-content", {
    slidesPerView: 1,
    slidesPerColumn:1,
    
    nextButton:'.gallery__btn-next',
    prevButton:'.gallery__btn-prev',  
    
    pagination: '.gallery__pagination',
    paginationType:"fraction",
     
    breakpoints: {
      767: {
        slidesPerView: 1,
        slidesPerColumn:1,
        spaceBetween: 0
      },
        
      1200: {
        slidesPerView:2,
        slidesPerColumn:2,
        spaceBetween: 50
      },
      10000: {
        slidesPerView:3,
        slidesPerColumn:2,
        spaceBetween: 50
      },
      
    },
    spaceBetween: 30,
    a11y: {
      prevSlideMessage: 'Предыдущий',
      nextSlideMessage: 'Следующий',
    }
  
    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });
  createStatus=0;
  }
  else {
    return
  }
  }
  window.addEventListener('resize',createGallery)
  createGallery();









