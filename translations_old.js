// translations.js - Traductions FR/EN complètes
const translations = {
    fr: {
        // Navigation
        'nav.portfolio': 'Portfolio',
        'nav.services': 'Offres',
        'nav.testimonials': 'Témoignages',
        'nav.faq': 'FAQ',

        // Hero Section
        'hero.title': 'Transformez vos projets digitaux en produits qui convertissent',
        'hero.subtitle': 'Parlez-moi de votre projet. Je vous réponds sous 24h avec une proposition personnalisée.',
        'hero.experience': '10 ans d\'expérience',
        'hero.location': 'Madagascar · France · Luxembourg',
        'hero.description': 'Je transforme vos idées en produits digitaux qui captivent vos utilisateurs et boostent vos conversions.',
        'hero.cta': 'Voir mes offres',

        // Form Labels
        'form.name': 'Nom complet',
        'form.email': 'Email professionnel',
        'form.company': 'Nom de l\'entreprise',
        'form.website': 'Site web',
        'form.project': 'Type de projet',
        'form.message': 'Message',
        'form.submit': 'Démarrer la conversation',

        // Project Types
        'project.select': 'Sélectionnez...',
        'project.design-system': 'Design System UI',
        'project.product-design': 'Product Design Complet',
        'project.identite': 'Identité Visuelle',
        'project.audit': 'Audit UX',
        'project.autre': 'Autre à discuter'
    },

    en: {
        // Navigation
        'nav.portfolio': 'Portfolio',
        'nav.services': 'Services',
        'nav.testimonials': 'Testimonials',
        'nav.faq': 'FAQ',

        // Hero Section
        'hero.title': 'Transform your digital projects into products that convert',
        'hero.subtitle': 'Tell me about your project. I\'ll respond within 24h with a personalized proposal.',
        'hero.experience': '10 years of experience',
        'hero.location': 'Madagascar · France · Luxembourg',
        'hero.description': 'I turn your ideas into digital products that captivate your users and boost conversions.',
        'hero.cta': 'View my services',

        // Form Labels
        'form.name': 'Full name',
        'form.email': 'Professional email',
        'form.company': 'Company name',
        'form.website': 'Website',
        'form.project': 'Project type',
        'form.message': 'Message',
        'form.submit': 'Start the conversation',

        // Project Types
        'project.select': 'Select...',
        'project.design-system': 'UI Design System',
        'project.product-design': 'Complete Product Design',
        'project.identite': 'Visual Identity',
        'project.audit': 'UX Audit',
        'project.autre': 'Other to discuss'
    }
};

// Fonction pour changer la langue
function switchLanguage(lang) {
    // Sauvegarder
    localStorage.setItem('lang', lang);

    // Traduire tous les éléments [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (!translation) {
            console.warn(`Missing translation: ${key} (${lang})`);
            return;
        }

        // Input/Textarea
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } 
        // Select options
        else if (element.tagName === 'OPTION') {
            element.textContent = translation;
        }
        // Autres éléments
        else {
            element.textContent = translation;
        }
    });

    // Mettre à jour le select
    const langSelect = document.querySelector('.lang-select');
    if (langSelect) {
        langSelect.value = lang;
    }

    // Lang HTML
    document.documentElement.lang = lang;

    // Meta tags SEO
    updateMetaTags(lang);
}

// Meta tags
function updateMetaTags(lang) {
    const titles = {
        fr: 'Jacob Radonirina - Product Designer UX/UI Luxembourg',
        en: 'Jacob Radonirina - Product Designer UX/UI Luxembourg'
    };

    const descriptions = {
        fr: 'Product Designer freelance avec 10 ans d\'expérience. Design UX/UI, design systems et stratégie produit.',
        en: 'Freelance Product Designer with 10 years of experience. UX/UI design, design systems and product strategy.'
    };

    document.title = titles[lang];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descriptions[lang]);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', titles[lang]);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', descriptions[lang]);
}

// Init au chargement
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || (browserLang === 'en' ? 'en' : 'fr');

    switchLanguage(defaultLang);
});
