(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    document.getElementById('videoFrameClose').src = "not.found/404";
    document.getElementById('videoFrameOpen').src = "https://www.youtube.com/embed/sqbGisHfNBo";
    refs.modal.classList.toggle('is-hidden');
  }
})();