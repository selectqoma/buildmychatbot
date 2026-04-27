export const locales = ["en", "fr", "nl"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  nl: "NL",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  nl: "Nederlands",
};

export const localePaths: Record<Locale, string> = {
  en: "/",
  fr: "/fr",
  nl: "/nl",
};

type TranscriptMessage =
  | {
      role: "Customer";
      text: string;
    }
  | {
      role: "Agent";
      text: string;
      source: string;
      confidence: string;
    };

export type SiteContent = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  common: {
    homeLabel: string;
    emailLabel: string;
    privacyLabel: string;
    termsLabel: string;
    languageLabel: string;
  };
  hero: {
    navCta: string;
    badge: string;
    titleTop: string;
    titleAccent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustSignals: string[];
  };
  heroChat: {
    label: string;
    status: string;
    next: string;
    replay: string;
    messages: Array<{
      role: "user" | "bot";
      text: string;
      meta?: string;
    }>;
  };
  transcript: {
    eyebrow: string;
    title: string;
    body: string;
    beforeLabel: string;
    before: string;
    afterLabel: string;
    after: string;
    header: string;
    pill: string;
    messages: TranscriptMessage[];
  };
  problem: {
    eyebrow: string;
    title: string;
    items: Array<{ text: string; detail: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{ num: string; title: string; desc: string }>;
  };
  deliverables: {
    eyebrow: string;
    title: string;
    scopedBuild: string;
    carePlan: string;
    included: string[];
    optional: string[];
    integrations: string[];
  };
  confidence: {
    eyebrow: string;
    title: string;
    body: string;
    points: Array<{ title: string; body: string }>;
  };
  commercials: {
    eyebrow: string;
    title: string;
    body: string;
    buildLabel: string;
    buildValue: string;
    supportLabel: string;
    supportValue: string;
    deliveryLabel: string;
    deliveryValue: string;
    afterLabel: string;
    afterValue: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    divider: string;
    emailCta: string;
  };
  form: {
    emailPlaceholder: string;
    urlPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    meta: {
      title: "BuildMyChatbot | Customer service chatbots in two weeks",
      description:
        "We build customer service chatbots that answer from your help docs, escalate safely, and are yours to own.",
    },
    common: {
      homeLabel: "BuildMyChatbot home",
      emailLabel: "Email",
      privacyLabel: "Privacy",
      termsLabel: "Terms",
      languageLabel: "Language",
    },
    hero: {
      navCta: "Get a docs demo",
      badge: "Scoped project fee. EU-hosted. Full source handover.",
      titleTop: "Your customer service chatbot,",
      titleAccent: "live in two weeks.",
      subtitle:
        "We build and deploy a chatbot that answers from your help docs, escalates when unsure, and cuts repetitive support tickets without locking you into another platform.",
      primaryCta: "Get a free demo on your docs",
      secondaryCta: "Book a 15-min call",
      trustSignals: [
        "Answers from indexed sources",
        "Low-confidence escalation",
        "Slack, email, or widget handoff",
      ],
    },
    heroChat: {
      label: "support-agent",
      status: "live",
      next: "Next message...",
      replay: "Replay",
      messages: [
        {
          role: "user",
          text: "Can I invite contractors without paying for full seats?",
        },
        {
          role: "bot",
          text: "Yes. Invite them as guests from Settings > Members. Guests can access only the projects you choose and do not count as full workspace seats.",
          meta: "Source: Members and roles docs · Confidence: High",
        },
        {
          role: "user",
          text: "Can you approve their security review too?",
        },
        {
          role: "bot",
          text: "I can share the security docs I found, but approval needs your team. I can escalate this with the contractor name and workspace details.",
          meta: "Action: Escalate · Confidence: Low",
        },
      ],
    },
    transcript: {
      eyebrow: "See it in action",
      title: "Grounded answers, safe escalation",
      body:
        "The agent answers only from indexed content, keeps a source trail for review, and hands off when the answer needs human judgment.",
      beforeLabel: "Before:",
      before: "repeated billing, login, and setup tickets pile up in the queue.",
      afterLabel: "After:",
      after:
        "common questions get instant answers, risky ones become clean support handoffs.",
      header: "Customer support",
      pill: "source-grounded",
      messages: [
        {
          role: "Customer",
          text: "How do I change the billing email for our workspace?",
        },
        {
          role: "Agent",
          text: "Go to Settings > Billing > Company details, update the billing email, then save. The new address receives future invoices and payment notices.",
          source: "Source: Billing docs / Company details",
          confidence: "Confidence: High",
        },
        {
          role: "Customer",
          text: "Can you also change our VAT number?",
        },
        {
          role: "Agent",
          text: "I found the billing profile instructions, but VAT changes can affect invoices. I can send this to support with your workspace ID attached.",
          source: "Action: Escalate to support",
          confidence: "Confidence: Low",
        },
      ],
    },
    problem: {
      eyebrow: "The problem",
      title: "Sound familiar?",
      items: [
        {
          text: "Your support team answers the same 20 questions every day",
          detail: "Repetitive tickets drain your team and slow response times.",
        },
        {
          text: "Your help center exists but customers don't read it",
          detail:
            "The information is there. Customers just can't find it fast enough.",
        },
        {
          text: "Generic chatbots feel robotic and make things worse",
          detail:
            "Canned responses frustrate users and escalate tickets instead of resolving them.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How it works",
      steps: [
        {
          num: "01",
          title: "We ingest your docs",
          desc: "Help center, FAQ, product pages. Up to 500 pages.",
        },
        {
          num: "02",
          title: "We build and tune the agent",
          desc: "Answers in your tone, escalates when unsure.",
        },
        {
          num: "03",
          title: "We deploy to your site",
          desc: "Chat widget, Slack, or email integration.",
        },
      ],
    },
    deliverables: {
      eyebrow: "Deliverables",
      title: "What's included",
      scopedBuild: "Scoped build",
      carePlan: "Optional care plan",
      included: [
        "Custom agent trained on your content",
        "Chat widget OR Slack/email integration",
        "Human escalation logic",
        "Basic analytics dashboard",
        "Source code, prompts, and deployment configs",
        "2 weeks delivery + 2 weeks support",
      ],
      optional: [
        "Monitoring & tuning",
        "Monthly content re-ingestion",
        "New question category handling",
      ],
      integrations: [
        "Website widget",
        "Slack handoff",
        "Email capture",
        "CRM webhooks",
      ],
    },
    confidence: {
      eyebrow: "Production confidence",
      title: "Built for support teams that need control",
      body:
        "The useful part is not just the answer. It is the handoff behavior, review trail, hosting posture, and the fact that you are not renting the core of your support workflow forever.",
      points: [
        {
          title: "EU-first hosting",
          body:
            "Docs and chat logs can run in your infrastructure or a dedicated EU cloud instance, aligned with the privacy policy.",
        },
        {
          title: "No guessing by default",
          body:
            "The agent answers from indexed sources, logs low-confidence questions, and escalates instead of inventing a reply.",
        },
        {
          title: "Model flexibility",
          body:
            "We usually use current OpenAI or Anthropic models, then adapt provider choice to your privacy, latency, and hosting needs.",
        },
        {
          title: "You own the system",
          body:
            "You receive source code, prompts, retrieval settings, deployment configs, and handover docs at delivery.",
        },
      ],
    },
    commercials: {
      eyebrow: "Commercials",
      title: "A fixed quote before we start",
      body:
        "We scope the build around your docs, handoff flow, and deployment needs, then agree the fee before any work begins.",
      buildLabel: "Build",
      buildValue: "Fixed project quote",
      supportLabel: "Ongoing support",
      supportValue: "Optional monthly care",
      deliveryLabel: "Delivery",
      deliveryValue: "2 weeks",
      afterLabel: "After delivery",
      afterValue: "You own everything. No lock-in.",
      cta: "Get a free demo on your docs",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions buyers usually ask before trusting an agent",
      items: [
        {
          q: "How is this different from Intercom Fin / Zendesk AI?",
          a:
            "Those are platform add-ons tied to their ecosystem. This is a standalone support agent built around your docs, workflows, escalation rules, and hosting needs. You can deploy it on your site, connect it to Slack or email, and keep the source code.",
        },
        {
          q: "What LLM do you use?",
          a:
            "We usually use current OpenAI or Anthropic models, then choose the provider based on your privacy, latency, and hosting requirements. The deployment is designed so the model can be swapped later instead of becoming a platform dependency.",
        },
        {
          q: "Where is my data hosted?",
          a:
            "Your docs can be processed and stored in your own infrastructure or in a dedicated EU cloud instance. We do not share your data with third parties for marketing, and handover includes the deployment configuration so your team knows where everything lives.",
        },
        {
          q: "What if it gives a wrong answer?",
          a:
            "The agent is configured to answer from indexed sources only. If confidence is low or no relevant source exists, it says so, logs the question, and escalates to support instead of guessing.",
        },
        {
          q: "Can it integrate with my CRM?",
          a:
            "Yes. The standard setup supports a website widget plus Slack or email handoff. Common CRM and helpdesk integrations can be connected through webhooks or API work during discovery.",
        },
        {
          q: "Who owns the code and deployment?",
          a:
            "You do. Full source code, deployment configs, and documentation are handed over at delivery.",
        },
        {
          q: "What languages are supported?",
          a:
            "The agent can answer in many languages, including English, French, German, Dutch, and Spanish. If your docs are primarily English, we can still configure multilingual responses and escalation behavior.",
        },
        {
          q: "How do you handle hallucinations?",
          a:
            "We use retrieval, source constraints, uncertainty behavior, and review logs. If the answer is not in your indexed material, the agent should ask for clarification or hand off.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Custom-built by engineers, not wrapped templates",
      body:
        "BuildMyChatbot is a specialist service that builds production-grade support chatbots for software companies. Every build is custom: no templates, no white-label platforms, no shortcuts. We handle ingestion, tuning, deployment, and hand you the keys.",
      bullets: [
        "RAG and retrieval tuning",
        "CRM, Slack, and workflow integrations",
        "EU-based delivery and support",
      ],
    },
    finalCta: {
      title: "Want a demo on your own docs?",
      subtitle: "Free, no call required.",
      divider: "or",
      emailCta: "Send us an email",
    },
    form: {
      emailPlaceholder: "you@company.com",
      urlPlaceholder: "https://docs.yoursite.com",
      submit: "Get a free demo",
      submitting: "Sending...",
      successTitle: "Request received",
      successBody:
        "We'll build a demo on your docs and get back to you within 24 hours.",
    },
  },
  fr: {
    locale: "fr",
    meta: {
      title: "BuildMyChatbot | Chatbots de service client en deux semaines",
      description:
        "Nous créons des chatbots de service client qui répondent à partir de votre documentation, escaladent prudemment et vous appartiennent.",
    },
    common: {
      homeLabel: "Accueil BuildMyChatbot",
      emailLabel: "Email",
      privacyLabel: "Confidentialité",
      termsLabel: "Conditions",
      languageLabel: "Langue",
    },
    hero: {
      navCta: "Recevoir une démo",
      badge: "Projet cadré. Hébergement UE. Code source remis.",
      titleTop: "Votre chatbot de service client,",
      titleAccent: "en ligne en deux semaines.",
      subtitle:
        "Nous construisons et déployons un chatbot qui répond à partir de votre documentation, escalade quand il n'est pas sûr et réduit les tickets répétitifs sans vous enfermer dans une plateforme.",
      primaryCta: "Recevoir une démo sur vos docs",
      secondaryCta: "Réserver 15 min",
      trustSignals: [
        "Réponses depuis des sources indexées",
        "Escalade si confiance faible",
        "Handoff Slack, email ou widget",
      ],
    },
    heroChat: {
      label: "agent-support",
      status: "live",
      next: "Message suivant...",
      replay: "Rejouer",
      messages: [
        {
          role: "user",
          text: "Puis-je inviter des prestataires sans payer des sièges complets ?",
        },
        {
          role: "bot",
          text: "Oui. Invitez-les comme invités via Paramètres > Membres. Les invités n'accèdent qu'aux projets choisis et ne comptent pas comme sièges complets.",
          meta: "Source : docs Membres et rôles · Confiance : élevée",
        },
        {
          role: "user",
          text: "Peux-tu aussi approuver leur revue de sécurité ?",
        },
        {
          role: "bot",
          text: "Je peux partager les documents de sécurité trouvés, mais l'approbation doit venir de votre équipe. Je peux escalader avec le nom du prestataire et les détails du workspace.",
          meta: "Action : escalade · Confiance : faible",
        },
      ],
    },
    transcript: {
      eyebrow: "Voir le fonctionnement",
      title: "Réponses sourcées, escalade prudente",
      body:
        "L'agent répond uniquement depuis le contenu indexé, conserve une trace des sources pour la revue et transmet à un humain quand la question demande du jugement.",
      beforeLabel: "Avant :",
      before:
        "les mêmes tickets de facturation, connexion et configuration s'empilent.",
      afterLabel: "Après :",
      after:
        "les questions courantes reçoivent une réponse immédiate, les cas risqués deviennent des handoffs propres.",
      header: "Support client",
      pill: "basé sur les sources",
      messages: [
        {
          role: "Customer",
          text: "Comment changer l'email de facturation de notre workspace ?",
        },
        {
          role: "Agent",
          text: "Allez dans Paramètres > Facturation > Informations société, modifiez l'email de facturation puis sauvegardez. La nouvelle adresse recevra les prochaines factures.",
          source: "Source : docs Facturation / Informations société",
          confidence: "Confiance : élevée",
        },
        {
          role: "Customer",
          text: "Peux-tu aussi changer notre numéro de TVA ?",
        },
        {
          role: "Agent",
          text: "J'ai trouvé les instructions du profil de facturation, mais les changements de TVA peuvent affecter les factures. Je peux transmettre cela au support avec l'ID du workspace.",
          source: "Action : escalade au support",
          confidence: "Confiance : faible",
        },
      ],
    },
    problem: {
      eyebrow: "Le problème",
      title: "Cela vous parle ?",
      items: [
        {
          text: "Votre équipe répond aux mêmes 20 questions chaque jour",
          detail:
            "Les tickets répétitifs épuisent l'équipe et rallongent les délais de réponse.",
        },
        {
          text: "Votre centre d'aide existe, mais les clients ne le lisent pas",
          detail:
            "L'information est là. Les clients ne la trouvent simplement pas assez vite.",
        },
        {
          text: "Les chatbots génériques sonnent faux et empirent l'expérience",
          detail:
            "Les réponses toutes faites frustrent les utilisateurs et escaladent au lieu de résoudre.",
        },
      ],
    },
    process: {
      eyebrow: "Processus",
      title: "Comment ça marche",
      steps: [
        {
          num: "01",
          title: "Nous ingérons vos docs",
          desc: "Centre d'aide, FAQ, pages produit. Jusqu'à 500 pages.",
        },
        {
          num: "02",
          title: "Nous construisons et réglons l'agent",
          desc: "Réponses dans votre ton, escalade quand il n'est pas sûr.",
        },
        {
          num: "03",
          title: "Nous le déployons sur votre site",
          desc: "Widget chat, intégration Slack ou email.",
        },
      ],
    },
    deliverables: {
      eyebrow: "Livrables",
      title: "Ce qui est inclus",
      scopedBuild: "Projet cadré",
      carePlan: "Suivi optionnel",
      included: [
        "Agent personnalisé entraîné sur votre contenu",
        "Widget chat OU intégration Slack/email",
        "Logique d'escalade humaine",
        "Tableau de bord analytics de base",
        "Code source, prompts et configs de déploiement",
        "Livraison en 2 semaines + 2 semaines de support",
      ],
      optional: [
        "Monitoring et réglages",
        "Ré-ingestion mensuelle du contenu",
        "Traitement de nouvelles catégories de questions",
      ],
      integrations: [
        "Widget site web",
        "Handoff Slack",
        "Capture email",
        "Webhooks CRM",
      ],
    },
    confidence: {
      eyebrow: "Confiance en production",
      title: "Conçu pour les équipes support qui veulent garder le contrôle",
      body:
        "La valeur n'est pas seulement la réponse. C'est le comportement d'escalade, la trace de revue, la posture d'hébergement et le fait que le coeur de votre support ne soit pas loué à vie.",
      points: [
        {
          title: "Hébergement orienté UE",
          body:
            "Les docs et logs peuvent tourner dans votre infrastructure ou dans une instance cloud dédiée en Europe, alignée avec votre politique de confidentialité.",
        },
        {
          title: "Pas d'invention par défaut",
          body:
            "L'agent répond depuis des sources indexées, journalise les questions à faible confiance et escalade au lieu d'inventer.",
        },
        {
          title: "Flexibilité du modèle",
          body:
            "Nous utilisons généralement des modèles OpenAI ou Anthropic récents, puis adaptons le fournisseur à vos besoins de confidentialité, latence et hébergement.",
        },
        {
          title: "Vous possédez le système",
          body:
            "Vous recevez le code source, les prompts, les réglages de retrieval, les configs de déploiement et la documentation de handover.",
        },
      ],
    },
    commercials: {
      eyebrow: "Commercial",
      title: "Un devis fixe avant de commencer",
      body:
        "Nous cadrons le projet selon vos docs, votre handoff et vos contraintes de déploiement, puis validons le budget avant tout travail.",
      buildLabel: "Build",
      buildValue: "Devis projet fixe",
      supportLabel: "Support continu",
      supportValue: "Suivi mensuel optionnel",
      deliveryLabel: "Livraison",
      deliveryValue: "2 semaines",
      afterLabel: "Après livraison",
      afterValue: "Vous possédez tout. Pas de lock-in.",
      cta: "Recevoir une démo sur vos docs",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Les questions à clarifier avant de faire confiance à un agent",
      items: [
        {
          q: "En quoi est-ce différent d'Intercom Fin ou Zendesk AI ?",
          a:
            "Ce sont des add-ons liés à leur écosystème. Ici, l'agent est autonome et construit autour de vos docs, workflows, règles d'escalade et contraintes d'hébergement. Vous pouvez le déployer sur votre site, le connecter à Slack ou email, et garder le code source.",
        },
        {
          q: "Quel LLM utilisez-vous ?",
          a:
            "Nous utilisons généralement des modèles OpenAI ou Anthropic récents, puis choisissons selon vos exigences de confidentialité, latence et hébergement. Le déploiement est conçu pour permettre un changement de modèle plus tard.",
        },
        {
          q: "Où mes données sont-elles hébergées ?",
          a:
            "Vos docs peuvent être traitées et stockées dans votre infrastructure ou dans une instance cloud dédiée en Europe. Nous ne partageons pas vos données avec des tiers à des fins marketing.",
        },
        {
          q: "Et s'il donne une mauvaise réponse ?",
          a:
            "L'agent est configuré pour répondre uniquement depuis des sources indexées. Si la confiance est faible ou qu'aucune source pertinente n'existe, il le dit, journalise la question et escalade au support.",
        },
        {
          q: "Peut-il s'intégrer à mon CRM ?",
          a:
            "Oui. Le setup standard couvre un widget web et un handoff Slack ou email. Les intégrations CRM et helpdesk courantes peuvent être connectées via webhooks ou API pendant la découverte.",
        },
        {
          q: "Qui possède le code et le déploiement ?",
          a:
            "Vous. Le code source, les configs de déploiement et la documentation sont remis à la livraison.",
        },
        {
          q: "Quelles langues sont supportées ?",
          a:
            "L'agent peut répondre dans plusieurs langues, dont l'anglais, le français, l'allemand, le néerlandais et l'espagnol.",
        },
        {
          q: "Comment gérez-vous les hallucinations ?",
          a:
            "Nous utilisons retrieval, contraintes de sources, comportement d'incertitude et logs de revue. Si la réponse n'est pas dans vos contenus indexés, l'agent doit demander une précision ou escalader.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Construit par des ingénieurs, pas emballé dans des templates",
      body:
        "BuildMyChatbot est un service spécialisé qui construit des chatbots support prêts pour la production. Chaque build est sur mesure : pas de templates, pas de plateforme white-label, pas de raccourcis. Nous gérons ingestion, tuning, déploiement et remise des clés.",
      bullets: [
        "RAG et tuning du retrieval",
        "Intégrations CRM, Slack et workflows",
        "Livraison et support basés en Europe",
      ],
    },
    finalCta: {
      title: "Vous voulez une démo sur vos propres docs ?",
      subtitle: "Gratuit, sans appel obligatoire.",
      divider: "ou",
      emailCta: "Envoyez-nous un email",
    },
    form: {
      emailPlaceholder: "vous@entreprise.com",
      urlPlaceholder: "https://docs.votresite.com",
      submit: "Recevoir une démo gratuite",
      submitting: "Envoi...",
      successTitle: "Demande reçue",
      successBody:
        "Nous construirons une démo sur vos docs et reviendrons vers vous sous 24 heures.",
    },
  },
  nl: {
    locale: "nl",
    meta: {
      title: "BuildMyChatbot | Klantenservice-chatbots in twee weken",
      description:
        "Wij bouwen klantenservice-chatbots die antwoorden op basis van je helpdocs, veilig escaleren en eigendom blijven van jou.",
    },
    common: {
      homeLabel: "BuildMyChatbot home",
      emailLabel: "E-mail",
      privacyLabel: "Privacy",
      termsLabel: "Voorwaarden",
      languageLabel: "Taal",
    },
    hero: {
      navCta: "Vraag een docs-demo",
      badge: "Afgebakend project. EU-hosting. Broncode inbegrepen.",
      titleTop: "Je klantenservice-chatbot,",
      titleAccent: "live in twee weken.",
      subtitle:
        "Wij bouwen en deployen een chatbot die antwoordt op basis van je helpdocs, escaleert bij twijfel en repetitieve supporttickets vermindert zonder platform lock-in.",
      primaryCta: "Vraag een gratis demo op je docs",
      secondaryCta: "Boek 15 minuten",
      trustSignals: [
        "Antwoorden uit geïndexeerde bronnen",
        "Escalatie bij lage zekerheid",
        "Handoff via Slack, e-mail of widget",
      ],
    },
    heroChat: {
      label: "support-agent",
      status: "live",
      next: "Volgend bericht...",
      replay: "Opnieuw afspelen",
      messages: [
        {
          role: "user",
          text: "Kan ik contractors uitnodigen zonder volledige seats te betalen?",
        },
        {
          role: "bot",
          text: "Ja. Nodig ze uit als gasten via Instellingen > Leden. Gasten krijgen alleen toegang tot de projecten die je kiest en tellen niet als volledige workspace seats.",
          meta: "Bron: docs Leden en rollen · Zekerheid: hoog",
        },
        {
          role: "user",
          text: "Kan je ook hun security review goedkeuren?",
        },
        {
          role: "bot",
          text: "Ik kan de gevonden security docs delen, maar goedkeuring moet door je team gebeuren. Ik kan dit escaleren met de naam van de contractor en workspace-details.",
          meta: "Actie: escaleren · Zekerheid: laag",
        },
      ],
    },
    transcript: {
      eyebrow: "Bekijk het in actie",
      title: "Gefundeerde antwoorden, veilige escalatie",
      body:
        "De agent antwoordt alleen vanuit geïndexeerde content, houdt een bronspoor bij voor review en draagt over wanneer menselijk oordeel nodig is.",
      beforeLabel: "Voor:",
      before:
        "herhaalde tickets over facturatie, login en setup stapelen zich op.",
      afterLabel: "Na:",
      after:
        "veelgestelde vragen krijgen direct antwoord, risicovolle vragen worden nette handoffs.",
      header: "Klantenservice",
      pill: "bron-gebaseerd",
      messages: [
        {
          role: "Customer",
          text: "Hoe wijzig ik het facturatie-e-mailadres van onze workspace?",
        },
        {
          role: "Agent",
          text: "Ga naar Instellingen > Facturatie > Bedrijfsgegevens, wijzig het facturatie-e-mailadres en sla op. Het nieuwe adres ontvangt toekomstige facturen.",
          source: "Bron: facturatiedocs / Bedrijfsgegevens",
          confidence: "Zekerheid: hoog",
        },
        {
          role: "Customer",
          text: "Kan je ook ons btw-nummer wijzigen?",
        },
        {
          role: "Agent",
          text: "Ik vond de instructies voor het facturatieprofiel, maar btw-wijzigingen kunnen facturen beïnvloeden. Ik kan dit doorsturen naar support met je workspace-ID.",
          source: "Actie: escaleren naar support",
          confidence: "Zekerheid: laag",
        },
      ],
    },
    problem: {
      eyebrow: "Het probleem",
      title: "Herkenbaar?",
      items: [
        {
          text: "Je supportteam beantwoordt elke dag dezelfde 20 vragen",
          detail:
            "Repetitieve tickets kosten energie en vertragen responstijden.",
        },
        {
          text: "Je helpcenter bestaat, maar klanten lezen het niet",
          detail:
            "De informatie is er. Klanten vinden ze gewoon niet snel genoeg.",
        },
        {
          text: "Generieke chatbots voelen robotachtig en maken het erger",
          detail:
            "Standaardantwoorden frustreren gebruikers en escaleren tickets in plaats van ze op te lossen.",
        },
      ],
    },
    process: {
      eyebrow: "Proces",
      title: "Hoe het werkt",
      steps: [
        {
          num: "01",
          title: "We lezen je docs in",
          desc: "Helpcenter, FAQ, productpagina's. Tot 500 pagina's.",
        },
        {
          num: "02",
          title: "We bouwen en tunen de agent",
          desc: "Antwoorden in jouw toon, escalatie bij twijfel.",
        },
        {
          num: "03",
          title: "We deployen op je site",
          desc: "Chatwidget, Slack- of e-mailintegratie.",
        },
      ],
    },
    deliverables: {
      eyebrow: "Deliverables",
      title: "Wat inbegrepen is",
      scopedBuild: "Afgebakende build",
      carePlan: "Optionele nazorg",
      included: [
        "Custom agent getraind op je content",
        "Chatwidget OF Slack/e-mailintegratie",
        "Menselijke escalatielogica",
        "Basis analytics-dashboard",
        "Broncode, prompts en deployment-configs",
        "Levering in 2 weken + 2 weken support",
      ],
      optional: [
        "Monitoring en tuning",
        "Maandelijkse content re-ingestion",
        "Nieuwe vraagcategorieën afhandelen",
      ],
      integrations: [
        "Website-widget",
        "Slack-handoff",
        "E-mailcapture",
        "CRM-webhooks",
      ],
    },
    confidence: {
      eyebrow: "Productievertrouwen",
      title: "Gebouwd voor supportteams die controle nodig hebben",
      body:
        "De waarde zit niet alleen in het antwoord. Het gaat om handoff-gedrag, reviewspoor, hostingkeuze en het feit dat je de kern van je supportproces niet voor altijd huurt.",
      points: [
        {
          title: "EU-first hosting",
          body:
            "Docs en chatlogs kunnen draaien in je eigen infrastructuur of in een dedicated EU-cloudinstantie, afgestemd op je privacybeleid.",
        },
        {
          title: "Geen gokken standaard",
          body:
            "De agent antwoordt vanuit geïndexeerde bronnen, logt vragen met lage zekerheid en escaleert in plaats van iets te verzinnen.",
        },
        {
          title: "Modelflexibiliteit",
          body:
            "We gebruiken meestal recente OpenAI- of Anthropic-modellen en stemmen de provider af op je privacy-, latency- en hostingvereisten.",
        },
        {
          title: "Jij bezit het systeem",
          body:
            "Je ontvangt broncode, prompts, retrieval-instellingen, deployment-configs en handover-documentatie bij oplevering.",
        },
      ],
    },
    commercials: {
      eyebrow: "Commercieel",
      title: "Een vaste offerte voor we starten",
      body:
        "We scopen de build rond je docs, handoff-flow en deploymentvereisten, en leggen de prijs vast voor het werk begint.",
      buildLabel: "Build",
      buildValue: "Vaste projectofferte",
      supportLabel: "Doorlopende support",
      supportValue: "Optionele maandelijkse nazorg",
      deliveryLabel: "Levering",
      deliveryValue: "2 weken",
      afterLabel: "Na oplevering",
      afterValue: "Alles is van jou. Geen lock-in.",
      cta: "Vraag een gratis demo op je docs",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Vragen die kopers stellen voor ze een agent vertrouwen",
      items: [
        {
          q: "Hoe verschilt dit van Intercom Fin of Zendesk AI?",
          a:
            "Dat zijn platform-add-ons binnen hun ecosysteem. Dit is een standalone supportagent rond je docs, workflows, escalatieregels en hostingnoden. Je kan hem op je site deployen, koppelen aan Slack of e-mail, en de broncode behouden.",
        },
        {
          q: "Welk LLM gebruiken jullie?",
          a:
            "Meestal gebruiken we recente OpenAI- of Anthropic-modellen, daarna kiezen we op basis van privacy, latency en hostingvereisten. De deployment is zo gebouwd dat het model later kan worden vervangen.",
        },
        {
          q: "Waar worden mijn data gehost?",
          a:
            "Je docs kunnen worden verwerkt en opgeslagen in je eigen infrastructuur of in een dedicated EU-cloudinstantie. We delen je data niet met derden voor marketing.",
        },
        {
          q: "Wat als de agent een fout antwoord geeft?",
          a:
            "De agent is ingesteld om alleen vanuit geïndexeerde bronnen te antwoorden. Bij lage zekerheid of ontbrekende bron zegt hij dat, logt hij de vraag en escaleert hij naar support.",
        },
        {
          q: "Kan dit integreren met mijn CRM?",
          a:
            "Ja. De standaardsetup ondersteunt een website-widget plus Slack- of e-mailhandoff. Veel CRM- en helpdeskintegraties kunnen via webhooks of API-werk gekoppeld worden.",
        },
        {
          q: "Wie bezit de code en deployment?",
          a:
            "Jij. Volledige broncode, deployment-configs en documentatie worden bij oplevering overgedragen.",
        },
        {
          q: "Welke talen worden ondersteund?",
          a:
            "De agent kan antwoorden in meerdere talen, waaronder Engels, Frans, Duits, Nederlands en Spaans.",
        },
        {
          q: "Hoe gaan jullie om met hallucinaties?",
          a:
            "We gebruiken retrieval, bronbeperkingen, onzekerheidsgedrag en reviewlogs. Als het antwoord niet in je geïndexeerde materiaal staat, moet de agent verduidelijking vragen of escaleren.",
        },
      ],
    },
    about: {
      eyebrow: "Over ons",
      title: "Custom gebouwd door engineers, niet verpakt in templates",
      body:
        "BuildMyChatbot is een gespecialiseerde service die productieklare supportchatbots bouwt. Elke build is maatwerk: geen templates, geen white-label platform, geen shortcuts. Wij doen ingestion, tuning, deployment en dragen de sleutels over.",
      bullets: [
        "RAG en retrieval-tuning",
        "CRM-, Slack- en workflowintegraties",
        "EU-gebaseerde levering en support",
      ],
    },
    finalCta: {
      title: "Wil je een demo op je eigen docs?",
      subtitle: "Gratis, geen call vereist.",
      divider: "of",
      emailCta: "Stuur ons een e-mail",
    },
    form: {
      emailPlaceholder: "jij@bedrijf.com",
      urlPlaceholder: "https://docs.jouwsite.com",
      submit: "Vraag een gratis demo",
      submitting: "Versturen...",
      successTitle: "Aanvraag ontvangen",
      successBody:
        "We bouwen een demo op je docs en komen binnen 24 uur bij je terug.",
    },
  },
};
