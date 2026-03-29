// ============================================
// HBDigital — Starter Template JS
// Uncomment / extend sections as needed per client.
// ============================================

// --- Current year in footer ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Navbar: shadow on scroll ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Contact form: success message (optional enhancement) ---
// Formspree handles the submission. Uncomment below to show a thank-you
// message instead of redirecting to Formspree's default page.
//
// const form = document.querySelector('.contact-form');
// if (form) {
//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const data = new FormData(form);
//     const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
//     if (res.ok) {
//       form.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--color-accent);font-weight:600;">Thank you! We\'ll be in touch shortly.</p>';
//     }
//   });
// }

// --- Gallery filter (uncomment if adding a gallery section) ---
// const filterBtns = document.querySelectorAll('.filter-btn');
// const galleryItems = document.querySelectorAll('.gallery-item');
// filterBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     filterBtns.forEach(b => b.classList.remove('active'));
//     btn.classList.add('active');
//     const filter = btn.dataset.filter;
//     galleryItems.forEach(item => {
//       item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
//     });
//   });
// });
