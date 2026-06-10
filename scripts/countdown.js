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
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div class="countdown-container">
    <div class="countdown-card">
      <span class="count-number">${days}</span>
      <span class="count-label">Días</span>
    </div>
    <div class="countdown-card">
      <span class="count-number">${hours}</span>
      <span class="count-label">Horas</span>
    </div>
    <div class="countdown-card">
      <span class="count-number">${minutes}</span>
      <span class="count-label">Min</span>
    </div>
    <div class="countdown-card">
      <span class="count-number">${seconds}</span>
      <span class="count-label">Sec</span>
    </div>
  </div>
`;

}, 1000);