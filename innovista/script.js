const reveals = document.querySelectorAll('.reveal');


const revealOnScroll = () => {
const triggerBottom = window.innerHeight * 0.85;


reveals.forEach(el => {
const boxTop = el.getBoundingClientRect().top;
if (boxTop < triggerBottom) {
el.classList.add('active');
}
});
};


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const projectCards = document.querySelector('.project-cards');


const revealProjects = () => {
const triggerBottom = window.innerHeight * 0.85;
const boxTop = projectCards.getBoundingClientRect().top;
if (boxTop < triggerBottom) projectCards.classList.add('active');
};


window.addEventListener('scroll', revealProjects);
revealProjects();




const typingEl = document.getElementById("typing-text");
const text = "Coding & Digital Skills Education";


let index = 0;
let isDeleting = false;


function typeLoop() {
if (!isDeleting) {
typingEl.textContent = text.substring(0, index + 1);
index++;


if (index === text.length) {
setTimeout(() => (isDeleting = true), 1500);
}
} else {
typingEl.textContent = text.substring(0, index - 1);
index--;


if (index === 0) {
isDeleting = false;
}
}

const speed = isDeleting ? 50 : 80;
setTimeout(typeLoop, speed);
}


typeLoop();