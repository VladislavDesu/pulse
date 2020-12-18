function catalogFilter(filter) {
   catalogListItems.forEach((item) => {
      if (!item.classList.contains(`catalog__list-item-${filter}`)) {
         item.classList.remove("catalog__list-item--active");
      } else {
         item.classList.add("catalog__list-item--active");
      }
   })
};

const catalog = document.querySelector(".catalog");
const catalogTabs = catalog.querySelector(".catalog__tabs");
const tabsList = catalogTabs.querySelectorAll(".catalog__tab");
const catalogList = catalog.querySelector(".catalog__list");
const catalogListItems = catalogList.querySelectorAll(".catalog__list-item");


tabsList.forEach((tab) => {
      tab.addEventListener("click", () => {
      tabsList.forEach((e) => e.classList.remove('catalog__tab--active'));
      tabsList.forEach((e) => e.disabled = false);
      tab.classList.add("catalog__tab--active");
      tab.disabled = true;

      catalogFilter(tab.dataset.filter);
   })
});