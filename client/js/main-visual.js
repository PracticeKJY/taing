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
// const swiper = new Swiper(".mySwiper", {
//   autoplay: true,
//   loop: true,
//   speed: 2000,
//   parallax: true,
//   mousewheel: true,
//   keyboard: true,
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: "swiper.pagination",
//     bulletClass: "bullet",
//     bulletActiveClass: "is-active",
//     renderBullet: function (index, className) {
//       return /* html */ `
//         <span class="${className}">
//           <img src="../assets/${data[index].src}" alt="${data[index].alt}" />
//         </span>
//       `;
//     },
//   },
// });

// const swiper = new Swiper(".mySwiper", {
//   loop: true,
//   direction: "horizontal",
// });

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 8,
//   keyboard: {
//     enabled: true,
//   },
//   loop: false,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const video = Array.from(document.querySelector('.video'));
// const autoPlayBtn = document.querySelector(
//   ".wrap-autoplay-control > button"
// );

// const autoPlayState =
//   autoPlayBtn.getAttribute("aria-pressed");

// const swiper = new Swiper(".mySwiper", {
//   // cssMode: true,
//   loop: true,
//   // spaceBetwwen: 100,
//   // parallax: true,
//   speed: 1500,
//   // slidesPerView: 1 ,
//   autoplay: {
//     delay: 2000,
//     // disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   on: {
//     init: function () {
//       autoPlayBtn.addEventListener("click", () => {
//         if (autoPlayState === "false") {
//           autoPlayBtn.setAttribute("aria-pressed", "true");
//           swiper.autoplay.stop();
//         } else if (autoPlayState === "true") {
//           autoPlayBtn.setAttribute("aria-pressed", "false");
//           swiper.autoplay.start();
//         }
//       });
//     },
//   },
//   // mousewheel: true,
//   keyboard: true,
// });
// ---------------------------------------------------------------------

// let thisSlide;

const autoPlayBtn = document.querySelector(
  ".wrap-autoplay-control > button"
);

const thisSlide = new Swiper(".mySwiper", {
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
      autoPlayBtn.addEventListener("click", (e) => {
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
