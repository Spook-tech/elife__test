$(document).ready(function() {
  const $likeButton = $('.like-button');
  const $searchFiltersTitle = $('.search__filters-block__title');
  const $toggleSearchFilter = $('.toggle-search-filter');
  const $searchFiltersWrapper = $('.search__filters-wrapper');
  const $searchFiltersBlockWrapper = $('.search__filters-block-wrapper');

  // Обработка при клике
  $(document).on('click', function(e) {
    const $target = $(e.target);
    
    if ($target.hasClass('like-button') || $target.closest($likeButton).length > 0) {
      $target.closest($likeButton).toggleClass('add');
    }
  
    if ($target.hasClass('tour__tags__button')) {
      $target.closest('.tour__tags').toggleClass('active');
    }
  
    if ($target.closest($searchFiltersTitle).length > 0) {
      $target.closest($searchFiltersBlockWrapper).toggleClass('active');
    }
  
    if ($target.closest($toggleSearchFilter).length > 0) {
      $searchFiltersWrapper.toggleClass('active');
    }
  
    // if ($target.closest('.filters__item ')) {
    //   bodyLock();
    // }

    console.log($target);

    if ($target.hasClass('dropdown-title')) { // проверяем наличие класса 'dropdown-title'
      if ($target.closest('.dropdown').hasClass('active')) { // проверяем наличие класса 'active'
        $target.closest('.dropdown').removeClass('active'); // удаляем класс 'active', если он уже есть
      } else {
        $('.dropdown.active').not(parent).removeClass('active');
        $target.closest('.dropdown').toggleClass('active');
      }
    } else if ($target.closest('.dropdown')) {
      $('.dropdown.active').not(parent).removeClass('active');
      $target.closest('.dropdown').toggleClass('active');
    } else {
      $('.dropdown').removeClass('active');
    }    

  });
  
  // Обработка при клике


  // Показываем и скрываем полоску с контактами при скролле
  const contactsLine = $('.contacts-line');
  const timeToShow = 1000;
  let scrolling;
  let isContactsLineHidden = false;
  
  
  $(window).on("scroll", function() {
    let scrolled = $(window).scrollTop();
  
    if (!contactsLine) return;
  
    if (scrolled > 30 && !isContactsLineHidden) {
      contactsLine.addClass('hidden');
      isContactsLineHidden = true;
    } else if (scrolled <= 30 && isContactsLineHidden) {
      contactsLine.removeClass('hidden');
      isContactsLineHidden = false;
    }
  
    clearTimeout(scrolling);
    scrolling = setTimeout(function() {
      contactsLine.removeClass('hidden');
      isContactsLineHidden = false;
    }, timeToShow);
  });
  // Показываем и скрываем полоску с контактами при скролле


  // Скрипт для подсчета количества тегов на странице тура
  const tagsContainer = $('.tour__tags-mobile');
  if (tagsContainer.length > 0) {
    const tags = $('.tags-item', tagsContainer);
    const tagButton = $('.tour__tags__button span', tagsContainer);
    const childWidth = $(window).width() < 1194.98 ? 140 : 163;
    const childMarginRight = 30;
  
    function calculateNumChild() {
      const containerWidth = tagsContainer.width();
      const spaceAvailable = containerWidth;
      const spaceRequired = childWidth + childMarginRight;
      const numChild = Math.floor(spaceAvailable / spaceRequired);
      tagButton.text(tags.length - numChild);
    }
  
    $(window).on('resize', calculateNumChild);
    calculateNumChild();
  }
  // Скрипт для подсчета количества тегов на странице тура


  // Слайдеры //
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
        spaceBetween: 30
      },
      1388: {
        spaceBetween: 46
      },
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
    pagination: {
      el: '.tours-pagination',
      clickable: true,
    },
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
  // Слайдеры //


  // Фильтры даты и цены на странице поиска //
  const daysRangeInput = $('.search__filters-days .js-range-slider');
  daysRangeInput.ionRangeSlider({
    min: 1,
    max: 25,
    type: "double",
    skin: "round",
    grid: false,
    hide_from_to: true,
    hide_min_max: true,

    onChange: function (data) {
      const budgetRangeTextFrom = $('.search__filters-days__title .from');
      const budgetRangeTextTo = $('.search__filters-days__title .to');
      budgetRangeTextTo.text(data.to);
      budgetRangeTextFrom.text(data.from);
    }    
  });
  const budgetRangeInput = $('.search__filters-price .js-range-slider');
  budgetRangeInput.ionRangeSlider({
    min: 0,
    max: 50000,
    type: "double",
    skin: "round",
    grid: false,
    step: 500,
    hide_from_to: true,
    hide_min_max: true,

    onChange: function (data) {
      const budgetRangeTextFrom = $('.search__filters-price__title .from');
      const budgetRangeTextTo = $('.search__filters-price__title .to');
      budgetRangeTextTo.text(data.to);
      budgetRangeTextFrom.text(data.from);
    }    
  });
  // Фильтры даты и цены на странице поиска //


  // Использую библиотеку Datepicker.js для создания фильтра времени на странице поиска
  if ($('#datetimepicker').length > 0){
    datepicker('#datetimepicker');
  }
  // Использую библиотеку Datepicker.js для создания фильтра времени на странице поиска
  

  // Таймер в блоке "Предложение недели"
  const timerEndDate = $('.sale__timer').data('end-date');

  function updateTimer() {
    const now = new Date();
    const endDate = new Date(timerEndDate);
    if (endDate == 'Invalid Date'){
      $('.sale__timer-numbers ').css('display', 'none');
      return;
    }
    const timeLeft = endDate - now;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);

    $('.days-number').text(`${daysLeft}`);
    $('.hours-number').text(`${hoursLeft}`);
    $('.minutes-number ').text(`${minutesLeft}`);
  }

  setInterval(updateTimer, 5000);
  updateTimer();
  // Таймер в блоке "Предложение недели"

  $('.number-block').each(function() {
    const input = $(this).find('.number-block-input');
    const minusButton = $(this).find('.number-block-btn-minus');
    const plusButton = $(this).find('.number-block-btn-plus');
  
    function updateInputWidth() {
      const value = input.val();
      const length = value.length;
      const width = length * 15;
      input.css('width', `${width}px`);
    }
  
    function updateInputValue(newValue) {
      input.val(newValue);
      updateInputWidth();
    }
  
    minusButton.on('click', function(event) {
      event.preventDefault();
      const currentValue = parseInt(input.val());
      if (!isNaN(currentValue) && currentValue > 1) {
        updateInputValue(currentValue - 1);
      }
    });
  
    plusButton.on('click', function(event) {
      event.preventDefault();
      const currentValue = parseInt(input.val());
      if (!isNaN(currentValue)) {
        updateInputValue(currentValue + 1);
      } else {
        updateInputValue(1);
      }
    });
  
    input.on('input', updateInputWidth);
  
    updateInputWidth();
  });
  // Блок .number-block

  // Плашка поиска
  const searchItems = $('.filters__item');
  const numberOfSearchItems = searchItems.length;

  function bodyLock() {
    const b = window.innerWidth - document.documentElement.clientWidth;
    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const c = lockPadding[i];
            $(c).css("padding-right", b);
        }
    }
    $("html").css("padding-right", b).addClass("lock");
    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, 500);
  }

  function closeFilters() {
    
  }
  // Плашка поиска
}(jQuery));  


