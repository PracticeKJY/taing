// const data = [
//   {
//     id: 1,
//     src: "../assets/banner_img.png",
//     alt: "막내집 재벌아들",
//   },
//   {
//     id: 2,
//     src: "../assets/banner_img.png",
//     alt: "막내집 재벌아들",
//   },
//   {
//     id: 3,
//     src: "../assets/banner_img.png",
//     alt: "막내집 재벌아들",
//   },
//   {
//     id: 4,
//     src: "../assets/banner_img.png",
//     alt: "막내집 재벌아들",
//   },
// ];

/* ---------------------------------- 해결방안3 --------------------------------- */
/* --------------------------- class를 추가해서 조종하는방식 --------------------------- */

const header = document.querySelector(".header");
console.log(header);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.classList.remove("deactive");
    header.classList.add("active");
  } else {
    header.classList.remove("active");
    header.classList.add("deactive");
  }
});

/* ---------------------------------- 해결방안2 --------------------------------- */
/* ------------------ setattribute를 이용해, style을 직접적으로 주는방식 ------------------ */

// const header = document.querySelector(".header");
// console.log(header);

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     header.setAttribute(
//       "style",
//       "background: var(--black)"
//     );
//   } else {
//     header.setAttribute("style", "background: transparent");
//   }
// });

/* ----------------------------------- 해결방안1 ---------------------------------- */

// const headerHeight = header.getBoundingClientRect().height;

// window.addEventListener("scroll", () => {
//   if (window.scrollY > headerHeight) {
//     header.setAttribute(
//       "style",
//       "background: var(--black)"
//     );
//     // console.log("성공");
//     // header.classList.remove("deactive");
//     // header.classList.add("active");
//   } else {
//     header.setAttribute("style", "background: transparent");
//     header.setAttribute(
//       "style",
//       "background: var(--black)"
//     );
//     // header.classList.remove("active");
//     // header.classList.add("deactive");
//   }
// });

const autoPlayBtn = document.querySelector(
  ".wrap-autoplay-control > button"
);

const thisSlide = new Swiper(".main-visual", {
  loop: true,
  speed: 1500,
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // a11y: {
  //   prevSlideMessage: "이전 슬라이드",
  //   nextSlideMessage: "다음 슬라이드",
  //   slideLabelMessage:
  //     "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
  // },
  on: {
    init: function () {
      autoPlayBtn.addEventListener("click", () => {
        const autoPlayState =
          autoPlayBtn.getAttribute("aria-pressed");

        if (autoPlayState === "false") {
          autoPlayBtn.setAttribute("aria-pressed", "true");
          thisSlide.autoplay.stop();
        } else if (autoPlayState === "true") {
          autoPlayBtn.setAttribute("aria-pressed", "false");
          thisSlide.autoplay.start();
        }
      });
    },
  },
});

const eventSwiper = new Swiper(".event", {
  slidesPerView: "auto",
  spaceBetween: 8,
  keyboard: {
    enabled: true,
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//-------------------------------------------------------------------------
// const autoPlayBtn = document.querySelector(
//   ".wrap-autoplay-control > button"
// );

// const autoPlayState =
//   autoPlayBtn.getAttribute("aria-pressed");

// autoPlayBtn.addEventListener("click", () => {
//   if (autoPlayState === "false") {
//     autoPlayBtn.setAttribute("aria-pressed", "true");
//     swiper.autoplay.stop();
//   } else {
//     autoPlayBtn.setAttribute("aria-pressed", "false");
//     swiper.autoplay.start();
//   }
// });

// autoPlayBtn.addEventListener("click", function () {
//   swiper.autoPlayBtn.start();
//   return false;
// });
