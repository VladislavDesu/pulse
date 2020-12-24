const catalog = document.querySelector(".catalog");
const catalogList = catalog.querySelector(".catalog__list");
const catalogListItems = catalogList.querySelectorAll(".catalog__list-item");
const catalogBtnMore = catalogList.querySelectorAll(".catalog__list-more-btn");
const catalogBtnBack = catalogList.querySelectorAll(".catalog__list-back-btn");
const catalogInfo = catalogList.querySelectorAll(".catalog__list-info-inner");

for(let count = 0; count < catalogBtnMore.length; count++) {
   catalogBtnMore[count].addEventListener("click", (i) => {
      i.preventDefault();
      catalogInfo[count].classList.add("catalog__list-info-inner--active");
   });
   catalogBtnBack[count].addEventListener("click", (i) => {
      i.preventDefault();
      catalogInfo[count].classList.remove("catalog__list-info-inner--active");
   });
}