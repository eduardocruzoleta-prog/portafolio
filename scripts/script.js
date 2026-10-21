// ===== Modo claro / oscuro =====
document.getElementById('theme-btn').addEventListener('click', () => {
  const root = document.documentElement;
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
});

// ===== Menú móvil =====
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
// Cierra el menú al elegir una sección
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});