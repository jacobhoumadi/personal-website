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
    'nav.casestudies':  'Travaux',
    'nav.services':     'Offres',
    'nav.testimonials': 'Témoignages',
    'nav.faq':          'FAQ',
    'mobilenav.p': 'Transformons votre projet ensemble',
    'mobilenav.cta' : 'Me contacter',

    // ── Hero ─────────────────────────────────────
    'h1.1':         'Product designer',
    'hero.quote':   '10 ans en design. Madagascar → Luxembourg → France',
    'hero.subtitle':'Autodidacte. Prouvé loin de chez moi.<br/> En laissant toujours mon empreinte \'digitale\' 😉.<br/> Aujourd\'hui j\'aide les PME et startups B2B à construire des interfaces cohérentes avec leur marque — et qui convertissent. Avec des résultats mesurables à chaque étape.',
    'hero.cta':     'Voir mes offres',
    'hero.hint' : ' <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 4a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' +
                                'Cliquer pour en découvrir mes autres facettes',
    'hero.role.pro'         : '10 ans en design. Madagascar → Luxembourg → France',
    'hero.role.topsprinter' : 'Top Sprinter Yummy Labs 🏃',
    'hero.role.garden'      : 'Futur paysan agroforestier 🌳🌴',
    'hero.role.snack'       : 'Ex-coordinateur du goûter rotatif du vendredi ☕',
    'hero.role.artist'      : 'Artiste digital 🎨',

    // ── Section logos & stats ────────────────────
    'logos.label':       'Ils m\'ont fait confiance',
    'quote.text':        'Je ne commence pas par Figma. <br><span> Je commence par les problèmes de votre produit. </span>',
    'stat.exp.label':    'd\'expériences',
    'stat.sector':       'SaaS · B2B',
    'stat.awards.label': '→ Handoff',
    'stat.sector.label': 'Fintech',
    'stat.exp' : '10 ans',
    'stat.awards': 'Découverte',


    // ── Bandeau principal ─────────────────────────
    'main.h2':      'Pour les équipes B2B qui ont perdu du temps avec des <span>designers qui n\'ont pas compris le produit.</span>',
    'main.subtitle':'Parlez-moi de votre projet. Je vous réponds sous 24h avec une proposition personnalisée.',

    // ── Formulaire ────────────────────────────────
    'form.name':    'Nom complet',
    'form.email':   'Email professionnel',
    'form.company' : '<label for="company">Votre entreprise</label>' + 
                      '<input type="text" id="company" name="company" placeholder="e.g SpaceX" required>',
    'form.website': 'Site web',
    'form.project': 'Votre situation',
    'form.message': ' <label for="message">Message</label>' +
                      '<textarea id="message" name="message" rows="4" placeholder="Votre message ..."></textarea>',
    'form.submit':  'Démarrer la conversation →',
    'form.consent': 'J\'accepte que mes données soient utilisées pour traiter ma demande, conformément à la <a href="politique-confidentialite.html" target="_blank">politique de confidentialité</a>.',

    // ── Sélecteur projet ──────────────────────────
    'project.select':      'Sélectionnez...',
    'project.structurer':  'Structurer – produit existant (4 500€ – 6 000€)',
    'project.construire':  'Construire – from scratch ou refonte (9 000€ – 12 000€)',
    'project.renforcer':   'Renforcer – mission embarquée (TJM)',
    'project.autre':       'Autre à discuter',

    // ── Bloc Calendly (post-envoi) ────────────────
    'calendly.title': '✅ Message envoyé, merci !',
    'calendly.text':  'Parfait, je reviens vers vous sous 24h. En attendant, <strong>réservez directement un créneau</strong> pour qu\'on parle de votre projet.',

    // ── Liens ─────────────────────────────────────
    'link.privacy': 'politique de confidentialité',

    // ── Footer ────────────────────────────────────
    'footer.legal1': 'Mentions légales',
    'footer.legal2': 'Politique de confidentialité',

    // ── Cases studies ─────────────────────────────
    'casestudies.title':          'Travaux',
    'casestudies.venue.title':    'Social Layer',
    'casestudies.venue.desc':     'Augmenter la rétention sans ajouter de friction ni de coût de modération.',
    'casestudies.tango.title':    'Mobile App',
    'casestudies.tango.desc':     'Refondre un e-commerce télécom pour booster la conversion.',
    'casestudies.checkout.title':        'Checkout',
    'casestudies.checkout.desc':         'Simplifier le funnel d\'achat pour réduire les abandons.',
    'casestudies.axian.mediaroom.title': 'Media Room',
    'casestudies.axian.learning.title':  'Learning',
    'casestudies.axian.website.title':   'Website',
    'casestudies.axian.upcoming':        'À venir',
    'casestudies.more':                  'Voir tous les travaux →',

    // ── Portfolio · MyTango Mobile App ────────────
    'portfolio.tango_app.title':    'MyTango Mobile App',
    'portfolio.tango_app.role':     'UX/UI Designer · Opérateur télécom Luxembourg',
    'portfolio.tango_app.desc':     'Tango est un opérateur télécom luxembourgeois avec une app mobile permettant la gestion des offres, des paiements, et des services additionnels.<span class="mobile-hidden"><br/> Mission : refondre l\'expérience de l\'app mobile pour résoudre des faiblesses critiques, améliorer la satisfaction client et accélérer les développements.</span>',
    'portfolio.tango_app.insights': 'Réalisations clés :',
    'portfolio.tango_app.btn1':     'Résoudre un point de douleur récurrent',
    'portfolio.tango_app.btn1.desc':'Dashboard de consommation repensé sur l\'affichage des jauges',
    'portfolio.tango_app.btn2':     'Mettre en place une stratégie de rétention : Jeu Enjoy',
    'portfolio.tango_app.btn2.desc':'Optimisation UX Gaming in-app et redirection vers pages clés',
    'portfolio.tango_app.btn3':     'Simplifier une offre complexe',
    'portfolio.tango_app.btn3.desc':'Activation intuitive malgré contraintes multiples au lancement',
    'portfolio.tango_app.btn4':     'Améliorer la satisfaction utilisateurs',
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
    'portfolio.tango_web.btn3':     'Optimiser le parcours utilisateur',
    'portfolio.tango_web.btn3.desc':'Clarification de l\'UI et des étapes clés pour un parcours plus fluide',
    'portfolio.tango_web.btn4':     'Assurer la cohérence cross-plateforme',
    'portfolio.tango_web.btn4.desc':'Design system partagé avec l\'app mobile et la plateforme Self-care',

    // ── Portfolio · Axian Group ───────────────────
    'portfolio.axian.title':    'Axian Group',
    'portfolio.axian.role':     'Digital Designer · Grand Groupe Panafricain',
    'portfolio.axian.desc':     'Axian Group est l\'un des plus grands groupes panafricains de Madagascar, opérant dans les télécoms, l\'énergie, les infrastructures, les services financiers et la fintech.<span class="mobile-hidden"><br/>En tant que Digital Designer pendant 5 ans, j\'ai participé à la refonte complète de l\'identité de marque du groupe.</span>',
    'portfolio.axian.btn1':     'Incarner la vision business',
    'portfolio.axian.btn1.desc':'Création d\'une identité culturelle forte "Afrixian"',
    'portfolio.axian.btn2':     'Unifier l\'écosystème',
    'portfolio.axian.btn2.desc':'5 secteurs rassemblés sous une identité commune et un storytelling partagé',
    'portfolio.axian.btn3':     'Refondre le site web corporate',
    'portfolio.axian.btn3.desc':'Architecture de l\'information + design UI + storytelling de l\'impact',
    'portfolio.axian.btn4':     '4 prix Creatives 974 Awards',
    'portfolio.axian.btn4.desc':'Direction artistique reconnue internationalement',

    // ── Portfolio · Silva Paris ───────────────────
    'portfolio.silva.title':    'Silva Paris',
    'portfolio.silva.role':     'Direction Artistique Web / UX Design · Artisanat de luxe',
    'portfolio.silva.desc':     'Silva Paris est une maison d\'artisanat tapissier de luxe depuis 1982, spécialisée dans les décors sur mesure pour hôtels et résidences privées.<span class="mobile-hidden"><br/> Mon rôle : déclinaison digitale de l\'identité de marque (direction artistique web, architecture UX, design des interfaces).</span>',
    'portfolio.silva.btn1':     'Décliner l\'identité web',
    'portfolio.silva.btn1.desc':'Adaptation des codes visuels au digital',
    'portfolio.silva.btn2':     'Optimiser l\'architecture d\'information',
    'portfolio.silva.btn2.desc':'Parcours utilisateur condensé, mise en valeur du savoir-faire artisanal',
    'portfolio.silva.btn3':     'Construire un design system cohérent',
    'portfolio.silva.btn3.desc':'Composants UI réutilisables, guidelines pour le développement',

    'portfolio.venue.title':    'Venue · SuperBloom',
    'portfolio.venue.role':     'Product Designer · Jeu mobile · 4M+ joueurs',
    'portfolio.venue.desc':     'Venue est un jeu de design d\'intérieur avec 90% de joueuses — qui jouaient seules ensemble.<span class="mobile-hidden"><br/> Mission : introduire une dimension sociale via le Design Studio, sans créer de pression ni de compétition.</span>',
    'portfolio.venue.insights': 'Réalisations clés :',
    'portfolio.venue.btn1':     'Renforcer la rétention J7–J30',
    'portfolio.venue.btn1.desc':'Design Studios collectifs ancrés dans une dynamique hebdomadaire, sans pression de performance',
    'portfolio.venue.btn2':     'Réduire la friction d\'engagement au design studio',
    'portfolio.venue.btn2.desc':'Explorer sans s\'engager, partir sans culpabiliser grâce à une micro-copy intentionnelle',
    'portfolio.venue.btn3':     'Créer des interactions sans modération',
    'portfolio.venue.btn3.desc':'Système de réactions guidées conçu pour générer du lien de manière naturelle et maîtrisée',
    'portfolio.venue.btn4':     'Intégrer des moments émotionnels',
    'portfolio.venue.btn4.desc':'Récompenses collectives intégrées directement dans l\'expérience, sans rupture de flow',

    // ── Case Study · Venue ────────────────────────
    'cs.venue.persona.stat1': '20h de jeu',
    'cs.venue.persona.stat2': '600 designs',
    'cs.venue.persona.stat3': 'Niv 12',
    'cs.venue.persona.stat4': 'Style minimaliste',
    'cs.venue.back':                    '← Travaux',
    'cs.venue.h1':                      'Augmenter la rétention sans ajouter de friction ni de coût de modération.',
    'cs.venue.hero.sub':                'Design Studios · Étude de cas UX — Venue by Yummy Labs',
    'cs.venue.meta.project.label':      'Projet',
    'cs.venue.meta.project.value':      'Venue, Design Studios (Phase 2 Social)',
    'cs.venue.meta.role.label':         'Rôle',
    'cs.venue.meta.role.value':         'Lead UX & Product Designer',
    'cs.venue.meta.studio.label':       'Studio',
    'cs.venue.meta.studio.value':       'Yummy Labs en partenariat avec Superbloom',
    'cs.venue.meta.deliv.label':        'Livrables',
    'cs.venue.meta.deliv.value':        'Système conceptuel · Flow de découverte · Modèle d\'interaction · Deck de présentation',
    'cs.venue.meta.constraint.label':   'Contrainte',
    'cs.venue.meta.constraint.value':   'Zéro nouveau comportement requis du joueur',
    'cs.venue.meta.recog.label':        'Reconnaissance',
    'cs.venue.meta.recog.value':        'Top Sprinter, Mars 2026',
    'cs.venue.h2.problem':              'Le Problème',
    'cs.venue.problem.lead':            'Chaque soir, Beth ferme Venue et ouvre Facebook.',
    'cs.venue.problem.p1':              'Elle joue depuis des mois. Elle crée des pièces, les soumet au vote, accumule des récompenses. Elle est engagée. Elle est douée. Mais quand elle veut <em>ressentir quelque chose</em> — partager un résultat, voir si quelqu\'un a remarqué — le jeu n\'a rien à lui offrir. Alors elle va ailleurs.',
    'cs.venue.problem.p2':              'Le problème n\'était pas un faible engagement.',
    'cs.venue.problem.stats.label':     'Venue avait :',
    'cs.venue.problem.stats.value':     '4M+ téléchargements — 90% de joueuses — des boucles quotidiennes solides.',
    'cs.venue.problem.conclusion':      'Le problème, c\'est que rien de tout ça ne semblait compter pour quelqu\'un d\'autre. <span class="muted">Elle avait déjà trouvé</span> sa communauté<span class="muted">. Elle l\'avait juste trouvée </span>en dehors du produit.',
    'cs.venue.h2.insight':              'L\'Insight',
    'cs.venue.insight.lead':            'La plupart des fonctionnalités sociales dans les jeux résolvent le mauvais problème. Elles demandent aux joueuses de <em>faire du social</em><span class="text-gray"> :</span> rejoindre une guilde, ajouter des amis, publier un score. Mais des joueuses comme Beth ne veulent pas <em>performer</em> l\'appartenance. Elles veulent la ressentir.',
    'cs.venue.insight.label':           'Deux choses en découlent :',
    'cs.venue.insight.card1.title':     'Faible charge cognitive',
    'cs.venue.insight.card1.desc':      '<strong>Au moment où vous demandez à quelqu\'un de rejoindre, vous lui donnez l\'occasion de refuser. </strong> Les mécanismes d\'adhésion volontaire comportent des risques de désinscription. Chaque étape supplémentaire présente un risque de fuite.',
    'cs.venue.insight.card2.title':     'Aucune modération nécessaire',
    'cs.venue.insight.card2.desc':      'Les mécaniques sociales qui dépendent de la modération pour rester non-toxiques échoueront. La toxicité doit être structurellement impossible, pas seulement gérable.',
    'cs.venue.h2.challenge':            'Le Défi de Design',
    'cs.venue.challenge.lead':          'Le brief de SuperBloom : concevoir un système social de groupe pour Venue qui encourage la collaboration, crée des objectifs partagés, et donne une impression de cosy, pas de compétition.',
    'cs.venue.challenge.constraints.label': 'Trois contraintes fortes ont rendu ça intéressant :',
    'cs.venue.challenge.card1.title':   'Vote anonyme',
    'cs.venue.challenge.card1.desc':    'Les joueuses ne peuvent pas choisir les créations qu\'elles voient',
    'cs.venue.challenge.card2.title':   'Jeu décontracté',
    'cs.venue.challenge.card2.desc':    'Aucune tolérance pour les devoirs supplémentaires',
    'cs.venue.challenge.card3.title':   'Pas de chat',
    'cs.venue.challenge.card3.desc':    'Pas de texte, pas de charge de modération.',
    'cs.venue.challenge.quote':         'Ce n\'est pas un système de "guerre de guildes".<br>C\'est un collectif créatif.',
    'cs.venue.h2.principles':           'Principes de Design',
    'cs.venue.principles.lead':         'Avant de toucher un seul écran, j\'ai défini quatre critères non négociables que chaque mécanisme devra respecter.',
    'cs.venue.principle.1.title':       'Structurellement incapable de toxicité',
    'cs.venue.principle.1.desc':        'Si une mécanique peut produire une mauvaise expérience, elle le fera. La solution n\'est pas un ajustement — c\'est de supprimer le mécanisme. Pas de classements. Pas de visibilité des contributions individuelles. Aucun moyen de comparer les membres.',
    'cs.venue.principle.2.title':       'L\'absence doit sembler sans conséquence',
    'cs.venue.principle.2.desc':        'Manquer une semaine ne doit générer aucun signal de culpabilité. Pas de "tu as déçu ton équipe". Pas de rupture de série.<br>La contribution est significative quand on est là, invisible quand on ne l\'est pas.',
    'cs.venue.principle.3.title':       'L\'appartenance s\'observe, elle ne se déclare pas',
    'cs.venue.principle.3.desc':        'Le système observe ce que font déjà les joueuses et s\'en sert comme contribution. Le simple fait de jouer <em>est</em> une participation. Pas de seuil d\'adhésion, pas de fenêtre de confirmation.',
    'cs.venue.principle.4.title':       'Collectif avant individuel',
    'cs.venue.principle.4.desc':        'Les réussites sont collectives. Les récompenses sont partagées. Les progrès s’affichent sous la forme d’une seule barre, et non d’une somme de barres individuelles. Le Studio réussit collectivement ou pas du tout.',
    'cs.venue.h2.solution':             'La Solution · Design Studios',
    'cs.venue.solution.lead1':          'Design Studios est un système passif d\'appartenance communautaire intégré dans la boucle de jeu existante de Venue.',
    'cs.venue.solution.lead2':          'Les joueuses contribuent à un Studio partagé en jouant normalement',
    'cs.venue.solution.pill1':          'soumettre des designs',
    'cs.venue.solution.pill2':          'voter',
    'cs.venue.solution.pill3':          'compléter des chapitres',
    'cs.venue.solution.pill4':          'Objectif partagé',
    'cs.venue.solution.no-new':         'Aucun nouveau comportement requis.',
    'cs.venue.solution.p1':             'Chaque Studio compte entre 10 et 20 membres sélectionnés en fonction de leurs goûts esthétiques, partage un objectif hebdomadaire, dispose d\'une Studio Room qui s\'agrandit à mesure que le Studio gagne des niveaux, et d\'une galerie collective où les créations soumises par les membres sont visibles par tous.',
    'cs.venue.solution.panel.text':     'Le Studio est sélectionnés et présenté.<br>Le nôtre : <strong>Casa Bloom</strong>',
    'cs.venue.h2.precedents':           'Ces contraintes ne sont pas nouvelles.',
    'cs.venue.precedents.lead':         'Les meilleurs jeux les ont déjà résolues, sans jamais les combiner.',
    'cs.venue.precedent.1.tag':         'L\'état de bénévolat',
    'cs.venue.precedent.2.tag':         'Pas de toxicité par architecture',
    'cs.venue.precedent.3.tag':         'Absence sans culpabilité',
    'cs.venue.h2.joining':              'La Mécanique d\'adhésion : "on appartient forcément"',
    'cs.venue.joining.lead':            'C\'était la décision la plus déterminante de tout le système.',
    'cs.venue.joining.p1':              'Pendant l\'onboarding, la joueuse appuie sur un Studio et retourne jouer. Rien ne change à l\'écran.',
    'cs.venue.joining.p2':              'Mais en coulisses elle sait que tout ce qu\'elle fait déjà commence à contribuer à quelque chose de partagé.',
    'cs.venue.joining.p3':              'Durant les deux premières semaines, Beth est techniquement bénévole. Elle contribue sans rien changer à ce qu\'elle fait déjà, sans étiquette, attente ou visibilité.',
    'cs.venue.joining.p4':              'Après deux cycles hebdomadaires, la transition se fait automatiquement. Un changement de statut discret apparaît dans sa vue Studio.',
    'cs.venue.joining.blockquote':      'L\'appartenance n\'est pas une étape. C\'est un schéma.<br>Quand elle sait qu\'elle est membre, elle se comporte déjà comme l\'une d\'eux.',
    'cs.venue.joining.callout':         '<strong>Note de langage :</strong> Le CTA est <strong>"Jouer avec ce Studio"</strong>, jamais "Rejoindre le Studio."<br>La joueuse choisit de jouer, pas de s\'engager. Ce seul changement de mot est déterminant.',
    'cs.venue.h2.d7':                   'Le Flow de Découverte J7 · 7 Étapes',
    'cs.venue.d7.lead':                 'Comment Beth rencontre-t-elle son Studio pour la première fois ? <span class="muted"> Pas via une bannière. Pas une notification push.</span> Via un accomplissement.',
    'cs.venue.d7.p1':                   'Au Jour 7, Beth a complété plusieurs chapitres et est passée plusieurs fois dans la boucle de vote. Le classement vient de se débloquer. Elle est conditionnée à la boucle de récompense — les points rouges fonctionnent sur elle.',
    'cs.venue.d7.trigger':              'Le déclencheur : <br/><strong>10 designs soumis.</strong> Pic émotionnel. Elle récupère une récompense au moment où le système ouvre une porte.',
    'cs.venue.d7.expand':               'Agrandir',
    'cs.venue.d7.step1.num':            '1. Accomplissement',
    'cs.venue.d7.step1.desc':           '<ul><li>Récompense récupérée.</li><li>Un bref message système apparaît.</li></ul>',
    'cs.venue.d7.step1.insight':        'Pic émotionnel — haute réceptivité.',
    'cs.venue.d7.step2.num':            '2. Révélation du Studio',
    'cs.venue.d7.step2.desc':           '<ul><li>Overlay plein écran.</li><li>"Tu es prête à rejoindre un Design Studio."</li></ul>',
    'cs.venue.d7.step2.insight':        '"Peut-être plus tard" toujours visible. Pas de pression.',
    'cs.venue.d7.step3.num':            '3. Intro du Studio',
    'cs.venue.d7.step3.desc':           '<ul><li>Trois concepts seulement.</li><li>Langage chaleureux.</li><li>Aucune mécanique de rejet.</li></ul>',
    'cs.venue.d7.step3.insight':        'Compris en moins de 10 secondes.',
    'cs.venue.d7.step4.num':            '4. Parcourir les Studios',
    'cs.venue.d7.step4.desc':           '<ul><li>3 suggestions sélectionnées selon le style de design.</li><li>Les galeries montrent une communauté déjà active.</li></ul>',
    'cs.venue.d7.step5.num':            '5. Confirmer l\'adhésion',
    'cs.venue.d7.step5.desc':           '<ul><li>Légende du Studio et visages des membres avant le CTA.</li></ul>',
    'cs.venue.d7.step5.insight':        'Elle rejoint des personnes, pas un système.',
    'cs.venue.d7.step6.num':            '6. Accueil du Studio',
    'cs.venue.d7.step6.desc':           '<ul><li>Première vue de Casa Bloom.</li><li>Niveaux visibles.</li><li>Barre d\'objectif active.</li><li>Feed d\'activité en mouvement.</li></ul>',
    'cs.venue.d7.step6.insight':        '<em>Vivant dès l\'arrivée.</em>',
    'cs.venue.d7.step7.num':            '7. Retour à son jeu',
    'cs.venue.d7.step7.desc':           '<ul><li>Pas de relance. Pas de nouvelle tâche.</li><li>Elle joue comme d\'habitude; les clés s\'écoulent automatiquement.</li></ul>',
    'cs.venue.d7.step7.insight':        'Même boucle, nouveau sens.',
    'cs.venue.d7.emotion1':             'Excitée',
    'cs.venue.d7.emotion2':             'Curieuse',
    'cs.venue.d7.emotion3':             'Informée',
    'cs.venue.d7.emotion4':             'Intriguée',
    'cs.venue.d7.emotion5':             'Chaleureuse',
    'cs.venue.d7.emotion6':             'Appartenance',
    'cs.venue.d7.emotion7':             'Apaisée',
    'cs.venue.h2.currencies':           'Deux Monnaies, Deux Temporalités',
    'cs.venue.currencies.lead':         'Le système fonctionne avec deux monnaies qui <span class="muted">évoluent à des rythmes différents — et c\'est cette distinction</span> qui qui assure en grande partie la rétention.',
    'cs.venue.currency.weekly.title':   'Progression hebdomadaire',
    'cs.venue.currency.weekly.name':    'Clé',
    'cs.venue.currency.weekly.desc1':   'Débloque les niveaux de récompense hebdomadaires :',
    'cs.venue.currency.weekly.desc2':   'Se réinitialise chaque semaine.<br>Gagnée via le jeu normal :<br>- soumission d\'un design (+1),<br>- session de vote (+1),<br>- obtention 5 étoiles (+2).',
    'cs.venue.currency.weekly.tag':     'Cette semaine. Un effort qui compte maintenant.',
    'cs.venue.currency.perm.title':     'Progression permanente',
    'cs.venue.currency.perm.name':      'Flèche',
    'cs.venue.currency.perm.desc':      'S\'accumule semaine après semaine et ne se réinitialise jamais.<br>Gagnée exclusivement en complétant le défi collectif hebdomadaire en Studio.<br>Chaque niveau de Flèche débloque définitivement une nouvelle Studio Room partagée.',
    'cs.venue.currency.perm.tag':       'Pour toujours. Partir, c\'est laisser derrière un espace qu\'elle a aidé à construire.',
    'cs.venue.h2.voting':               'Rendre le Vote Anonyme Plus Humain',
    'cs.venue.voting.lead':             'Le vote dans Venue est aléatoire et anonyme par conception. <span class="muted">Cela signifie que le feed du Studio et la réserve de votes sont structurellement séparés. Je ne pouvais pas construire de lien via les votes</span>. Alors je l\'ai construit ailleurs.',
    'cs.venue.voting.tags.text':        '<strong>Tags de feedback :</strong> Quand Beth vote, elle peut laisser un tag prédéfini avec son vote. Pas un score mais un signal.<br>Pendant quelques secondes, elle n\'optimise pas un résultat.<br>Elle honore quelqu\'un.',
    'cs.venue.voting.gallery.label':    'Réactions en galerie :',
    'cs.venue.voting.gallery.desc':     'Dans la galerie du Studio, elle peut réagir aux designs de ses coéquipiers avec des feedbacks prédéfinis. Pas de texte. Aucune modération requise. Mais soudain, la reconnaissance est possible entre des personnes qui se connaissent.',
    'cs.venue.voting.closing':          'Zéro surcharge de modération. Structurellement sûr. Émotionnellement significatif.<br>La palette prédéfinie est la décision de design — pas une limitation.',
    'cs.venue.h2.milestones':           'Paliers · Quand le Studio Prend Vie',
    'cs.venue.milestones.lead':         'Quand le Studio atteint un seuil collectif, l\'espace réagit.',
    'cs.venue.milestone.word1':         'Lumineux.',
    'cs.venue.milestone.word2':         'Subtil.',
    'cs.venue.milestone.word3':         'Partagé.',
    'cs.venue.milestone.body1':         'Pas de grande célébration. Pas de mise en avant individuelle. Juste assez pour dire : <em class="milestone-em">tu faisais partie de ça.</em>',
    'cs.venue.milestone.body2':         'La révélation des paliers suit un modèle de <strong>Révélation Progressive</strong>. Plutôt qu\'un unique moment spectaculaire qui culmine puis s\'estompe, la Studio Room prend vie progressivement au fil de la semaine, produisant un engagement constant et évitant la chute émotionnelle post-révélation.',
    'cs.venue.milestone.th.day':        'Jour',
    'cs.venue.milestone.th.reveal':     'Révélation Progressive',
    'cs.venue.milestone.th.rate':       'Taux /10',
    'cs.venue.milestone.td.d1':         'J1',
    'cs.venue.milestone.td.d2':         'J2',
    'cs.venue.milestone.td.d3-4':       'J3-J4',
    'cs.venue.milestone.td.d5':         'J5',
    'cs.venue.milestone.td.d6':         'J6',
    'cs.venue.milestone.td.d7':         'J7',
    'cs.venue.milestone.d1':            'Neutre — pas encore de destination',
    'cs.venue.milestone.d2':            'Délice — Spark se débloque de façon inattendue',
    'cs.venue.milestone.d34':           'Excitée/surprise — Bloom se débloque, le schéma est mémorisé',
    'cs.venue.milestone.d5':            'Satisfaction — Glow se débloque sous forme de mérite plutôt qu\'aléatoire. Plus calme que J2 mais plus profond',
    'cs.venue.milestone.d6':            'Beth perçoit le schéma. Il pourrait exister quelque chose de plus. Un jour restant. L\'attraction est maintenant intentionnelle',
    'cs.venue.milestone.d7':            'Satisfaite, curieuse pour la semaine suivante',
    'cs.venue.h2.outcomes':             'Résultats',
    'cs.venue.outcome.d7.tag':          'J7',
    'cs.venue.outcome.d30.tag':         'J30',
    'cs.venue.outcomes.lead':           'Il s\'agit d\'un concept de design <span class="muted">soumis pour évaluation Phase 2</span>, basé sur le comportement observé des joueuses et des hypothèses validées.',
    'cs.venue.outcome.d7.body':         'Le flow de découverte accroche au moment exact de <strong>pic de réceptivité émotionnelle</strong>. Les joueuses reviennent pour l\'objectif hebdomadaire partagé avant d\'avoir consciemment décidé de rester.',
    'cs.venue.outcome.d30.body':        'Les Flèches créent un <strong>attachement identitaire</strong>. Une joueuse qui a contribué à trois déblocages de Studio Room n\'est pas la même qu\'une joueuse sans investissement. Partir a un coût réel et visible — sans aucune mécanique de pression.',
    'cs.venue.outcome.ops.body':        '<strong>Zéro surcharge de modération.</strong> Pas de chat. Pas de texte libre. Aucun flow de signalement nécessaire. Le système est structurellement incapable de produire le contenu qui nécessite une intervention.',
    'cs.venue.h2.next':                 'Ce que je ferais ensuite',
    'cs.venue.next.1.lead':             'L\'autre feed n\'a jamais été construit',
    'cs.venue.next.1.p1':              'L\'onglet Social introduit deux vues : le feed de Mon Studio et l\'Autre feed — un schéma familier de suivre d\'abord, puis exploration plus large. Beth voit les designers qu\'elle suit, puis ceux recommandés par le système selon le style.',
    'cs.venue.next.1.p2':              'Le classement Phase 1 reste en placeholder, tandis que la prochaine itération s\'appuie sur le système de suivi existant (mais peu utilisé).',
    'cs.venue.next.2.lead':             'Visibilité des tags de feedback.',
    'cs.venue.next.2.p1':              'Les tags alimentent-ils visiblement le profil du designer, ou disparaissent-ils dans l\'algorithme ? Cette question a des implications UX et business, et n\'est pas encore résolue.',
    'cs.venue.next.3.lead':             'Monétisation de l\'inventaire permanent.',
    'cs.venue.next.3.p1':              'Les Studio Rooms se débloquent définitivement, ce qui crée un vrai coût au départ.',
    'cs.venue.next.3.p2':              'Savoir si cela peut aussi être une surface de monétisation (objets cosmétiques du Studio, déco limitée) est une direction viable délibérément mise de côté pour l\'instant.',
    'cs.venue.h2.learned':             'Ce que j\'ai appris',
    'cs.venue.learned.1.title':        'Le JTBD change la qualité de chaque décision en aval.',
    'cs.venue.learned.1.desc1':        'Découper Beth en quatre moments — rejoindre, rester, contribuer, partir — a rendu chaque décision testable contre une situation précise, pas un persona vague.',
    'cs.venue.learned.1.desc2':        'Chaque moment porte sa propre émotion, sa peur et son job. Cela a rendu le lien avec J7 et J30 structurellement clair, transformant le raisonnement design en argument business que les parties prenantes peuvent soutenir.',
    'cs.venue.learned.2.title':        'Les bonnes références sont des systèmes, pas des écrans.',
    'cs.venue.learned.2.desc1':        'Regarder au-delà des feeds de design a déplacé la question de "comment ça devrait ressembler ?" à "quel problème a déjà été résolu à grande échelle ?" Des jeux comme Journey ou Neko Atsume ont fourni des modèles d\'interaction prouvés, pas juste de l\'inspiration.',
    'cs.venue.learned.2.desc2':        'Emprunter l\'architecture, pas l\'esthétique, a conduit à des décisions plus confiantes et plus ancrées.',
    'cs.venue.learned.3.title':        'L\'IA comprime l\'écart entre hypothèse et clarté.',
    'cs.venue.learned.3.desc1':        'Utiliser l\'IA avec Figma a rendu l\'itération plus rapide et plus exploratoire. Au lieu de résoudre l\'incertitude en amont, je pouvais construire pour la résoudre — tester, voir, ajuster.',
    'cs.venue.learned.3.desc2':        'Ce changement a réduit la friction dans la prise de décision et a rendu le système global plus affûté, du concept à l\'étude de cas finale.',
    'cs.venue.h2.quotes':              'Principes clés que je porterai en avant',
    'cs.venue.quote.1':                'Les mécaniques sociales doivent être structurellement incapables de produire de la toxicité, sans dépendre des paramètres ou de la modération pour prévenir les mauvais résultats.',
    'cs.venue.quote.2':                'Le moment où vous demandez à quelqu\'un de rejoindre, vous créez un moment où il peut dire non. Concevez l\'appartenance, pas la demande.',
    'cs.venue.quote.3':                'L\'absence ne doit pas sembler avoir des conséquences. La présence doit sembler significative. Ce ne sont pas le même problème de design.',
    'cs.venue.cta.h2':                 'Vous voulez voir le système complet ?',
    'cs.venue.cta.p':                  'L\'ensemble des livrables est disponible sur demande.',
    'cs.venue.cta.tag1':               'Schéma concept complet',
    'cs.venue.cta.tag2':               'Deck de présentation 10 diapositives',
    'cs.venue.cta.tag3':               'Spéc flow de découverte J7',
    'cs.venue.cta.tag4':               'Documentation tests utilisateurs',
    'cs.venue.cta.tag5':               'Justification des décisions design',
    'cs.venue.cta.btn':                'Prendre contact',

    // ── Case Study · Benchmark Onboarding ────────
    'casestudies.onboarding.tag':'Analyse & veille',
    'casestudies.onboarding.title':'Onboarding mobile',
    'casestudies.onboarding.desc':'Ce que 66 apps font (bien ou mal).',
    'cs.ob.back':           '← Travaux',
    'cs.ob.tag':            'Analyse & veille · UX Mobile',
    'cs.ob.h1':             'Onboarding mobile —<br>ce que <span>66 apps</span> font (bien ou mal)',
    'cs.ob.subtitle':       'Les patterns qui reviennent chez les apps les mieux notées, et ceux qui manquent chez les autres. Un benchmark vu à travers un regard UX.',
    'cs.ob.meta.1':         '66 apps analysées',
    'cs.ob.meta.2':         '16 apps ⭐⭐⭐ annotées',
    'cs.ob.meta.4':         'Social · Finance · Santé · IA · Travel & +',
    'cs.ob.intro':          "Ce benchmark recense 66 apps sur leurs flux d'onboarding : ce qu'elles font en premier, comment elles justifient leur valeur, quand elles demandent des permissions. Ce qui m'intéresse ici, c'est moins le classement que les récurrences — les mêmes patterns qui reviennent chez les apps bien notées, et les mêmes absences chez les autres. Une ressource utile si vous travaillez sur l'acquisition ou la rétention early.",
    'cs.ob.label.obs':      '3 observations clés',
    'cs.ob.obs1.title':     'La valeur perçue précède toujours la demande',
    'cs.ob.obs1.body':      "Parmi les apps ⭐⭐⭐, presque toutes montrent leur valeur avant de demander quoi que ce soit — permission, compte, ou paiement. L'ordre n'est pas anodin : quand une app demande avant d'avoir justifié sa présence, elle crée une friction à froid. Les meilleures apps ne demandent pas, elles méritent.",
    'cs.ob.obs2.title':     '« Aller droit au but » domine dans les rubriques Voyages & Gastronomie',
    'cs.ob.obs2.body':      "Les apps de voyage et de livraison n'ont pas besoin de vous convaincre : l'intention est déjà là à l'ouverture. Uber, Trainline, Booking, Deliveroo — tous vont droit au but. Aucun tutorial, aucun welcome screen. C'est une décision UX cohérente avec le contexte d'usage : l'utilisateur est en situation, pas en exploration.",
    'cs.ob.obs3.title':     'Claude est la seule app IA ⭐⭐⭐ — ChatGPT est à ⭐⭐',
    'cs.ob.obs3.body':      "Sur les deux apps IA du benchmark, Claude obtient trois étoiles là où ChatGPT en obtient deux. La différence : Claude ne demande aucun compte avant que vous ayez compris ce que ça fait. Valeur perçue d'abord, friction ensuite. Un principe que peu de produits appliquent réellement, même ceux qui le formulent dans leurs guidelines.",
    'cs.ob.label.apps':     'Les 16 apps ⭐⭐⭐ — annotées',
    'cs.ob.h2.apps':        'Ce que chacune fait de remarquable',
    'cs.ob.apps.intro':     'Parmi les 66 apps du benchmark, 16 obtiennent la note maximale. Voici pourquoi — en une phrase par app, sans jargon.',
    'cs.ob.filter.all':     'Tous',
    'cs.ob.filter.social':  'Social',
    'cs.ob.filter.finance': 'Finance & Santé',
    'cs.ob.filter.prod':    'Productivité',
    'cs.ob.filter.wellness':'Bien-être & Éducation',
    'cs.ob.filter.shopping':'Shopping & Divertissement',
    'cs.ob.filter.ia':      'IA',
    'cs.ob.cat.finance':    'Finance & Santé',
    'cs.ob.cat.wellness':   'Bien-être',
    'cs.ob.cat.shopping':   'Shopping',
    'cs.ob.app.linkedin':   "Personnalise avant de configurer. Tu construis ton profil <strong>dans</strong> l'onboarding lui-même — la valeur est immédiate, pas promise.",
    'cs.ob.app.yubo':       "Le tutorial n'explique pas l'interface, il explique la communauté. La différence est importante — et rare.",
    'cs.ob.app.bereal':     "L'un des rares onboardings qui justifie chaque permission <strong>avant</strong> de la demander. Aucune friction gratuite.",
    'cs.ob.app.snapchat':   'La personnalisation crée l\'attachement avant l\'usage. Tu te sens déjà "chez toi" avant d\'avoir envoyé quoi que ce soit.',
    'cs.ob.app.n26':        "Le paywall arrive tard, après que tu as compris ce que tu allais gérer. L'<strong>ordre</strong> de la séquence est ce qui fait la différence dans le financier.",
    'cs.ob.app.flo':        "Onboarding quasi médical dans le ton. La personnalisation est poussée, mais chaque question est justifiée par ce qu'elle va te donner en retour.",
    'cs.ob.app.withings':   'Sobre et précis. Aucun effet "wow", juste une configuration claire qui donne confiance dans le produit dès les premiers écrans.',
    'cs.ob.app.whoop':      "Le tutorial est intégré au setup physique de l'objet. L'app et le hardware s'onboardent en même temps — c'est rare et bien exécuté.",
    'cs.ob.app.opal':       "Construit l'intention avant de demander l'accès. Tu as défini tes objectifs avant qu'il te demande de bloquer des apps. Séquence exemplaire.",
    'cs.ob.app.airtable':   "Montre la valeur avec un vrai cas d'usage, pas un écran de marketing. Le tutorial est un vrai projet, pas une démo.",
    'cs.ob.app.headspace':  "Fait <strong>ressentir</strong> le produit avant de le vendre. Le paywall arrive après une session, pas avant. Du bon sens que peu d'apps appliquent réellement.",
    'cs.ob.app.duolingo':   "Tu joues <strong>avant</strong> de t'inscrire. L'engagement précède l'inscription — le modèle inverse de presque tout le monde, et ça fonctionne.",
    'cs.ob.app.blinkist':   "La proposition de valeur est énoncée en une phrase, une fois, clairement. Puis l'onboarding personnalise. Pas de bruit, pas de répétition.",
    'cs.ob.app.zalando':    "Les permissions sont contextualisées par le style que tu viens de choisir. Ce n'est plus une demande — c'est une suite logique.",
    'cs.ob.app.deezer':     "La personnalisation musicale remplace l'écran de bienvenue. Tu configures ton goût avant de voir une interface — c'est l'app qui s'adapte à toi, pas l'inverse.",
    'cs.ob.app.claude':     "Aucun compte demandé avant d'avoir compris ce que ça fait. Droit au but, valeur perçue d'abord. La seule app IA ⭐⭐⭐ du benchmark — ChatGPT s'arrête à ⭐⭐.",
    'cs.ob.credit':         '<strong>Source originale</strong> — Base de données construite par <a href="https://irradiated-hoverfly-94c.notion.site/Mobile-app-onboarding-benchmark-DB-c45f942b04f64d8290ecc188acf7df6b" target="_blank" rel="noopener">Justine Arnaud</a>, Freelance Product Manager, à partir de ses propres recherches. Les annotations et observations sont les miennes. Merci à elle pour ce travail de curation.',
    'cs.ob.cta.h2':         'Vous travaillez sur un onboarding ?',
    'cs.ob.cta.p':          "J'aide les équipes B2B à concevoir des premiers parcours clairs, cohérents avec la promesse produit — et qui convertissent.",
    'cs.ob.cta.btn':        'Parler de votre projet →',
    'cs.ob.pill.personalization': 'Personnalisation',
    'cs.ob.pill.perceived':       'Valeur perçue',
    'cs.ob.pill.setup':           'Configuration initiale',
    'cs.ob.pill.tutorial':        'Tutoriel',
    'cs.ob.pill.notif':           'Permission notifications',
    'cs.ob.pill.sttp':            'Droit au but',
    'cs.ob.pill.paywall':         'Abonnement / Paywall',
    'cs.ob.pill.welcome':         'Écran d\'accueil',

    // ── Modal · Offres ────────────────────────────
    'modal.offres.title':    'Mes Offres',
    'modal.offer1.title':    'Construire',
    'modal.offer1.subtitle': 'Nouveau produit · Refonte complète · MVP',
    'modal.offer1.pitch':    'Vous partez de zéro. Je pose l\'identité et l\'interface ensemble — pour ne pas avoir à rattraper la cohérence en cours de route.',
    'modal.offer1.li1':      'Audit de l\'existant ou cadrage from scratch',
    'modal.offer1.li2':      'Direction artistique + design system construits en parallèle',
    'modal.offer1.li3':      'Wireframes, tests utilisateurs, maquettes haute-fidélité',
    'modal.offer1.li4':      'Handoff développeurs + support 2 semaines',
    'modal.offer1.duration': '8-10 semaines',
    'modal.offer2.title':    'Structurer',
    'modal.offer2.subtitle': 'Produit existant · Incohérence visuelle · Devs qui improvisent',
    'modal.offer2.pitch':    'Votre produit tourne déjà. Je viens poser un système — pour que chaque sprint parte d\'une base solide, pas d\'une page blanche.',
    'modal.offer2.li1':      'Audit visuel de l\'existant',
    'modal.offer2.li2':      'Design system documenté basé sur votre charte',
    'modal.offer2.li3':      'Maquettes haute-fidélité prêtes à implémenter',
    'modal.offer2.li4':      'Guide de style + assets exportés pour les devs',
    'modal.offer2.duration': '3-5 semaines',
    'modal.addons.title':    'Mission — Renforcer',
    'modal.addons.li1':      'Disponible en full remote ou hybride',
    'modal.addons.li2':      'Figma, Agile, collaboration cross-fonctionnelle',
    'modal.addons.li3':      'TJM',
    'offer.badge':           'Le plus populaire',
    'offer.cta':             'Démarrer',

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
    'faq.a1': '<strong style="color:var(--primary)">Structurer – 4 500€ – 6 000€</strong><br/>Votre produit tourne déjà, mais vos devs improvisent à chaque sprint. Je viens poser un design system solide basé sur votre charte existante — avec des maquettes prêtes à implémenter et un guide de style pour vos devs.<br/><br/><strong style="color:var(--primary)">Construire – 9 000€ – 12 000€</strong><br/>Vous partez de zéro ou repartez de rien. Je pose l\'identité et l\'interface ensemble : direction artistique, design system, wireframes, tests utilisateurs, maquettes haute-fidélité, handoff développeurs.',
    'faq.q2': 'Fais-tu également le développement ?',
    'faq.a2': 'Non, je me concentre sur mon expertise : le design. Cependant, je recommande des partenaires développeurs de confiance (Framer, Webflow, développement custom) pour assurer la continuité de votre projet.',
    'faq.q3': 'Quels livrables vais-je recevoir ?',
    'faq.a3': 'Pour les deux offres : fichiers Figma organisés et commentés, prototype interactif, design system complet, guide de style pour développeurs, assets exportés (tous formats).<br/><br/>Pour l\'offre Construire en plus : rapport d\'audit UX, wireframes, rapport de tests utilisateurs.',
    'faq.q4': 'Combien de révisions sont incluses ?',
    'faq.a4': 'Structurer : 2 tours de révisions par phase.<br/>Construire : 3 tours de révisions par phase.<br/>Les révisions supplémentaires sont facturées 150 €/heure.',
    'faq.q5': 'Comment se passe le paiement ?',
    'faq.a5': '<strong style="color:var(--primary)">Structurer :</strong> 50 % à la signature, 50 % à la livraison finale.<br/><strong style="color:var(--primary)">Construire :</strong> 30 % à la signature, 40 % mi-projet (après validation wireframes/UI), 30 % à la livraison finale.',
    'faq.q6': 'Travailles-tu avec des clients internationaux ?',
    'faq.a6': 'Oui, absolument. J\'ai une expérience internationale (Madagascar, France, Luxembourg) et je travaille régulièrement avec des clients en remote. Tous mes échanges et livrables peuvent être en français ou en anglais.',
    'faq.q7': 'Proposes-tu un accompagnement après la livraison ?',
    'faq.a7': 'Oui. L\'offre Construire inclut 2 semaines de support post-livraison. Pour un accompagnement continu, je suis aussi disponible en mission (TJM 500€) pour des itérations, nouvelles features ou optimisations.',
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
    "<strong>Via LinkedIn:</strong> <a href='https://www.linkedin.com/in/jacob-houmadi' target='_blank'>Jacob Radonirina</a><br/>" +
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
      "<a href='https://www.linkedin.com/in/jacob-houmadi' rel='noopener' target='_blank'>Jacob Houmadi</a>",

    /* ── Footer ── */
    "privacy.142": "",
    "privacy.143": "← Retour à l'accueil",
    "privacy.144": "Mentions légales",

      "404.label":     "Page / 404-error",
      "404.h1":        "Cette page n'a pas été designée.",
      "404.sub":       "L'URL que vous cherchez n'existe pas — ou a été déplacée. Pas d'inquiétude, même les meilleurs wireframes ont des écrans manquants.",
      "404.btn1":      'Retour à l\'accueil <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
      "404.btn2":      "Explorer mon histoire",
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
    'nav.casestudies':  'Works',
    'nav.services':     'Services',
    'nav.testimonials': 'Testimonials',
    'nav.faq':          'FAQ',
    'mobilenav.p': 'Let\'s transform your project together',
    'mobilenav.cta' : 'Get in touch',

    // ── Hero ─────────────────────────────────────
    'h1.1':         'Product designer',
    'hero.quote':   '10 years in design. Madagascar → Luxembourg → France',
    'hero.subtitle':'Self-taught. Proven far from home.<br/> Always leaving my \'digital\' mark 😉.<br/> Today I help SMEs and B2B startups build user interfaces that align with their brand—and drive conversions. With measurable results at every stage.',
    'hero.cta':     'View my services',
    'hero.hint' : ' <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 4a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' +
                                'Click to discover my other sides',

    'hero.role.pro'         : '10 years in design. Madagascar → Luxembourg → France',
    'hero.role.topsprinter' : 'Top Sprinter Yummy Labs 🏃',
    'hero.role.garden'      : '"Future agroforestry farmer  🌳🌴',
    'hero.role.snack'       : 'Former friday snack ritual coordinator ☕',
    'hero.role.artist'      : 'Digital artist 🎨',

    // ── Section logos & stats ────────────────────
    'logos.label':       'They trusted me',
    'quote.text':        'I don\'t start in Figma. <br><span> I start with your product problems.</span>',
    'stat.exp.label':    'of experience',
    'stat.sector':       'SaaS · B2B',
    'stat.awards.label': '→ Handoff',
    'stat.sector.label': 'Fintech',
    'stat.exp' : '10 years',
    'stat.awards': 'Discovery',

    // ── Bandeau principal ─────────────────────────
    'main.h2':      'For B2B teams who\'ve lost time with designers <span> who didn\'t get the product.</span>',
    'main.subtitle':'Tell me about your project. I\'ll get back to you within 24h with a personalised proposal.',

    // ── Formulaire ────────────────────────────────
    'form.name':    'Full name',
    'form.email':   'Professional email',
    'form.company' : '<label for="company">Your company</label>' + 
                     '<input type="text" id="company" name="company" placeholder="e.g SpaceX" required>',
    'form.website': 'Website',
    'form.project': 'Your situation',
    'form.message': ' <label for="message">Message</label>' +
                      '<textarea id="message" name="message" rows="4" placeholder="Your message..."></textarea>',
    'form.submit':  'Start the conversation →',
    'form.consent': 'I agree that my data may be used to process my request, in accordance with the <a href="politique-confidentialite.html" target="_blank">privacy policy</a>.',

    // ── Sélecteur projet ──────────────────────────
    'project.select':      'Select...',
    'project.structurer':  'Structure – existing product (€4,500 – €6,000)',
    'project.construire':  'Build – from scratch or redesign (€9,000 – €12,000)',
    'project.renforcer':   'Reinforce – embedded mission (daily rate)',
    'project.autre':       'Other to discuss',

    // ── Bloc Calendly (post-envoi) ────────────────
    'calendly.title': '✅ Message sent, thank you!',
    'calendly.text':  'Great, I\'ll get back to you within 24h. In the meantime, <strong>book a slot directly</strong> to discuss your project.',

    // ── Liens ─────────────────────────────────────
    'link.privacy': 'privacy policy',

    // ── Footer ────────────────────────────────────
    'footer.legal1': 'Legal notice',
    'footer.legal2': 'Privacy policy',

    // ── Cases studies ─────────────────────────────
    'casestudies.title':          'Works',
    'casestudies.venue.title':    'Social Layer',
    'casestudies.venue.desc':     'Increasing retention without adding friction or moderation cost.',
    'casestudies.tango.title':    'Mobile App',
    'casestudies.tango.desc':     'Redesigning a telco e-commerce for conversion.',
    'casestudies.checkout.title':        'Checkout',
    'casestudies.checkout.desc':         'Simplifying the purchase funnel to reduce drop-off.',
    'casestudies.axian.mediaroom.title': 'Media Room',
    'casestudies.axian.learning.title':  'Learning',
    'casestudies.axian.website.title':   'Website',
    'casestudies.axian.upcoming':        'Upcoming',
    'casestudies.more':                  'See all works →',

    // ── Portfolio · MyTango Mobile App ────────────
    'portfolio.tango_app.title':    'MyTango Mobile App',
    'portfolio.tango_app.role':     'UX/UI Designer · Telecom operator, Luxembourg',
    'portfolio.tango_app.desc':     'Tango is a Luxembourg-based telecom operator with a mobile app for managing plans, payments, and additional services.<span class="mobile-hidden"><br/> Mission: redesign the mobile app experience to resolve critical pain points, improve customer satisfaction, and accelerate development cycles.</span>',
    'portfolio.tango_app.insights': 'Key achievements:',
    'portfolio.tango_app.btn1':     'Resolve a recurring pain point',
    'portfolio.tango_app.btn1.desc':'Redesigned consumption dashboard for clearer data gauge display',
    'portfolio.tango_app.btn2':     'Build a retention strategy: Enjoy game',
    'portfolio.tango_app.btn2.desc':'In-app gaming UX optimisation and redirection to key pages',
    'portfolio.tango_app.btn3':     'Simplify a complex new offer',
    'portfolio.tango_app.btn3.desc':'Intuitive activation despite multiple constraints at launch',
    'portfolio.tango_app.btn4':     'Improve user satisfaction',
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
    'portfolio.tango_web.btn3':     'Optimise the user journey',
    'portfolio.tango_web.btn3.desc':'Clarified UI and key steps for a smoother funnel',
    'portfolio.tango_web.btn4':     'Ensure cross-platform consistency',
    'portfolio.tango_web.btn4.desc':'Design system shared with the mobile app and Self-care platform',

    // ── Portfolio · Axian Group ───────────────────
    'portfolio.axian.title':    'Axian Group',
    'portfolio.axian.role':     'Digital Designer · Pan-African Group',
    'portfolio.axian.desc':     'Axian Group is one of the largest pan-African groups from Madagascar, operating in telecoms, energy, infrastructure, financial services and fintech.<span class="mobile-hidden"><br/>As Digital Designer for 5 years, I led the complete rebranding of the group\'s corporate identity.</span>',
    'portfolio.axian.btn1':     'Embody the business vision',
    'portfolio.axian.btn1.desc':'Building a strong cultural identity "Afrixian"',
    'portfolio.axian.btn2':     'Unify the ecosystem',
    'portfolio.axian.btn2.desc':'5 sectors united under a shared identity and storytelling',
    'portfolio.axian.btn3':     'Redesign the corporate website',
    'portfolio.axian.btn3.desc':'Information architecture + UI design + impact storytelling',
    'portfolio.axian.btn4':     '4 Creatives 974 Awards',
    'portfolio.axian.btn4.desc':'Internationally recognised art direction',

    // ── Portfolio · Silva Paris ───────────────────
    'portfolio.silva.title':    'Silva Paris',
    'portfolio.silva.role':     'Web Art Direction / UX Design · Luxury craftsmanship',
    'portfolio.silva.desc':     'Silva Paris is a luxury upholstery craftsman house established in 1982, specialising in bespoke décor for hotels and private residences.<span class="mobile-hidden"><br/> My role: digital adaptation of the brand identity (web art direction, UX architecture, interface design).</span>',
    'portfolio.silva.btn1':     'Adapt the brand identity to web',
    'portfolio.silva.btn1.desc':'Translating visual codes to the digital medium',
    'portfolio.silva.btn2':     'Optimise the information architecture',
    'portfolio.silva.btn2.desc':'Condensed user journey, showcasing the artisan expertise',
    'portfolio.silva.btn3':     'Build a consistent design system',
    'portfolio.silva.btn3.desc':'Reusable UI components and development guidelines',

    'portfolio.venue.title':    'Venue · SuperBloom',
    'portfolio.venue.role':     'Product Designer · Mobile game · 4M+ players',
    'portfolio.venue.desc':     'Venue is a interior design game with a 90% female player base who play alone, together.<span class="mobile-hidden"><br/> Mission: introduce a social layer through Design Studios without creating pressure or competition.</span>',
    'portfolio.venue.insights': 'Key achievements:',
    'portfolio.venue.btn1':     'Strengthen D7–D30 retention',
    'portfolio.venue.btn1.desc':'Design studios anchored in a weekly dynamic, with zero performance pressure',
    'portfolio.venue.btn2':     'Reduce design studio engagement friction',
    'portfolio.venue.btn2.desc':'Explore without committing, leave without guilt thanks to intentional micro-copy',
    'portfolio.venue.btn3':     'Create interactions without moderation',
    'portfolio.venue.btn3.desc':'Guided reaction system designed to create genuine, managed connections',
    'portfolio.venue.btn4':     'Integrate emotional milestones',
    'portfolio.venue.btn4.desc':'Collective rewards integrated directly into the experience, without breaking the flow',

    // ── Case Study · Venue ────────────────────────
      'cs.venue.persona.stat1': '20h in game',
    'cs.venue.persona.stat2': '600 designs',
    'cs.venue.persona.stat3': 'Lvl 12',
    'cs.venue.persona.stat4': 'Minimalism style',
    'cs.venue.back':                    '← Works',
    'cs.venue.h1':                      'Increasing retention without adding friction or moderation cost.',
    'cs.venue.hero.sub':                'Design Studios · UX Case Study — Venue by Yummy Labs',
    'cs.venue.meta.project.label':      'Project',
    'cs.venue.meta.project.value':      'Venue, Design Studios (Phase 2 Social)',
    'cs.venue.meta.role.label':         'Role',
    'cs.venue.meta.role.value':         'Lead UX & Product Designer',
    'cs.venue.meta.studio.label':       'Studio',
    'cs.venue.meta.studio.value':       'Yummy Labs in partnership with Superbloom',
    'cs.venue.meta.deliv.label':        'Deliverables',
    'cs.venue.meta.deliv.value':        'Concept system · Discovery flow · Interaction model · Presentation deck',
    'cs.venue.meta.constraint.label':   'Constraint',
    'cs.venue.meta.constraint.value':   'Zero new behaviour required from the player',
    'cs.venue.meta.recog.label':        'Recognition',
    'cs.venue.meta.recog.value':        'Top Sprinter, March 2026',
    'cs.venue.h2.problem':              'The Problem',
    'cs.venue.problem.lead':            'Every night, Beth closes Venue and opens Facebook.',
    'cs.venue.problem.p1':              'She\'s been playing for months. She designs rooms, submits them to be voted on, collects rewards. She\'s engaged. She\'s good at it. But when she wants to <em>feel something</em> — to share a result, to see if anyone noticed — the game has nothing to offer. So she goes elsewhere.',
    'cs.venue.problem.p2':              'The problem wasn\'t low engagement.',
    'cs.venue.problem.stats.label':     'Venue had :',
    'cs.venue.problem.stats.value':     '4M+ downloads — 90% female player base — strong daily loops.',
    'cs.venue.problem.conclusion':      'The problem was that none of it felt like it mattered to anyone else. <span class="muted">She had already found</span> her community<span class="muted">. She\'d just found it </span>outside the product.',
    'cs.venue.h2.insight':              'The Insight',
    'cs.venue.insight.lead':            'Most social features in games solve the wrong problem. They ask players to <em>do something social</em><span class="text-gray">:</span> join a guild, add friends, post a score. But players like Beth don\'t want to perform belonging. They want to feel it.',
    'cs.venue.insight.label':           'Two things follow from that:',
    'cs.venue.insight.card1.title':     'Low cognition load',
    'cs.venue.insight.card1.desc':      '<strong>The moment you ask someone to join, you create a moment where they can say no.</strong> Opt-in mechanics are opt-out risks. Every explicit step leaks.',
    'cs.venue.insight.card2.title':     'No moderation required',
    'cs.venue.insight.card2.desc':      'Social mechanics that rely on moderation or settings to stay non-toxic will eventually fail. Toxicity needs to be structurally impossible, not just manageable.',
    'cs.venue.h2.challenge':            'The Design Challenge',
    'cs.venue.challenge.lead':          'SuperBloom\'s brief: design a group-based social system for Venue that encourages collaboration, creates shared goals, and feels cozy, not competitive.',
    'cs.venue.challenge.constraints.label': 'Three hard constraints made this interesting:',
    'cs.venue.challenge.card1.title':   'Anonymous voting',
    'cs.venue.challenge.card1.desc':    'Players can\'t choose whose work they see',
    'cs.venue.challenge.card2.title':   'Casual play',
    'cs.venue.challenge.card2.desc':    'No tolerance for extra homework',
    'cs.venue.challenge.card3.title':   'No chat',
    'cs.venue.challenge.card3.desc':    'No text, no moderation overhead.',
    'cs.venue.challenge.quote':         'This is not a "guild war" system.<br>This is a creative collective.',
    'cs.venue.h2.principles':           'Design Principles',
    'cs.venue.principles.lead':         'Before touching a single screen, I defined four non-negotiables that every mechanic had to pass.',
    'cs.venue.principle.1.title':       'Structurally incapable of toxicity',
    'cs.venue.principle.1.desc':        'If a mechanic can produce a bad experience, it will. The fix isn\'t a setting — it\'s removing the mechanism. No leaderboards. No individual contribution visibility. No way to compare members.',
    'cs.venue.principle.2.title':       'Absence must feel inconsequential',
    'cs.venue.principle.2.desc':        'Missing a week should carry zero guilt signal. No "you let your team down." No streak breaks.<br>Contribution is meaningful when you show up, invisible when you don\'t.',
    'cs.venue.principle.3.title':       'Belonging is observed, not declared',
    'cs.venue.principle.3.desc':        'The system watches what players already do and uses it as contribution. Normal play <em>is</em> participation. No opt-in threshold, no confirmation modal.',
    'cs.venue.principle.4.title':       'Collective over individual',
    'cs.venue.principle.4.desc':        'Milestones are collective. Rewards are shared. Progress is one bar, not aggregated personal bars. The Studio succeeds together or not at all.',
    'cs.venue.h2.solution':             'The Solution · Design Studios',
    'cs.venue.solution.lead1':          'Design Studios is a passive community membership system embedded in Venue\'s existing game loop.',
    'cs.venue.solution.lead2':          'Players contribute to a shared Studio by playing normally',
    'cs.venue.solution.pill1':          'submitting designs',
    'cs.venue.solution.pill2':          'voting',
    'cs.venue.solution.pill3':          'completing chapters',
    'cs.venue.solution.pill4':          'Shared goal',
    'cs.venue.solution.no-new':         'No new behaviour required.',
    'cs.venue.solution.p1':             'Each Studio has 10–20 members matched on design aesthetic, a shared weekly goal, a Studio Room that grows as the Studio levels up, and a collective gallery where members\' submitted designs appear for each other.',
    'cs.venue.solution.panel.text':     'The Studio is named and curated.<br>Ours: <strong>Casa Bloom</strong>',
    'cs.venue.h2.precedents':           'These constraints aren\'t new.',
    'cs.venue.precedents.lead':         'The best games already solved them, just never combined them.',
    'cs.venue.precedent.1.tag':         'The volunteering state',
    'cs.venue.precedent.2.tag':         'No toxicity by architecture',
    'cs.venue.precedent.3.tag':         'Absence without guilt',
    'cs.venue.h2.joining':              'The Joining Mechanic:"You Can\'t Fail to Belong"',
    'cs.venue.joining.lead':            'This was the most consequential decision in the entire system.',
    'cs.venue.joining.p1':              'During onboarding, the player taps a Studio and goes back to play. Nothing changes on screen.',
    'cs.venue.joining.p2':              'But behind the scenes she knows, everything she already does starts contributing to something shared.',
    'cs.venue.joining.p3':              'In the first two weeks, Beth is technically a volunteer. She contributes without changing anything she already does, without label, expectation, or visibility.',
    'cs.venue.joining.p4':              'After two weekly cycles, the transition happens automatically. A quiet status line change appears in her Studio view.',
    'cs.venue.joining.blockquote':      'Belonging isn\'t a step. It\'s a pattern.<br>By the time she knows she\'s a member, she already behaves like one.',
    'cs.venue.joining.callout':         '<strong>Language note:</strong> The CTA throughout is <strong>"Play with this Studio"</strong>, never "Join Studio."<br>The player is choosing to play, not to commit. That single word swap is load-bearing.',
    'cs.venue.h2.d7':                   'The D7 Discovery Flow · 7 Steps',
    'cs.venue.d7.lead':                 'How does Beth first encounter her Studio? <span class="muted"> Not through a banner. Not a push notification.</span> Through a milestone.',
    'cs.venue.d7.p1':                   'At Day 7, Beth has completed several chapters and been through the voting loop many times. The leaderboard just unlocked. She\'s reward-loop trained — red dots work on her.',
    'cs.venue.d7.trigger':              'The trigger: <br/><strong>10 designs submitted.</strong> Emotional peak. She\'s claiming a reward when the system opens a door.',
    'cs.venue.d7.expand':               'Expand',
    'cs.venue.d7.step1.num':            '1. Milestone moment',
    'cs.venue.d7.step1.desc':           '<ul><li>Reward claimed.</li><li>A brief system message appears.</li></ul>',
    'cs.venue.d7.step1.insight':        'Emotional peak — high receptivity.',
    'cs.venue.d7.step2.num':            '2. Studio reveal',
    'cs.venue.d7.step2.desc':           '<ul><li>Full-screen overlay.</li><li>"You\'re ready to join a Design Studio."</li></ul>',
    'cs.venue.d7.step2.insight':        'Maybe later always visible. No pressure.',
    'cs.venue.d7.step3.num':            '3. Studio intro',
    'cs.venue.d7.step3.desc':           '<ul><li>Three concepts only.</li><li>Warm language.</li><li>No mechanics dump.</li></ul>',
    'cs.venue.d7.step3.insight':        'Understood in under 10 seconds.',
    'cs.venue.d7.step4.num':            '4. Browse Studios',
    'cs.venue.d7.step4.desc':           '<ul><li>3 curated suggestions based on design style.</li><li>Last-design galleries show an already-active community.</li></ul>',
    'cs.venue.d7.step5.num':            '5. Confirm join',
    'cs.venue.d7.step5.desc':           '<ul><li>Studio tagline and member faces before the CTA.</li></ul>',
    'cs.venue.d7.step5.insight':        'She\'s joining people, not a system.',
    'cs.venue.d7.step6.num':            '6. Studio home',
    'cs.venue.d7.step6.desc':           '<ul><li>First view of Casa Bloom.</li><li>Key tiers visible.</li><li>Goal bar live.</li><li>Activity feed already moving.</li></ul>',
    'cs.venue.d7.step6.insight':        '<em>Alive on arrival.</em>',
    'cs.venue.d7.step7.num':            '7. Back to her game',
    'cs.venue.d7.step7.desc':           '<ul><li>No nudge. No new task.</li><li>She plays as usual; keys flow automatically.</li></ul>',
    'cs.venue.d7.step7.insight':        'Same loop, new meaning.',
    'cs.venue.d7.emotion1':             'Excited',
    'cs.venue.d7.emotion2':             'Curious',
    'cs.venue.d7.emotion3':             'Informed',
    'cs.venue.d7.emotion4':             'Intrigued',
    'cs.venue.d7.emotion5':             'Warm',
    'cs.venue.d7.emotion6':             'Belonging',
    'cs.venue.d7.emotion7':             'Settled',
    'cs.venue.h2.currencies':           'Two Currencies, Two Timelines',
    'cs.venue.currencies.lead':         'The system runs on two currencies that <span class="muted">operate on different clocks — and that distinction</span> does most of the retention work.',
    'cs.venue.currency.weekly.title':   'Weekly progression',
    'cs.venue.currency.weekly.name':    'Key',
    'cs.venue.currency.weekly.desc1':   'Unlocks the weekly reward tiers:',
    'cs.venue.currency.weekly.desc2':   'Resets every week.<br>Earned automatically through normal play:<br>- submit a design (+1),<br>- complete a vote session (+1),<br>- earn a 5-star (+2).',
    'cs.venue.currency.weekly.tag':     'This week. Effort that matters now.',
    'cs.venue.currency.perm.title':     'Permanent progression',
    'cs.venue.currency.perm.name':      'Arrow',
    'cs.venue.currency.perm.desc':      'Accumulates across weeks and never resets.<br>Earned exclusively by completing the weekly collective challenge as a Studio.<br>Each Arrow level unlocks a new shared Studio Room permanently.',
    'cs.venue.currency.perm.tag':       'Forever. Leaving means leaving behind a space she helped build.',
    'cs.venue.h2.voting':               'Making Anonymous Voting Feel Human',
    'cs.venue.voting.lead':             'Voting in Venue is random and anonymous by design. <span class="muted">This meant the Studio feed and the voting pool are structurally separate. I couldn\'t build connection through votes</span>. So I built it elsewhere.',
    'cs.venue.voting.tags.text':        '<strong>Feedback tags:</strong> When Beth votes, she can leave a preset tag alongside her vote. Not a score but a signal.<br>For a few seconds, she\'s not optimizing a result.<br>She\'s honoring someone.',
    'cs.venue.voting.gallery.label':    'Gallery reactions:',
    'cs.venue.voting.gallery.desc':     'In the Studio gallery, she can react to her mates\' designs with preset feedbacks. No text. No moderation required. But suddenly, recognition is possible between people who know each other.',
    'cs.venue.voting.closing':          'Zero moderation overhead. Structurally safe. Emotionally meaningful.<br>The preset palette is the design decision — not a limitation.',
    'cs.venue.h2.milestones':           'Milestones · When the Studio Responds',
    'cs.venue.milestones.lead':         'When the Studio hits a collective threshold, the space responds.',
    'cs.venue.milestone.word1':         'Light.',
    'cs.venue.milestone.word2':         'Subtle.',
    'cs.venue.milestone.word3':         'Shared.',
    'cs.venue.milestone.body1':         'No big celebration. No individual callout. Just enough to say: <em class="milestone-em">you were part of this.</em>',
    'cs.venue.milestone.body2':         'Milestone reveal follows a <strong>Progressive Disclosure</strong> model. Rather than a single dramatic reveal that peaks and fades, the Studio room gradually comes to life as the week progresses. This produces steadier sustained engagement and avoids the emotional crash of a big reveal followed by nothing.',
    'cs.venue.milestone.th.day':        'Day',
    'cs.venue.milestone.th.reveal':     'Progressive Reveal',
    'cs.venue.milestone.th.rate':       'Rate /10',
    'cs.venue.milestone.td.d1':         'D1',
    'cs.venue.milestone.td.d2':         'D2',
    'cs.venue.milestone.td.d3-4':       'D3-D4',
    'cs.venue.milestone.td.d5':         'D5',
    'cs.venue.milestone.td.d6':         'D6',
    'cs.venue.milestone.td.d7':         'D7',
    'cs.venue.milestone.d1':            'Neutral — no destination yet',
    'cs.venue.milestone.d2':            'Delight — Spark unlocks unexpectedly',
    'cs.venue.milestone.d34':           'Excited/surprised — Bloom unlocks, pattern registers',
    'cs.venue.milestone.d5':            'Satisfaction — Glow unlocks — surprise mechanic is now understood, this one feels earned rather than random. Quieter than D2 but deeper',
    'cs.venue.milestone.d6':            'Beth senses the pattern. Something more might exist. One day left. The pull is intentional now',
    'cs.venue.milestone.d7':            'Satisfied, curious about next week',
    'cs.venue.h2.outcomes':             'Outcomes',
    'cs.venue.outcome.d7.tag':          'D7',
    'cs.venue.outcome.d30.tag':          'D30',
    'cs.venue.outcomes.lead':           'This is a design concept <span class="muted">submitted for Phase 2 development evaluation</span>, based on observed player behavior and validated assumptions.',
    'cs.venue.outcome.d7.body':         'The discovery flow hooks at the exact moment of <strong>peak emotional receptivity</strong>. Players return for the shared weekly goal before they\'ve consciously decided to stay.',
    'cs.venue.outcome.d30.body':        'Arrows create <strong>identity-level attachment</strong>. A player who has contributed to three Studio room unlocks is not the same as a player with no investment. Leaving has a real, visible cost — without any pressure mechanic.',
    'cs.venue.outcome.ops.body':        '<strong>Zero moderation overhead.</strong> No chat. No free text. No reporting flow needed. The system is structurally incapable of producing the content that requires intervention.',
    'cs.venue.h2.next':                 'What I\'d Do Next',
    'cs.venue.next.1.lead':             'The Other feed was never built',
    'cs.venue.next.1.p1':              'The Social tab introduces two views: My Studio\'s feed and Other feed; a familiar pattern of following first, then broader exploration. Beth sees designers she follows, then system-recommended ones based on style.',
    'cs.venue.next.1.p2':              'The Phase 1 leaderboard remains as a placeholder, while the next iteration builds on the existing (but previously underused) following system.',
    'cs.venue.next.2.lead':             'Feedback tag visibility.',
    'cs.venue.next.2.p1':              'Do tags feed back visibly to the designer\'s profile, or do they disappear into the algorithm? This question has UX and business implications and isn\'t resolved yet.',
    'cs.venue.next.3.lead':             'Permanent inventory monetization.',
    'cs.venue.next.3.p1':              'Studio rooms unlock permanently, which creates real leaving cost.',
    'cs.venue.next.3.p2':              'Whether that can also be a monetization surface (cosmetic Studio items, limited room decor) is a viable direction that\'s been deliberately parked for now.',
    'cs.venue.h2.learned':             'What I\'ve Learned',
    'cs.venue.learned.1.title':        'JTBD changes the quality of every decision downstream.',
    'cs.venue.learned.1.desc1':        'Breaking Beth into four moments, joining, staying, contributing, leaving, made every decision testable against a specific situation, not a vague persona.',
    'cs.venue.learned.1.desc2':        'Each moment carries its own emotion, fear, and job. This also made the link to D7 and D30 structurally clear, turning design reasoning into a business argument stakeholders can align with.',
    'cs.venue.learned.2.title':        'Good references are systems, not screens.',
    'cs.venue.learned.2.desc1':        'Looking beyond design feeds shifted the question from "how should this look?" to "what problem has already been solved at scale?" Games like Journey or Neko Atsume provided proven interaction models, not just inspiration.',
    'cs.venue.learned.2.desc2':        'Borrowing architecture, not aesthetics, led to more confident and grounded decisions.',
    'cs.venue.learned.3.title':        'AI compresses the gap between hypothesis and clarity.',
    'cs.venue.learned.3.desc1':        'Using AI alongside Figma made iteration faster and more exploratory. Instead of resolving uncertainty upfront, I could build to resolve it — test, see, adjust.',
    'cs.venue.learned.3.desc2':        'That shift reduced friction in decision-making and made the overall system sharper, from concept to final case study.',
    'cs.venue.h2.quotes':              'Key Principles I\'ll Carry Forward',
    'cs.venue.quote.1':                'Social mechanics should be structurally incapable of producing toxicity, not reliant on settings or moderation to prevent bad outcomes.',
    'cs.venue.quote.2':                'The moment you ask someone to join, you create a moment where they can say no. Design the belonging, not the ask.',
    'cs.venue.quote.3':                'Absence must not feel consequential. Presence should feel meaningful. Those are not the same design problem.',
    'cs.venue.cta.h2':                 'Want to see the full system?',
    'cs.venue.cta.p':                  'The complete deliverable set is available on request.',
    'cs.venue.cta.tag1':               'Full concept schema',
    'cs.venue.cta.tag2':               '10-slide presentation deck',
    'cs.venue.cta.tag3':               'D7 discovery flow spec',
    'cs.venue.cta.tag4':               'User testing documentation',
    'cs.venue.cta.tag5':               'Design decision rationale',
    'cs.venue.cta.btn':                'Get in touch',

    // ── Case Study · Benchmark Onboarding ────────
     'casestudies.onboarding.tag':'Analysis & research',
    'casestudies.onboarding.title':'Mobile onboarding',
    'casestudies.onboarding.desc':'What 66 apps do (right or wrong)',
    'cs.ob.back':           '← Works',
    'cs.ob.tag':            'Analysis & research · UX Mobile',
    'cs.ob.h1':             'Mobile onboarding —<br>what <span>66 apps</span> do (right or wrong)',
    'cs.ob.subtitle':       'The patterns that recur in the best-rated apps, and those that are missing in the others. A benchmark through a UX lens.',
    'cs.ob.meta.1':         '66 apps analysed',
    'cs.ob.meta.2':         '16 apps ⭐⭐⭐ annotated',
    'cs.ob.meta.4':         'Social · Finance · Health · AI · Travel & +',
    'cs.ob.intro':          "This benchmark covers 66 apps on their onboarding flows: what they do first, how they justify their value, when they ask for permissions. What interests me here is less the ranking than the patterns — the same recurring approaches in well-rated apps, and the same absences in others. A useful resource if you're working on acquisition or early retention.",
    'cs.ob.label.obs':      '3 key observations',
    'cs.ob.obs1.title':     'Perceived value always precedes the ask',
    'cs.ob.obs1.body':      'Among ⭐⭐⭐ apps, almost all show their value before asking for anything — permission, account, or payment. The order isn\'t trivial: when an app asks before justifying its presence, it creates cold friction. The best apps don\'t ask, they earn it.',
    'cs.ob.obs2.title':     '"Straight to the point" dominates in Travel & Food',
    'cs.ob.obs2.body':      "Travel and delivery apps don't need to convince you — the intent is already there at launch. Uber, Trainline, Booking, Deliveroo — all go straight to it. No tutorial, no welcome screen. It's a UX decision coherent with the usage context: the user is in action mode, not exploration mode.",
    'cs.ob.obs3.title':     'Claude is the only ⭐⭐⭐ AI app — ChatGPT sits at ⭐⭐',
    'cs.ob.obs3.body':      "Of the two AI apps in the benchmark, Claude earns three stars where ChatGPT earns two. The difference: Claude requires no account before you understand what it does. Perceived value first, friction second. A principle few products actually apply, even those that write it in their guidelines.",
    'cs.ob.label.apps':     'The 16 ⭐⭐⭐ apps — annotated',
    'cs.ob.h2.apps':        'What makes each one stand out',
    'cs.ob.apps.intro':     'Of the 66 apps in the benchmark, 16 score the maximum rating. Here\'s why — one sentence per app, no jargon.',
    'cs.ob.filter.all':     'All',
    'cs.ob.filter.social':  'Social',
    'cs.ob.filter.finance': 'Finance & Health',
    'cs.ob.filter.prod':    'Productivity',
    'cs.ob.filter.wellness':'Wellness & Education',
    'cs.ob.filter.shopping':'Shopping & Entertainment',
    'cs.ob.filter.ia':      'AI',
    'cs.ob.cat.finance':    'Finance & Health',
    'cs.ob.cat.wellness':   'Wellness',
    'cs.ob.cat.shopping':   'Shopping',
    'cs.ob.app.linkedin':   'Personalises before configuring. You build your profile <strong>inside</strong> the onboarding itself — the value is immediate, not promised.',
    'cs.ob.app.yubo':       "The tutorial doesn't explain the interface, it explains the community. The difference matters — and it's rare.",
    'cs.ob.app.bereal':     'One of the rare onboardings that justifies each permission <strong>before</strong> asking for it. No unnecessary friction.',
    'cs.ob.app.snapchat':   'Personalisation creates attachment before usage. You feel "at home" before you\'ve sent anything.',
    'cs.ob.app.n26':        'The paywall comes late, after you\'ve understood what you\'re going to manage. The <strong>order</strong> of the sequence is what makes the difference in fintech.',
    'cs.ob.app.flo':        'Near-medical in tone. Personalisation is thorough, but every question is justified by what it will give you in return.',
    'cs.ob.app.withings':   'Sober and precise. No "wow" effect, just clear setup that builds trust from the very first screens.',
    'cs.ob.app.whoop':      'The tutorial is integrated into the physical setup of the device. App and hardware onboard together — rare and well executed.',
    'cs.ob.app.opal':       "Builds intent before asking for access. You've set your goals before it asks you to block apps. Exemplary sequencing.",
    'cs.ob.app.airtable':   'Shows value with a real use case, not a marketing screen. The tutorial is a real project, not a demo.',
    'cs.ob.app.headspace':  'Makes you <strong>feel</strong> the product before selling it. The paywall comes after a session, not before. Common sense that few apps actually apply.',
    'cs.ob.app.duolingo':   'You play <strong>before</strong> signing up. Engagement precedes registration — the inverse model of almost everyone else, and it works.',
    'cs.ob.app.blinkist':   'The value proposition is stated in one sentence, once, clearly. Then the onboarding personalises. No noise, no repetition.',
    'cs.ob.app.zalando':    "Permissions are contextualised by the style you just chose. It's no longer a request — it's a logical next step.",
    'cs.ob.app.deezer':     "Music personalisation replaces the welcome screen. You configure your taste before seeing an interface — the app adapts to you, not the other way around.",
    'cs.ob.app.claude':     'No account required before you understand what it does. Straight to the point, perceived value first. The only ⭐⭐⭐ AI app in the benchmark — ChatGPT stops at ⭐⭐.',
    'cs.ob.credit':         '<strong>Original source</strong> — Dataset built by <a href="https://irradiated-hoverfly-94c.notion.site/Mobile-app-onboarding-benchmark-DB-c45f942b04f64d8290ecc188acf7df6b" target="_blank" rel="noopener">Justine Arnaud</a>, Freelance Product Manager, from her own research. The annotations and observations are mine. Credit to her for this curation work.',
    'cs.ob.cta.h2':         'Working on an onboarding flow?',
    'cs.ob.cta.p':          'I help B2B teams design clear first journeys, consistent with the product promise — and that convert.',
    'cs.ob.cta.btn':        'Talk about your project →',
    'cs.ob.pill.personalization': 'Personalization',
    'cs.ob.pill.perceived':       'Perceived value',
    'cs.ob.pill.setup':           'App set up',
    'cs.ob.pill.tutorial':        'Tutorial',
    'cs.ob.pill.notif':           "Notifications' permission",
    'cs.ob.pill.sttp':            'Straight to the point',
    'cs.ob.pill.paywall':         'Subscription/Paywall',
    'cs.ob.pill.welcome':         'Welcome screen',

    // ── Modal · Offres ────────────────────────────
    'modal.offres.title':    'My Services',
    'modal.offer1.title':    'Build',
    'modal.offer1.subtitle': 'New product · Full redesign · MVP',
    'modal.offer1.pitch':    'Starting from scratch. I define the identity and interface together — so you never have to backtrack for consistency.',
    'modal.offer1.li1':      'Audit of existing assets or from-scratch scoping',
    'modal.offer1.li2':      'Art direction + design system built in parallel',
    'modal.offer1.li3':      'Wireframes, user testing, high-fidelity mockups',
    'modal.offer1.li4':      'Developer handoff + 2-week support',
    'modal.offer1.duration': '8–10 weeks',
    'modal.offer2.title':    'Structure',
    'modal.offer2.subtitle': 'Existing product · Visual inconsistency · Devs improvising',
    'modal.offer2.pitch':    'Your product is live. I come in to build a system — so every sprint starts from a solid base, not a blank page.',
    'modal.offer2.li1':      'Visual audit of the existing product',
    'modal.offer2.li2':      'Documented design system based on your brand',
    'modal.offer2.li3':      'High-fidelity mockups ready to implement',
    'modal.offer2.li4':      'Style guide + exported assets for devs',
    'modal.offer2.duration': '3–5 weeks',
    'modal.addons.title':    'Mission — Reinforce',
    'modal.addons.li1':      'Available full remote or hybrid',
    'modal.addons.li2':      'Figma, Agile, cross-functional collaboration',
    'modal.addons.li3':      'Daily rate',
    'offer.badge':           'Most popular',
    'offer.cta':             'Start',

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
    'faq.a1': '<strong style="color:var(--primary)">Structure – €4,500 – €6,000</strong><br/>Your product already exists. I come in to build a solid design system based on your brand — with ready-to-implement mockups and a style guide for your devs.<br/><br/><strong style="color:var(--primary)">Build – €9,000 – €12,000</strong><br/>Starting from scratch or a full redesign. I define identity and interface together: art direction, design system, wireframes, user testing, high-fidelity mockups, developer handoff.',
    'faq.q2': 'Do you also handle development?',
    'faq.a2': 'No, I focus on my expertise: design. However, I recommend trusted development partners (Framer, Webflow, custom development) to ensure project continuity.',
    'faq.q3': 'What deliverables will I receive?',
    'faq.a3': 'For both services: organised and annotated Figma files, interactive prototype, complete design system, developer style guide, exported assets (all formats).<br/><br/>For Build additionally: UX audit report, wireframes, and user testing report.',
    'faq.q4': 'How many revisions are included?',
    'faq.a4': 'Structure: 2 revision rounds per phase.<br/>Build: 3 revision rounds per phase.<br/>Additional revisions are billed at €150/hour.',
    'faq.q5': 'How does payment work?',
    'faq.a5': '<strong style="color:var(--primary)">Structure:</strong> 50% at signing, 50% on final delivery.<br/><strong style="color:var(--primary)">Build:</strong> 30% at signing, 40% mid-project (after wireframe/UI validation), 30% on final delivery.',
    'faq.q6': 'Do you work with international clients?',
    'faq.a6': 'Yes, absolutely. I have international experience (Madagascar, France, Luxembourg) and regularly work with remote clients. All communication and deliverables can be in French or English.',
    'faq.q7': 'Do you offer post-delivery support?',
    'faq.a7': 'Yes. The Build service includes 2 weeks of post-delivery support. For ongoing work, I\'m also available on a mission basis (€500/day) for iterations, new features, or optimisations.',
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
      "<strong>Via LinkedIn:</strong> <a href='https://www.linkedin.com/in/jacob-houmadi' target='_blank'>Jacob Radonirina</a><br/>" +
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
      "<a href='https://www.linkedin.com/in/jacob-houmadi' rel='noopener' target='_blank'>Jacob Houmadi</a>",

    /* ── Footer ── */
    "privacy.142": "",
    "privacy.143": "← Back to home",
    "privacy.144": "Legal notice",

    "404.label":     "Page / 404-error",
    "404.h1":        "This page was never designed.",
    "404.sub":       "The URL you're looking for doesn't exist — or has been moved. Don't worry, even the best wireframes have missing screens.",
    "404.btn1":      'Back to home <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    "404.btn2":      "Explore my journey",
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
     syncMobileLangSwitcher();
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


