const catalog = document.querySelector(".catalog");
const catalogList = catalog.querySelector(".catalog__list");
const catalogListItems = catalogList.querySelectorAll(".catalog__list-item");
const catalogBtnMore = catalogList.querySelectorAll(".catalog__list-more-btn");
const catalogBtnBack = catalogList.querySelectorAll(".catalog__list-back-btn");

catalogBtnMore.forEach( (btn) => {
   btn.addEventListener("click", (i) => {
      i.preventDefault();
      btn.nextSibling.nextSibling.classList.add("catalog__list-info-inner--active");
   });
});

catalogBtnBack.forEach( (btn) => {
   btn.addEventListener("click", (i) => {
      i.preventDefault();
      btn.parentElement.classList.remove("catalog__list-info-inner--active");
   });
});