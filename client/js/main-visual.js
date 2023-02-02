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

const swiper = new Swiper(".mySwiper", {
  // cssMode: true,
  loop: true,
  // parallax: true,
  slidesPerView: 1,
  autoplay: {
    delay: 7000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // mousewheel: true,
  keyboard: true,
});
