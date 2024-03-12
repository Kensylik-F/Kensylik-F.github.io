const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 4000,
      },
    
  
    // If we need pagination
    pagination: {
      el: '.number__slide',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#next-btn',
      prevEl: '#prev-btn',
    },

  });