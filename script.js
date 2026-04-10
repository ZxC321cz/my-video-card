const btn = document.getElementById("play-btn");
const iframe = document.getElementById("bg-video");
const content = document.getElementById("overlay-card");
const overlay = document.querySelector(".overlay");
const videoLayer = document.getElementById("video-layer");

const videoUrl =
    "https://www.youtube.com/embed/1gfDZ6YojGk?autoplay=1&mute=1&controls=1&loop=1&playlist=1gfDZ6YojGk&rel=0&modestbranding=1";

btn.addEventListener("click", () => {
    if (!iframe.getAttribute("src")) {
        iframe.src = videoUrl;
    }

    content.classList.add("hidden");
    overlay.classList.add("is-bright");
    videoLayer.classList.add("is-active");

    setTimeout(() => {
        overlay.classList.add("is-hidden");
    }, 700);
});