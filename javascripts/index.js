parallaxPlusPlus();
parallaxMinusMinus();
parallaxPlusMinus();
parallaxMinusPlus();
parallaxPlusPlus2();
parallaxPlusMinus2();
parallaxMinusPlus2();
parallaxMinusMinus2();
parallaxPlusPlus3();
parallaxMinusMinus3();
parallaxPlusMinus3();
parallaxMinusPlus3();
parallaxPlusPlus4();
parallaxcursor();

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
    let x = (event.clientX / window.innerWidth) * 0.5;
    let y = (event.clientY / window.innerHeight) * 0.5;

    parallaxPlusPlus2.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxPlusMinus2() {
  let parallaxPlusMinus2 = document.querySelector('#parallaxPlusMinus2');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * 0.5;
    let y = (event.clientY / window.innerHeight) * -0.5;

    parallaxPlusMinus2.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxMinusPlus2() {
  let parallaxMinusPlus2 = document.querySelector('#parallaxMinusPlus2');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * -0.5;
    let y = (event.clientY / window.innerHeight) * 0.5;

    parallaxMinusPlus2.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxMinusMinus2() {
  let parallaxMinusMinus2 = document.querySelector('#parallaxMinusMinus2');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * -0.5;
    let y = (event.clientY / window.innerHeight) * -0.5;

    parallaxMinusMinus2.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxPlusPlus3() {
  let parallaxPlusPlus3 = document.querySelector('#parallaxPlusPlus3');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * 0.4;
    let y = (event.clientY / window.innerHeight) * 0.4;

    parallaxPlusPlus3.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxPlusMinus3() {
  let parallaxPlusMinus3 = document.querySelector('#parallaxPlusMinus3');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * 0.4;
    let y = (event.clientY / window.innerHeight) * -0.4;

    parallaxPlusMinus3.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxMinusPlus3() {
  let parallaxMinusPlus3 = document.querySelector('#parallaxMinusPlus3');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * -0.4;
    let y = (event.clientY / window.innerHeight) * 0.4;

    parallaxMinusPlus3.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxMinusMinus3() {
  let parallaxMinusMinus3 = document.querySelector('#parallaxMinusMinus3');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * -0.4;
    let y = (event.clientY / window.innerHeight) * -0.4;

    parallaxMinusMinus3.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxPlusPlus4() {
  let parallaxPlusPlus = document.querySelector('#parallaxPlusPlus4');

  document.addEventListener('mousemove', (event) => {
    let x = (event.clientX / window.innerWidth) * 0.6;
    let y = (event.clientY / window.innerHeight) * 0.5;

    parallaxPlusPlus.style.transform = `translate(${x}vw, ${y}vw)`;
  });
}

function parallaxcursor() {
  const parallaxcursor = document.getElementById('parallaxcursor');

  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let speed = 0.035;
    parallaxcursor.style.transform = `translateX(${scroll * speed}vw)`;
  });
}
