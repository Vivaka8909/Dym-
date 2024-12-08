const music = document.getElementById("backgroundMusic");
const musicToggleBtn = document.getElementById("musicToggleBtn");

musicToggleBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggleBtn.innerText = "🔇 Вимкнути музику";
    } else {
        music.pause();
        musicToggleBtn.innerText = "🎵 Увімкнути музику";
    }
});

const themeToggleBtn = document.getElementById("themeToggleBtn");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});


