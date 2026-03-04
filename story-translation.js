/* ── i18n ── */
const SLIDE_TITLES_I18N = {
  en: ['Jacob Houmadi','My Journey','Two People','Localhost','How I Think','Singularity','Community','Axian — Context','Afrixian','The Leap','Tango — Context','Tango — Outcome','Why Hospitable ?','CTA'],
  fr: ['Jacob Houmadi','Mon histoire','Deux Personnes','Localhost','Comment Je Pense','Singularité','Communauté','Axian — Contexte','Afrixian','Le Grand Saut','Tango — Contexte','Tango — La Décision','Pourquoi Hospitable ?','CTA'],
  mg: ['Jacob Houmadi','Ny Tantarako','Olona Roa','Localhost','Ny Fisainako','Singularité','Vondron\'olona','Axian — Tontolon\'asa','Afrixian','Ilay vikina','Tango — Tontolon\'asa','Tango — Fanapahan-kevitra','Nahoana no i Hospitable ?','Fanasàna anao']
};

const T = {
  en: {
    'cover.chapter': 'Product Designer · 10 years',
    'cover.sub': 'Madagascar → Luxembourg → France.<br><strong>Self-taught. Proven far from home.</strong><br>Always leaving my <strong style="color:var(--blue)">digital</strong> mark.',
    'tooltip.cover' : 'Hover images to see legends. Enjoy your visit →',
    'journey.chapter': 'Chapter I · Who I am',
    'journey.h2': 'My journey, <span class="blue">four chapters.</span>',
    'journey.sub': 'Two pulls. Click any period to see how they evolved.',
    'journey.hint': '↗ Click for strengths',
    'duality.artist': 'Artist',
    'duality.solver': 'Solver',

    /* ── PERIOD TAGS ── */
    'period.l1' : '3 - 9 years',
    'period.l2' : '9 - 17 years',
    'period.l3' : '17 – 26 years',
    'period.l4' : '26 – 34 years',
    'period.3-9.t1':  'Oct 31st, 1992',
    'period.3-9.t2':  'MLG - FR',
    'period.3-9.t3':  'Left handed',
    'period.3-9.t4':  'Hobby: Drawing',
    'period.9-17.t1': 'Introvert',
    'period.9-17.t2': 'Insecure',
    'period.9-17.t3': 'Intended career: Scientist',
    'period.9-17.t4': 'Hobby: Video games',
    'period.17-26.t1': 'Athlete',
    'period.17-26.t2': 'Community',
    'period.17-26.t3': 'Design career',
    'period.17-26.t4': 'Married',
    'period.17-26.t5': 'Father',
    'period.26-34.t1': 'Travel to Europe',
    'period.26-34.t2': 'Invest',
    'period.26-34.t3': 'Open mind',
    'period.26-34.t4': 'Goal: Self-sufficient',
    'twoppl.chapter': 'Chapter I · Who I am',
    'twoppl.h2': 'Two people. <br class="mobile-hidden"><span class="blue">One revelation.</span>',
    'twoppl.p1': "For a long time, I didn't know what I was doing. I knew I liked to draw. I knew I liked to solve things. But those felt like two different people, and I spent years not knowing which one I was supposed to be.",
    'twoppl.blockquote': 'The creator and the problem-solver.<br>Two pulls, no clear answer.',
    'twoppl.p2': 'Then came the web. <strong>Not a compromise. A revelation.</strong> The only place where both people could exist at the same time — and actually be useful together.',
    'local.chapter': 'Chapter I · The Revelation',
    'local.h2': 'Localhost. <br class="mobile-hidden"><span class="blue">No internet.</span> <br class="mobile-hidden">No problem.',
    'local.p1': "No money for a powerful PC, no internet at home. So I'd go to the cybercafé, download tutorials, go home, and work offline. Hours. Just me and a screen that wasn't even connected.",
    'local.p2': 'What I noticed quietly changed everything: when I touched the interface, people <strong>reacted.</strong> When I improved what was underneath, they didn\'t feel a thing. That asymmetry became my compass.',
    'local.muted': 'Madagascar → Luxembourg → France. Figuring it out as I moved.',
    'filter.chapter': 'Chapter II · How I think',
    'filter.h2': 'I don\'t read <br class="mobile-hidden">an interface.<br><span class="blue">I filter it.</span>',
    'filter.label1': 'The question',
    'filter.p1': "What's here to help the user act?<br>What's here to reassure the designer?<br><br>Those are two very different things. Most of the time they don't belong in the same place.",
    'filter.p2': "<strong>A good design doesn't ask to be admired. It asks to be used.</strong>",
    'filter.label2': "What I don't trust",
    'filter.item1': 'LinkedIn vanity metrics tell you nothing about the quality of the work.',
    'filter.item2': 'The UX vs UI ketchup bottle comparison has been shared thousands of times. Never verified.',
    'filter.item3': "I'd rather sit with a harder question than reach for an easy answer.",
    'sing.chapter': 'Chapter II · Singularity',
    'sing.quote': 'Not originality<br>for its own sake.<br><span class="blue">The honest thing.</span>',
    'sing.blockquote': "It's to make you remember how it felt to navigate it.",
    'sing.small': 'Every designer has a portfolio. Few have a point of view.',
    'comm.chapter': 'Chapter II · Beyond the screen',
    'comm.h2': 'I\'ve always moved toward<br><span class="blue">the person the system forgot.</span>',
    'comm.intro': 'Before product design, there was community building.<br>Before design systems, there were people systems.',
    'comm.l1.label': 'Parkour community leader in Madagascar',
    'comm.l1.sub': 'It grew into environmental actions, solidarity marches, and advocacy for young women facing injustice.',
    'comm.l2.label': 'YMCA — opened a second parkour branch',
    'comm.l2.sub': 'Completed formal leadership training.',
    'comm.l3.label': 'Axian ACTERS program',
    'comm.l3.sub': 'Two volunteer days per month. Supported former inmates in their social reintegration journey.',
    'comm.l4.label': 'Agroforestry practice',
    'comm.l4.sub': 'Applied locally. Intention to scale responsibly.',
    'comm.fr.label': 'France — Today',
    'comm.fr.sub': 'Weekend host for children in care. Weekly IT classes for the visually impaired.',
    'axian.chapter': 'Chapter III · Axian Group · 2018–2023',
    'axian.h2': 'We weren\'t hired <br class="mobile-hidden">to join a team.<br><span class="blue">We built one.</span>',
    'axian.s1': 'Founding members',
    'axian.s2': 'Sectors unified',
    'axian.s3': 'Years building it',
    'axian.sub': "I didn't arrive to a creative department. We built one from scratch. Inside one of Madagascar's largest groups, I coordinated the Friday rotating breakfast: every week, a different person, a different table. We made it a place where good work actually wanted to happen.",
    'afrix.chapter': 'Chapter III · Axian Group · The breakthrough',
    'afrix.h2': '<span class="blue">Afrixian.</span> <br class="mobile-hidden">Not borrowed. <br class="mobile-hidden">Found.',
    'afrix.s1': 'Creatives 974 Awards',
    'afrix.sub1': "To build the brand's identity, we stopped borrowing from outside and started digging from within. This is how Afrixian was born — <strong>African culture, turned into something disruptive.</strong>",
    'afrix.sub2': 'Once we had that concept, everything accelerated. And I started to wear African clothes to the office, imagine how jealous the financial department was.',
    'afrix.blockquote': "It wasn't only the brand that had been built. <strong>It was us.</strong>",
    'leap.chapter': 'Chapter III · The Leap',
    'leap.h2': 'I applied <br class="mobile-hidden">from Madagascar.<br><span class="blue">Told them I was <br class="mobile-hidden">already moving.</span>',
    'leap.p1': "I wasn't. Not yet.",
    'leap.p2': 'But saying it out loud made it real. Months later, I called back.',
    'leap.blockquote': '"Ça y est, je suis là."',
    'leap.p3': "That's how the Luxembourg chapter started, not with a contract. With a commitment I made to myself before anyone asked me to.",
    'testimonial.text' : '"I first met Jacob remotely, on a video call from Madagascar. His profile caught my attention immediately. Some time later, he called back to say: \'I\'m here!\' marking the start of our collaboration in Luxembourg. A serious, committed and pleasant designer, Jacob demonstrates great professionalism and a genuine ability to connect with people."',
    'leap.valrole': 'Executive Assistant & HR · ID+P Luxembourg',
    'tango.chapter': 'Chapter III · Tango Luxembourg · 2024–2025',
    'tango.h2': 'Two schools.<br><span class="blue">One dashboard</span>',
    'tango.s1': 'Schools',
    'tango.s2': 'Stakeholders',
    'tango.s3': 'Dashboard',
    'tango.p1': 'One side wanted better wording.<br> The other wanted a better structure. <br> I stood between both; I wanted something you understand before you finish opening the app.',
    'tango.p2': "The problem wasn't the labels. Users didn't know which counter actually mattered: main plan, add-ons, rolled-over data, all at <strong>the same visual level.</strong>",
    'tango.p3': "The debate got intense. We settled it in zombie VR.<br><strong> The UI survived. So did the team.</strong>",
    'tangod.chapter': 'Chapter III · Tango Luxembourg · The decision',
    'tangod.h2': 'Open.<br>Scan.<br><span class="blue">Understand.</span>',
    'tangod.p1': 'I looked at how fintech apps handle it. Two seconds after opening — you already know where you stand. That became the reference.',
    'tangod.p2': 'One primary counter. A data/calls switcher. A detail page for the full breakdown.<br>Color-coding was removed to preserve brand neutrality — <strong>a compromise I could live with, because the structure was right.</strong>',
    'hspt.chapter': 'Chapter IV · Why Hospitable',
    'hspt.h2': 'I came looking<br>for instructions.<br><span class="blue">I found something else.</span>',
    'hspt.p1': "I'd never seen a company put that kind of effort into how they welcome a candidate. One sentence stopped me. I went in looking for how to qualify — and found myself in front of real questions.",
    'hspt.p2': "The profiles. The way the team is built across 31 countries without losing its humanity. People who seem to have their own singularity — the kind you don't often see on a team page. I caught myself wanting to know more about them before I'd even finished reading.",
    'hspt.blockquote': "There were moments of doubt during this process.<br>But somewhere along the way I realized — <strong>whatever happens, I'm walking away with things I'm keeping for myself.</strong>",
    'hspt.small': "That's not something a job posting does to you.",
    'cta.h2': 'I might doubt myself.<br>I don\'t <span class="blue">let go.</span>',
    'cta.sub1': 'I learned to remember the most important things<br>about who I am, about what a job should feel like.<br><br>This is why I left Tango. The only thing left to bet on was <strong>myself.</strong>',
    'cta.sub2': '10 years building. 3 years away from home.. <br> <strong>I know what I\'m made of.</strong>',
    'cta.btn1': 'Book a call →',
    'cta.btn3': 'Email',
    'cta.footer': 'jacob-houmadi.com · Hayange, France · <span style="color:#16A34A">●</span> Available now',
    /* ── NAVIGATION ── */
    'nav.bottom': '← → to navigate',
    /* ── TOOLTIPS (images hardcodées) ── */    
    'tooltip.comm.solidarity' :'When parkour became a voice.',
    'tooltip.agroforestry':    'For a better future. For those who\'ll outlive us.',
    'tooltip.axian.acters' :   'We showed up. They weren\'t inmates anymore — they were people finding their way back.',
    'tooltip.axian.snacks':    'Friday mornings were the best part of the week',
    'tooltip.axian.foot' :     'We competed. We laughed. We went back to work better.',
    'tooltip.afrixian':        'The moment we stopped looking outside.',
    'tooltip.african.clothes': 'Showed up in African clothes. Finance wasn\'t ready.',
    'tooltip.quantum.leap':    'This book changed my life. Sometimes all it takes is a leap into the unknown.',
    'tooltip.incremental':     'Ship small. Learn fast. Iterate.',
    'tooltip.zombi.vr':        'The debate got heated. We settled it in zombie VR. The UI held up. So did the team.',
    'tooltip.dashboard':       'One dashboard. Two schools. One verdict.',
    'tooltip.home':            'Home',
    /* ── RADAR ── */
    'radar.title':             'Character strengths',
    'radar.cat.Courage':       'Courage',
    'radar.cat.Knowledge':     'Knowledge',
    'radar.cat.Justice':       'Justice',
    'radar.cat.Temperance':    'Temperance',
    'radar.cat.Transcendance': 'Transcendance',
    'radar.cat.Humanity':      'Humanity',
    /* Captions photos */
    'radar.caption.3-9':       'In the good old days, with free food.',
    'radar.caption.9-17':      'Teenager Jacob — quiet, curious, and already figuring things out on his own.',
    'radar.caption.26-34':     'Product design is the only place where both ther artist and th solver could exist at the same time.',
    'radar.imgcap.17-26.0':    'Four weeks showing up for kids the system forgot.',
    'radar.imgcap.17-26.1':    'When parkour became a voice — and the streets became a stage.',
    'radar.imgcap.17-26.2':    'The day I learned that leading means serving first.',
    /* Tags */
    'radar.tag.Curiosity':          'Curiosity',
    'radar.tag.Leadership':         'Leadership',
    'radar.tag.Selfcontrol':        'Self-control',
    'radar.tag.Self-control':       'Self-control',
    'radar.tag.No_purpose':         'No purpose',
    'radar.tag.Kindness':           'Kindness',
    'radar.tag.Enthusiasm':         'Enthusiasm',
    'radar.tag.Creativity':         'Creativity',
    'radar.tag.Teamwork':           'Teamwork',
    'radar.tag.Humility':           'Humility',
    'radar.tag.Forgiveness':        'Forgiveness',
    'radar.tag.Purpose':            'Purpose',
    'radar.tag.Social_intelligence':'Social intelligence',
    'radar.tag.Perseverance':       'Perseverance',
    'radar.tag.Humor':              'Humor',
    'radar.tag.Love':               'Love',
    'radar.tag.Love_of_learning':   'Love of learning',
    'radar.tag.Fairness':           'Fairness',
    'radar.tag.Prudence':           'Prudence',
    'radar.tag.Risk-taking':        'Risk-taking',
    'radar.tag.UX_Research':        'UX Research',
    'radar.tag.Blockchain':         'Blockchain',
    'radar.tag.Community':          'Community',
    'radar.tag.Patience':           'Patience',
    'radar.tag.Generosity':         'Generosity',
  },

  fr: {
    'cover.chapter': 'Product Designer · 10 ans',
    'cover.sub': 'Madagascar → Luxembourg → France.<br><strong>Autodidacte. Prouvé loin de chez moi.</strong><br>Toujours en train de laisser une trace <strong style="color:var(--blue)">digitale</strong>.',
    'tooltip.cover' : 'Survolez les images pour découvrir les légendes. Bonne visite →',
    'journey.h2': 'Mon histoire, <span class="blue">quatre chapitres.</span>',
    'journey.chapter' : 'Chapitre I · Qui je suis',
    'journey.sub': 'Deux forces. Cliquez sur une période pour voir comment elles ont évolué.',
    'journey.hint': '↗ Cliquer pour les forces',
    'twoppl.chapter': 'Chapitre I · Qui je suis',
    'duality.artist': 'Artiste',
    'duality.solver': 'Solutionneur',

     /* ── PERIOD TAGS ── */
    'period.l1' : '3 - 9 ans',
    'period.l2' : '9 - 17 ans',
    'period.l3' : '17 – 26 ans',
    'period.l4' : '26 – 34 ans',
    'period.3-9.t1':  '31 oct. 1992',
    'period.3-9.t2':  'MLG - FR',
    'period.3-9.t3':  'Gaucher',
    'period.3-9.t4':  'Hobby : Dessin',
    'period.9-17.t1': 'Introverti',
    'period.9-17.t2': 'Manque de confiance',
    'period.9-17.t3': 'Carrière souhaitée : Scientifique',
    'period.9-17.t4': 'Hobby : Jeux vidéo',
    'period.17-26.t1': 'Sportif',
    'period.17-26.t2': 'Communaute',
    'period.17-26.t3': 'Carrière design',
    'period.17-26.t4': 'Marié',
    'period.17-26.t5': 'Père',
    'period.26-34.t1': 'Voyage en Europe',
    'period.26-34.t2': 'Investir',
    'period.26-34.t3': 'Ouvertur d\'esprit',
    'period.26-34.t4': 'Objectif : Autosuffisance',
    'twoppl.h2': 'Deux personnes. <br class="mobile-hidden"><span class="blue">Une révélation.</span>',
    'twoppl.p1': "Pendant longtemps, je ne savais pas ce que je faisais. Je savais que j'aimais dessiner. Je savais que j'aimais résoudre des problèmes. Mais c'était comme deux personnes différentes, et j'ai passé des années sans savoir laquelle j'étais censé être.",
    'twoppl.blockquote': 'Le créatif et le problem-solver.<br>Deux forces, sans réponse claire.',
    'twoppl.p2': 'Puis est venu le web. <strong>Pas un compromis. Une révélation.</strong> Le seul endroit où les deux personnes pouvaient coexister — et être vraiment utiles ensemble.',
    'local.chapter': 'Chapitre I · La révélation',
    'local.h2': 'Localhost. <br class="mobile-hidden"><span class="blue">Pas d\'internet.</span> <br class="mobile-hidden">Pas de problème.',
    'local.p1': "Pas d'argent pour un bon PC, pas d'internet à la maison. Alors j'allais au cybercafé, je téléchargeais des tutoriels, je rentrais et je travaillais hors ligne.",
    'local.p2': "Ce que j'ai remarqué silencieusement a tout changé : quand je touchais l'interface, les gens <strong>réagissaient.</strong> Quand j'améliorais ce qui était en dessous, ils ne sentaient rien. Cette asymétrie est devenue ma boussole.",
    'local.muted': 'Madagascar → Luxembourg → France. Apprendre en avançant.',
    'filter.chapter': 'Chapitre II · Comment je pense',
    'filter.h2': 'Je ne lis pas <br class="mobile-hidden">une interface.<br><span class="blue">Je la filtre.</span>',
    'filter.label1': 'La question',
    'filter.p1': "Qu'est-ce qui est là pour aider l'utilisateur à agir ?<br>Qu'est-ce qui est là pour rassurer le designer ?<br><br>Ce sont deux choses très différentes. La plupart du temps, elles n'ont pas leur place au même endroit.",
    'filter.p2': "<strong>Un bon design ne demande pas à être admiré. Il demande à être utilisé.</strong>",
    'filter.label2': "Ce que je ne crois pas",
    'filter.item1': 'Les vanity metrics LinkedIn ne disent rien sur la qualité du travail.',
    'filter.item2': "La comparaison ketchup UX vs UI a été partagée des milliers de fois. Jamais vérifiée.",
    'filter.item3': "Je préfère rester avec une question difficile plutôt que de me contenter d'une réponse facile.",
    'sing.chapter': 'Chapitre II · Singularité',
    'sing.quote': "Pas l'originalité<br>pour elle-même.<br><span class='blue'>L'honnêteté.</span>",
    'sing.blockquote': 'C\'est pour que vous vous souveniez de ce que vous avez ressenti en le naviguant.',
    'sing.small': 'Tous les designers ont un portfolio. Peu ont un point de vue.',
    'comm.chapter': 'Chapitre II · Au-delà de l\'écran',
    'comm.h2': 'J\'ai toujours avancé vers<br><span class="blue">celui que le système a oublié.</span>',
    'comm.intro': 'Avant le product design, il y avait la construction de communautés.<br>Avant les design systems, il y avait des systèmes humains.',
    'comm.l1.label': 'Leader d\'une communauté parkour à Madagascar',
    'comm.l1.sub': 'Elle s\'est transformée en actions environnementales, marches solidaires, et plaidoyer pour les jeunes femmes victimes d\'injustices.',
    'comm.l2.label': 'YMCA — ouverture d\'une deuxième branche parkour',
    'comm.l2.sub': 'Formation en leadership complétée.',
    'comm.l3.label': 'Programme ACTERS d\'Axian',
    'comm.l3.sub': 'Deux jours de bénévolat par mois. Accompagnement d\'anciens détenus dans leur réintégration sociale.',
    'comm.l4.label': 'Pratique de l\'agroforesterie',
    'comm.l4.sub': 'Appliquée localement. Ambition de la développer à plus grande échelle.',
    'comm.fr.label': 'France — Aujourd\'hui',
    'comm.fr.sub': 'Famille d\'accueil le week-end pour des enfants placés. Cours d\'informatique hebdomadaires pour les malvoyants — chaque mercredi.',
    'axian.chapter': 'Chapitre III · Axian Group · 2018–2023',
    'axian.h2': 'On n\'a pas été recrutés <br class="mobile-hidden">pour rejoindre une équipe.<br><span class="blue">On en a construit une.</span>',
    'axian.s1': 'Membres fondateurs',
    'axian.s2': 'Secteurs unifiés',
    'axian.s3': 'Ans à la construire',
    'axian.sub': "Je ne suis pas arrivé dans un département créatif. On l'a construit de zéro. Au sein de l'un des plus grands groupes de Madagascar, je coordonnais le petit-déjeuner tournant du vendredi : chaque semaine, une personne différente, une table différente. On en a fait un endroit où le bon travail avait envie d'arriver.",
    'afrix.chapter': 'Chapitre III · Axian Group · La percée',
    'afrix.h2': '<span class="blue">Afrixian.</span> <br class="mobile-hidden">Pas emprunté. <br class="mobile-hidden">Trouvé.',
    'afrix.s1': 'Prix Creatives 974',
    'afrix.sub1': "Pour construire l'identité de la marque, on a arrêté d'emprunter à l'extérieur et on a commencé à creuser de l'intérieur. C'est ainsi qu'Afrixian est né — <strong>la culture africaine, transformée en quelque chose de disruptif.</strong>",
    'afrix.sub2': "Une fois ce concept posé, tout s'est accéléré. Et j'ai commencé à venir au bureau en vêtements africains. Imaginez la jalousie du département financier.",
    'afrix.blockquote': "Ce n'était pas seulement la marque qui avait été construite. <strong>C'était nous.</strong>",
    'leap.chapter': 'Chapitre III · Le Grand Saut',
    'leap.h2': 'J\'ai postulé <br class="mobile-hidden">depuis Madagascar.<br><span class="blue">En leur disant que <br class="mobile-hidden">j\'étais déjà en route.</span>',
    'leap.p1': "C'était faux. Pas encore.",
    'leap.p2': 'Mais le dire à voix haute l\'a rendu réel. Quelques mois plus tard, j\'ai rappelé.',
    'testimonial.text' : '"J\'ai d\'abord connu Jacob à distance, lors d\'une première visio depuis Madagascar. Son profil m\'avait tout de suite interpellée. Quelques temps plus tard, il m\'a recontactée pour me dire : « Ça y est, je suis là ! », marquant ainsi le début de notre collaboration à Luxembourg. Web designer sérieux, impliqué et agréable, Jacob fait preuve de professionnalisme et d\'un très bon relationnel. Je le recommande volontiers pour des projets de web design."',
    'leap.blockquote': '"Ça y est, je suis là."',
    'leap.p3': "C'est comme ça qu'a commencé le chapitre Luxembourg — pas avec un contrat. Avec un engagement que je m'étais fait à moi-même avant que quiconque me le demande.",
    'leap.valrole': 'Assistante de direction & RH · ID+P Luxembourg',
    'tango.chapter': 'Chapitre III · Tango Luxembourg · 2024–2025',
    'tango.h2': 'Deux cas d\'écoles.<br><span class="blue">Un dashboard</span>',
    'tango.s1': 'Cas d\'écoles',
    'tango.s2': 'Stakeholders',
    'tango.s3': 'Dashboard',
    'tango.p1': "L'une voulait de meilleures formulations.<br>L'autre voulais une meilleure structure; <br> Je me situé entre les deux; je voulais quelque chose qu'on comprend avant même d'avoir fini d'ouvrir l'app.",
    'tango.p2': "Le problème, ce n'était pas les labels. Les utilisateurs ne savaient pas quel compteur importait vraiment : forfait principal, options, data reportée — tout au <strong>même niveau visuel.</strong>",
    'tango.p3': "Le débat s\'est enflammé. Nous l\'avons réglé dans un zombies VR. <br> <strong>L\'interface utilisateur a tenu le coup. L\'équipe aussi.</strong>",
    'tangod.chapter': 'Chapitre III · Tango Luxembourg · La décision',
    'tangod.h2': 'Ouvrir.<br>Scanner.<br><span class="blue">Comprendre.</span>',
    'tangod.p1': "J'ai regardé comment les apps fintech gèrent ça. Deux secondes après l'ouverture — tu sais déjà où tu en es. C'est devenu la référence.",
    'tangod.p2': "Un compteur principal. Un switch data/appels. Une page de détail pour le reste.<br>Le color-coding a été retiré pour préserver la neutralité de la marque — <strong>un compromis acceptable, parce que la structure était juste.</strong>",
    'hspt.chapter': 'Chapitre IV · Pourquoi Hospitable',
    'hspt.h2': 'Je cherchais<br>des instructions.<br><span class="blue">J\'ai trouvé autre chose.</span>',
    'hspt.p1': "Je n'avais jamais vu une entreprise mettre autant de soin dans la façon d'accueillir un candidat. Une phrase m'a arrêté. Je suis entré en cherchant comment me qualifier — et je me suis retrouvé face à de vraies questions.",
    'hspt.p2': "Les profils. La façon dont l'équipe est construite dans 31 pays sans perdre son humanité. Des gens qui semblent avoir leur propre singularité — le genre qu'on voit rarement sur une page équipe. Je me suis surpris à vouloir en savoir plus sur eux avant même d'avoir fini de lire.",
    'hspt.blockquote': "Il y a eu des moments de doute pendant ce processus.<br>Mais quelque part en chemin j'ai réalisé — <strong>quoi qu'il arrive, je repars avec des choses que je garde pour moi.</strong>",
    'hspt.small': "Ce n'est pas ce qu'une offre d'emploi vous fait d'habitude.",
    'cta.h2': 'Je peux douter de moi.<br>Je ne <span class="blue">lâche pas.</span>',
    'cta.sub1': 'J\'ai appris à me souvenir des choses les plus importantes<br>sur qui je suis, sur ce que devrait être un emploi.<br><br>C\'est pourquoi j\'ai quitté Tango. Le seul défi qui restait, c\'était de me <strong> faire plus confiance.</strong>',
    'cta.sub2': '10 ans à construire. 3 ans loin de chez moi. <br> <strong>Je sais ce que je vaux.</strong>',
    'cta.btn1': 'Prendre rendez-vous →',
    'cta.btn3': 'E-mail',
    'cta.footer': 'jacob-houmadi.com · Hayange, France · <span style="color:#16A34A">●</span> Disponible maintenant',
    /* ── NAVIGATION ── */
    'nav.bottom': '← → pour naviguer',
    /* ── TOOLTIPS (images hardcodées) ── */    
    'tooltip.comm.solidarity' :'Quand le parkour est devenu une voix.',
    'tooltip.axian.acters' :   'Nous les avons rencontrés. Ils n\'étaient plus des détenus, mais des personnes en voie de réinsertion.',
    'tooltip.agroforestry':    'Pour un avenir meilleur. Pour ceux après nous.',
    'tooltip.afrixian':        'African + Axian — une identité construite de l\'intérieur.',
    'tooltip.axian.snacks':    'Les vendredis matins étaient le meilleur moment de la semaine.',
    'tooltip.axian.foot' :     'Nous avons rivalisé. Nous avons ri. Nous sommes retournés au travail plus efficaces.',
    'tooltip.afrixian':        'Le moment où nous avons cessé de regarder à l\'extérieur.',
    'tooltip.african.clothes': 'Arrivé en vêtements africains au bureau. La finance n\'était pas prête.',
    'tooltip.quantum.leap':    'Ce livre a changé ma vie. Parfois, il suffit d\'un saut dans l\'inconnu.',
    'tooltip.incremental':     'Livrer petit. Apprendre vite. Itérer.',
    'tooltip.zombi.vr':        'Le débat s\'est enflammé. Nous l\'avons réglé dans un zombies VR. L\'interface utilisateur a tenu le coup. L\'équipe aussi.',
    'tooltip.dashboard':       'Un dashboard. Deux écoles. Un verdict.',
    'tooltip.home':            'Maison',
    /* ── RADAR ── */
    'radar.title':             'Forces de caractère',
    'radar.cat.Courage':       'Courage',
    'radar.cat.Knowledge':     'Connaissance',
    'radar.cat.Justice':       'Justice',
    'radar.cat.Temperance':    'Tempérance',
    'radar.cat.Transcendance': 'Transcendance',
    'radar.cat.Humanity':      'Humanité',
    /* Captions photos */
    'radar.caption.3-9':       'La belle époque — nourritures gratuites',
    'radar.caption.9-17':      'Jacob adolescent — calme, curieux, et déjà en train de tout comprendre par lui-même.',
    'radar.caption.26-34':     'La conception de produits est le seul domaine où l\'artiste et le solutionneur peuvent coexister.',
    'radar.imgcap.17-26.0':    'Quatre semaines consacrées aux enfants que le système a oubliés.',
    'radar.imgcap.17-26.1':    'Quand le parkour est devenue une voix, et que les rues sont devenues une scène.',
    'radar.imgcap.17-26.2':    'Le jour où j\'ai appris que diriger signifie d\'abord servir.',
    /* Tags */
    'radar.tag.Curiosity':          'Curiosité',
    'radar.tag.Leadership':         'Leadership',
    'radar.tag.Selfcontrol':        'Maîtrise de soi',
    'radar.tag.Self-control':       'Maîtrise de soi',
    'radar.tag.No_purpose':         'Absence de sens',
    'radar.tag.Kindness':           'Bienveillance',
    'radar.tag.Enthusiasm':         'Enthousiasme',
    'radar.tag.Creativity':         'Créativité',
    'radar.tag.Teamwork':           'Esprit d\'équipe',
    'radar.tag.Humility':           'Humilité',
    'radar.tag.Forgiveness':        'Pardon',
    'radar.tag.Purpose':            'Sens du but',
    'radar.tag.Social_intelligence':'Intelligence sociale',
    'radar.tag.Perseverance':       'Persévérance',
    'radar.tag.Humor':              'Humour',
    'radar.tag.Love':               'Amour',
    'radar.tag.Love_of_learning':   'Amour d\'apprendre',
    'radar.tag.Fairness':           'Équité',
    'radar.tag.Prudence':           'Prudence',
    'radar.tag.Risk-taking':        'Prise de risque',
    'radar.tag.UX_Research':        'Recherche UX',
    'radar.tag.Blockchain':         'Blockchain',
    'radar.tag.Community':          'Communauté',
    'radar.tag.Patience':           'Patience',
    'radar.tag.Generosity':         'Générosité',
  },

  mg: {
    'cover.chapter': 'Mpanao Product Design · 10 taona',
    'cover.sub': 'Madagascar → Luxembourg → Frantsa.<br><strong>Nampianantena. Voaporofo lavitry ny tany nahabe ahy.</strong><br>Mandao <strong style="color:var(--blue)">anjara</strong> foana manerana ny tontolo.',
    'journey.chapter': 'Toko I · Iza aho',
    'journey.h2': 'Ny tantarako, <span class="blue">fizarana efatra.</span>',
    'journey.sub': 'Fitarihan-dalana roa. Tsindrio ny fe-potoana hahitanao ny fandrosoany.',
    'journey.hint': '↗ Tsindrio ahitanao ny herin-tsaina',
    'duality.artist': 'Artista',
    'duality.solver': 'Mpandalina',

    /* ── PERIOD TAGS ── */
    'period.l1' : '3 - 9 taona',
    'period.l2' : '9 - 17 taona',
    'period.l3' : '17 – 26 taona',
    'period.l4' : '26 – 34 taona',
    'period.3-9.t1':  '31 Oktobra 1992',
    'period.3-9.t2':  'Malagasy - Frantsay',
    'period.3-9.t3':  'Ankivia',
    'period.3-9.t4':  'Fialam-boly: Manao sary',
    'period.9-17.t1': 'Saro-kenatra',
    'period.9-17.t2': 'Tsy matoky tena',
    'period.9-17.t3': 'Asa novinavinaina: Mpikaroka',
    'period.9-17.t4': 'Fialam-boly: "Jeux video"',
    'period.17-26.t1': 'Mpanao fanatanjahantena',
    'period.17-26.t2': "Vondron'olona",
    'period.17-26.t3': 'Asa design',
    'period.17-26.t4': 'Voavoady',
    'period.17-26.t5': "Rain'anaka",
    'period.26-34.t1': 'Sidina nankany Eoropa',
    'period.26-34.t2': 'Mampiasa vola',
    'period.26-34.t3': 'Saina miabo',
    'period.26-34.t4': 'Tanjona: Fahaleovan-tena',
    'twoppl.chapter': 'Toko I · Iza aho',
    'twoppl.h2': 'Olona roa. <br class="mobile-hidden"><span class="blue">Fanambarana iray.</span>',
    'twoppl.p1': "Nandritra ny fotoana maro dia tsy fantatro mazava izay ho ataoko. Fantatro fa tia manao sary aho. Fantatro koa fa tia mikaroka vaha-olana aho. Nefa toy ny olona roa samy hafa izany — ary nandany taona maro mihintsy aho tsy mahafantatra hoe iza no tena hitanilanako.",
    'twoppl.blockquote': 'Ny mpanakanto sy ny mpandraharaha.<br>Fitarihan-dalana roa, tsy misy valiny mazava.',
    'twoppl.p2': 'Dia tonga ny tranon-kala. <strong>Tsy elanelam-panahy. Fa fanambarana.</strong> Ilay toerana tokana nahafahan\'ilay olona roa miara-miaina — ary mifañasoa.',
    'local.chapter': 'Toko I · Ny Fanambarana',
    'local.h2': 'Localhost. <br class="mobile-hidden"><span class="blue">Tsy misy interinety.</span> <br class="mobile-hidden">Tsy misy olana.',
    'local.p1': "Tsy nisy vola hividanana solosaina matanjaka, tsy nisy interinety tao an-trano. Koa nandeha tany amin'ny cybercafé, naka vidéo fianarana, dia avy eo nianarana tao antrano tsy nisy tambazotra.",
    'local.p2': 'Nisy tsikaritro nangina no naova ny zava-drehetra : rehefa ny endrika ivalny ivelany ny tranokala no atsaraiko, dia <strong>namaly ny olona.</strong> Rehefa nanatsara ny zavatra ao anatin\'ny aho, tsy tsapan\'izy ireo. Io tsy fitoviana io no nanjary lasa faniloko.',
    'local.muted': 'Madagascar → Luxembourg → Frantsa. Niianatra nandritra ny dia.',
    'filter.chapter': 'Toko II · Ny fisainako',
    'filter.h2': 'Tsy mamaky <br class="mobile-hidden">efijery aho.<br><span class="blue"> Fa manao bango tokana.</span>',
    'filter.label1': 'Ny fanontaniana',
    'filter.p1': "Inona eto no hanampy ny mpampiasa hanao fietsika ?<br>Inona eto no hampionona fotsiny ny mpanao design ?<br><br>Zavatra roa samy hafa ireo. Amin'ny nkapobeny ireo dia afaka miara miaina amin'ny toerana iray.",
    'filter.p2': "<strong>Ny design tsara dia tsy mangataka ho andraindraina. Fa mangataka ho ampiasaina izy.</strong>",
    'filter.label2': "Izay tsy itokiako",
    'filter.item1': 'Ny fieboeoboana amin\'ny antotan\'isa ao LinkedIn dia tsy milaza na inona na inona momba ny kalitaon\'ny asa.',
    'filter.item2': "Ny fampitahana ny tavoangy ketchup hoe UX na UI dia nozarazaraina aman'arivo maro. Tsy nohamarinina mihitsy.",
    'filter.item3': "Tiako kokoa ny mamaha fanontaniana sarotra toy izay mahazo valiny mora.",
    'sing.chapter': 'Toko II · Ny mampiavaka ahy',
    'sing.quote': 'Tsy ny miavaka fotsiny<br>ho azy irery.<br><span class="blue">Fa ho an\'ny fahamarinana.</span>',
    'sing.blockquote': 'Mba hahatsiarovanao ny fihetseham-ponao tamin\'izay nandalo teo ambany masonao.',
    'sing.small': 'Manana portfolio daholo ny mpamorona rehetra. Vitsy kosa no manana fomba fijery.',
    'comm.chapter': 'Toko II · Ambadiky ny efijery',
    'comm.h2': 'Nanatona hatrany<br><span class="blue">ireo hadinon\'ny rafitra aho.</span>',
    'comm.intro': 'Talohan\'ny product design, nisy ny fananganana vondron\'olona.<br>Talohan\'ny nandrafetana design systems, nisy ny rafitra momba ny olona.',
    'comm.l1.label': 'Mpitarika vondron\'ny parkour tany Madagasikara',
    'comm.l1.sub': 'Nanao asa momba ny tontolo iainana, fidinan-dalambe, ary fanohanana ny vehivavy tanora niharan\'ny fanararaotana.',
    'comm.l2.label': 'YMCA — nanokatra sampana parkour faharoa',
    'comm.l2.sub': 'Nahatontosa fiofanana ara-pitarihana.',
    'comm.l3.label': 'Programa ACTERS an\'i Axian',
    'comm.l3.sub': 'Andro roa isan-volana tsy fiasana voatokana amin\'ny asa sosialy. Nanampy ny mpifatotra teo aloha tamin\'ny fiverenany amin\'ny fiarahamonina.',
    'comm.l4.label': 'Fiofanana amin\'ny fampivadiana ny fambolena sy ny ala',
    'comm.l4.sub': 'Nampiarina tamin\'ny tany kely tany Madagasikara. Fikasana hitombo bebe kokoa.',
    'comm.fr.label': 'Frantsa — Ankehitriny',
    'comm.fr.sub': 'Mandray an-tsitrapo ny ankizy eo ambany fiahiana amin\'ny faran\'ny herinandro. Mampianatra solosaina ho an\'ny olona osa-maso — isaky ny Alarobia.',
    'axian.chapter': 'Toko III · Axian Group · 2018–2023',
    'axian.h2': 'Tsy voaray izahay <br class="mobile-hidden">mba hiditra ekipa.<br><span class="blue">Fa nanangana azy.</span>',
    'axian.s1': 'Mpikambana nanangana',
    'axian.s2': 'Sehatra natambatra',
    'axian.s3': 'Taona nananganana',
    'axian.sub': "Tsy nanatevin-daharana sampan-draharaha famoronana efa nisy aho.  Nanangana azy avy amin'ny fotony izahay. Ao anatin'ny iray amin'ireo vondrona lehibe indrindra eto Madagasikara, izaho no nitantana ny sakafo maraina isaky ny Zoma : isaky ny herinandro, olona hafa, sakafo hafa. Nataonay ho toerana izay itiavan'ny asa tsara hitranga.",
    'afrix.chapter': 'Toko III · Axian Group · Ny fandrosoan-dehibe',
    'afrix.h2': '<span class="blue">Afrixian.</span> <br class="mobile-hidden">Tsy nindramina. <br class="mobile-hidden">Fa hita.',
    'afrix.s1': 'Loka Creatives 974',
    'afrix.sub1': "Mba hanamboarana ny maha-izy azy ny marika, nijanonay ny fihindramana ny any ivelany ka nanomboka nikaroka tao anaty izahay. Izany no nahaterahan'i Afrixian — <strong> kolontsaina afrikanina, nanjary ho zavatra misongadina.</strong>",
    'afrix.sub2': "Rehefa nisy io foto-kevitra io, dia nandroso aigana ho azy ny zavadrehetra. Ary nanomboka nitafy akanjo afrikanina makany amin'ny birao aho. Alaivo sary an-tsaina ny fialonana ny sampan-draharahan'ny fitantanam-bola!",
    'afrix.blockquote': "Tsy ny marika irery no naorina. <strong>Izahay koa.</strong>",
    'leap.chapter': 'Toko III · Ny Fihintsana Lehibe',
    'leap.h2': 'Nandefa dosie <br class="mobile-hidden">avy any Madagasikara.<br><span class="blue">Nilazako azy ireo fa <br class="mobile-hidden">efa ho any aho.</span>',
    'leap.p1': "Tsy marina. Tsy mbola nifindra aho.",
    'leap.p2': "Nefa ny nilaza izany mafy aho dia nahatonga azy ho lasa tena izy. Volana vitsivitsy taty aoriana, niantso indray aho.",
    'leap.blockquote': '"Ça y est, je suis là."',
    'testimonial.text' : '"J\'ai d\'abord connu Jacob à distance, lors d\'une première visio depuis Madagascar. Son profil m\'avait tout de suite interpellée. Quelques temps plus tard, il m\'a recontactée pour me dire : « Ça y est, je suis là ! », marquant ainsi le début de notre collaboration à Luxembourg. Web designer sérieux, impliqué et agréable, Jacob fait preuve de professionnalisme et d\'un très bon relationnel. Je le recommande volontiers pour des projets de web design."',
    'leap.p3': "Izany no niandohan'ny tantara Luxembourg — tsy tamin'ny fifanarahana. Tamin'ny fanekena nataoko tamiko manokana, talohan'ny nisy nangataka ahy.",
    'leap.valrole': 'Assistante de direction & RH · ID+P Luxembourg',
    'tango.chapter': 'Toko III · Tango Luxembourg · 2024–2025',
    'tango.h2': 'Lasy roa.<br><span class="blue">Tabilao iray</span>',
    'tango.s1': 'Lasy',
    'tango.s2': 'Mpandray anjara',
    'tango.s3': 'Tabilao',
    'tango.p1': 'Ny ilany iray te hanatsara kokoa ny teny.<br> Ny iray kosa te hanatsara kokoa ny firafitra. <br> Izaho nakeo anelanelan\'izy roa; nila zavatra azonao alohan\'ny ho vita ny fisokafan\'ny "application-nao".',
    'tango.p2': 'Tsy ny soratra no olana. Tsy fantatrany ny mpanjifa hoe iza tamin\'ireo kaontera no tena izy — Tao ny "forfait" voalohany sy ny fanampiny ary ny data notahirizina, <strong>voasokajy mitovy.</strong>',
    'tango.p3': "Nihamafana ny adihevitra. Nifarana tamin\'ny fifaninana mitifitra zombie VR. <br> <strong>Nahazaka tsara ny UI. Toy izany koa ny ekipa.</strong>",
    'tangod.chapter': 'Toko III · Tango Luxembourg · Ny fanapahan-kevitra',
    'tangod.h2': 'Manokatra.<br>Mahita.<br><span class="blue">Mahazo.</span>',
    'tangod.p1': "Nijery ny fomba fitantanan'ny apps fintech izany aho. Roa segondra aorian'ny fanokafana — fantanao sahady ny toetranao. Izany no lasa tsodrano.",
    'tangod.p2': "Kaontera voalohany iray. bokotra mampiseo data/antso. Pejy antsipiriany ho an'ny sisa.<br>Nesorina ny fampiadina loko mba hitahirizana ny fitoviana amin'ny marika — <strong> Nekeko io fanampahankevitra io, satria efa voavaha ny olan'ny sokajy.</strong>",
    'hspt.chapter': 'Toko IV · Nahoana Hospitable',
    'hspt.h2': 'Nitady torolàlana aho.<br>Nefa<br><span class="blue">nahita zavatra hafa.</span>',
    'hspt.p1': "Mbola tsy nahita orinasa nandany fotoana tamin'ny fandraisan'ny kandidà aho. Fehezanteny iray no nampiato ahy. Nitady fomba hahafahako mahafeno fepetra no anton'dihako — ary nahita fanontaniana mafonja.",
    'hspt.p2': "Ny olona tao. Ny fomba firindran'ny ekipa manerana ny firenena 31 nefa tsy very ny maha-olombelona azy. Olona izay toa manana ny maha-izy azy manokana — ilay karazana tsy fahita matetika ao amin'ny pejin'ny ekipa. Nahatsapa aho fa te hahalala bebe kokoa momba azy ireo na dia mbola tsy nahavita namaky aza.",
    'hspt.blockquote': "Nisy fotoana nisalasalana nandritra ity dingana ity.<br>Nefa tsikelikely dia nahatsapa aho — <strong>na inona na inona mitranga, miala eot aho dia misy zavatra ho tazoniko ho ahy.</strong>",
    'hspt.small': "Tsy mahavita mampihevitra anao tohy izany daholo ny mpanao tolotra asa mazàna.",
    'cta.h2': 'Mety tsy hahatoky tena aho indraindray .<br>Nefa tsy ho <span class="blue">isan\'izay mihemotra.</span>',
    'cta.sub1': 'Ny lesona tsoahiko dia ny atsiaro foana ny zavatra manan-danja indrindra<br>momba ny maha-izaho ahy sy ny momba izay tokony asa izorana.<br><br>Izany no antony nialako tamin\'ny Tango. Efa hitako ny fameperana manaraka:  <strong>Ny tenako.</strong>',
    'cta.sub2': 'Folo taona nananganana. Telo taona lavitry ny tany nahabe ahy. <strong>Fantatro ny lanjako.</strong>',
    'cta.btn1': 'Mamandria antso →',
    'cta.btn3': 'mailaka',
    'cta.footer': 'jacob-houmadi.com · Hayange, Frantsa · <span style="color:#16A34A">●</span> Malalaka amin\'izao',
    /* ── NAVIGATION ── */
    'nav.bottom': '← → raha hanova pejy',
    /* ── TOOLTIPS ── */
    'tooltip.cover':           'Tendreo ny sary dia miseo ny maribolana. Mitsidia finaritra →',
    'tooltip.comm.solidarity': 'Rehefa lasa feo ny parkour.',
    'tooltip.axian.acters' :   'Tonga nitsidika azy reo izahay. Tsy voafonja intsony izy ireo fa olona mitady ny làlana hiverenany.',
    'tooltip.agroforestry':    'Manorona hoavy tsara kokoa. Ho an\'ny taranaka faramandimby.',
    'tooltip.afrixian':        'Ny fotoana nitsaharanay mampitahy ny any ivelany.',    
    'tooltip.axian.snacks':    'Ny zoma maraina no fotoana tsara indrindra tamin\'ny herinandro.',
    'tooltip.axian.foot' :     'Nifaninana izahay.   Nihomehy izahay.   Niverina niasa miaraka amin\'ny hery vaovao.',
    'tooltip.afrixian':        'African + Axian — maha-izy azy niorina avy ao anatiny.',
    'tooltip.african.clothes': 'Nanao akanjo afrikanina any amin\'ny birao. Tsy nampoizin\'ny sampan-draharahan\'ny fitantanam-bola.',
    'tooltip.quantum.leap':    'Ity boky ity no naova ny fiainako. Indraindray, vikina iray ao amin\'ny tsy fantatra dia ampy.',
    'tooltip.incremental':     'Alefa kely. Ianarana haingana. Ovaina.',
    'tooltip.zombi.vr':        'Nihamafana ny adihevitra. Nifarana tamin\'ny fifaninana mitifitra zombie VR. Nahazaka tsara ny UI. Toy izany koa ny ekipa.',
    'tooltip.dashboard':       'Tabilao iray. Lasy roa. Didy iray.',
    'tooltip.home':            'Fonenana',
    /* ── RADAR ── */
    'radar.title':             'Herin-tsaina',
    'radar.cat.Courage':       'Herim-po',
    'radar.cat.Knowledge':     'Fahalalana',
    'radar.cat.Justice':       'Fahamarinana',
    'radar.cat.Temperance':    'Fifehezana',
    'radar.cat.Transcendance': 'Transcendance',
    'radar.cat.Humanity':      'Maha-olombelona',
    /* Captions photos */
    'radar.caption.3-9':       'Tsara erỳ tamin\'ny izany andro — nihinana maimaim-poana.',
    'radar.caption.9-17':      'Jacob tanora — mitokatokana, tia karokaroka, ary efa mikaroka zavatra maro irery.',
    'radar.caption.26-34':     'Ny famolavolana tranokala sy "application" no hany toerana ahafahan\'ny mpanakanto sy ny mpamaha olana miara-maina sy mifameno.',
    'radar.imgcap.17-26.0':    'Iray volana ny ankizy hadinon\'ny rafitra.',
    'radar.imgcap.17-26.1':    'Rehefa lasa feo ny parkour — ary lasa sehatra ny arabe.',
    'radar.imgcap.17-26.2':    'Ny andro nahalalako fa ny fitarihana dia midika hoe manandratra aloha.',
    /* Tags */
    'radar.tag.Curiosity':          'Fahirizan-tsaina',
    'radar.tag.Leadership':         'Fitarihana',
    'radar.tag.Selfcontrol':        'Fifehezana tena',
    'radar.tag.Self-control':       'Fifehezana tena',
    'radar.tag.No_purpose':         'Tsy misy tanjona',
    'radar.tag.Kindness':           'fahatsoram-panahy',
    'radar.tag.Enthusiasm':         'Hafanam-po',
    'radar.tag.Creativity':         'Haifaritana',
    'radar.tag.Teamwork':           'Fiombonana asa',
    'radar.tag.Humility':           'Fietren-tena',
    'radar.tag.Forgiveness':        'Famelan-keloka',
    'radar.tag.Purpose':            'Tanjona',
    'radar.tag.Social_intelligence':'Fahatakarana ara-tsosialy',
    'radar.tag.Perseverance':       'Faharetana',
    'radar.tag.Humor':              'Hafaliana',
    'radar.tag.Love':               'Fitiavana',
    'radar.tag.Love_of_learning':   'Fitiavana fianarana',
    'radar.tag.Fairness':           'Fitoviana',
    'radar.tag.Prudence':           'Fahendrena',
    'radar.tag.Risk-taking':        'Sahy handeha',
    'radar.tag.UX_Research':        'Fikarohana UX',
    'radar.tag.Blockchain':         'Blockchain',
    'radar.tag.Community':          'Vondron\'olona',
    'radar.tag.Patience':           'Fahari-po',
    'radar.tag.Generosity':         'Fanomezana',
  }
};


