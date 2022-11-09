const formControl = (() => {
  const openForm = document.querySelector(".openform");
  const modalClose = document.querySelector(".modal-close");
  const formModal = document.querySelector(".modal-bg");

  openForm.addEventListener("click", (e) => {
    formModal.classList.add("active");
  });

  modalClose.addEventListener("click", (e) => {
    formModal.classList.remove("active");
  });
})();
