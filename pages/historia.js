const d = document;

const btnPlay = d.querySelector(".boton-play"),
      btnPause = d.querySelector(".boton-pause"),
      video = d.querySelector("video");

      


btnPlay.addEventListener("click", () => {
    /* console.log("Presione play") */
    video.play();
})

btnPause.addEventListener("click", e => {
    /* console.log("Presione pause") */
    video.pause();
})