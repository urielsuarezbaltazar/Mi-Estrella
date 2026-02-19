const paragraphs = document.querySelectorAll('.poem p');
const musicBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-music');
const wishBtn = document.getElementById('wish-btn');
const finalMessage = document.getElementById('final-message');
const shootingStar = document.querySelector('.shooting-star');

let musicPlaying = false;

/* Fade-in al hacer scroll */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

paragraphs.forEach(p => observer.observe(p));

/* Música */
musicBtn.addEventListener('click', () => {
    if (!musicPlaying) {
        audio.play();
        musicBtn.textContent = "Pausar música";
        musicPlaying = true;
    } else {
        audio.pause();
        musicBtn.textContent = "Activar música";
        musicPlaying = false;
    }
});

/* Estrella fugaz ocasional */
function triggerShootingStar() {
    shootingStar.style.top = "-100px";
    shootingStar.style.left = Math.random() * window.innerWidth + "px";
    shootingStar.style.opacity = 1;
    shootingStar.style.transition = "all 1s linear";
    shootingStar.style.top = "100vh";
    shootingStar.style.left = (Math.random() * window.innerWidth) + "px";

    setTimeout(() => {
        shootingStar.style.opacity = 0;
    }, 1000);
}

setInterval(triggerShootingStar, 15000);

/* Botón final */
wishBtn.addEventListener('click', () => {
    finalMessage.style.opacity = 1;
    wishBtn.style.display = "none";
});
