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
  adaptation: {
    eyebrow: string;
    title: string;
    body: string;
    sites: Array<{
      label: string;
      industry: string;
      headline: string;
      assistant: string;
      chat: string;
      theme: "blue" | "emerald" | "violet";
    }>;
    points: string[];
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
  analytics: {
    eyebrow: string;
    title: string;
    body: string;
    hostedBadge: string;
    kpis: Array<{ label: string; value: string; delta: string }>;
    trafficTitle: string;
    trafficCaption: string;
    topicsTitle: string;
    topicsCaption: string;
    topics: Array<{ name: string; count: number }>;
    escalationsTitle: string;
    escalationsCaption: string;
    escalations: Array<{ question: string; reason: string }>;
    weekdays: string[];
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
      title: "BuildMyChatbot | AI agents that turn questions into customers",
      description:
        "We build your own AI agent to answer customer questions, guide people to the right next step, and hand serious enquiries to your team.",
    },
    common: {
      homeLabel: "BuildMyChatbot home",
      emailLabel: "Email",
      privacyLabel: "Privacy",
      termsLabel: "Terms",
      languageLabel: "Language",
    },
    hero: {
      navCta: "Get a site demo",
      badge: "Scoped project fee. EU-hosted. Full source handover.",
      titleTop: "Your own AI agent",
      titleAccent: "that helps your website sell.",
      subtitle:
        "We build a source-grounded agent on your website content and docs, connect it to your handoff flow, and hand over the code, prompts, and deployment configs. It answers questions, keeps visitors moving, and sends serious enquiries to your team with context.",
      primaryCta: "Get a free demo on your site",
      secondaryCta: "Book a 15-min call",
      trustSignals: [
        "Answers from indexed sources",
        "Better visitor conversations",
        "Slack, email, or CRM handoff",
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
      title: "Smooth answers, clearer next steps",
      body:
        "The agent answers from approved content, keeps a source trail for review, and hands interested customers to your team when the conversation needs a human.",
      beforeLabel: "Before:",
      before: "visitors hesitate, search around, or leave when they cannot get a quick answer.",
      afterLabel: "After:",
      after:
        "questions get answered, buying intent is captured, and risky cases become clean handoffs.",
      header: "Customer conversation",
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
    adaptation: {
      eyebrow: "Fits your product",
      title: "One agent, matched to your website and brand",
      body:
        "The widget is not a generic bubble dropped onto the page. We adapt the tone, colors, shape, entry points, and handoff behavior so it feels native to your customer experience and buying flow.",
      sites: [
        {
          label: "B2B SaaS",
          industry: "Documentation-heavy product",
          headline: "Workspace settings",
          assistant: "Linear support",
          chat: "Can I invite external collaborators?",
          theme: "blue",
        },
        {
          label: "E-commerce",
          industry: "Orders, returns, delivery",
          headline: "Order status",
          assistant: "Parcel help",
          chat: "Where is my package?",
          theme: "emerald",
        },
        {
          label: "Healthcare",
          industry: "Careful routing and privacy",
          headline: "Patient portal",
          assistant: "Care desk",
          chat: "How do I reschedule an appointment?",
          theme: "violet",
        },
      ],
      points: [
        "Works with modern websites, CMS pages, and custom frontends",
        "Styled to your typography, colors, border radius, and tone of voice",
        "Can appear as a chat widget, embedded assistant, or support intake flow",
      ],
    },
    problem: {
      eyebrow: "The problem",
      title: "Sound familiar?",
      items: [
        {
          text: "Customers ask the same questions before they buy",
          detail: "When answers are slow or hard to find, good visitors drop off.",
        },
        {
          text: "Your website has the answers, but people still miss them",
          detail:
            "The information is there. Customers just need a faster path to the right answer.",
        },
        {
          text: "Generic chatbots feel robotic and lose trust",
          detail:
            "Canned responses frustrate users instead of helping them take the next step.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How it works",
      steps: [
        {
          num: "01",
          title: "We ingest your content",
          desc: "Website pages, FAQ, product or service docs. Up to 500 pages.",
        },
        {
          num: "02",
          title: "We build and tune the agent",
          desc: "Answers in your tone, guides next steps, escalates when unsure.",
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
      title: "Built for teams that need control",
      body:
        "The useful part is not just the answer. It is the handoff behavior, review trail, hosting posture, and the fact that you are not renting the core of your customer conversations forever.",
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
    analytics: {
      eyebrow: "Analytics, included",
      title: "See what customers ask before they buy",
      body:
        "Every conversation is logged, tagged, and surfaced in a dashboard you can hand to sales, support, product, and ops. You see what people want, what blocks them, and where your site needs clearer answers.",
      hostedBadge: "Hosted in EU · sample dashboard data",
      kpis: [
        { label: "Conversations · 7d", value: "2,418", delta: "+18%" },
        { label: "Answered instantly", value: "61%", delta: "+4 pts" },
        { label: "Avg confidence", value: "0.84", delta: "stable" },
        { label: "Escalations", value: "147", delta: "-12%" },
      ],
      trafficTitle: "Conversations · last 14 days",
      trafficCaption: "Daily engagement, with weekend dips visible at a glance.",
      topicsTitle: "What people ask before converting",
      topicsCaption: "Top intents over the last 7 days.",
      topics: [
        { name: "Pricing & plans", count: 412 },
        { name: "Login & SSO", count: 318 },
        { name: "Data export", count: 241 },
        { name: "Integrations", count: 196 },
        { name: "Refunds", count: 134 },
        { name: "API limits", count: 98 },
      ],
      escalationsTitle: "Recent handoffs",
      escalationsCaption: "Sent to your team with the conversation context.",
      escalations: [
        {
          question: "Can I export billing as CSV with EU VAT lines?",
          reason: "Outside indexed docs · routed to billing@",
        },
        {
          question: "Does SSO work with our on-prem AD via SAML?",
          reason: "Needs human confirmation · routed to support@",
        },
        {
          question: "Why was my workspace downgraded after the trial?",
          reason: "Account-specific · routed to success@",
        },
      ],
      weekdays: ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S"],
    },
    commercials: {
      eyebrow: "Commercials",
      title: "A fixed quote before we start",
      body:
        "We scope the build around your content, handoff flow, and deployment needs, then agree the fee before any work begins.",
      buildLabel: "Build",
      buildValue: "Fixed project quote",
      supportLabel: "Ongoing support",
      supportValue: "Optional monthly care",
      deliveryLabel: "Delivery",
      deliveryValue: "2 weeks",
      afterLabel: "After delivery",
      afterValue: "You own everything. No lock-in.",
      cta: "Get a free demo on your site",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions buyers usually ask before trusting an agent",
      items: [
        {
          q: "How is this different from Intercom Fin / Zendesk AI?",
          a:
            "Those are platform add-ons tied to their ecosystem. This is a standalone customer-facing agent built around your content, workflows, escalation rules, and hosting needs. You can deploy it on your site, connect it to Slack, email, or CRM tools, and keep the source code.",
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
          q: "Can we review answers before launch?",
          a:
            "Yes. The launch process includes review on realistic questions, risky edge cases, low-confidence behavior, and handoff copy before the agent goes live.",
        },
        {
          q: "Can we approve which sources it uses?",
          a:
            "Yes. You choose the approved source set: help center articles, product docs, FAQs, policy pages, internal docs, or a narrower subset for the first release.",
        },
        {
          q: "Can it avoid account-specific questions?",
          a:
            "Yes. Account-specific, billing-sensitive, legal, medical, or operationally risky questions can be routed to a human instead of answered automatically.",
        },
        {
          q: "Can we delete logs or control retention?",
          a:
            "Yes. Log retention is configurable per deployment. We can minimize logs, redact sensitive fields, or hand retention controls to your infrastructure team.",
        },
        {
          q: "Do you sign a DPA?",
          a:
            "Yes. For production deployments that process customer data, we can sign a data processing agreement and document subprocessors, hosting, retention, and deletion terms.",
        },
        {
          q: "What happens after the two-week support period?",
          a:
            "You keep the code, prompts, retrieval settings, deployment configs, and handover docs. You can run it yourself or keep us on a monthly care plan for monitoring, tuning, and content re-ingestion.",
        },
        {
          q: "What do you need from us to start?",
          a:
            "A website, docs, or help center URL, the questions you want handled better, the handoff destination, any topics the agent must not answer, and your hosting or privacy constraints.",
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
        "BuildMyChatbot is a specialist service that builds production-grade AI agents for businesses with clear content and repeated customer questions. Every build is custom: no templates, no white-label platforms, no shortcuts. We handle ingestion, tuning, deployment, and hand you the keys.",
      bullets: [
        "RAG and retrieval tuning",
        "CRM, Slack, and workflow integrations",
        "EU-based delivery and support",
      ],
    },
    finalCta: {
      title: "Want a demo on your own site?",
      subtitle: "Free, no call required.",
      divider: "or",
      emailCta: "Send us an email",
    },
    form: {
      emailPlaceholder: "you@company.com",
      urlPlaceholder: "https://www.yoursite.com",
      submit: "Get a free demo",
      submitting: "Sending...",
      successTitle: "Request received",
      successBody:
        "We'll build a demo on your site content and get back to you within 24 hours.",
    },
  },
  fr: {
    locale: "fr",
    meta: {
      title: "BuildMyChatbot | Agents IA qui transforment les questions en clients",
      description:
        "Nous créons des agents IA propriétaires qui répondent aux questions clients, guident vers la bonne étape et transmettent les demandes sérieuses à votre équipe.",
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
      titleTop: "Votre agent IA propriétaire",
      titleAccent: "qui aide votre site à vendre.",
      subtitle:
        "Nous construisons un agent sourcé sur le contenu de votre site et vos docs, le connectons à votre handoff, puis vous remettons le code, les prompts et les configs de déploiement. Il répond aux questions, garde les visiteurs engagés et transmet les demandes sérieuses avec le contexte.",
      primaryCta: "Recevoir une démo sur votre site",
      secondaryCta: "Réserver 15 min",
      trustSignals: [
        "Réponses depuis des sources indexées",
        "Meilleures conversations visiteurs",
        "Handoff Slack, email ou CRM",
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
      title: "Réponses fluides, prochaines étapes claires",
      body:
        "L'agent répond depuis du contenu approuvé, conserve une trace des sources pour la revue et transmet à votre équipe quand la conversation demande un humain.",
      beforeLabel: "Avant :",
      before:
        "les visiteurs hésitent, cherchent trop longtemps ou quittent le site faute de réponse rapide.",
      afterLabel: "Après :",
      after:
        "les questions reçoivent une réponse, l'intention est captée et les cas risqués deviennent des handoffs propres.",
      header: "Conversation client",
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
    adaptation: {
      eyebrow: "Adapté à votre produit",
      title: "Un agent qui respecte votre site et votre identité",
      body:
        "Le widget n'est pas une bulle générique posée sur la page. Nous adaptons le ton, les couleurs, les formes, les points d'entrée et le handoff pour qu'il semble faire partie de votre expérience client et de votre parcours d'achat.",
      sites: [
        {
          label: "B2B SaaS",
          industry: "Produit riche en documentation",
          headline: "Paramètres workspace",
          assistant: "Support Linear",
          chat: "Puis-je inviter des collaborateurs externes ?",
          theme: "blue",
        },
        {
          label: "E-commerce",
          industry: "Commandes, retours, livraison",
          headline: "Suivi de commande",
          assistant: "Aide colis",
          chat: "Où est mon colis ?",
          theme: "emerald",
        },
        {
          label: "Santé",
          industry: "Routage prudent et confidentialité",
          headline: "Portail patient",
          assistant: "Accueil patient",
          chat: "Comment déplacer un rendez-vous ?",
          theme: "violet",
        },
      ],
      points: [
        "Compatible avec sites modernes, CMS et frontends sur mesure",
        "Aligné sur votre typographie, vos couleurs, vos rayons et votre ton",
        "Disponible comme widget chat, assistant intégré ou flux d'intake support",
      ],
    },
    problem: {
      eyebrow: "Le problème",
      title: "Cela vous parle ?",
      items: [
        {
          text: "Les clients posent les mêmes questions avant d'acheter",
          detail:
            "Quand les réponses sont lentes ou difficiles à trouver, de bons visiteurs décrochent.",
        },
        {
          text: "Votre site a les réponses, mais les visiteurs les manquent",
          detail:
            "L'information est là. Les clients ont simplement besoin d'un chemin plus rapide vers la bonne réponse.",
        },
        {
          text: "Les chatbots génériques sonnent faux et font perdre confiance",
          detail:
            "Les réponses toutes faites frustrent les utilisateurs au lieu de les aider à passer à l'étape suivante.",
        },
      ],
    },
    process: {
      eyebrow: "Processus",
      title: "Comment ça marche",
      steps: [
        {
          num: "01",
          title: "Nous ingérons votre contenu",
          desc: "Pages du site, FAQ, pages produit ou service. Jusqu'à 500 pages.",
        },
        {
          num: "02",
          title: "Nous construisons et réglons l'agent",
          desc: "Réponses dans votre ton, prochaines étapes claires, escalade quand il n'est pas sûr.",
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
      title: "Conçu pour les équipes qui veulent garder le contrôle",
      body:
        "La valeur n'est pas seulement la réponse. C'est le comportement d'escalade, la trace de revue, la posture d'hébergement et le fait que le coeur de vos conversations clients ne soit pas loué à vie.",
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
    analytics: {
      eyebrow: "Analytique, inclus",
      title: "Voyez ce que vos clients demandent avant d'acheter",
      body:
        "Chaque conversation est enregistrée, étiquetée et visible dans un tableau de bord pour les ventes, le support, le produit et les ops. Vous voyez ce que les gens veulent, ce qui les bloque et où votre site doit mieux répondre.",
      hostedBadge: "Hébergé en UE · données d'exemple",
      kpis: [
        { label: "Conversations · 7j", value: "2 418", delta: "+18 %" },
        { label: "Réponses instantanées", value: "61 %", delta: "+4 pts" },
        { label: "Confiance moy.", value: "0,84", delta: "stable" },
        { label: "Escalades", value: "147", delta: "-12 %" },
      ],
      trafficTitle: "Conversations · 14 derniers jours",
      trafficCaption: "Engagement quotidien, avec les creux du week-end visibles.",
      topicsTitle: "Questions avant conversion",
      topicsCaption: "Intentions principales sur 7 jours.",
      topics: [
        { name: "Tarifs & forfaits", count: 412 },
        { name: "Connexion & SSO", count: 318 },
        { name: "Export de données", count: 241 },
        { name: "Intégrations", count: 196 },
        { name: "Remboursements", count: 134 },
        { name: "Limites API", count: 98 },
      ],
      escalationsTitle: "Derniers handoffs",
      escalationsCaption: "Envoyés à votre équipe avec le contexte de conversation.",
      escalations: [
        {
          question: "Puis-je exporter la facturation en CSV avec les lignes TVA UE ?",
          reason: "Hors docs indexées · routé vers billing@",
        },
        {
          question: "Le SSO fonctionne-t-il avec notre AD on-prem en SAML ?",
          reason: "Confirmation humaine requise · routé vers support@",
        },
        {
          question: "Pourquoi mon espace a été rétrogradé après l'essai ?",
          reason: "Spécifique au compte · routé vers success@",
        },
      ],
      weekdays: ["L", "M", "M", "J", "V", "S", "D", "L", "M", "M", "J", "V", "S", "D"],
    },
    commercials: {
      eyebrow: "Commercial",
      title: "Un devis fixe avant de commencer",
      body:
        "Nous cadrons le projet selon votre contenu, votre handoff et vos contraintes de déploiement, puis validons le budget avant tout travail.",
      buildLabel: "Build",
      buildValue: "Devis projet fixe",
      supportLabel: "Support continu",
      supportValue: "Suivi mensuel optionnel",
      deliveryLabel: "Livraison",
      deliveryValue: "2 semaines",
      afterLabel: "Après livraison",
      afterValue: "Vous possédez tout. Pas de lock-in.",
      cta: "Recevoir une démo sur votre site",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Les questions à clarifier avant de faire confiance à un agent",
      items: [
        {
          q: "En quoi est-ce différent d'Intercom Fin ou Zendesk AI ?",
          a:
            "Ce sont des add-ons liés à leur écosystème. Ici, l'agent client est autonome et construit autour de votre contenu, vos workflows, règles d'escalade et contraintes d'hébergement. Vous pouvez le déployer sur votre site, le connecter à Slack, email ou CRM, et garder le code source.",
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
          q: "Peut-on revoir les réponses avant le lancement ?",
          a:
            "Oui. Le lancement inclut une revue sur des questions réalistes, des cas risqués, le comportement en faible confiance et les textes de handoff avant la mise en ligne.",
        },
        {
          q: "Peut-on approuver les sources utilisées ?",
          a:
            "Oui. Vous choisissez les sources autorisées : centre d'aide, docs produit, FAQ, pages de politique, docs internes ou un périmètre plus restreint pour la première version.",
        },
        {
          q: "Peut-il éviter les questions spécifiques à un compte ?",
          a:
            "Oui. Les questions spécifiques à un compte, sensibles pour la facturation, juridiques, médicales ou opérationnellement risquées peuvent être routées vers un humain.",
        },
        {
          q: "Peut-on supprimer les logs ou contrôler la rétention ?",
          a:
            "Oui. La rétention des logs est configurable par déploiement. Nous pouvons minimiser les logs, masquer les champs sensibles ou donner le contrôle à votre équipe infrastructure.",
        },
        {
          q: "Signez-vous un DPA ?",
          a:
            "Oui. Pour les déploiements en production qui traitent des données clients, nous pouvons signer un accord de traitement des données et documenter les sous-traitants, l'hébergement, la rétention et la suppression.",
        },
        {
          q: "Que se passe-t-il après les deux semaines de support ?",
          a:
            "Vous gardez le code, les prompts, les paramètres de retrieval, les configs de déploiement et la documentation de handover. Vous pouvez l'exploiter vous-même ou garder un suivi mensuel.",
        },
        {
          q: "De quoi avez-vous besoin pour commencer ?",
          a:
            "Une URL de site, docs ou centre d'aide, les questions à mieux traiter, la destination de handoff, les sujets que l'agent ne doit pas traiter et vos contraintes d'hébergement ou de confidentialité.",
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
        "BuildMyChatbot est un service spécialisé qui construit des agents IA prêts pour la production, pour les entreprises qui ont du contenu clair et des questions clients répétées. Chaque build est sur mesure : pas de templates, pas de plateforme white-label, pas de raccourcis. Nous gérons ingestion, tuning, déploiement et remise des clés.",
      bullets: [
        "RAG et tuning du retrieval",
        "Intégrations CRM, Slack et workflows",
        "Livraison et support basés en Europe",
      ],
    },
    finalCta: {
      title: "Vous voulez une démo sur votre propre site ?",
      subtitle: "Gratuit, sans appel obligatoire.",
      divider: "ou",
      emailCta: "Envoyez-nous un email",
    },
    form: {
      emailPlaceholder: "vous@entreprise.com",
      urlPlaceholder: "https://www.votresite.com",
      submit: "Recevoir une démo gratuite",
      submitting: "Envoi...",
      successTitle: "Demande reçue",
      successBody:
        "Nous construirons une démo sur le contenu de votre site et reviendrons vers vous sous 24 heures.",
    },
  },
  nl: {
    locale: "nl",
    meta: {
      title: "BuildMyChatbot | AI-agenten die vragen omzetten in klanten",
      description:
        "Wij bouwen eigen AI-agenten die klantvragen beantwoorden, mensen naar de juiste volgende stap leiden en serieuze aanvragen naar je team sturen.",
    },
    common: {
      homeLabel: "BuildMyChatbot home",
      emailLabel: "E-mail",
      privacyLabel: "Privacy",
      termsLabel: "Voorwaarden",
      languageLabel: "Taal",
    },
    hero: {
      navCta: "Vraag een site-demo",
      badge: "Afgebakend project. EU-hosting. Broncode inbegrepen.",
      titleTop: "Je eigen AI-agent",
      titleAccent: "die je website helpt verkopen.",
      subtitle:
        "Wij bouwen een bron-gebaseerde agent op je websitecontent en docs, koppelen hem aan je handoff-flow en dragen code, prompts en deployment-configs over. Hij beantwoordt vragen, houdt bezoekers in beweging en stuurt serieuze aanvragen met context naar je team.",
      primaryCta: "Vraag een gratis demo op je site",
      secondaryCta: "Boek 15 minuten",
      trustSignals: [
        "Antwoorden uit geïndexeerde bronnen",
        "Betere bezoekersgesprekken",
        "Handoff via Slack, e-mail of CRM",
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
      title: "Vlotte antwoorden, duidelijke volgende stappen",
      body:
        "De agent antwoordt vanuit goedgekeurde content, houdt een bronspoor bij voor review en draagt over aan je team wanneer het gesprek een mens nodig heeft.",
      beforeLabel: "Voor:",
      before:
        "bezoekers twijfelen, zoeken te lang of vertrekken wanneer ze geen snel antwoord krijgen.",
      afterLabel: "Na:",
      after:
        "vragen krijgen antwoord, koopintentie wordt vastgelegd en risicovolle cases worden nette handoffs.",
      header: "Klantgesprek",
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
    adaptation: {
      eyebrow: "Past bij je product",
      title: "Een agent die aansluit op je website en merk",
      body:
        "De widget is geen generieke bubbel die we zomaar op de pagina zetten. We stemmen toon, kleuren, vorm, ingangspunten en handoff af zodat hij native aanvoelt in je klantbeleving en koopflow.",
      sites: [
        {
          label: "B2B SaaS",
          industry: "Documentatie-intensief product",
          headline: "Workspace-instellingen",
          assistant: "Linear support",
          chat: "Kan ik externe medewerkers uitnodigen?",
          theme: "blue",
        },
        {
          label: "E-commerce",
          industry: "Bestellingen, retouren, levering",
          headline: "Orderstatus",
          assistant: "Pakket hulp",
          chat: "Waar is mijn pakket?",
          theme: "emerald",
        },
        {
          label: "Zorg",
          industry: "Voorzichtige routing en privacy",
          headline: "Patientenportaal",
          assistant: "Patientenbalie",
          chat: "Hoe verplaats ik een afspraak?",
          theme: "violet",
        },
      ],
      points: [
        "Werkt met moderne websites, CMS-pagina's en custom frontends",
        "Gestyled naar je typografie, kleuren, radius en tone of voice",
        "Kan als chatwidget, ingebouwde assistent of support-intakeflow verschijnen",
      ],
    },
    problem: {
      eyebrow: "Het probleem",
      title: "Herkenbaar?",
      items: [
        {
          text: "Klanten stellen dezelfde vragen voor ze kopen",
          detail:
            "Wanneer antwoorden traag of moeilijk te vinden zijn, haken goede bezoekers af.",
        },
        {
          text: "Je website heeft de antwoorden, maar bezoekers missen ze",
          detail:
            "De informatie is er. Klanten hebben gewoon een snellere route naar het juiste antwoord nodig.",
        },
        {
          text: "Generieke chatbots voelen robotachtig en kosten vertrouwen",
          detail:
            "Standaardantwoorden frustreren gebruikers in plaats van hen naar de volgende stap te helpen.",
        },
      ],
    },
    process: {
      eyebrow: "Proces",
      title: "Hoe het werkt",
      steps: [
        {
          num: "01",
          title: "We lezen je content in",
          desc: "Websitepagina's, FAQ, product- of servicepagina's. Tot 500 pagina's.",
        },
        {
          num: "02",
          title: "We bouwen en tunen de agent",
          desc: "Antwoorden in jouw toon, duidelijke volgende stappen, escalatie bij twijfel.",
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
      title: "Gebouwd voor teams die controle nodig hebben",
      body:
        "De waarde zit niet alleen in het antwoord. Het gaat om handoff-gedrag, reviewspoor, hostingkeuze en het feit dat je de kern van je klantgesprekken niet voor altijd huurt.",
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
    analytics: {
      eyebrow: "Analytics, inbegrepen",
      title: "Zie wat klanten vragen voor ze kopen",
      body:
        "Elke conversatie wordt gelogd, gelabeld en getoond in een dashboard voor sales, support, product en ops. Je ziet wat mensen willen, wat hen tegenhoudt en waar je site duidelijker moet antwoorden.",
      hostedBadge: "Gehost in EU · voorbeelddata",
      kpis: [
        { label: "Conversaties · 7d", value: "2.418", delta: "+18%" },
        { label: "Direct beantwoord", value: "61%", delta: "+4 pt" },
        { label: "Gem. zekerheid", value: "0,84", delta: "stabiel" },
        { label: "Escalaties", value: "147", delta: "-12%" },
      ],
      trafficTitle: "Conversaties · laatste 14 dagen",
      trafficCaption: "Dagelijkse betrokkenheid, met weekenddips meteen zichtbaar.",
      topicsTitle: "Vragen voor conversie",
      topicsCaption: "Top-intenties van de afgelopen 7 dagen.",
      topics: [
        { name: "Prijzen & abonnementen", count: 412 },
        { name: "Login & SSO", count: 318 },
        { name: "Data-export", count: 241 },
        { name: "Integraties", count: 196 },
        { name: "Terugbetalingen", count: 134 },
        { name: "API-limieten", count: 98 },
      ],
      escalationsTitle: "Recente handoffs",
      escalationsCaption: "Doorgestuurd naar je team met gesprekscontext.",
      escalations: [
        {
          question: "Kan ik de facturatie als CSV exporteren met EU-btw-regels?",
          reason: "Buiten geïndexeerde docs · naar billing@",
        },
        {
          question: "Werkt SSO met onze on-prem AD via SAML?",
          reason: "Menselijke bevestiging nodig · naar support@",
        },
        {
          question: "Waarom is mijn workspace gedowngraded na de trial?",
          reason: "Account-specifiek · naar success@",
        },
      ],
      weekdays: ["M", "D", "W", "D", "V", "Z", "Z", "M", "D", "W", "D", "V", "Z", "Z"],
    },
    commercials: {
      eyebrow: "Commercieel",
      title: "Een vaste offerte voor we starten",
      body:
        "We scopen de build rond je content, handoff-flow en deploymentvereisten, en leggen de prijs vast voor het werk begint.",
      buildLabel: "Build",
      buildValue: "Vaste projectofferte",
      supportLabel: "Doorlopende support",
      supportValue: "Optionele maandelijkse nazorg",
      deliveryLabel: "Levering",
      deliveryValue: "2 weken",
      afterLabel: "Na oplevering",
      afterValue: "Alles is van jou. Geen lock-in.",
      cta: "Vraag een gratis demo op je site",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Vragen die kopers stellen voor ze een agent vertrouwen",
      items: [
        {
          q: "Hoe verschilt dit van Intercom Fin of Zendesk AI?",
          a:
            "Dat zijn platform-add-ons binnen hun ecosysteem. Dit is een standalone klantgerichte agent rond je content, workflows, escalatieregels en hostingnoden. Je kan hem op je site deployen, koppelen aan Slack, e-mail of CRM, en de broncode behouden.",
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
          q: "Kunnen we antwoorden reviewen voor launch?",
          a:
            "Ja. Voor launch reviewen we realistische vragen, risicovolle randgevallen, gedrag bij lage zekerheid en handoff-copy voordat de agent live gaat.",
        },
        {
          q: "Kunnen we goedkeuren welke bronnen hij gebruikt?",
          a:
            "Ja. Jij kiest de toegestane bronnen: helpcenterartikelen, productdocs, FAQ's, beleidspagina's, interne docs of een kleiner bronpakket voor de eerste release.",
        },
        {
          q: "Kan hij account-specifieke vragen vermijden?",
          a:
            "Ja. Account-specifieke, facturatiegevoelige, juridische, medische of operationeel risicovolle vragen kunnen naar een mens worden gerouteerd.",
        },
        {
          q: "Kunnen we logs verwijderen of retentie controleren?",
          a:
            "Ja. Logretentie is configureerbaar per deployment. We kunnen logs minimaliseren, gevoelige velden redacteren of retentiecontrole aan je infrastructuurteam overdragen.",
        },
        {
          q: "Tekenen jullie een DPA?",
          a:
            "Ja. Voor productiedeployments die klantdata verwerken, kunnen we een data processing agreement tekenen en subprocessors, hosting, retentie en verwijdering documenteren.",
        },
        {
          q: "Wat gebeurt er na de supportperiode van twee weken?",
          a:
            "Je behoudt code, prompts, retrieval-instellingen, deployment-configs en handover-docs. Je kan zelf draaien of ons op een maandelijkse nazorgformule houden.",
        },
        {
          q: "Wat hebben jullie nodig om te starten?",
          a:
            "Een website-, docs- of helpcenter-URL, de vragen die je beter wil afhandelen, de handoff-bestemming, onderwerpen die de agent niet mag beantwoorden en je hosting- of privacyvereisten.",
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
        "BuildMyChatbot is een gespecialiseerde service die productieklare AI-agenten bouwt voor bedrijven met duidelijke content en terugkerende klantvragen. Elke build is maatwerk: geen templates, geen white-label platform, geen shortcuts. Wij doen ingestion, tuning, deployment en dragen de sleutels over.",
      bullets: [
        "RAG en retrieval-tuning",
        "CRM-, Slack- en workflowintegraties",
        "EU-gebaseerde levering en support",
      ],
    },
    finalCta: {
      title: "Wil je een demo op je eigen site?",
      subtitle: "Gratis, geen call vereist.",
      divider: "of",
      emailCta: "Stuur ons een e-mail",
    },
    form: {
      emailPlaceholder: "jij@bedrijf.com",
      urlPlaceholder: "https://www.jouwsite.com",
      submit: "Vraag een gratis demo",
      submitting: "Versturen...",
      successTitle: "Aanvraag ontvangen",
      successBody:
        "We bouwen een demo op je sitecontent en komen binnen 24 uur bij je terug.",
    },
  },
};