// POPUPS
const popupLinks = document.querySelectorAll(".popup-link"),
body = document.querySelector("html"),
lockPadding = document.querySelectorAll(".lock-padding");
let unlock = !0;
const timeout = 500;
const popupCloseIcon = document.querySelectorAll(".close-popup");

if (popupLinks.length > 0) {
   for (let a = 0; a < popupLinks.length; a++) {
      let b = popupLinks[a];
      b.addEventListener("click", function (a) {
        console.log(b);
         let c = b.getAttribute("href").replace("#", ""),
                d = document.getElementById(c);
            popupOpen(d), a.preventDefault();
            console.log(b);
        });
    }
}
if (popupCloseIcon.length > 0)
    for (let index = 0; index < popupCloseIcon.length; index++) {
        let c = popupCloseIcon[index];
        c.addEventListener("click", function (a) {
            popupClose(c.closest(".popup")), a.preventDefault();
        });
    }
function popupOpen(a) {
    if (a && unlock) {
        let b = document.querySelector(".popup.open");
        b ? popupClose(b, !1) : bodyLock(),
            a.classList.add("open"),
            a.addEventListener("click", function (a) {
                a.target.closest(".popup__content") || popupClose(a.target.closest(".popup"));
            });
    }
}
function popupClose(a, b = !0) {
    unlock && (a.classList.remove("open"), b && bodyUnLock());
}
function bodyLock() {
    let b = window.innerWidth - document.querySelector("body").offsetWidth + "px";
    if (lockPadding.length > 0)
        for (let a = 0; a < lockPadding.length; a++) {
            let c = lockPadding[a];
            c.style.paddingRight = b;
        }
    (body.style.paddingRight = b),
        body.classList.add("lock"),
        (unlock = !1),
        setTimeout(function () {
            unlock = !0;
        }, 500);
}
function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0)
            for (let a = 0; a < lockPadding.length; a++) {
                let b = lockPadding[a];
                b.style.paddingRight = "0px";
            }
        (body.style.paddingRight = "0px"), body.classList.remove("lock");
    }, 500),
        (unlock = !1),
        setTimeout(function () {
            unlock = !0;
        }, 500);
}
document.addEventListener("keydown", function (a) {
    if (27 === a.which) {
        let b = document.querySelector(".popup.open");
        popupClose(b);
    }
}),
    Element.prototype.closest ||
        (Element.prototype.closest = function (b) {
            for (var a = this; a; ) {
                if (a.matches(b)) return a;
                a = a.parentElement;
            }
            return null;
        }),
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
// POPUPS

