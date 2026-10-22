// ===== Traducciones =====
// El español se toma del propio HTML; aquí solo van inglés y francés.
// Si cambias un texto en index.html, cambia también su clave aquí.
const translations = {
  en: {
    'meta.title': 'Eduardo Cruz Oleta | Portfolio',
    langLabel: 'Language',
    'nav.sobreMi': 'About me',
    'nav.habilidades': 'Skills',
    'nav.proyectos': 'Projects',
    'nav.certificaciones': 'Certifications',
    'nav.contacto': 'Contact',
    'hero.saludo': "Hi, I'm",
    'hero.rol': 'Front-End Web Developer',
    'hero.descripcion': 'Information Technology Engineering student at the Polytechnic University of Sinaloa. I build accessible, fast websites that adapt to any screen.',
    'hero.verCV': 'View CV (PDF)',
    'hero.contactame': 'Contact me',
    'sobre.titulo': 'About me',
    'sobre.p1': "I'm an Information Technology Engineering student. I'm interested in web development and in creating clear, easy-to-use interfaces.",
    'sobre.p2': 'I consider myself a responsible and curious person. I enjoy solving problems, working in teams and learning new technologies.',
    'sobre.formacion': 'Education',
    'sobre.carrera': 'Information Technology and Digital Innovation Engineering',
    'sobre.actualidad': 'present',
    'sobre.idiomas': 'Languages',
    'sobre.espanol': 'Spanish - native',
    'sobre.ingles': 'English - intermediate',
    'habilidades.titulo': 'Skills',
    'habilidades.lenguajes': 'Languages',
    'habilidades.web': 'Web development',
    'habilidades.herramientas': 'Tools',
    'proyectos.titulo': 'Projects',
    'proyectos.technova.titulo': 'TechNova: online store',
    'proyectos.technova.descripcion': 'Online tech accessories store with a home page and a catalog. I built the hero, benefits and categories sections with Flexbox and Grid.',
    'proyectos.laberinto.titulo': 'CSS animated maze',
    'proyectos.laberinto.descripcion': 'When you press the button, a shape solves the maze on its own: it turns into a circle to fit the corridors and comes out as a spinning, color-changing star.',
    'proyectos.laberinto.sinJS': 'No JavaScript',
    'proyectos.codigo': 'Code',
    'proyectos.demo': 'Demo',
    'certificaciones.titulo': 'Certifications',
    'certificaciones.ver': 'View certificate',
    'contacto.titulo': 'Contact',
    'contacto.pregunta': 'Want to get in touch?',
  },
  fr: {
    'meta.title': 'Eduardo Cruz Oleta | Portfolio',
    langLabel: 'Langue',
    'nav.sobreMi': 'À propos',
    'nav.habilidades': 'Compétences',
    'nav.proyectos': 'Projets',
    'nav.certificaciones': 'Certifications',
    'nav.contacto': 'Contact',
    'hero.saludo': 'Bonjour, je suis',
    'hero.rol': 'Développeur Web Front-End',
    'hero.descripcion': "Étudiant en ingénierie des technologies de l'information à l'Université Polytechnique de Sinaloa. Je crée des sites web accessibles, rapides et adaptés à tous les écrans.",
    'hero.verCV': 'Voir le CV (PDF)',
    'hero.contactame': 'Me contacter',
    'sobre.titulo': 'À propos de moi',
    'sobre.p1': "Je suis étudiant en ingénierie des technologies de l'information. Je m'intéresse au développement web et à la création d'interfaces claires et faciles à utiliser.",
    'sobre.p2': "Je suis une personne responsable et curieuse. J'aime résoudre des problèmes, travailler en équipe et apprendre de nouvelles technologies.",
    'sobre.formacion': 'Formation',
    'sobre.carrera': "Ingénierie des technologies de l'information et de l'innovation numérique",
    'sobre.actualidad': "aujourd'hui",
    'sobre.idiomas': 'Langues',
    'sobre.espanol': 'Espagnol - langue maternelle',
    'sobre.ingles': 'Anglais - intermédiaire',
    'habilidades.titulo': 'Compétences',
    'habilidades.lenguajes': 'Langages',
    'habilidades.web': 'Développement web',
    'habilidades.herramientas': 'Outils',
    'proyectos.titulo': 'Projets',
    'proyectos.technova.titulo': 'TechNova : boutique en ligne',
    'proyectos.technova.descripcion': "Boutique en ligne d'accessoires technologiques avec une page d'accueil et un catalogue. J'ai mis en page la bannière, les avantages et les catégories avec Flexbox et Grid.",
    'proyectos.laberinto.titulo': 'Labyrinthe animé en CSS',
    'proyectos.laberinto.descripcion': "En appuyant sur le bouton, une forme parcourt le labyrinthe toute seule : elle devient un cercle pour passer dans les couloirs et ressort en étoile qui tourne et change de couleur.",
    'proyectos.laberinto.sinJS': 'Sans JavaScript',
    'proyectos.codigo': 'Code',
    'proyectos.demo': 'Démo',
    'certificaciones.titulo': 'Certifications',
    'certificaciones.ver': 'Voir le certificat',
    'contacto.titulo': 'Contact',
    'contacto.pregunta': 'Vous voulez me contacter ?',
  },
};

const i18nEls = document.querySelectorAll('[data-i18n]');
translations.es = {};
i18nEls.forEach(el => { translations.es[el.dataset.i18n] = el.textContent; });

const langSelect = document.getElementById('lang');

function setLang(lang) {
  const dict = translations[lang] || translations.es;
  i18nEls.forEach(el => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.documentElement.lang = lang;
  langSelect.value = lang;
}

langSelect.addEventListener('change', e => setLang(e.target.value));

// ===== Modo claro / oscuro =====
document.getElementById('theme-btn').addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = isDark ? 'light' : 'dark';
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