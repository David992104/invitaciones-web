// =======================
// MUSICA
// =======================
const music = document.getElementById("music");
function toggleMusic() {
  const music = document.getElementById("music");
  const btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play();
    btn.innerHTML = "🎵";
    btn.classList.remove("paused");
  } else {
    music.pause();
    btn.innerHTML = "🎼";
    btn.classList.add("paused");
  }
}

document.addEventListener("visibilitychange", () => {
  const music = document.getElementById("music");
  const btn = document.getElementById("musicBtn");
  if(document.hidden){
    if(!music.paused){
      music.pause();
      btn.innerHTML = "🎼";
      btn.classList.add("paused");
    }
  }
});
