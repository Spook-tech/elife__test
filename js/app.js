
document.body.addEventListener('DOMContentLoaded', (event) => {
  document.body.addEventListener('click', (e) => {
    // Get the target element of the click event
    const target = e.target;
    
    console.log(target);
    if (target.classList.contains('like-button') || target.closest('.like-button')){
      target.closest('.like-button').classList.toggle('add');
    }
    if (target.classList.contains('tour__tags__button')){
      document.querySelector('.tour__tags').classList.toggle('active');
    }
  })
  
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    slidesPerView: 3,
    spaceBetween: 16,
    pagination: {
      el: '.reviews-pagination',
      clickable: true,
  
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1194: {
        slidesPerView: 3,
        spaceBetween: 16
      },
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  });
  
  const gallerySwiper = new Swiper('.gallery__swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
      el: '.gallery-pagination',
      clickable: true,
    },
  
    breakpoints: {
      991: {
        spaceBetween: 20
      },
      1195: {
        spaceBetween: 46
      }
    }
  });
  const newsSwiper = new Swiper('.articles-news__swiper', {
    spaceBetween: 14,
    slidesPerView: 1,
    pagination: {
      el: '.articles-news-pagination',
      clickable: true,
    },
  
    breakpoints: {
      1300: {
        slidesPerView: 2,
      }
    }
  });
  
  const mySwiper = new Swiper('.tour-operators-swiper', {
    spaceBetween: 50,
    grid: {
      rows: 3,
      fill: "row",
    },
    pagination: {
      el: '.tour-operators-pagination',
      clickable: true,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      834: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      1195: {
        slidesPerView: 2.4,
      },
      1500: {
        slidesPerView: 3,
      }
    }
  });
  const mainPageSlider = new Swiper('.main-slider__swiper', {
    spaceBetween: 25,
    slidesPerView: 1,
    pagination: {
      el: '.main-slider__pagination',
      clickable: true,
    },
    breakpoints: {
      761: {
        slidesPerView: 1.8,
      },
      991: {
        slidesPerView: 2.5,
      },
      1510: {
        slidesPerView: 4,
      },
    }
  });
  const toursSwiper = new Swiper('.tours-swiper', {
    spaceBetween: 25,
    slidesPerView: 1,
    breakpoints: {
      761: {
        slidesPerView: 2,
      },
      1150: {
        slidesPerView: 3,
      },
      1510: {
        slidesPerView: 4,
      },
    }
  });
});