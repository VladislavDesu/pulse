function ButtonsClick(btns, modal) {
   btns.forEach( (btn) => {
      btn.addEventListener("click", (i) => {
         i.preventDefault();
         modal.classList.toggle("modal--active");
      });
   });
}

function FormsSubmit(form, modal, thank) {
   form.addEventListener('submit', (e) => {
      e.preventDefault();
      modal.classList.remove("modal--active");
      thank.classList.toggle("modal--active");
   });
}

const consultation = document.querySelector(".consultation");
const consultationForm = consultation.querySelector(".consultation__form");

const modalConsultation = document.querySelector(".modal-consultation");
const modalOrder = document.querySelector(".modal-order");
const modalThanks = document.querySelector(".modal-thanks");

const btnOpenConsultation = document.querySelectorAll("[data-modal=consultation]");
const catalogBtnBuy = document.querySelectorAll(".catalog__list-btn");
const btnOrderBuy = modalOrder.querySelectorAll(".modal__btn");

const btnCloseConsultation = modalConsultation.querySelectorAll(".modal__btn-close");
const btnCloseOrder = modalOrder.querySelectorAll(".modal__btn-close");
const btnCloseThanks = modalThanks.querySelectorAll(".modal__btn-close");

const modalFormOrder = modalOrder.querySelector(".modal__form");
const modalFormConsultation = modalConsultation.querySelector(".modal__form");

ButtonsClick(btnOpenConsultation, modalConsultation);
ButtonsClick(catalogBtnBuy, modalOrder);

ButtonsClick(btnCloseConsultation, modalConsultation);
ButtonsClick(btnCloseOrder, modalOrder);
ButtonsClick(btnCloseThanks, modalThanks);

FormsSubmit(modalFormOrder, modalOrder, modalThanks);
FormsSubmit(modalFormConsultation, modalConsultation, modalThanks);
FormsSubmit(consultationForm, modalConsultation, modalThanks);