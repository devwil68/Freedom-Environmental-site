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
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/freedom-enviro@mail.grokbot.com';
const submitButton = form.querySelector('button[type="submit"]');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please complete the required fields before sending your request.';
    form.reportValidity();
    return;
  }
  const formData = new FormData(form);
  const material = formData.get('material');
  const restricted = ['Roofing shingles', 'Concrete, dirt, brick, tile, or asphalt', 'Other / not sure'];
  const payload = Object.fromEntries(formData.entries());
  payload.consent = formData.get('consent') ? 'Yes' : 'No';
  payload._subject = 'New quote request - Freedom Enviro';
  payload._template = 'table';
  payload._captcha = 'false';
  payload._replyto = payload.email;

  const originalLabel = submitButton ? submitButton.textContent : '';
  if (submitButton) { submitButton.disabled = true; submitButton.textContent = 'Sending...'; }
  status.textContent = 'Sending your request...';
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || String(result.success) === 'false') throw new Error(result.message || 'Request failed');
    status.textContent = restricted.includes(material)
      ? "Thanks! Your request was sent. This material requires owner review, so we'll follow up before any booking is confirmed."
      : "Thanks! Your request was sent. We'll be in touch shortly.";
    form.reset();
  } catch (error) {
    status.textContent = 'Sorry, something went wrong sending your request. Please try again or email us at info@freedom-enviro.com.';
  } finally {
    if (submitButton) { submitButton.disabled = false; submitButton.textContent = originalLabel; }
  }
});
