document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
    let progress = 0;
    const interval = setInterval(() => {
        progress +=10;
        progressBar.style.width = progress + "%";
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 500);
});