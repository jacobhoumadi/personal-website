// translations.js — FR / EN complet
// Usage HTML :
//   data-i18n="key"       → textContent (texte pur)
//   data-i18n-html="key"  → innerHTML  (éléments avec <br>, <span>, <strong>, <a>…)
// Charger avec <script src="translations.js" defer></script>

const translations = {

  // ════════════════════════════════════════════════
  // 🇫🇷  FRANÇAIS
  // ════════════════════════════════════════════════
  fr: {


    // __ Cookies ________________________________

    'cookie.01' : '🍪 Cookies et confidentialité',
    'cookie.02' : 'Ce site utilise des cookies essentiels pour son fonctionnement (formulaire de contact via EmailJS). Aucun cookie publicitaire ou de tracking. <a id="privacyLink" href="politique-confidentialite.html">En savoir plus</a>',

    // ── Navigation ───────────────────────────────
    'nav.portfolio':    'Portfolio',
    'nav.services':     'Offres',
    'nav.testimonials': 'Témoignages',
    'nav.faq':          'FAQ',
    'mobilenav.p': 'Transformons votre projet ensemble',
    'mobilenav.cta' : 'Me contacter',

    // ── Hero ─────────────────────────────────────
    'h1.1':         'Product designer<br/> expert en branding',
    'hero.quote':   '10 ans en design. Madagascar → Luxembourg → France',
    'hero.subtitle':'Autodidacte. Prouvé loin de chez moi.<br/> En laissant toujours mon empreinte \'digitale\' 😉.<br/> Aujourd\'hui j\'aide les PME et startups B2B à transformer leurs produits en interfaces qui convertissent — avec des résultats mesurables.',
    'hero.cta':     'Voir mes offres',

    // ── Section logos & stats ────────────────────
    'logos.label':       'Ils m\'ont fait confiance',
    'quote.text':        'Les marques qui intègrent branding et UX dès le départ créent des expériences 40 % plus mémorables et fidélisent mieux.',
    'stat.exp' : '10 ans',
    'stat.exp.label':    'd\'expériences',
    'stat.sector':       'SaaS · B2B',
    'stat.sector.label': 'Secteurs',
    'stat.awards': '4 prix',
    'stat.awards.label': 'Creatives 974',

    // ── Bandeau principal ─────────────────────────
    'main.h2':      'Transformez votre identité de marque en <span>expérience digitale mémorable</span>',
    'main.subtitle':'Parlez-moi de votre projet. Je vous réponds sous 24h avec une proposition personnalisée.',

    // ── Formulaire ────────────────────────────────
    'form.name':    'Nom complet',
    'form.email':   'Email professionnel',
    'form.company' : '<label for="company">Votre entreprise</label>' + 
                      '<input type="text" id="company" name="company" placeholder="e.g SpaceX" required>',
    'form.website': 'Site web',
    'form.project': 'Type de projet',
    'form.message': ' <label for="message">Message</label>' +
                      '<textarea id="message" name="message" rows="4" placeholder="Votre message ..."></textarea>',
    'form.submit':  'Démarrer la conversation →',
    'form.consent': 'J\'accepte que mes données soient utilisées pour traiter ma demande, conformément à la <a href="politique-confidentialite.html" target="_blank">politique de confidentialité</a>.',

    // ── Sélecteur projet ──────────────────────────
    'project.select':         'Sélectionnez...',
    'project.design-system':  'Design System UI',
    'project.product-design': 'Product Design Complet',
    'project.identite':       'Identité Visuelle',
    'project.audit':          'Audit UX',
    'project.autre':          'Autre à discuter',

    // ── Bloc Calendly (post-envoi) ────────────────
    'calendly.title': '✅ Message envoyé, merci !',
    'calendly.text':  'Parfait, je reviens vers vous sous 24h. En attendant, <strong>réservez directement un créneau</strong> pour qu\'on parle de votre projet.',

    // ── Liens ─────────────────────────────────────
    'link.privacy': 'politique de confidentialité',

    // ── Footer ────────────────────────────────────
    'footer.legal1': 'Mentions légales',
    'footer.legal2': 'Politique de confidentialité',

    // ── Portfolio · MyTango Mobile App ────────────
    'portfolio.tango_app.title':    'MyTango Mobile App',
    'portfolio.tango_app.role':     'UX/UI Designer · Opérateur télécom Luxembourg',
    'portfolio.tango_app.desc':     'Tango est un opérateur télécom luxembourgeois avec une app mobile permettant la gestion des offres, des paiements, et des services additionnels.<span class="mobile-hidden"><br/> Mission : refondre l\'expérience de l\'app mobile pour résoudre des faiblesses critiques, améliorer la satisfaction client et accélérer les développements.</span>',
    'portfolio.tango_app.insights': 'Réalisations clés :',
    'portfolio.tango_app.btn1':     'Résolution d\'un point de douleur récurrent',
    'portfolio.tango_app.btn1.desc':'Dashboard de consommation repensé sur l\'affichage des jauges',
    'portfolio.tango_app.btn2':     'Stratégie de rétention : Jeu Enjoy',
    'portfolio.tango_app.btn2.desc':'Optimisation UX Gaming in-app et redirection vers pages clés',
    'portfolio.tango_app.btn3':     'Nouvelle offre complexe simplifiée',
    'portfolio.tango_app.btn3.desc':'Activation intuitive malgré contraintes multiples au lancement',
    'portfolio.tango_app.btn4':     'Satisfaction utilisateurs en hausse',
    'portfolio.tango_app.btn4.desc':'Note App Store améliorée durant la période',

    // ── Portfolio · Tango.lu E-Commerce ──────────
    'portfolio.tango_web.title':    'Tango.lu E-Commerce',
    'portfolio.tango_web.role':     'UX/UI Designer · Opérateur télécom Luxembourg',
    'portfolio.tango_web.desc':     'Le site web Tango.lu est la principale porte d\'entrée pour l\'acquisition et la conversion de nouveaux clients télécom.<span class="mobile-hidden"><br/> Mission : optimiser le funnel d\'achat tout en offrant plusieurs possibilités de personnalisation (Combo, options, assurances), et garantir une expérience cohérente avec l\'app mobile.</span>',
    'portfolio.tango_web.insights': 'Réalisations clés :',
    'portfolio.tango_web.btn1':     'Page offre AVANT',
    'portfolio.tango_web.btn1.desc':'Sous-expositions observées : les plus de l\'offre, configurateur d\'offre',
    'portfolio.tango_web.btn2':     'Page offre APRÈS',
    'portfolio.tango_web.btn2.desc':'Facilité de comparaison entre les offres avec leur détail',
    'portfolio.tango_web.btn3':     'Parcours utilisateur optimisé',
    'portfolio.tango_web.btn3.desc':'Clarification de l\'UI et des étapes clés pour un parcours plus fluide',
    'portfolio.tango_web.btn4':     'Cohérence cross-plateforme',
    'portfolio.tango_web.btn4.desc':'Design system partagé avec l\'app mobile et la plateforme Self-care',

    // ── Portfolio · Axian Group ───────────────────
    'portfolio.axian.title':    'Axian Group',
    'portfolio.axian.role':     'Digital Designer · Grand Groupe Panafricain',
    'portfolio.axian.desc':     'Axian Group est l\'un des plus grands groupes panafricains de Madagascar, opérant dans les télécoms, l\'énergie, les infrastructures, les services financiers et la fintech.<span class="mobile-hidden"><br/>En tant que Digital Designer pendant 5 ans, j\'ai participé à la refonte complète de l\'identité de marque du groupe.</span>',
    'portfolio.axian.btn1':     'Vision business incarnée',
    'portfolio.axian.btn1.desc':'Création d\'une identité culturelle forte "Afrixian"',
    'portfolio.axian.btn2':     'Unification de l\'écosystème',
    'portfolio.axian.btn2.desc':'5 secteurs rassemblés sous une identité commune et un storytelling partagé',
    'portfolio.axian.btn3':     'Refonte site web corporate',
    'portfolio.axian.btn3.desc':'Architecture de l\'information + design UI + storytelling de l\'impact',
    'portfolio.axian.btn4':     '4 prix Creatives 974 Awards',
    'portfolio.axian.btn4.desc':'Direction artistique reconnue internationalement',

    // ── Portfolio · Silva Paris ───────────────────
    'portfolio.silva.title':    'Silva Paris',
    'portfolio.silva.role':     'Direction Artistique Web / UX Design · Artisanat de luxe',
    'portfolio.silva.desc':     'Silva Paris est une maison d\'artisanat tapissier de luxe depuis 1982, spécialisée dans les décors sur mesure pour hôtels et résidences privées.<span class="mobile-hidden"><br/> Mon rôle : déclinaison digitale de l\'identité de marque (direction artistique web, architecture UX, design des interfaces).</span>',
    'portfolio.silva.btn1':     'Déclinaison web de l\'identité',
    'portfolio.silva.btn1.desc':'Adaptation des codes visuels au digital',
    'portfolio.silva.btn2':     'Architecture d\'information optimisée',
    'portfolio.silva.btn2.desc':'Parcours utilisateur condensé, mise en valeur du savoir-faire artisanal',
    'portfolio.silva.btn3':     'Design system cohérent',
    'portfolio.silva.btn3.desc':'Composants UI réutilisables, guidelines pour le développement',

    // ── Modal · Offres ────────────────────────────
    'modal.offres.title':    'Mes Offres',
    'modal.ideal.label':     'Idéal si :',
    'modal.addons.title':    'Options additionnelles',
    'modal.addons.li1':      'Identité visuelle seule',
    'modal.addons.li2':      'Maintenance design',
    'modal.offer1.title':    'Design System UI',
    'modal.offer1.duration': '3-4 semaines',
    'modal.offer1.li1':      'Design system complet basé sur votre charte',
    'modal.offer1.li2':      '8-12 écrans UI haute-fidélité (desktop & mobile)',
    'modal.offer1.li3':      'Prototype interactif Figma',
    'modal.offer1.li4':      'Guide de style pour développeurs',
    'modal.offer1.li5':      'Assets exportés (tous formats)',
    'modal.offer1.ideal':    'Vous avez déjà votre charte graphique',
    'modal.offer2.title':    'Product Design Complet',
    'modal.offer2.duration': '8-10 semaines',
    'modal.offer2.li1':      'Audit UX / Benchmark concurrentiel',
    'modal.offer2.li2':      'Wireframes / Tests utilisateurs (5 personnes)',
    'modal.offer2.li3':      'Identité visuelle complète (option +3K€)',
    'modal.offer2.li4':      'Design system scalable',
    'modal.offer2.li5':      '10-15 écrans UI professionnels',
    'modal.offer2.li6':      'Handoff développeurs / Support 2 semaines',
    'modal.offer2.ideal':    'Vous partez de zéro ou refonte complète',

    // ── Modal · Témoignages ───────────────────────
    'modal.testimonials.title': 'Témoignages',
    'testimonial.1.text': '"J\'ai collaboré avec Jacob en tant qu\'analyste développeur frontend, et ce fut un réel plaisir de l\'avoir dans l\'équipe. Toujours accessible et à l\'écoute, il sait se tenir au courant des dernières nouveautés et propose régulièrement de nouvelles idées innovantes. Il comprend très bien les enjeux techniques que l\'on peut rencontrer et sait en tenir compte pour concilier au mieux les besoins métier et les réalités de développement. Jacob est un atout précieux que je recommande chaleureusement."',
    'testimonial.1.name': 'Théo',
    'testimonial.1.role': 'Analyste Développeur',
    'testimonial.2.text': '"J\'ai d\'abord connu Jacob à distance, lors d\'une première visio depuis Madagascar. Son profil m\'avait tout de suite interpellée. Quelques temps plus tard, il m\'a recontactée pour me dire : « Ça y est, je suis là ! », marquant ainsi le début de notre collaboration à Luxembourg. Web designer sérieux, impliqué et agréable, Jacob fait preuve de professionnalisme et d\'un très bon relationnel. Je le recommande volontiers pour des projets de web design."',
    'testimonial.2.name': 'Valérie Candat',
    'testimonial.2.role': 'Executive Assistant & Human Resources · ID+P',
    'testimonial.3.text': '"Jacob était un bon élément au sein de notre équipe pendant plusieurs années : engagé, à l\'écoute et teamspirit."',
    'testimonial.3.name': 'Marine Raelison',
    'testimonial.3.role': 'Brand Strategy Director · AXIAN Group',
    'testimonial.4.text': '"Expérience de travail fluide, collaborative, créative."',
    'testimonial.4.name': 'Caroline MEURISSE',
    'testimonial.4.role': 'Administrateur Général · Axian University',
    'testimonial.5.text': '"Jacob est toujours à l\'écoute de la demande client, donc j\'ai pu voir naître de beaux projets qui lui ont été confiés."',
    'testimonial.5.name': 'People Engagement & Communication Manager',
    'testimonial.5.role': 'Secteur Fintech & Corporate',
    'testimonial.6.text': '"Collaboratif, échange d\'idées fructueux, bonne méthode de travail."',
    'testimonial.6.name': 'Digital Tech Lead',
    'testimonial.6.role': 'Télécoms & Infrastructure',
    'testimonial.7.text': '"Jacob était un collaborateur très réactif et force de proposition, notamment sur les aspects techniques. Il a une vraie capacité à comprendre rapidement les enjeux et à proposer des solutions concrètes et pertinentes."',
    'testimonial.7.name': 'Saraha',
    'testimonial.7.role': 'Brand Manager',
    'testimonial.8.text': '"Jacob est une vraie référence en matière de design. Son sens du détail, son excellence esthétique et sa veille constante des tendances garantissent un travail toujours à la pointe. Collaborer avec lui est non seulement efficace, mais également un véritable plaisir."',
    'testimonial.8.name': 'Theodorakus Bezafy',
    'testimonial.8.role': 'Motion Graphic · Designer Axian Group',
    

    // ── Modal · FAQ ───────────────────────────────
    'modal.faq.title': 'FAQ',
    'faq.q1': 'Quelle est la différence entre les deux offres ?',
    'faq.a1': '<strong style="color:var(--primary)">Offre 1 : Design System UI – 4 500 €</strong><br/>Vous avez déjà votre identité visuelle et vos wireframes. Je crée les maquettes UI finales + le design system pour que vos développeurs puissent implémenter.<br/><br/><strong style="color:var(--primary)">Offre 2 : Product Design Complet – 9-12K €</strong><br/>Vous partez de zéro ou refonte complète. Je gère tout : audit UX, wireframes, tests utilisateurs, maquettes UI, design system + optionnellement l\'identité visuelle.',
    'faq.q2': 'Fais-tu également le développement ?',
    'faq.a2': 'Non, je me concentre sur mon expertise : le design. Cependant, je recommande des partenaires développeurs de confiance (Framer, Webflow, développement custom) pour assurer la continuité de votre projet.',
    'faq.q3': 'Quels livrables vais-je recevoir ?',
    'faq.a3': 'Pour les deux offres : fichiers Figma organisés et commentés, prototype interactif, design system complet, guide de style pour développeurs, assets exportés (tous formats).<br/><br/>Pour l\'Offre 2 en plus : rapport d\'audit UX, wireframes, rapport de tests utilisateurs, et optionnellement l\'identité visuelle complète (logo, charte graphique, applications).',
    'faq.q4': 'Combien de révisions sont incluses ?',
    'faq.a4': 'Offre 1 : 2 tours de révisions par phase.<br/>Offre 2 : 3 tours de révisions par phase.<br/>Les révisions supplémentaires sont facturées 150 €/heure.',
    'faq.q5': 'Comment se passe le paiement ?',
    'faq.a5': '<strong style="color:var(--primary)">Offre 1 :</strong> 50 % à la signature, 50 % à la livraison finale.<br/><strong style="color:var(--primary)">Offre 2 :</strong> 30 % à la signature, 40 % mi-projet (après validation wireframes/UI), 30 % à la livraison finale.',
    'faq.q6': 'Travailles-tu avec des clients internationaux ?',
    'faq.a6': 'Oui, absolument. J\'ai une expérience internationale (Madagascar, France, Luxembourg) et je travaille régulièrement avec des clients en remote. Tous mes échanges et livrables peuvent être en français ou en anglais.',
    'faq.q7': 'Proposes-tu un accompagnement après la livraison ?',
    'faq.a7': 'Oui. L\'Offre 2 inclut 2 semaines de support post-livraison. Je propose également une formule de maintenance design à 800 €/mois (2 jours/mois) pour itérations continues, nouvelles features, optimisations.',
    'faq.q8': 'Quels secteurs d\'activité connais-tu le mieux ?',
    'faq.a8': 'Je me spécialise dans les produits digitaux B2B : SaaS, fintech, plateformes web, e-commerce. Mon expérience chez Tango (fintech) et Axian (corporate) me permet de comprendre rapidement les enjeux business et utilisateurs de ces secteurs.',
  
    // ── Mentions légales ─────────────────────────────

    /* ── Navigation / Header ── */
    "legal.001": "← Retour à l'accueil",

    /* ── Titre & intro ── */
    "legal.002": "Mentions Légales",
    "legal.003": "Dernière mise à jour : Février 2026",
    "legal.004":
      "Conformément aux dispositions de la loi française n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN) " +
      "et au Règlement Général sur la Protection des Données (RGPD), les présentes mentions légales ont pour objet de définir les modalités " +
      "de mise à disposition du site <strong>jacob-houmadi.com</strong> et de définir les conditions d'utilisation du site par l'utilisateur.",

    /* ── Section 1 ── */
    "legal.005": "1. Informations légales",
    "legal.006": "Éditeur du site",
    "legal.007":
      "<strong>Nom :</strong> Jacob Radonirina Houmadi<br/>" +
      "<strong>Statut :</strong> Designer freelance indépendant<br/>" +
      "<strong>Adresse :</strong> Thionville, Grand Est, France<br/>" +
      "<strong>Email :</strong> jacob.radonirina@gmail.com<br/>",
    "legal.008": "Directeur de la publication",
    "legal.009": "Jacob Radonirina Houmadi - jacob.radonirina@gmail.com",
    "legal.010": "Hébergement du site",
    "legal.011":
      "<strong>Hébergeur :</strong> Netlify, Inc.<br/>" +
      "<strong>Adresse :</strong> 2325 3rd Street, Suite 215, San Francisco, CA 94107, États-Unis<br/>" +
      "<strong>Téléphone :</strong> +1 844-899-7312<br/>" +
      "<strong>Site web :</strong>",
    "legal.012": "https://www.netlify.com",
    "legal.013":
      "<strong>Registrar (nom de domaine) :</strong> Porkbun LLC<br/>" +
      "<strong>Adresse :</strong> 707 SW Washington St, Suite 1100, Portland, Oregon 97205, États-Unis<br/>" +
      "<strong>Site web :</strong>",
    "legal.014": "https://porkbun.com",

    /* ── Section 2 ── */
    "legal.015": "2. Conditions d'utilisation",
    "legal.016": "2.1 Accès au site",
    "legal.017":
      "L'accès au site <strong>jacob-houmadi.com</strong> est gratuit. Les frais d'accès et d'utilisation du réseau de " +
      "télécommunications sont à la charge de l'utilisateur selon les modalités fixées par ses fournisseurs d'accès et opérateurs de télécommunications.",
    "legal.018": "2.2 Acceptation des conditions",
    "legal.019":
      "L'utilisation du site <strong>jacob-houmadi.com</strong> implique l'acceptation pleine et entière des conditions générales " +
      "d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.",

    /* ── Section 3 ── */
    "legal.020": "3. Propriété intellectuelle",
    "legal.021": "3.1 Droits d'auteur",
    "legal.022":
      "L'ensemble de ce site (structure, textes, logos, images, vidéos, éléments graphiques, etc.) est la propriété exclusive de " +
      "Jacob Radonirina Houmadi, sauf mention contraire.",
    "legal.023":
      "Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, " +
      "par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de Jacob Radonirina Houmadi.",
    "legal.024": "3.2 Portfolio et travaux présentés",
    "legal.025":
      "Les travaux présentés dans le portfolio (Tango.lu, Axian Group, etc.) sont la propriété intellectuelle de Jacob Radonirina Houmadi " +
      "et/ou des clients pour lesquels ils ont été réalisés. Leur reproduction ou utilisation est strictement interdite sans autorisation préalable.",
    "legal.026": "3.3 Marques",
    "legal.027":
      "Les marques, logos et signes distinctifs reproduits sur le site sont la propriété de Jacob Radonirina Houmadi ou de tiers ayant autorisé " +
      "Jacob Radonirina Houmadi à les utiliser. Toute reproduction totale ou partielle de ces marques ou de ces logos sans autorisation préalable est interdite.",

    /* ── Section 4 ── */
    "legal.028": "4. Protection des données personnelles",
    "legal.029":
      "Les informations collectées via le formulaire de contact sont destinées uniquement à Jacob Radonirina Houmadi pour le traitement de votre demande.",
    "legal.030":
      "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française n° 78-17 du 6 janvier 1978 modifiée, " +
      "vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.",
    "legal.031":
      "Pour exercer ces droits, vous pouvez contacter Jacob Radonirina Houmadi à l'adresse email : " +
      "<a href=\"mailto:jacob.radonirina@gmail.com\">jacob.radonirina@gmail.com</a>. " +
      "Pour plus d'informations, consultez notre <a href=\"politique-confidentialite.html\">Politique de confidentialité</a>.",

    /* ── Section 5 ── */
    "legal.033": "5. Cookies",
    "legal.034":
      "Le site <strong>jacob-houmadi.com</strong> utilise des cookies techniques essentiels au fonctionnement du formulaire de contact (via EmailJS).",
    "legal.035": "Aucun cookie publicitaire ou de tracking n'est utilisé sur ce site.",
    "legal.036":
      "Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela peut affecter le fonctionnement du formulaire de contact.",
    "legal.037":
      "Pour plus d'informations, consultez notre <a href=\"politique-confidentialite.html\">Politique de confidentialité</a>.",

    /* ── Section 6 ── */
    "legal.039": "6. Responsabilité",
    "legal.040": "6.1 Contenu du site",
    "legal.041":
      "Jacob Radonirina Houmadi s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. " +
      "Toutefois, Jacob Radonirina Houmadi ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.",
    "legal.042": "6.2 Liens hypertextes",
    "legal.043":
      "Le site <strong>jacob-houmadi.com</strong> peut contenir des liens hypertextes vers d'autres sites (LinkedIn, Malt, etc.). " +
      "Jacob Radonirina Houmadi n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
    "legal.044": "6.3 Interruption du service",
    "legal.045":
      "Jacob Radonirina Houmadi se réserve le droit d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès à " +
      "tout ou partie du site, afin d'en assurer la maintenance, ou pour toute autre raison, sans que l'interruption n'ouvre droit à aucune obligation ni indemnisation.",

    /* ── Section 7 ── */
    "legal.046": "7. Droit applicable et juridiction compétente",
    "legal.047": "Les présentes mentions légales sont régies par le droit français.",
    "legal.048":
      "En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Thionville, " +
      "conformément aux règles de compétence en vigueur.",

    /* ── Section 8 ── */
    "legal.049": "8. Contact",
    "legal.050": "Pour toute question concernant les mentions légales, vous pouvez me contacter :",
    "legal.051":
      "<strong>Jacob Radonirina HOUMADI</strong><br/>" +
      "Thionville 57100<br/>" +
      "<strong>Email :</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a>",
    "legal.052":
    "<strong>By email:</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br/>" +
    "<strong>Via LinkedIn:</strong> <a href='https://www.linkedin.com/in/jacob-radonirina-houmadi-120841b0' target='_blank'>Jacob Radonirina</a><br/>" +
    "<strong>Via Malt :</strong> <a href='https://www.malt.fr/profile/jacobhoumadi' target='_blank'> @jacobhoumadi</a>",

    /* ── Footer ── */
    "legal.055": "",
    "legal.056": "← Retour à l'accueil",
    "footer.legal2": "Politique de confidentialité",


    // ── Politique de confidentialité ────────────────
     /* ── Navigation / Header ── */
    "privacy.001": "← Retour à l'accueil",

    /* ── Titre & intro ── */
    "privacy.002": "Politique de Confidentialité",
    "privacy.003": "Dernière mise à jour : Février 2026",
    "privacy.004":
      "<strong>En résumé :</strong> Ce site collecte uniquement les données que vous fournissez via le formulaire de contact. " +
      "Aucune donnée n'est vendue ou partagée avec des tiers (sauf EmailJS pour l'envoi d'emails). Vous pouvez à tout moment " +
      "demander la suppression de vos données.",

    /* ── Section 1 ── */
    "privacy.005": "1. Introduction",
    "privacy.006":
      "La présente Politique de Confidentialité décrit comment Jacob Radonirina HOUMADI(\"nous\", \"notre\") collecte, utilise, stocke et protège " +
      "vos données personnelles lorsque vous utilisez le site jacob-houmadi.com (le \"Site\").",
    "privacy.007":
      "Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne (UE 2016/679) et à la " +
      "législation Française en matière de protection des données.",

    /* ── Section 2 ── */
    "privacy.008": "2. Responsable du traitement des données",
    "privacy.009":
      "<strong>Responsable du traitement :</strong> Jacob Radonirina HOUMADI<br />" +
      "<strong>Email :</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br />" +
      "<strong>Adresse :</strong> Hayange, France",

    /* ── Section 3 ── */
    "privacy.010": "3. Données collectées",
    "privacy.011": "3.1 Données collectées via le formulaire de contact",
    "privacy.012":
      "Lorsque vous remplissez le formulaire de contact sur notre site, nous collectons les informations suivantes :",

    /* Table headers */
    "privacy.013": "Donnée",
    "privacy.014": "Obligatoire",
    "privacy.015": "Finalité",

    /* Table rows – collected data */
    "privacy.016": "Nom complet",
    "privacy.017": "Oui",
    "privacy.018": "Vous identifier et personnaliser la réponse",
    "privacy.019": "Email professionnel",
    "privacy.020": "Oui",
    "privacy.021": "Vous répondre et échanger sur votre projet",
    "privacy.022": "Nom de l'entreprise",
    "privacy.023": "Non",
    "privacy.024": "Comprendre votre contexte professionnel",
    "privacy.025": "Site web",
    "privacy.026": "Non",
    "privacy.027": "Mieux comprendre votre projet",
    "privacy.028": "Type de projet",
    "privacy.029": "Oui",
    "privacy.030": "Qualifier votre demande et proposer une offre adaptée",
    "privacy.031": "Message",
    "privacy.032": "Non",
    "privacy.033": "Comprendre vos besoins spécifiques",

    /* Automatic data */
    "privacy.034": "3.2 Données collectées automatiquement",
    "privacy.035":
      "Nous ne collectons <strong>AUCUNE</strong> donnée de navigation automatique (pas de Google Analytics, pas de trackers publicitaires, " +
      "pas de cookies de suivi).",

    /* ── Section 4 ── */
    "privacy.036": "4. Base légale du traitement",
    "privacy.037": "Le traitement de vos données personnelles repose sur les bases légales suivantes :",
    "privacy.038":
      "<strong>Consentement :</strong> En remplissant le formulaire de contact, vous consentez explicitement au traitement de vos données " +
      "pour les finalités décrites.",
    "privacy.039":
      "<strong>Intérêt légitime :</strong> Traiter votre demande de contact et vous proposer des services adaptés constitue notre intérêt légitime.",

    /* ── Section 5 ── */
    "privacy.040": "5. Utilisation des données",
    "privacy.041": "Nous utilisons vos données personnelles uniquement pour les finalités suivantes :",
    "privacy.042": "Répondre à votre demande de contact dans un délai de 24 heures",
    "privacy.043": "Vous envoyer un email de confirmation automatique via EmailJS",
    "privacy.044": "Qualifier votre projet et vous proposer une offre personnalisée",
    "privacy.045": "Échanger avec vous sur votre projet (si vous le souhaitez)",
    "privacy.046": "Conserver un historique des demandes reçues (archivage légal)",
    "privacy.047": "<strong>Nous ne :</strong>",
    "privacy.048": "❌ Vendons jamais vos données à des tiers",
    "privacy.049": "❌ N'utilisons pas vos données à des fins publicitaires",
    "privacy.050": "❌ N'envoyons pas de newsletter sans votre consentement explicite",
    "privacy.051": "❌ Ne partageons pas vos données avec d'autres entreprises (sauf EmailJS, voir ci-dessous)",

    /* ── Section 6 ── */
    "privacy.052": "6. Partage des données avec des tiers",
    "privacy.053": "6.1 EmailJS (service d'envoi d'emails)",
    "privacy.054":
      "Pour l'envoi de l'email de confirmation automatique, nous utilisons le service <strong>EmailJS</strong>.",
    "privacy.055":
      "<strong>Service :</strong> EmailJS<br />" +
      "<strong>Finalité :</strong> Envoi automatique d'emails de confirmation<br />" +
      "<strong>Données partagées :</strong> Nom, email, type de projet, message<br />" +
      "<strong>Localisation :</strong> États-Unis (EmailJS est conforme GDPR)<br />" +
      "<strong>Politique de confidentialité :</strong>",
    "privacy.056": "https://www.emailjs.com/legal/privacy-policy/",
    "privacy.057": "EmailJS est conforme RGPD et ne partage pas vos données avec d'autres tiers.",
    "privacy.058": "6.2 Hébergement",
    "privacy.059":
      "Le site est hébergé par <strong>Nom de votre hébergeur</strong>, qui peut avoir accès aux données techniques (logs serveur) " +
      "conformément à sa propre politique de confidentialité.",

    /* ── Section 7 ── */
    "privacy.060": "7. Durée de conservation des données",

    /* Table headers */
    "privacy.061": "Type de données",
    "privacy.062": "Durée de conservation",
    "privacy.063": "Justification",

    /* Table rows – retention */
    "privacy.064": "Données du formulaire de contact",
    "privacy.065": "3 ans à compter de la demande",
    "privacy.066": "Prescription légale et gestion commerciale",
    "privacy.067": "Emails échangés",
    "privacy.068": "Durée de la relation commerciale + 5 ans",
    "privacy.069": "Obligation légale (comptabilité, fiscalité)",
    "privacy.070": "Cookies (localStorage)",
    "privacy.071": "13 mois maximum",
    "privacy.072": "Durée maximale autorisée par le RGPD",
    "privacy.073": "À l'expiration de ces délais, vos données sont automatiquement supprimées ou anonymisées.",

    /* ── Section 8 ── */
    "privacy.074": "8. Vos droits (RGPD)",
    "privacy.075":
      "Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :",
    "privacy.076": "8.1 Droit d'accès",
    "privacy.077":
      "Vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.",
    "privacy.078": "8.2 Droit de rectification",
    "privacy.079": "Vous pouvez demander la correction de données inexactes ou incomplètes.",
    "privacy.080": "8.3 Droit à l'effacement (\"droit à l'oubli\")",
    "privacy.081":
      "Vous pouvez demander la suppression de vos données personnelles, sauf si nous avons une obligation légale de les conserver.",
    "privacy.082": "8.4 Droit à la limitation du traitement",
    "privacy.083":
      "Vous pouvez demander la suspension temporaire du traitement de vos données dans certains cas.",
    "privacy.084": "8.5 Droit à la portabilité",
    "privacy.085":
      "Vous pouvez demander à recevoir vos données dans un format structuré et couramment utilisé (CSV, JSON).",
    "privacy.086": "8.6 Droit d'opposition",
    "privacy.087":
      "Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.",
    "privacy.088": "8.7 Droit de retirer votre consentement",
    "privacy.089":
      "Vous pouvez retirer votre consentement à tout moment (ex: refuser les cookies).",
    "privacy.090": "8.8 Exercer vos droits",
    "privacy.091":
      "<strong>Email :</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br />" +
      "<strong>Objet :</strong> \"Exercice de mes droits RGPD - [préciser le droit]\"",
    "privacy.092": "Nous vous répondrons sous <strong>30 jours maximum</strong> (délai légal RGPD).",
    "privacy.093": "8.9 Droit de réclamation",
    "privacy.094":
      "Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de l'autorité de contrôle française :",
    "privacy.095":
      "<strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />" +
      "3 Place de Fontenoy<br />" +
      "TSA 80715<br />" +
      "75334 Paris Cedex 07<br />" +
      "France<br />" +
      "<strong>Téléphone :</strong> +33 (0)1 53 73 22 22<br />" +
      "<strong>Site web :</strong>",
    "privacy.096": "https://www.cnil.fr",

    /* ── Section 9 ── */
    "privacy.097": "9. Cookies et technologies similaires",
    "privacy.098": "9.1 Types de cookies utilisés",
    "privacy.099":
      "Notre site utilise uniquement des <strong>cookies essentiels</strong> nécessaires au fonctionnement du formulaire de contact :",

    /* Cookie table headers */
    "privacy.100": "Cookie",
    "privacy.101": "Finalité",
    "privacy.102": "Durée",
    "privacy.103": "Type",

    /* Cookie table rows */
    "privacy.104": "cookieConsent",
    "privacy.105": "Mémoriser votre choix sur les cookies",
    "privacy.106": "13 mois",
    "privacy.107": "localStorage (essentiel)",
    "privacy.108": "EmailJS",
    "privacy.109": "Fonctionnement du formulaire de contact",
    "privacy.110": "Session",
    "privacy.111": "Cookie fonctionnel",

    "privacy.112": "<strong>Nous n'utilisons AUCUN :</strong>",
    "privacy.113": "❌ Cookie publicitaire (Google Ads, Facebook Pixel, etc.)",
    "privacy.114": "❌ Cookie de tracking (Google Analytics, Hotjar, etc.)",
    "privacy.115": "❌ Cookie de réseaux sociaux (sauf si vous cliquez sur les liens LinkedIn/Malt)",
    "privacy.116": "9.2 Gérer vos cookies",
    "privacy.117": "Vous pouvez à tout moment :",
    "privacy.118": "Accepter ou refuser les cookies via la bannière affichée lors de votre première visite",
    "privacy.119": "Supprimer les cookies dans les paramètres de votre navigateur",
    "privacy.120":
      "Configurer votre navigateur pour bloquer tous les cookies (mais cela peut affecter le fonctionnement du site)",

    /* ── Section 10 ── */
    "privacy.121": "10. Sécurité des données",
    "privacy.122":
      "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :",
    "privacy.123": "✅ Connexion HTTPS (chiffrement SSL/TLS)",
    "privacy.124": "✅ Formulaires sécurisés",
    "privacy.125": "✅ Accès limité aux données (uniquement Jacob Radonirina)",
    "privacy.126": "✅ Hébergement sécurisé conforme aux normes européennes",
    "privacy.127": "✅ Sauvegardes régulières",
    "privacy.128": "✅ Pas de stockage de données sensibles (pas de carte bancaire, pas de mot de passe)",

    /* ── Section 11 ── */
    "privacy.129": "11. Transferts internationaux de données",
    "privacy.130":
      "Vos données sont principalement stockées et traitées au sein de l'Union Européenne (France).",
    "privacy.131":
      "<strong>Exception :</strong> EmailJS (États-Unis) pour l'envoi d'emails. EmailJS est conforme GDPR et garantit un niveau " +
      "de protection adéquat via les clauses contractuelles types (SCC) approuvées par la Commission Européenne.",

    /* ── Section 12 ── */
    "privacy.132": "12. Données des mineurs",
    "privacy.133":
      "Ce site est destiné à un public professionnel. Nous ne collectons pas sciemment de données personnelles de personnes de moins de 16 ans.",
    "privacy.134":
      "Si vous êtes parent et que vous découvrez que votre enfant nous a fourni des données personnelles, contactez-nous immédiatement à " +
      "<a href=\"mailto:jacob.radonirina@gmail.com\">jacob.radonirina@gmail.com</a> pour que nous puissions les supprimer.",

    /* ── Section 13 ── */
    "privacy.135": "13. Modifications de cette politique",
    "privacy.136":
      "Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment pour refléter les changements dans " +
      "nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.",
    "privacy.137":
      "Toute modification sera publiée sur cette page avec une mise à jour de la date \"Dernière mise à jour\" en haut de cette page.",
    "privacy.138":
      "Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de confidentialité.",

    /* ── Section 14 ── */
    "privacy.139": "14. Contact",
    "privacy.140":
      "Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données personnelles, contactez-nous :",
    "privacy.141":
      "<strong>Email :</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br />" +
      "<strong>Délai de réponse :</strong> 30 jours maximum (conformément au RGPD)<br />" +
      "<strong>LinkedIn :</strong>" +
      "<a href='https://www.linkedin.com/in/jacob-radonirina-houmadi-120841b0' rel='noopener' target='_blank'>Jacob Houmadi</a>",

    /* ── Footer ── */
    "privacy.142": "",
    "privacy.143": "← Retour à l'accueil",
    "privacy.144": "Mentions légales",

      "404.label":     "Page / 404-error",
      "404.h1":        "Cette page n'a pas été designée.",
      "404.sub":       "L'URL que vous cherchez n'existe pas — ou a été déplacée. Pas d'inquiétude, même les meilleurs wireframes ont des écrans manquants.",
      "404.btn1":      'Retour à l\'accueil <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
      "404.btn2":      "Voir le portfolio",
      "404.btn3":      "Me contacter",
      "404.toast":     "Page non trouvée — erreur 404",
      "404.prop-title":"Page",
      "404.prop-key1": "Status",
      "404.prop-key2": "Type",
      "404.prop-val2": "Error",
      "404.prop-key3": "Auteur",
      "404.prop-key4": "Exp.",
      "404.prop-val4": "10 ans",

  },

  


  // ════════════════════════════════════════════════
  // 🇬🇧  ENGLISH
  // ════════════════════════════════════════════════
  en: {

    
    // __ Cookies ________________________________

    'cookie.01' : '🍪 Cookies and privacy',
    'cookie.02' : 'This website uses cookies that are essential for its operation (contact form via EmailJS). No advertising or tracking cookies. <a id="privacyLink" href="politique-confidentialite.html">See more</a>',

    // ── Navigation ───────────────────────────────
    'nav.portfolio':    'Portfolio',
    'nav.services':     'Services',
    'nav.testimonials': 'Testimonials',
    'nav.faq':          'FAQ',
    'mobilenav.p': 'Let\'s transform your project together',
    'mobilenav.cta' : 'Get in touch',

    // ── Hero ─────────────────────────────────────
    'h1.1':         'Product designer<br/> & branding expert',
    'hero.quote':   '10 years in design. Madagascar → Luxembourg → France',
    'hero.subtitle':'Self-taught. Proven far from home.<br/> Always leaving my \'digital\' mark 😉.<br/> Today I help SMEs and B2B startups transform their products into interfaces that convert — with measurable results.',
    'hero.cta':     'View my services',

    // ── Section logos & stats ────────────────────
    'logos.label':       'They trusted me',
    'quote.text':        'Brands that integrate branding and UX from the start create experiences 40% more memorable and drive stronger loyalty.',
    'stat.exp.label':    'of experience',
    'stat.sector':       'SaaS · B2B',
    'stat.awards.label': 'Creatives 974',
    'stat.sector.label': 'Sectors',
    'stat.exp' : '10 years',
    'stat.awards': '4 prize',

    // ── Bandeau principal ─────────────────────────
    'main.h2':      'Transform your brand identity into a <span>memorable digital experience</span>',
    'main.subtitle':'Tell me about your project. I\'ll get back to you within 24h with a personalised proposal.',

    // ── Formulaire ────────────────────────────────
    'form.name':    'Full name',
    'form.email':   'Professional email',
    'form.company' : '<label for="company">Your company</label>' + 
                     '<input type="text" id="company" name="company" placeholder="e.g SpaceX" required>',
    'form.website': 'Website',
    'form.project': 'Project type',
    'form.message': ' <label for="message">Message</label>' +
                      '<textarea id="message" name="message" rows="4" placeholder="Your message..."></textarea>',
    'form.submit':  'Start the conversation →',
    'form.consent': 'I agree that my data may be used to process my request, in accordance with the <a href="politique-confidentialite.html" target="_blank">privacy policy</a>.',

    // ── Sélecteur projet ──────────────────────────
    'project.select':         'Select...',
    'project.design-system':  'UI Design System',
    'project.product-design': 'Complete Product Design',
    'project.identite':       'Visual Identity',
    'project.audit':          'UX Audit',
    'project.autre':          'Other to discuss',

    // ── Bloc Calendly (post-envoi) ────────────────
    'calendly.title': '✅ Message sent, thank you!',
    'calendly.text':  'Great, I\'ll get back to you within 24h. In the meantime, <strong>book a slot directly</strong> to discuss your project.',

    // ── Liens ─────────────────────────────────────
    'link.privacy': 'privacy policy',

    // ── Footer ────────────────────────────────────
    'footer.legal1': 'Legal notice',
    'footer.legal2': 'Privacy policy',

    // ── Portfolio · MyTango Mobile App ────────────
    'portfolio.tango_app.title':    'MyTango Mobile App',
    'portfolio.tango_app.role':     'UX/UI Designer · Telecom operator, Luxembourg',
    'portfolio.tango_app.desc':     'Tango is a Luxembourg-based telecom operator with a mobile app for managing plans, payments, and additional services.<span class="mobile-hidden"><br/> Mission: redesign the mobile app experience to resolve critical pain points, improve customer satisfaction, and accelerate development cycles.</span>',
    'portfolio.tango_app.insights': 'Key achievements:',
    'portfolio.tango_app.btn1':     'Resolving a recurring pain point',
    'portfolio.tango_app.btn1.desc':'Redesigned consumption dashboard for clearer data gauge display',
    'portfolio.tango_app.btn2':     'Retention strategy: Enjoy game',
    'portfolio.tango_app.btn2.desc':'In-app gaming UX optimisation and redirection to key pages',
    'portfolio.tango_app.btn3':     'Complex new offer simplified',
    'portfolio.tango_app.btn3.desc':'Intuitive activation despite multiple constraints at launch',
    'portfolio.tango_app.btn4':     'Rising user satisfaction',
    'portfolio.tango_app.btn4.desc':'App Store rating improved during the period',

    // ── Portfolio · Tango.lu E-Commerce ──────────
    'portfolio.tango_web.title':    'Tango.lu E-Commerce',
    'portfolio.tango_web.role':     'UX/UI Designer · Telecom operator, Luxembourg',
    'portfolio.tango_web.desc':     'Tango.lu is the primary gateway for telecom customer acquisition and conversion.<span class="mobile-hidden"><br/> Mission: optimise the purchase funnel while offering multiple customisation options (combos, add-ons, insurance), and ensure a consistent experience with the mobile app.</span>',
    'portfolio.tango_web.insights': 'Key achievements:',
    'portfolio.tango_web.btn1':     'Offer page BEFORE',
    'portfolio.tango_web.btn1.desc':'Under-exposed elements: offer highlights, plan configurator',
    'portfolio.tango_web.btn2':     'Offer page AFTER',
    'portfolio.tango_web.btn2.desc':'Easier comparison between plans with full detail visible',
    'portfolio.tango_web.btn3':     'Optimised user journey',
    'portfolio.tango_web.btn3.desc':'Clarified UI and key steps for a smoother funnel',
    'portfolio.tango_web.btn4':     'Cross-platform consistency',
    'portfolio.tango_web.btn4.desc':'Design system shared with the mobile app and Self-care platform',

    // ── Portfolio · Axian Group ───────────────────
    'portfolio.axian.title':    'Axian Group',
    'portfolio.axian.role':     'Digital Designer · Pan-African Group',
    'portfolio.axian.desc':     'Axian Group is one of the largest pan-African groups from Madagascar, operating in telecoms, energy, infrastructure, financial services and fintech.<span class="mobile-hidden"><br/>As Digital Designer for 5 years, I led the complete rebranding of the group\'s corporate identity.</span>',
    'portfolio.axian.btn1':     'Business vision embodied',
    'portfolio.axian.btn1.desc':'Building a strong cultural identity "Afrixian"',
    'portfolio.axian.btn2':     'Ecosystem unification',
    'portfolio.axian.btn2.desc':'5 sectors united under a shared identity and storytelling',
    'portfolio.axian.btn3':     'Corporate website redesign',
    'portfolio.axian.btn3.desc':'Information architecture + UI design + impact storytelling',
    'portfolio.axian.btn4':     '4 Creatives 974 Awards',
    'portfolio.axian.btn4.desc':'Internationally recognised art direction',

    // ── Portfolio · Silva Paris ───────────────────
    'portfolio.silva.title':    'Silva Paris',
    'portfolio.silva.role':     'Web Art Direction / UX Design · Luxury craftsmanship',
    'portfolio.silva.desc':     'Silva Paris is a luxury upholstery craftsman house established in 1982, specialising in bespoke décor for hotels and private residences.<span class="mobile-hidden"><br/> My role: digital adaptation of the brand identity (web art direction, UX architecture, interface design).</span>',
    'portfolio.silva.btn1':     'Digital brand identity',
    'portfolio.silva.btn1.desc':'Translating visual codes to the digital medium',
    'portfolio.silva.btn2':     'Optimised information architecture',
    'portfolio.silva.btn2.desc':'Condensed user journey, showcasing the artisan expertise',
    'portfolio.silva.btn3':     'Consistent design system',
    'portfolio.silva.btn3.desc':'Reusable UI components and development guidelines',

    // ── Modal · Offres ────────────────────────────
    'modal.offres.title':    'My Services',
    'modal.ideal.label':     'Ideal if:',
    'modal.addons.title':    'Additional options',
    'modal.addons.li1':      'Visual identity only',
    'modal.addons.li2':      'Design maintenance',
    'modal.offer1.title':    'UI Design System',
    'modal.offer1.duration': '3–4 weeks',
    'modal.offer1.li1':      'Complete design system based on your brand guidelines',
    'modal.offer1.li2':      '8–12 high-fidelity UI screens (desktop & mobile)',
    'modal.offer1.li3':      'Interactive Figma prototype',
    'modal.offer1.li4':      'Developer style guide',
    'modal.offer1.li5':      'Exported assets (all formats)',
    'modal.offer1.ideal':    'You already have your brand guidelines',
    'modal.offer2.title':    'Complete Product Design',
    'modal.offer2.duration': '8–10 weeks',
    'modal.offer2.li1':      'UX audit / Competitive benchmark',
    'modal.offer2.li2':      'Wireframes / User testing (5 people)',
    'modal.offer2.li3':      'Full visual identity (option +€3K)',
    'modal.offer2.li4':      'Scalable design system',
    'modal.offer2.li5':      '10–15 professional UI screens',
    'modal.offer2.li6':      'Developer handoff / 2-week support',
    'modal.offer2.ideal':    'Starting from scratch or full redesign',

    // ── Modal · Testimonials ──────────────────────
    'modal.testimonials.title': 'Testimonials',
    'testimonial.1.text': '"I collaborated with Jacob as a frontend developer analyst, and it was a real pleasure to have him on the team. Always approachable and attentive, he keeps up with the latest developments and regularly proposes innovative ideas. He has a great understanding of technical challenges and knows how to balance business needs with development realities. Jacob is a valuable asset I wholeheartedly recommend."',
    'testimonial.1.name': 'Théo',
    'testimonial.1.role': 'Developer Analyst',
    'testimonial.2.text': '"I first met Jacob remotely, during a video call from Madagascar. His profile caught my attention immediately. Some time later, he reached out to say: "I\'m here!" — marking the start of our collaboration in Luxembourg. A serious, committed and pleasant web designer, Jacob demonstrates great professionalism and interpersonal skills. I gladly recommend him for web design projects."',
    'testimonial.2.name': 'Valérie Candat',
    'testimonial.2.role': 'Executive Assistant & Human Resources · ID+P',
    'testimonial.3.text': '"Jacob was a great team member for several years: committed, attentive and team-spirited."',
    'testimonial.3.name': 'Marine Raelison',
    'testimonial.3.role': 'Brand Strategy Director · AXIAN Group',
    'testimonial.4.text': '"Smooth, collaborative, creative working experience."',
    'testimonial.4.name': 'Caroline MEURISSE',
    'testimonial.4.role': 'General Administrator · Axian University',
    'testimonial.5.text': '"Jacob always listens closely to client needs, and I\'ve seen some great projects come to life under his care."',
    'testimonial.5.name': 'People Engagement & Communication Manager',
    'testimonial.5.role': 'Fintech & Corporate',
    'testimonial.6.text': '"Collaborative, fruitful exchange of ideas, solid working method."',
    'testimonial.6.name': 'Digital Tech Lead',
    'testimonial.6.role': 'Telecoms & Infrastructure',
    'testimonial.7.text': '"Jacob was a very responsive collaborator with great initiative, particularly on technical aspects. He has a genuine ability to quickly understand the stakes and propose concrete, relevant solutions."',
    'testimonial.7.name': 'Saraha',
    'testimonial.7.role': 'Brand Manager',    
    'testimonial.8.text': '"Jacob is a true reference in design. His attention to detail, aesthetic excellence, and constant monitoring of trends ensure work that is always cutting-edge. Collaborating with him is not only effective, but also a genuine pleasure."',
    'testimonial.8.name': 'Theodorakus Bezafy',
    'testimonial.8.role': 'Motion Graphic · Designer Axian Group',

    // ── Modal · FAQ ───────────────────────────────
    'modal.faq.title': 'FAQ',
    'faq.q1': 'What is the difference between the two services?',
    'faq.a1': '<strong style="color:var(--primary)">Option 1: UI Design System – €4,500</strong><br/>You already have your visual identity and wireframes. I create the final UI screens + design system so your developers can implement with confidence.<br/><br/><strong style="color:var(--primary)">Option 2: Complete Product Design – €9–12K</strong><br/>Starting from scratch or a full redesign. I handle everything: UX audit, wireframes, user testing, UI screens, design system, and optionally the visual identity.',
    'faq.q2': 'Do you also handle development?',
    'faq.a2': 'No, I focus on my expertise: design. However, I recommend trusted development partners (Framer, Webflow, custom development) to ensure project continuity.',
    'faq.q3': 'What deliverables will I receive?',
    'faq.a3': 'For both services: organised and annotated Figma files, interactive prototype, complete design system, developer style guide, exported assets (all formats).<br/><br/>For Option 2 additionally: UX audit report, wireframes, user testing report, and optionally the complete visual identity (logo, brand guidelines, applications).',
    'faq.q4': 'How many revisions are included?',
    'faq.a4': 'Option 1: 2 revision rounds per phase.<br/>Option 2: 3 revision rounds per phase.<br/>Additional revisions beyond the initial scope are billed at €150/hour.',
    'faq.q5': 'How does payment work?',
    'faq.a5': '<strong style="color:var(--primary)">Option 1:</strong> 50% at signing, 50% on final delivery.<br/><strong style="color:var(--primary)">Option 2:</strong> 30% at signing, 40% mid-project (after wireframe/UI validation), 30% on final delivery.',
    'faq.q6': 'Do you work with international clients?',
    'faq.a6': 'Yes, absolutely. I have international experience (Madagascar, France, Luxembourg) and regularly work with remote clients. All communication and deliverables can be in French or English.',
    'faq.q7': 'Do you offer post-delivery support?',
    'faq.a7': 'Yes. Option 2 includes 2 weeks of post-delivery support. I also offer a design maintenance package at €800/month (2 days/month) for continuous iterations, new features, and optimisations.',
    'faq.q8': 'Which industries do you know best?',
    'faq.a8': 'I specialise in B2B digital products: SaaS, fintech, web platforms, e-commerce. My experience at Tango (fintech) and Axian (corporate) allows me to quickly understand the business and user challenges in these sectors.',
  
    // ── Legal notice ─────────────────────────────────
    /* ── Navigation / Header ── */
    "legal.001": "← Back to home",

    /* ── Title & intro ── */
    "legal.002": "Legal Notice",
    "legal.003": "Last updated: February 2026",
    "legal.004":
      "In accordance with the provisions of French law no. 2004-575 of 21 June 2004 on confidence in the digital economy (LCEN) " +
      "and the General Data Protection Regulation (GDPR), this legal notice aims to define the terms under which the site " +
      "<strong>jacob-houmadi.com</strong> is made available and the conditions of use by the user.",

    /* ── Section 1 ── */
    "legal.005": "1. Legal information",
    "legal.006": "Site publisher",
    "legal.007":
      "<strong>Name:</strong> Jacob Radonirina HOUMADI<br/>" +
      "<strong>Status:</strong> Independent freelance designer<br/>" +
      "<strong>Address:</strong> Thionville, Grand Est, France<br/>" +
      "<strong>Email:</strong> jacob.radonirina@gmail.com<br/>",
    "legal.008": "Publication director",
    "legal.009": "Jacob Radonirina HOUMADI - jacob.radonirina@gmail.com",
    "legal.010": "Site hosting",
    "legal.011":
      "<strong>Host:</strong> Netlify, Inc.<br/>" +
      "<strong>Address:</strong> 2325 3rd Street, Suite 215, San Francisco, CA 94107, United States<br/>" +
      "<strong>Phone:</strong> +1 844-899-7312<br/>" +
      "<strong>Website:</strong>",
    "legal.012": "https://www.netlify.com",
    "legal.013":
      "<strong>Registrar (domain name):</strong> Porkbun LLC<br/>" +
      "<strong>Address:</strong> 707 SW Washington St, Suite 1100, Portland, Oregon 97205, United States<br/>" +
      "<strong>Website:</strong>",
    "legal.014": "https://porkbun.com",

    /* ── Section 2 ── */
    "legal.015": "2. Terms of use",
    "legal.016": "2.1 Access to the site",
    "legal.017":
      "Access to <strong>jacob-houmadi.com</strong> is free of charge. Costs related to accessing and using the " +
      "telecommunications network are the responsibility of the user, according to the terms set by their access providers and operators.",
    "legal.018": "2.2 Acceptance of terms",
    "legal.019":
      "Use of <strong>jacob-houmadi.com</strong> implies full and complete acceptance of the general terms of use described herein. " +
      "These terms of use may be modified or supplemented at any time.",

    /* ── Section 3 ── */
    "legal.020": "3. Intellectual property",
    "legal.021": "3.1 Copyright",
    "legal.022":
      "All content on this site (structure, texts, logos, images, videos, graphic elements, etc.) is the exclusive property of " +
      "Jacob Radonirina HOUMADI, unless otherwise stated.",
    "legal.023":
      "Any reproduction, representation, modification, publication, transmission, distortion, in whole or in part of the site or its content, " +
      "by any means or medium, is prohibited without the prior written authorisation of Jacob Radonirina HOUMADI.",
    "legal.024": "3.2 Portfolio and presented works",
    "legal.025":
      "The works presented in the portfolio (Tango.lu, Axian Group, etc.) are the intellectual property of Jacob Radonirina HOUMADI " +
      "and/or the clients for whom they were created. Their reproduction or use is strictly prohibited without prior authorisation.",
    "legal.026": "3.3 Trademarks",
    "legal.027":
      "The trademarks, logos and distinctive signs reproduced on the site are the property of Jacob Radonirina HOUMADI or third parties " +
      "who have authorised Jacob Radonirina HOUMADI to use them. Any total or partial reproduction of these trademarks or logos without " +
      "prior authorisation is prohibited.",

    /* ── Section 4 ── */
    "legal.028": "4. Personal data protection",
    "legal.029":
      "Information collected through the contact form is intended solely for Jacob Radonirina HOUMADI for the processing of your request.",
    "legal.030":
      "In accordance with the General Data Protection Regulation (GDPR) and French law no. 78-17 of 6 January 1978 as amended, " +
      "you have the right of access, rectification, deletion and objection regarding your personal data.",
    "legal.031":
      "To exercise these rights, please contact Jacob Radonirina HOUMADI at: " +
      "<a href=\"mailto:jacob.radonirina@gmail.com\">jacob.radonirina@gmail.com</a>. " +
      "For more information, please read our <a href=\"politique-confidentialite.html\">Privacy Policy</a>.",

    /* ── Section 5 ── */
    "legal.033": "5. Cookies",
    "legal.034":
      "The site <strong>jacob-houmadi.com</strong> uses technical cookies essential to the operation of the contact form (via EmailJS).",
    "legal.035": "No advertising or tracking cookies are used on this site.",
    "legal.036":
      "You may disable cookies at any time in your browser settings. However, this may affect the operation of the contact form.",
    "legal.037":
      "For more information, please read our <a href=\"politique-confidentialite.html\">Privacy Policy</a>.",

    /* ── Section 6 ── */
    "legal.039": "6. Liability",
    "legal.040": "6.1 Site content",
    "legal.041":
      "Jacob Radonirina Houmadi endeavours to ensure the accuracy and currency of the information published on this site. " +
      "However, Jacob Radonirina Houmadi cannot guarantee the accuracy, precision or completeness of the information made available on this site.",
    "legal.042": "6.2 Hyperlinks",
    "legal.043":
      "The site <strong>jacob-houmadi.com</strong> may contain hyperlinks to other sites (LinkedIn, Malt, etc.). " +
      "Jacob Radonirina Houmadi has no control over these sites and accepts no responsibility for their content.",
    "legal.044": "6.3 Service interruption",
    "legal.045":
      "Jacob Radonirina Houmadi reserves the right to interrupt, temporarily suspend or modify without notice access to all or part " +
      "of the site for maintenance purposes or for any other reason, without such interruption giving rise to any obligation or compensation.",

    /* ── Section 7 ── */
    "legal.046": "7. Applicable law and jurisdiction",
    "legal.047": "This legal notice is governed by French law.",
    "legal.048":
      "In the event of a dispute and in the absence of an amicable agreement, the dispute shall be brought before the competent " +
      "courts of Thionville, in accordance with the applicable rules of jurisdiction.",

    /* ── Section 8 ── */
    "legal.049": "8. Contact",
    "legal.050": "For any questions regarding this legal notice, please contact me:",
    "legal.051":
      "<strong>Jacob Radonirina Houmadi</strong><br/>" +
      "Thionville 57100<br/>" +
      "<strong>Email:</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a>",
    "legal.052":
      "<strong>By email:</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br/>" +
      "<strong>Via LinkedIn:</strong> <a href='https://www.linkedin.com/in/jacob-radonirina-houmadi-120841b0' target='_blank'>Jacob Radonirina</a><br/>" +
      "<strong>Via Malt :</strong> <a href='https://www.malt.fr/profile/jacobhoumadi' target='_blank'> @jacobhoumadi</a>",


    /* ── Footer ── */
    "legal.055": "",
    "legal.056": "← Back to home",

    /* ── Shared key (footer) ── */
    "footer.legal2": "Privacy Policy",

    // ── Privacy policy ──────────────────────────────
    /* ── Navigation / Header ── */
    "privacy.001": "← Back to home",

    /* ── Title & intro ── */
    "privacy.002": "Privacy Policy",
    "privacy.003": "Last updated: February 2026",
    "privacy.004":
      "<strong>In summary:</strong> This site only collects data you provide through the contact form. " +
      "No data is sold or shared with third parties (except EmailJS for sending emails). You may request " +
      "deletion of your data at any time.",

    /* ── Section 1 ── */
    "privacy.005": "1. Introduction",
    "privacy.006":
      "This Privacy Policy describes how Jacob Radonirina Houmadi(\"we\", \"our\") collects, uses, stores and protects " +
      "your personal data when you use the site jacob-houmadi.com (the \"Site\").",
    "privacy.007":
      "This policy complies with the General Data Protection Regulation (GDPR) of the European Union (EU 2016/679) and " +
      "French legislation on data protection.",

    /* ── Section 2 ── */
    "privacy.008": "2. Data Controller",
    "privacy.009":
      "<strong>Data Controller:</strong> Jacob Radonirina Houmadi<br />" +
      "<strong>Email:</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br />" +
      "<strong>Address:</strong> Hayange, France",

    /* ── Section 3 ── */
    "privacy.010": "3. Data Collected",
    "privacy.011": "3.1 Data collected via the contact form",
    "privacy.012":
      "When you fill out the contact form on our site, we collect the following information:",

    /* Table headers */
    "privacy.013": "Data",
    "privacy.014": "Required",
    "privacy.015": "Purpose",

    /* Table rows – collected data */
    "privacy.016": "Full name",
    "privacy.017": "Yes",
    "privacy.018": "Identify you and personalise the response",
    "privacy.019": "Professional email",
    "privacy.020": "Yes",
    "privacy.021": "Reply to you and discuss your project",
    "privacy.022": "Company name",
    "privacy.023": "No",
    "privacy.024": "Understand your professional context",
    "privacy.025": "Website",
    "privacy.026": "No",
    "privacy.027": "Better understand your project",
    "privacy.028": "Project type",
    "privacy.029": "Yes",
    "privacy.030": "Qualify your request and propose a suitable offer",
    "privacy.031": "Message",
    "privacy.032": "No",
    "privacy.033": "Understand your specific needs",

    /* Automatic data */
    "privacy.034": "3.2 Automatically collected data",
    "privacy.035":
      "We collect <strong>NO</strong> automatic browsing data (no Google Analytics, no advertising trackers, no tracking cookies).",

    /* ── Section 4 ── */
    "privacy.036": "4. Legal Basis for Processing",
    "privacy.037": "The processing of your personal data is based on the following legal grounds:",
    "privacy.038":
      "<strong>Consent:</strong> By filling in the contact form, you explicitly consent to the processing of your data " +
      "for the purposes described.",
    "privacy.039":
      "<strong>Legitimate interest:</strong> Processing your contact request and offering you suitable services " +
      "constitutes our legitimate interest.",

    /* ── Section 5 ── */
    "privacy.040": "5. Use of Data",
    "privacy.041": "We use your personal data only for the following purposes:",
    "privacy.042": "Respond to your contact request within 24 hours",
    "privacy.043": "Send you an automatic confirmation email via EmailJS",
    "privacy.044": "Qualify your project and offer you a personalised proposal",
    "privacy.045": "Communicate with you about your project (if you wish)",
    "privacy.046": "Keep a record of received requests (legal archiving)",
    "privacy.047": "<strong>We do NOT:</strong>",
    "privacy.048": "❌ Sell your data to third parties",
    "privacy.049": "❌ Use your data for advertising purposes",
    "privacy.050": "❌ Send newsletters without your explicit consent",
    "privacy.051": "❌ Share your data with other companies (except EmailJS, see below)",

    /* ── Section 6 ── */
    "privacy.052": "6. Sharing Data with Third Parties",
    "privacy.053": "6.1 EmailJS (email sending service)",
    "privacy.054":
      "For sending the automatic confirmation email, we use the <strong>EmailJS</strong> service.",
    "privacy.055":
      "<strong>Service:</strong> EmailJS<br />" +
      "<strong>Purpose:</strong> Automatic sending of confirmation emails<br />" +
      "<strong>Data shared:</strong> Name, email, project type, message<br />" +
      "<strong>Location:</strong> United States (EmailJS is GDPR compliant)<br />" +
      "<strong>Privacy Policy:</strong>",
    "privacy.056": "https://www.emailjs.com/legal/privacy-policy/",
    "privacy.057": "EmailJS is GDPR compliant and does not share your data with other third parties.",
    "privacy.058": "6.2 Hosting",
    "privacy.059":
      "The site is hosted by <strong>your hosting provider name</strong>, which may have access to technical data " +
      "(server logs) in accordance with its own privacy policy.",

    /* ── Section 7 ── */
    "privacy.060": "7. Data Retention Period",

    /* Table headers */
    "privacy.061": "Data type",
    "privacy.062": "Retention period",
    "privacy.063": "Justification",

    /* Table rows – retention */
    "privacy.064": "Contact form data",
    "privacy.065": "3 years from the request",
    "privacy.066": "Legal limitation period and commercial management",
    "privacy.067": "Emails exchanged",
    "privacy.068": "Duration of commercial relationship + 5 years",
    "privacy.069": "Legal obligation (accounting, taxation)",
    "privacy.070": "Cookies (localStorage)",
    "privacy.071": "13 months maximum",
    "privacy.072": "Maximum period allowed by GDPR",
    "privacy.073":
      "After these periods expire, your data is automatically deleted or anonymised.",

    /* ── Section 8 ── */
    "privacy.074": "8. Your Rights (GDPR)",
    "privacy.075":
      "In accordance with the GDPR, you have the following rights regarding your personal data:",
    "privacy.076": "8.1 Right of access",
    "privacy.077":
      "You may request a copy of all personal data we hold about you.",
    "privacy.078": "8.2 Right of rectification",
    "privacy.079": "You may request the correction of inaccurate or incomplete data.",
    "privacy.080": "8.3 Right to erasure (\"right to be forgotten\")",
    "privacy.081":
      "You may request the deletion of your personal data, unless we have a legal obligation to retain it.",
    "privacy.082": "8.4 Right to restriction of processing",
    "privacy.083":
      "You may request the temporary suspension of processing of your data in certain cases.",
    "privacy.084": "8.5 Right to data portability",
    "privacy.085":
      "You may request to receive your data in a structured, commonly used format (CSV, JSON).",
    "privacy.086": "8.6 Right to object",
    "privacy.087":
      "You may object to the processing of your data for legitimate reasons.",
    "privacy.088": "8.7 Right to withdraw consent",
    "privacy.089":
      "You may withdraw your consent at any time (e.g. refuse cookies).",
    "privacy.090": "8.8 Exercising your rights",
    "privacy.091":
      "<strong>Email:</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br />" +
      "<strong>Subject:</strong> \"Exercising my GDPR rights - [specify the right]\"",
    "privacy.092": "We will respond within <strong>30 days maximum</strong> (GDPR legal deadline).",
    "privacy.093": "8.9 Right to lodge a complaint",
    "privacy.094":
      "If you believe your rights are not being respected, you may lodge a complaint with the French supervisory authority:",
    "privacy.095":
      "<strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />" +
      "3 Place de Fontenoy<br />" +
      "TSA 80715<br />" +
      "75334 Paris Cedex 07<br />" +
      "France<br />" +
      "<strong>Phone:</strong> +33 (0)1 53 73 22 22<br />" +
      "<strong>Website:</strong>",
    "privacy.096": "https://www.cnil.fr",

    /* ── Section 9 ── */
    "privacy.097": "9. Cookies and Similar Technologies",
    "privacy.098": "9.1 Types of cookies used",
    "privacy.099":
      "Our site uses only <strong>essential cookies</strong> necessary for the contact form to function:",

    /* Cookie table headers */
    "privacy.100": "Cookie",
    "privacy.101": "Purpose",
    "privacy.102": "Duration",
    "privacy.103": "Type",

    /* Cookie table rows */
    "privacy.104": "cookieConsent",
    "privacy.105": "Remember your cookie preference",
    "privacy.106": "13 months",
    "privacy.107": "localStorage (essential)",
    "privacy.108": "EmailJS",
    "privacy.109": "Contact form operation",
    "privacy.110": "Session",
    "privacy.111": "Functional cookie",

    "privacy.112": "<strong>We use NO:</strong>",
    "privacy.113": "❌ Advertising cookies (Google Ads, Facebook Pixel, etc.)",
    "privacy.114": "❌ Tracking cookies (Google Analytics, Hotjar, etc.)",
    "privacy.115": "❌ Social network cookies (unless you click on LinkedIn/Malt links)",
    "privacy.116": "9.2 Managing your cookies",
    "privacy.117": "You may at any time:",
    "privacy.118": "Accept or decline cookies via the banner displayed on your first visit",
    "privacy.119": "Delete cookies in your browser settings",
    "privacy.120":
      "Configure your browser to block all cookies (but this may affect the site's functionality)",

    /* ── Section 10 ── */
    "privacy.121": "10. Data Security",
    "privacy.122":
      "We implement appropriate technical and organisational measures to protect your personal data:",
    "privacy.123": "✅ HTTPS connection (SSL/TLS encryption)",
    "privacy.124": "✅ Secure forms",
    "privacy.125": "✅ Limited data access (Jacob Radonirina only)",
    "privacy.126": "✅ Secure hosting compliant with European standards",
    "privacy.127": "✅ Regular backups",
    "privacy.128": "✅ No storage of sensitive data (no bank card, no password)",

    /* ── Section 11 ── */
    "privacy.129": "11. International Data Transfers",
    "privacy.130":
      "Your data is primarily stored and processed within the European Union (France).",
    "privacy.131":
      "<strong>Exception:</strong> EmailJS (United States) for sending emails. EmailJS is GDPR compliant and " +
      "ensures an adequate level of protection through the Standard Contractual Clauses (SCC) approved by the European Commission.",

    /* ── Section 12 ── */
    "privacy.132": "12. Minors' Data",
    "privacy.133":
      "This site is intended for a professional audience. We do not knowingly collect personal data from persons under 16 years of age.",
    "privacy.134":
      "If you are a parent and discover that your child has provided us with personal data, please contact us immediately at " +
      "<a href=\"mailto:jacob.radonirina@gmail.com\">jacob.radonirina@gmail.com</a> so that we can delete it.",

    /* ── Section 13 ── */
    "privacy.135": "13. Changes to this Policy",
    "privacy.136":
      "We reserve the right to modify this Privacy Policy at any time to reflect changes in our practices or for " +
      "other operational, legal, or regulatory reasons.",
    "privacy.137":
      "Any changes will be published on this page along with an update to the \"Last updated\" date at the top of this page.",
    "privacy.138":
      "We encourage you to review this page regularly to stay informed about our privacy practices.",

    /* ── Section 14 ── */
    "privacy.139": "14. Contact",
    "privacy.140":
      "For any questions regarding this Privacy Policy or the processing of your personal data, please contact us:",
     "privacy.141":
      "<strong>Email :</strong> <a href='mailto:jacob.radonirina@gmail.com'>jacob.radonirina@gmail.com</a><br />" +
      "<strong>Délai de réponse :</strong> 30 days maximum (in accordance with GDPR)<br />" +
      "<strong>LinkedIn : </strong>" +
      "<a href='https://www.linkedin.com/in/jacob-radonirina-houmadi-120841b0' rel='noopener' target='_blank'>Jacob Houmadi</a>",

    /* ── Footer ── */
    "privacy.142": "",
    "privacy.143": "← Back to home",
    "privacy.144": "Legal notice",

    "404.label":     "Page / 404-error",
    "404.h1":        "This page was never designed.",
    "404.sub":       "The URL you're looking for doesn't exist — or has been moved. Don't worry, even the best wireframes have missing screens.",
    "404.btn1":      'Back to home <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    "404.btn2":      "View portfolio",
    "404.btn3":      "Contact me",
    "404.toast":     "Page not found — error 404",
    "404.prop-title":"Page",
    "404.prop-key1": "Status",
    "404.prop-key2": "Type",
    "404.prop-val2": "Error",
    "404.prop-key3": "Author",
    "404.prop-key4": "Exp.",
    "404.prop-val4": "10 years",
  }, 
  
};



