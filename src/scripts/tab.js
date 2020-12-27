function catalogFilter(filter) {
   catalogListItem.forEach((item) => {
      if (!item.classList.contains(`catalog__list-item-${filter}`)) {
         item.classList.remove("catalog__list-item--active");
      } else {
         item.classList.add("catalog__list-item--active");
      }
   })
};

const catalogContainer = document.querySelector(".catalog");
const catalogTabs = catalogContainer.querySelector(".catalog__tabs");
const tabsList = catalogTabs.querySelectorAll(".catalog__tab");
const catalogLists = catalogContainer.querySelector(".catalog__list");
const catalogListItem = catalogLists.querySelectorAll(".catalog__list-item");

tabsList.forEach((tab) => {
      tab.addEventListener("click", () => {
      tabsList.forEach((e) => e.classList.remove('catalog__tab--active'));
      tabsList.forEach((e) => e.disabled = false);
      tab.classList.add("catalog__tab--active");
      tab.disabled = true;

      catalogFilter(tab.dataset.filter);
   })
});