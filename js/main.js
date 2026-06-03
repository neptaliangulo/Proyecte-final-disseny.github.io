/* ─── SweetAlert2 — Formulari de contacte ─────── */
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name    = document.getElementById('contactName').value.trim();
  const email   = document.getElementById('contactEmail').value.trim();
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value.trim();

  // Validació: camps buits
  if (!name || !email || !subject || !message) {
    Swal.fire({
      icon: 'warning',
      title: 'Camps buits',
      text: 'Si us plau, omple tots els camps obligatoris.',
      confirmButtonColor: '#c9a84c',
      background: '#f5f0e8',
      color: '#2d2d2d'
    });
    return;
  }

  // Validació: format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Correu no vàlid',
      text: 'Introdueix una adreça de correu electrònic correcta.',
      confirmButtonColor: '#c9a84c',
      background: '#f5f0e8',
      color: '#2d2d2d'
    });
    return;
  }

  // Èxit — emulació d'enviament
  Swal.fire({
    icon: 'success',
    title: '¡Missatge enviat!',
    html: `Gràcies, <strong>${name}</strong>!<br/>
           Et respondrem a <em>${email}</em> en menys de 48 hores.`,
    confirmButtonText: 'Perfecte',
    confirmButtonColor: '#1a1a2e',
    background: '#f5f0e8',
    color: '#2d2d2d'
  });

  this.reset();
});

/* ─── Navbar scroll effect ───────────────────── */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.style.padding = '0.5rem 2rem';
  } else {
    navbar.style.padding = '1rem 2rem';
  }
});
