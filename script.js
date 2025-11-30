
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const shown = navList.style.display === 'flex';
      navList.style.display = shown ? 'none' : 'flex';
    });
  }

  const slides = Array.from(document.querySelectorAll('.slide'));
  let cur = 0;
  const show = (i) => {
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
  };

  document.getElementById('next').addEventListener('click', () => {
    cur = (cur + 1) % slides.length;
    show(cur);
  });
  document.getElementById('prev').addEventListener('click', () => {
    cur = (cur - 1 + slides.length) % slides.length;
    show(cur);
  });

  setInterval(() => {
    cur = (cur + 1) % slides.length;
    show(cur);
  }, 5000);

  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const btn = document.getElementById('contact-send');
  btn.addEventListener('click', () => {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const msg = document.getElementById('contact-message').value.trim();

    if (!name || !email || !msg) {
      feedback.textContent = 'Por favor completa todos los campos.';
      return;
    }
    
    feedback.textContent = 'Mensaje enviado. Gracias, ' + name + '!';
    form.reset();

    setTimeout(()=> feedback.textContent = '', 5000);
  });
});
