
document.addEventListener('DOMContentLoaded', (event) => {
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

  const lazyImages=document.querySelectorAll("img[data-src],source[data-srcset]"),loadMapBlock=document.querySelector("._load-map"),windowHeight=document.documentElement.clientHeight,loadMoreBlock=document.querySelector("._load-more");let lazyImagesPositions=[];function lazyScroll(){document.querySelectorAll("img[data-src],source[data-srcset]").length>0&&lazyScrollCheck(),loadMapBlock.classList.contains("_loaded")||getMap(),loadMoreBlock.classList.contains("_loading")||loadMore()}function lazyScrollCheck(){let e=lazyImagesPositions.findIndex(e=>pageYOffset>e-windowHeight);e>=0&&(lazyImages[e].dataset.src?(lazyImages[e].src=lazyImages[e].dataset.src,lazyImages[e].removeAttribute("data-src")):lazyImages[e].dataset.srcset&&(lazyImages[e].srcset=lazyImages[e].dataset.srcset,lazyImages[e].removeAttribute("data-srcset")),delete lazyImagesPositions[e])}function getMap(){let e=loadMapBlock.getBoundingClientRect().top+pageYOffset;if(pageYOffset>e-windowHeight){let a=loadMapBlock.dataset.map;a&&(loadMapBlock.insertAdjacentHTML("beforeend",`<iframe src="${a}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`),loadMapBlock.classList.add("_loaded"))}}function loadMore(){let e=loadMoreBlock.getBoundingClientRect().top+pageYOffset,a=loadMoreBlock.offsetHeight;pageYOffset>e+a-windowHeight&&getContent()}async function getContent(){document.querySelector("._loading-icon")||loadMoreBlock.insertAdjacentHTML("beforeend",'<div class="_loading-icon"></div>'),loadMoreBlock.classList.add("_loading");let e=await fetch("_more.html",{method:"GET"});if(e.ok){let a=await e.text();loadMoreBlock.insertAdjacentHTML("beforeend",a),loadMoreBlock.classList.remove("_loading"),document.querySelector("._loading-icon")&&document.querySelector("._loading-icon").remove()}else alert("Ошибка")}lazyImages.length>0&&lazyImages.forEach(e=>{(e.dataset.src||e.dataset.srcset)&&(lazyImagesPositions.push(e.getBoundingClientRect().top+pageYOffset),lazyScrollCheck())}),window.addEventListener("scroll",lazyScroll);

});