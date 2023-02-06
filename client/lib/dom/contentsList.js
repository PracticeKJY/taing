import { insertLast } from "./insert.js";

export const createContents = ({
  id = "",
  name = "",
  image = "",
} = {}) => {
  return /* html */ `
    <div class="swiper-slide" data-index="mainVisual${id}">
      <div class="swiper-contents">
        <div class="text-wrap">
          <p>${name}</p>
          <a href="#" class="test001">자세히보기</a>
        </div>
        <picture>
          <source
          media="(min-width:320px) and (max-width: 767px)"
            srcset="
              ${image["mobile"]}
            "
          />
          <source
          media="(min-width:768px) and (max-width: 1199px)"
            srcset="
            ${image["tablet"]}
            "
          />
          <img
            src="${image["desktop"]}"
            alt="${image["alt"]}"
          />
        </picture>
      </div>
    </div>
`;
};

export const renderContents = (target, data) => {
  insertLast(target, createContents(data));
};
