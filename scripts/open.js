// BLOQUEAR SCROLL INICIAL
document.body.style.overflow = "hidden";

// =======================
// ENTRAR AL SITIO
// =======================
function enterSite() {
  const intro = document.getElementById("intro");
  const hero = document.querySelector(".hero");
  const music = document.getElementById("music");

  /* =========================
     ABRIR CARTA
  ========================= */
  intro.classList.add("open");

  /* =========================
     HERO REVEAL
  ========================= */
  setTimeout(() => {
    hero.classList.add("show-hero");
    document.body.style.overflow = "auto";
    document
      .querySelectorAll(".hero .fade")
      .forEach(el => {
        el.classList.add("show");
      });
  }, 1200);

  /* =========================
     OCULTAR INTRO
  ========================= */
  setTimeout(() => {
    intro.style.opacity = "0";
  }, 1700);

  setTimeout(() => {
    intro.style.display = "none";
  }, 2600);

  /* =========================
     MUSIC FADE IN
  ========================= */
  if (music) {
    music.volume = 0;
    music.play();
    let volume = 0;
    const fadeAudio = setInterval(() => {
      if (volume < 0.4) {
        volume += 0.02;
        music.volume = volume;
      } else {
        clearInterval(fadeAudio);
      }
    }, 100);
  }
}