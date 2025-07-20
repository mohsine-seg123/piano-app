const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");

let allKeys = [];

const playTune = (key) => {
    const audio = new Audio(`${key}.mp3`);
    audio.volume = volumeSlider.value;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (!clickedKey) return;

    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // stocker la liste des touches disponibles
    key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", e => {
    if (allKeys.includes(e.key)) {
        playTune(e.key);
    }
});
