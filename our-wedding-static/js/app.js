// Countdown Timer for June 5, 2026
const countdownEl = document.getElementById('countdown');
const weddingDate = new Date('June 5, 2026 00:00:00');

function updateCountdown() {
  if (!countdownEl) return;
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    countdownEl.textContent = "It's the big day!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Simple RSVP feedback (local only)
const form = document.getElementById('rsvp-form');
if (form) {
  const statusEl = document.getElementById('form-status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    statusEl.textContent = 'Thank you! Your RSVP has been received.';
    form.reset();
  });
}
