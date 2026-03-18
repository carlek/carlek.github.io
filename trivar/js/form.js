// ── Contact Form Validation ───────────────────────────────────
const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll('[required]');
    let valid = true;

    fields.forEach(field => {
      const group = field.closest('.form__group');
      const existing = group.querySelector('.form__error');
      if (existing) existing.remove();

      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = '#ef4444';
        const err = document.createElement('span');
        err.className = 'form__error';
        err.textContent = 'This field is required.';
        err.style.cssText = 'font-size:0.7rem;color:#ef4444;margin-top:3px;font-family:var(--font-mono);';
        group.appendChild(err);
      } else {
        field.style.borderColor = '';
      }
    });

    if (valid) {
      // Replace with real form submission (e.g. Netlify Forms, Formspree, EmailJS)
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message Sent ✓';
      btn.disabled = true;
      btn.style.background = '#22c55e';
      form.reset();
    }
  });
}
