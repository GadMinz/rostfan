const openModal = document.querySelector(".modal_open");
const modal = document.querySelector(".modal");
const title = document.querySelector(".modal_title");
const desc = document.querySelector(".modal_desc");

title.innerHTML = modal.getAttribute('data-modal-title')
desc.innerHTML = modal.getAttribute('data-modal-desc')

openModal.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener('click', (e) => {
  if(e.target === modal) modal.close()
})