// ════════════════════════════════════════════════
// MOTEUR DE TRADUCTION
// ════════════════════════════════════════════════

/**
 * Applique la langue donnée à tous les éléments data-i18n / data-i18n-html.
 * data-i18n      → textContent (texte pur, XSS-safe)
 * data-i18n-html → innerHTML  (éléments avec <br>, <strong>, <a>, <span>…)
 */
function switchLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('lang', lang);

  // ── Texte pur ──────────────────────────────────
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const t   = translations[lang][key];
    if (!t) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t;
    } else if (el.tagName === 'OPTION') {
      el.textContent = t;
    } else {
      el.textContent = t;
    }
  });

  // ── HTML intérieur ─────────────────────────────
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    const t   = translations[lang][key];
    if (t) el.innerHTML = t;
  });

  // ── Sélecteur de langue ────────────────────────
  const select = document.querySelector('.lang-select');
  if (select) select.value = lang;

  // ── Attribut lang sur <html> ───────────────────
  document.documentElement.lang = lang;

    // Ajouter cette partie pour les images
  document.querySelectorAll('img[data-lang-fr], img[data-lang-en]').forEach(img => {
      const newSrc = img.getAttribute('data-lang-' + lang);
      if (newSrc) {
      img.src = newSrc;
      }
  });
}

// ── Auto-initialisation ────────────────────────
// Utilise la préférence sauvegardée, sinon la langue du navigateur
document.addEventListener('DOMContentLoaded', () => {
  const saved   = localStorage.getItem('lang');
  const browser = (navigator.language || 'fr').split('-')[0];
  const lang    = saved || (browser === 'en' ? 'en' : 'fr');
  switchLanguage(lang);
});



/**
 * setLang(lang)
 * Appelé par les boutons du switcher custom.
 * Met à jour l'UI du switcher + délègue à switchLanguage() de translations.js
 */
function setLang(lang) {
    // 1. Transition visuelle des boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // 2. Sync avec le <select> natif (garde la compat avec translations.js)
    const select = document.querySelector('.lang-select');
    if (select) select.value = lang;

    // 3. Appel du moteur de traduction de translations.js
    if (typeof switchLanguage === 'function') {
        switchLanguage(lang);
    }
}


