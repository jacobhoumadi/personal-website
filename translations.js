// translations-full.js - FR/EN + modals (EN à compléter)
const translations = {
  fr: {
    // Navigation
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Offres',
    'nav.testimonials': 'Témoignages',
    'nav.faq': 'FAQ',

    // Form
    'form.name': 'Nom complet',
    'form.email': 'Email professionnel',
    'form.company': "Nom de l'entreprise",
    'form.website': 'Site web',
    'form.project': 'Type de projet',
    'form.message': 'Message',
    'form.submit': 'Démarrer la conversation',

    // Project types
    'project.select': 'Sélectionnez...',
    'project.design-system': 'Design System UI',
    'project.product-design': 'Product Design Complet',
    'project.identite': 'Identité Visuelle',
    'project.audit': 'Audit UX',
    'project.autre': 'Autre à discuter',
    'modal.1': 'Mes Offres',
    'modal.2': 'Design System UI',
    'modal.3': 'Design system complet basé sur votre charte',
    'modal.4': '8-12 écrans UI haute-fidélité (desktop & mobile)',
    'modal.5': 'Prototype interactif Figma',
    'modal.6': 'Guide de style pour développeurs',
    'modal.7': 'Assets exportés (tous formats)',
    'modal.8': 'Idéal si :',
    'modal.9': 'Product Design Complet',
    'modal.10': 'Audit UX / Benchmark concurrentiel',
    'modal.11': 'Wireframes / Tests utilisateurs (5 personnes)',
    'modal.12': 'Identité visuelle complète (option +3K€)',
    'modal.13': 'Design system scalable',
    'modal.14': '10-15 écrans UI professionnels',
    'modal.15': 'Handoff développeurs / Support 2 semaines',
    'modal.16': 'Idéal si :',
    'modal.17': 'Témoignages clients',
    'modal.18': 'Pierre Dubois',
    'modal.19': 'Product Manager · Tango.lu',
    'modal.20': 'FAQ',
  },

  en: {
    // Navigation
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',

    // Form
    'form.name': 'Full name',
    'form.email': 'Professional email',
    'form.company': 'Company name',
    'form.website': 'Website',
    'form.project': 'Project type',
    'form.message': 'Message',
    'form.submit': 'Start the conversation',

    // Project types
    'project.select': 'Select...',
    'project.design-system': 'UI Design System',
    'project.product-design': 'Complete Product Design',
    'project.identite': 'Visual identity',
    'project.audit': 'UX audit',
    'project.autre': 'Other to discuss',
    'modal.1': 'Mes Offres',
    'modal.2': 'Design System UI',
    'modal.3': 'Design system complet basé sur votre charte',
    'modal.4': '8-12 écrans UI haute-fidélité (desktop & mobile)',
    'modal.5': 'Prototype interactif Figma',
    'modal.6': 'Guide de style pour développeurs',
    'modal.7': 'Assets exportés (tous formats)',
    'modal.8': 'Idéal si :',
    'modal.9': 'Product Design Complet',
    'modal.10': 'Audit UX / Benchmark concurrentiel',
    'modal.11': 'Wireframes / Tests utilisateurs (5 personnes)',
    'modal.12': 'Identité visuelle complète (option +3K€)',
    'modal.13': 'Design system scalable',
    'modal.14': '10-15 écrans UI professionnels',
    'modal.15': 'Handoff développeurs / Support 2 semaines',
    'modal.16': 'Idéal si :',
    'modal.17': 'Témoignages clients',
    'modal.18': 'Pierre Dubois',
    'modal.19': 'Product Manager · Tango.lu',
    'modal.20': 'FAQ',
  }
};

function switchLanguage(lang) {
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const t = translations?.[lang]?.[key];
    if (!t) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t;
    } else if (el.tagName === 'OPTION') {
      el.textContent = t;
    } else {
      el.textContent = t;
    }
  });

  const select = document.querySelector('.lang-select');
  if (select) select.value = lang;

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  const browser = (navigator.language || 'fr').split('-')[0];
  const lang = saved || (browser === 'en' ? 'en' : 'fr');
  switchLanguage(lang);
});
