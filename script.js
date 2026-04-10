const btn = document.getElementById("play-btn");
const iframe = document.getElementById("bg-video");
const content = document.getElementById("overlay-card");
const overlay = document.querySelector(".overlay");
const videoLayer = document.getElementById("video-layer");

const videoUrl =
    "https://www.youtube.com/embed/S3agERkvEjo";

function sendPlayerCommand(func, args = []) {
    if (!iframe.contentWindow) {
        return;
    }

    iframe.contentWindow.postMessage(
        JSON.stringify({
            event: "command",
            func,
            args
        }),
        "*"
    );
}

function setStartVolume() {
    sendPlayerCommand("setVolume", [20]);
    sendPlayerCommand("unMute");
    sendPlayerCommand("playVideo");
}

btn.addEventListener("click", () => {
    if (!iframe.getAttribute("src")) {
        iframe.src = videoUrl;
        iframe.addEventListener(
            "load",
            () => {
                setTimeout(setStartVolume, 350);
            },
            { once: true }
        );
    } else {
        setStartVolume();
    }

    content.classList.add("hidden");
    overlay.classList.add("is-bright");
    videoLayer.classList.add("is-active");

    setTimeout(() => {
        overlay.classList.add("is-hidden");
        setStartVolume();
    }, 700);
});
