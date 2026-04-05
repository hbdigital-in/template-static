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

// --- Contact form: async submit with loading state ---
// Shows "Sending..." while submitting and "Message Sent!" on success.
// Falls back gracefully if form is not present on the page.
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        btn.textContent = 'Message Sent!';
        form.reset();
        setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
      } else {
        btn.textContent = 'Try Again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  });
}

// --- Gallery filter (active when .filter-btn and .gallery-item elements exist) ---
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
if (filterBtns.length && galleryItems.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
      });
    });
  });
}

// --- Scroll reveal (elements with class .reveal animate in on scroll) ---
// Add class="reveal" to any element you want to fade/slide in.
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObserver.observe(el));
}
