const swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
});

const search = document.querySelector('header form .search');
const searchForm = document.querySelector('header form .searchForm');
search.addEventListener('click', () => {
  if (searchForm.classList.contains('hiddenDispaly')) {
    searchForm.classList.remove('slideout');
    searchForm.classList.add('slideinside');
    searchForm.classList.remove('hiddenDispaly');

  } else {
    searchForm.classList.remove('slideinside');
    searchForm.classList.add('slideout');
    searchForm.classList.add('hiddenDispaly');
  }
});

const swiper2 = new Swiper(".slideSection1 .slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    0: {
      slidesPerView:1.2,
      spaceBetween: 10,
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }
})


const swiper3 = new Swiper(".slideSection2 .slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true,
    dynamicBullets: true,
    scrollable: true
  },
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  breakpoints: {
    0: {
      slidesPerView:1.2,
      spaceBetween: 10,
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }
})
const swiper4 = new Swiper(".slideSection3 .slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-4",
    clickable: true,
    dynamicBullets: true,
    scrollable: true
  },
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
  breakpoints: {
    0: {
      slidesPerView:1.2,
      spaceBetween: 10,
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }
})
const swiper5 = new Swiper(".slideSection4 .slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-5",
    clickable: true,
    dynamicBullets: true,
    scrollable: true
  },
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },
  breakpoints: {
    0: {
      slidesPerView:1.2,
      spaceBetween: 10,
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  }
})
const swiper6 = new Swiper(".slideSection5 .slide-content", {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-6",
    clickable: true,
    dynamicBullets: true,
    scrollable: true
  },
  navigation: {
    nextEl: ".swiper-button-next-6",
    prevEl: ".swiper-button-prev-6",
  },
  breakpoints: {
    0: {
      slidesPerView:1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView:3,
      spaceBetween: 15,
    },
  }
})




