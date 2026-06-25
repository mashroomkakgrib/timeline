showModalWindow();
parallaxPlusPlus();
parallaxMinusMinus();
parallaxPlusMinus();
parallaxMinusPlus();

function parallaxPlusPlus() {
  let parallaxPlusPlus = document.querySelector('#parallaxPlusPlus');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * 0.6;
    let y = (event.clientY / window.innerHeight) * 0.6;

    parallaxPlusPlus.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxMinusMinus() {
  let parallaxMinusMinus = document.querySelector('#parallaxMinusMinus');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * -0.6;
    let y = (event.clientY / window.innerHeight) * -0.6;

    parallaxMinusMinus.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxPlusMinus() {
  let parallaxPlusMinus = document.querySelector('#parallaxPlusMinus');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * 0.6;
    let y = (event.clientY / window.innerHeight) * -0.6;

    parallaxPlusMinus.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxMinusPlus() {
  let parallaxMinusPlus = document.querySelector('#parallaxMinusPlus');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * -0.6;
    let y = (event.clientY / window.innerHeight) * 0.6;

    parallaxMinusPlus.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function showModalWindow() {
  const eventCards = document.querySelectorAll('[data-modal]');
  const closeButtons = document.querySelectorAll('.modal-close');
  const modals = document.querySelectorAll('.modal');

  function openModal(modalId) {
    const modal = document.querySelector('#' + modalId);

    modal.classList.add('open');
  }

  function closeModal(modal) {
    modal.classList.remove('open');
  }

  function openModalByCardClick() {
    const modalId = this.dataset.modal;

    openModal(modalId);
  }

  function closeModalByButtonClick(event) {
    event.stopPropagation();

    const modal = this.closest('.modal');

    closeModal(modal);
  }

  eventCards.forEach(function (card) {
    card.addEventListener('click', openModalByCardClick);
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', closeModalByButtonClick);
  });

  // modals.forEach(function (modal) {
  //   modal.addEventListener('click', closeModalByOverlayClick);
  // });

  // document.addEventListener('keydown', closeModalByEscape);
}