// SPOLLERS
const spollersArray=document.querySelectorAll("[data-spollers]");if(spollersArray.length>0){let e=Array.from(spollersArray).filter(function(e,t,s){return!e.dataset.spollers.split(",")[0]});e.length>0&&r(e);let t=Array.from(spollersArray).filter(function(e,t,s){return e.dataset.spollers.split(",")[0]});if(t.length>0){let s=[];t.forEach(e=>{let t=e.dataset.spollers,l={},r=t.split(",");l.value=r[0],l.type=r[1]?r[1].trim():"max",l.item=e,s.push(l)});let l=s.map(function(e){return"("+e.type+"-width: "+e.value+"px),"+e.value+","+e.type});(l=l.filter(function(e,t,s){return s.indexOf(e)===t})).forEach(e=>{let t=e.split(","),l=t[1],i=t[2],o=window.matchMedia(t[0]),n=s.filter(function(e){if(e.value===l&&e.type===i)return!0});o.addListener(function(){r(n,o)}),r(n,o)})}function r(e,t=!1){e.forEach(e=>{e=t?e.item:e,t.matches||!t?(e.classList.add("_init"),i(e),e.addEventListener("click",o)):(e.classList.remove("_init"),i(e,!1),e.removeEventListener("click",o))})}function i(e,t=!0){let s=e.querySelectorAll("[data-spoller]");s.length>0&&s.forEach(e=>{t?(e.removeAttribute("tabindex"),e.classList.contains("_active")||(e.nextElementSibling.hidden=!0)):(e.setAttribute("tabindex","-1"),e.nextElementSibling.hidden=!1)})}function o(e){let t=e.target;if(t.hasAttribute("data-spoller")||t.closest("[data-spoller]")){let s=t.hasAttribute("data-spoller")?t:t.closest("[data-spoller]"),l=s.closest("[data-spollers]"),r=!!l.hasAttribute("data-one-spoller");l.querySelectorAll("._slide").length||(r&&!s.classList.contains("_active")&&n(l),s.classList.toggle("_active"),_slideToggle(s.nextElementSibling,500)),e.preventDefault()}}function n(e){let t=e.querySelector("[data-spoller]._active");t&&(t.classList.remove("_active"),_slideUp(t.nextElementSibling,500))}}let _slideUp=(e,t=500)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(()=>{e.hidden=!0,e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")},t))},_slideDown=(e,t=500)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden&&(e.hidden=!1);let s=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=s+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")},t)}},_slideToggle=(e,t=500)=>e.hidden?_slideDown(e,t):_slideUp(e,t);
// SPOLLERS