(function () {

  function setLang(lang) {
    if (!T[lang]) return;

    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-t]").forEach(el => {
      const key = el.getAttribute("data-t");
      const value = T[lang][key];

      if (value) {
        if (key.startsWith('tooltip.')) {
          el.setAttribute('data-tooltip', value);
        } else {
          el.innerHTML = value;
        }
      }
    });

    /* ── Update dropdown slide titles ── */
    const titles = SLIDE_TITLES_I18N[lang] || SLIDE_TITLES_I18N.en;
    document.querySelectorAll('#dropdown .dd-item').forEach((el, i) => {
      const titleEl = el.querySelector('.dd-title');
      if (titleEl && titles[i]) {
        titleEl.textContent = String(i + 1).padStart(2, '0') + ' · ' + titles[i];
      }
    });

    /* ── Update page title ── */
    const pageTitles = {
      en: 'My Story | Jacob Houmadi',
      fr: 'Mon Histoire | Jacob Houmadi',
      mg: 'Ny Tantarako | Jacob Houmadi'
    };
    document.title = pageTitles[lang] || pageTitles.en;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    if (typeof bindTooltips === 'function') bindTooltips();
  }

  /* ── HELPERS RADAR I18N ── */
  window.radarCatLabel = function(cat) {
    const lang = localStorage.getItem('lang') || 'en';
    return (T[lang] && T[lang]['radar.cat.' + cat]) || cat;
  };

  window.radarTagText = function(stripped) {
    const lang = localStorage.getItem('lang') || 'en';
    const key = 'radar.tag.' + stripped.replace(/ /g, '_');
    return (T[lang] && T[lang][key]) || stripped;
  };

  window.radarTitle = function() {
    const lang = localStorage.getItem('lang') || 'en';
    return (T[lang] && T[lang]['radar.title']) || 'Character strengths';
  };

  window.radarCaption = function(periodKey, imgIndex) {
    const lang = localStorage.getItem('lang') || 'en';
    if (imgIndex !== undefined) {
      const k = 'radar.imgcap.' + periodKey + '.' + imgIndex;
      return (T[lang] && T[lang][k]) || null;
    }
    const k = 'radar.caption.' + periodKey;
    return (T[lang] && T[lang][k]) || null;
  };

  window.setLang = setLang;

  document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);

    const dropdown = document.getElementById("dropdown");
    if (!dropdown) return;

    const switcher = document.createElement("div");
    switcher.className = "lang-switcher";

    switcher.innerHTML = `
      <span class="lang-switcher-label">Lang</span>
      <button class="lang-btn" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="fr">FR</button>
      <button class="lang-btn" data-lang="mg">MG</button>
    `;

    dropdown.appendChild(switcher);

    switcher.addEventListener("click", function (e) {
      if (e.target.classList.contains("lang-btn")) {
        e.stopPropagation();
        setLang(e.target.dataset.lang);
      }
    });
  });

})();