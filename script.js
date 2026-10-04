const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('booking-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please complete the required fields before sending your request.';
    form.reportValidity();
    return;
  }
  const material = new FormData(form).get('material');
  const restricted = ['Roofing shingles', 'Concrete, dirt, brick, tile, or asphalt', 'Other / not sure'];
  status.textContent = restricted.includes(material)
    ? 'Thank you. This material requires owner review. Liberty will follow up before any booking is confirmed.'
    : 'Thank you. Your request has been prepared for review. Connect this form to your email or booking platform before launching live.';
  form.reset();
});