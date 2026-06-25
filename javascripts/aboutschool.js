parallaxPlusPlus();
parallaxMinusMinus();
parallaxPlusMinus();
parallaxMinusPlus();
parallaxPlusPlus2();
parallaxPlusMinus2();
parallaxvisibility();
parallaxcircle();
parallaxcut();
slider();
// moveEventsOnScroll();

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

function parallaxPlusPlus2() {
  let parallaxPlusPlus2 = document.querySelector('#parallaxPlusPlus2');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * 0.6;
    let y = (event.clientY / window.innerHeight) * 0.6;

    parallaxPlusPlus2.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxPlusMinus2() {
  let parallaxPlusMinus2 = document.querySelector('#parallaxPlusMinus2');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * -0.6;
    let y = (event.clientY / window.innerHeight) * 0.6;

    parallaxPlusMinus2.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxvisibility() {
  const item = document.querySelector('.visibility');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const startScroll = 300;
    const stopScroll = 380;

    if (scrollY < startScroll) {
      item.style.transform = `translate(0vw, 0vw)`;
      return;
    }

    const progress = Math.min(scrollY - startScroll, stopScroll - startScroll);

    const moveX = progress * 0.01;
    const moveY = progress * -0.01;

    item.style.transform = `translate(${moveX}vw, ${moveY}vw)`;
  });
}

function parallaxcircle() {
  const item = document.querySelector('.circle');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const startScroll = 300;
    const stopScroll = 380;

    if (scrollY < startScroll) {
      item.style.transform = `translate(0vw, 0vw)`;
      return;
    }

    const progress = Math.min(scrollY - startScroll, stopScroll - startScroll);

    const moveX = progress * 0.005;
    const moveY = progress * -0.01;

    item.style.transform = `translate(${moveX}vw, ${moveY}vw)`;
  });
}

function parallaxcut() {
  const item = document.querySelector('.cut');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const startScroll = 300;
    const stopScroll = 380;

    if (scrollY < startScroll) {
      item.style.transform = `translate(0vw, 0vw)`;
      return;
    }

    const progress = Math.min(scrollY - startScroll, stopScroll - startScroll);

    const moveX = progress * -0.01;
    const moveY = progress * -0.01;

    item.style.transform = `translate(${moveX}vw, ${moveY}vw)`;
  });
}

// function moveEventsOnScroll() {
//   const eventsPart = document.querySelector('.events-part');
//   const eventLinks = document.querySelectorAll('.events-part .second-part a');

//   const startMove = 50;
//   const endMove = 0;

//   function updateEventsPosition() {
//     const sectionTop = eventsPart.offsetTop;
//     const sectionHeight = eventsPart.offsetHeight;
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;

//     const startScroll = sectionTop - windowHeight;
//     const endScroll = sectionTop + sectionHeight / 30;

//     let progress = (scrollY - startScroll) / (endScroll - startScroll);

//     if (progress < 0) {
//       progress = 0;
//     }

//     if (progress > 1) {
//       progress = 1;
//     }

//     const moveX = startMove + progress * (endMove - startMove);

//     eventLinks.forEach(function (link, index) {
//       const extraMove = index * 1.5;
//       link.style.transform = `translateX(${moveX + extraMove}vw)`;
//     });
//   }

//   window.addEventListener('scroll', updateEventsPosition);
//   updateEventsPosition();
// }

function slider() {
  const slides = [
    'images/for-about-school/place1.png',
    'images/for-about-school/place2.png',
    'images/for-about-school/place3.png'
  ];

  let currentSlide = 0;

  const slideImage = document.querySelector('#slideImage');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  function showSlide(index) {
    slideImage.src = slides[index];
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  showSlide(currentSlide);
}
