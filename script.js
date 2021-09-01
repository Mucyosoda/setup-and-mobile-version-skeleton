const menuBtn = document.querySelector('.menu');
const navWrap = document.querySelector('.nav-bar');
const closeIcon = document.getElementById('close-icon');
const seeProjectBtn = document.querySelectorAll('.see-btn');
const displayMsg = document.querySelector('.pop-msg-1');
const overlayBackground = document.querySelector('.overlay');
const closepop = document.querySelector('.closeX');
const closeFunction = function () {
  displayMsg.classList.add('d-none');
  overlayBackground.classList.add('d-none');
};

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('d-none');
  closeIcon.classList.toggle('d-none');
  navWrap.classList.add('d-block');
  navWrap.classList.add('open');
});

closeIcon.addEventListener('click', () => {
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.toggle('d-none');
});

for (let i = 0; i < seeProjectBtn.length; i += 1) {
  seeProjectBtn[i].addEventListener('click', () => {
    displayMsg.classList.remove('d-none');
    overlayBackground.classList.remove('d-none');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}
closepop.addEventListener('click', closeFunction);

/* Add Scroolspy */
const portfolioLink = document.getElementById('portfolio-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');
// Call Sections
const header = document.getElementById('header');
const headlineSection = document.getElementById('headline');
const portfolioSection = document.getElementById('works');
const aboutSection = document.getElementById('about');

portfolioLink.addEventListener('click', () => {
  navWrap.classList.remove('open');
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  window.scrollTo(0, header.clientHeight
  + headlineSection.clientHeight);
});

aboutLink.addEventListener('click', () => {
  navWrap.classList.remove('open');
  navWrap.classList.remove('d-block');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  window.scrollTo(
    0,
    header.clientHeight
    + headlineSection.clientHeight
    + portfolioSection.clientHeight,
  );
});

contactLink.addEventListener('click', () => {
  navWrap.classList.remove('open');
  menuBtn.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  navWrap.classList.remove('d-block');
  window.scrollTo(
    0,
    header.clientHeight
     + headlineSection.clientHeight
      + portfolioSection.clientHeight
      + aboutSection.clientHeight,
  );
});
