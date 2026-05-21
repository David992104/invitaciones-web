// BLOQUEAR SCROLL INICIAL
document.body.style.overflow = "hidden";

// =======================
// ENTRAR AL SITIO
// =======================

function enterSite(){

  const intro =
    document.getElementById("intro");

  const hero =
    document.querySelector(".hero");

  const music =
    document.getElementById("music");

  /* =========================
     ABRIR CARTA
  ========================= */

  intro.classList.add("open");

  /* =========================
     HERO REVEAL
  ========================= */

  setTimeout(()=>{

    hero.classList.add("show-hero");

    document.body.style.overflow = "auto";

    document
      .querySelectorAll(".hero .fade")
      .forEach(el=>{

        el.classList.add("show");

      });

  },1200);

  /* =========================
     OCULTAR INTRO
  ========================= */

  setTimeout(()=>{

    intro.style.opacity = "0";

  },1700);

  setTimeout(()=>{

    intro.style.display = "none";

  },2600);

  /* =========================
     MUSIC FADE IN
  ========================= */

  if(music){

    music.volume = 0;

    music.play();

    let volume = 0;

    const fadeAudio = setInterval(()=>{

      if(volume < 0.4){

        volume += 0.02;

        music.volume = volume;

      }else{

        clearInterval(fadeAudio);
      }

    },100);
  }
}

// =======================
// MUSICA
// =======================

const music = document.getElementById("music");

function toggleMusic(){

  if(music.paused){

    music.play();

  }else{

    music.pause();

  }

}

// =======================
// COUNTDOWN
// =======================

const countdown = document.getElementById("countdown");
const eventDate = new Date("Oct 17, 2026 16:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  countdown.innerHTML = `
    Faltan <span>${days}</span> días
    <br>
    <small>${hours} horas</small>
  `;

}, 1000);

// =======================
// SCROLL ANIMATIONS
// =======================

const observer =
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold:.5
  });

document
  .querySelectorAll(".section")
  .forEach(section => {
    observer.observe(section);
  });

document
  .querySelectorAll(".section .fade")
  .forEach(el => {
    observer.observe(el);
  });
