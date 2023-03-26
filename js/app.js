$(document).ready(function() {
  const contactsLine = $('.contacts-line');

  $(document).on('click', function(e) {
    const target = e.target;
    console.log(target);

    if ($(target).hasClass('like-button') || $(target).closest('.like-button').length > 0){
      $(target).closest('.like-button').toggleClass('add');
    }

    if ($(target).hasClass('tour__tags__button')){
      $(target).closest('.tour__tags').toggleClass('active');
    }

    if ($(target).closest('.search__filters-block__title').length > 0){
      $(target).closest('.search__filters-block-wrapper').toggleClass('active');
    }
    if ($(target).closest('.toggle-search-filter').length > 0){
      $('.search__filters-wrapper').toggleClass('active');
    }
  });

  let scrolling;
  $(window).on("scroll", function() {
    let scrolled = $(window).scrollTop();

    if (!contactsLine) return;
    if (scrolled > 30){
      contactsLine.addClass('hidden');
    }else{
      contactsLine.removeClass('hidden');
    }

    clearTimeout(scrolling);
    scrolling = setTimeout(function() {
      contactsLine.removeClass('hidden');
    }, 1000);
  });

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
  datepicker('#datetimepicker');
});

  
