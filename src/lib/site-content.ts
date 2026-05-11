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

type ThemedSite = {
  label: string;
  industry: string;
  headline: string;
  assistant: string;
  chat: string;
  theme: "blue" | "emerald" | "violet";
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
    navItems: Array<{ label: string; href: string }>;
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
    sites: ThemedSite[];
    points: string[];
  };
  problem: {
    eyebrow: string;
    title: string;
    items: Array<{ text: string; detail: string }>;
  };
  deliverables: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  offer: {
    eyebrow: string;
    title: string;
    body: string;
    included: string[];
    cta: string;
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; body: string; note?: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{ num: string; title: string; desc: string }>;
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
    cards: Array<{ title: string; price: string; body: string }>;
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

const enNav = [
  { label: "What we install", href: "#install" },
  { label: "Use cases", href: "#use-cases" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const frNav = [
  { label: "Ce qu'on installe", href: "#install" },
  { label: "Cas d'usage", href: "#use-cases" },
  { label: "Process", href: "#process" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const nlNav = [
  { label: "Wat we installeren", href: "#install" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Werkwijze", href: "#process" },
  { label: "Prijzen", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    locale: "en",
    meta: {
      title: "BuildMyChatbot | AI enquiry systems for service businesses",
      description:
        "Done-for-you AI chat, smart intake, lead handoff, and automated follow-up systems that turn website visitors into qualified enquiries.",
    },
    common: {
      homeLabel: "BuildMyChatbot home",
      emailLabel: "Email",
      privacyLabel: "Privacy",
      termsLabel: "Terms",
      languageLabel: "Language",
    },
    hero: {
      navCta: "Get a demo",
      navItems: enNav,
      badge: "Done-for-you setup. Live in 14 days. No SaaS lock-in.",
      titleTop: "Turn website visitors into",
      titleAccent: "qualified enquiries with AI.",
      subtitle:
        "We install AI chat, smart intake, and automated follow-up systems for service businesses that want more leads, better enquiries, and faster responses.",
      primaryCta: "Get a free AI demo on your site",
      secondaryCta: "Book a 15-min audit",
      trustSignals: [
        "AI website assistant",
        "Lead qualification and handoff",
        "Automated follow-up",
      ],
    },
    heroChat: {
      label: "ai-enquiry-system",
      status: "live",
      next: "Next message...",
      replay: "Replay",
      messages: [
        {
          role: "user",
          text: "How much does this service usually cost?",
        },
        {
          role: "bot",
          text: "Most projects start from a scoped build. I can ask a few quick questions about your website, enquiry volume, and integrations, then send the team a clean summary.",
          meta: "Intent: pricing · Qualification started",
        },
        {
          role: "user",
          text: "Can someone contact me tomorrow?",
        },
        {
          role: "bot",
          text: "Yes. Leave your preferred time and what you want to discuss, and I will hand it to the team with your budget, timeline, and service need.",
          meta: "Action: lead handoff · Follow-up ready",
        },
      ],
    },
    transcript: {
      eyebrow: "See it in action",
      title: "From vague visitor question to useful enquiry",
      body:
        "The assistant answers from approved website content, asks practical qualifying questions, and sends your team the context they need to reply properly.",
      beforeLabel: "Before:",
      before: "visitors leave, send vague forms, or ask for a call with no useful context.",
      afterLabel: "After:",
      after:
        "buyer questions are answered, intent is captured, and serious enquiries arrive with budget, timeline, and next step.",
      header: "Website enquiry",
      pill: "qualified",
      messages: [
        {
          role: "Customer",
          text: "Do you work with companies like mine?",
        },
        {
          role: "Agent",
          text: "We usually help service businesses with valuable enquiries: agencies, consultancies, training providers, clinics, and specialist local services.",
          source: "Source: approved website content",
          confidence: "Confidence: High",
        },
        {
          role: "Customer",
          text: "Here is my budget and timeline. Can I book a consultation?",
        },
        {
          role: "Agent",
          text: "Yes. I can send you to the booking link and pass your budget, timeline, and service need to the team before the call.",
          source: "Action: handoff to team",
          confidence: "Confidence: High",
        },
      ],
    },
    adaptation: {
      eyebrow: "Designed around your website",
      title: "The assistant matches your brand and enquiry flow",
      body:
        "The widget is only one part of the system. We adapt the tone, entry points, questions, handoff rules, and follow-up so it feels native to your business.",
      sites: [
        {
          label: "Consultancy",
          industry: "Project scope, budget, timeline",
          headline: "Strategy enquiry",
          assistant: "Project concierge",
          chat: "Here is my budget and timeline.",
          theme: "blue",
        },
        {
          label: "Education",
          industry: "Courses, pricing, eligibility",
          headline: "Course advice",
          assistant: "Admissions guide",
          chat: "Which course fits my situation?",
          theme: "emerald",
        },
        {
          label: "Clinic",
          industry: "Admin questions and booking",
          headline: "Private practice",
          assistant: "Booking desk",
          chat: "Can I book a consultation?",
          theme: "violet",
        },
      ],
      points: [
        "Styled to your typography, colors, and tone of voice",
        "Works as a chat widget, embedded intake, or guided enquiry flow",
        "Routes serious, unclear, or sensitive questions to humans",
      ],
    },
    problem: {
      eyebrow: "The problem",
      title: "Your website is leaking good enquiries.",
      items: [
        {
          text: "Visitors leave with unanswered questions",
          detail:
            "Most people will not dig through your site. If they cannot find the answer fast, they leave.",
        },
        {
          text: "Contact forms are too vague",
          detail:
            "\"Hi, I need help\" is not a qualified lead. Your team needs context before replying.",
        },
        {
          text: "Follow-up is inconsistent",
          detail:
            "Interested prospects go cold when nobody replies quickly or follows up properly.",
        },
        {
          text: "You do not know what blocks buyers",
          detail:
            "The same pricing, process, timing, and trust questions appear again and again. They should be tracked.",
        },
      ],
    },
    deliverables: {
      eyebrow: "What we install",
      title: "What we install",
      items: [
        {
          title: "AI website assistant",
          body:
            "A branded chat assistant that answers visitor questions from your approved website content, FAQs, and service pages.",
        },
        {
          title: "Smart enquiry flow",
          body:
            "The assistant asks useful qualifying questions before sending the lead to your team.",
        },
        {
          title: "Lead handoff",
          body:
            "Every serious enquiry is sent to email, Slack, CRM, Airtable, Notion, or webhook with a clean summary.",
        },
        {
          title: "Automated follow-up",
          body:
            "Prospects can receive follow-up emails after asking questions, requesting info, or failing to book.",
        },
        {
          title: "Conversation insights",
          body:
            "You see what visitors ask, where they hesitate, and which questions block conversion.",
        },
      ],
    },
    offer: {
      eyebrow: "The offer",
      title: "The 14-Day AI Enquiry System",
      body:
        "We review your website, map your enquiry flow, install an AI assistant, connect handoff and follow-up, then tune it after launch.",
      included: [
        "AI chat assistant",
        "Website content ingestion",
        "Custom conversation flow",
        "Lead qualification",
        "Email / Slack / CRM handoff",
        "Follow-up email sequence",
        "Conversation logs",
        "Monthly insights",
        "14-day launch",
        "30-day tuning",
      ],
      cta: "Get a free demo on your site",
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Built for service businesses with valuable enquiries",
      items: [
        {
          title: "Agencies and consultants",
          body:
            "Qualify project enquiries before the first call. Capture budget, timeline, service need, and decision stage.",
        },
        {
          title: "Training and education businesses",
          body:
            "Answer questions about courses, schedules, pricing, eligibility, and enrolment.",
        },
        {
          title: "Clinics and private practices",
          body:
            "Handle admin questions, booking requests, pricing, location, opening hours, and safe escalation.",
          note:
            "The assistant does not provide medical advice. It handles admin questions and routes sensitive cases to humans.",
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "How it works",
      steps: [
        {
          num: "01",
          title: "Audit",
          desc:
            "We review your website, forms, FAQs, current follow-up, and common visitor questions.",
        },
        {
          num: "02",
          title: "Map",
          desc:
            "We define what the assistant should answer, ask, capture, escalate, and send to your team.",
        },
        {
          num: "03",
          title: "Build",
          desc:
            "We install the AI assistant, connect lead handoff, and create the follow-up flow.",
        },
        {
          num: "04",
          title: "Launch",
          desc:
            "We test real questions, adjust the flow, and deploy it on your website.",
        },
        {
          num: "05",
          title: "Tune",
          desc:
            "We review conversations after launch and improve answers, prompts, and conversion points.",
        },
      ],
    },
    confidence: {
      eyebrow: "Technical trust",
      title: "Controlled enough for real businesses",
      body:
        "After the business flow is clear, we make the plumbing solid: hosting, retrieval, privacy, handover, and failure behavior are scoped before launch.",
      points: [
        {
          title: "EU hosting and DPA",
          body:
            "Projects can run on EU-hosted infrastructure, with DPA, retention, and subprocessor details documented when needed.",
        },
        {
          title: "Source-grounded answers",
          body:
            "The assistant answers from approved content, uses retrieval tuning, and escalates instead of guessing when confidence is low.",
        },
        {
          title: "Source code handover",
          body:
            "You receive source code, prompts, retrieval settings, model configuration, and deployment configs.",
        },
        {
          title: "Model flexibility",
          body:
            "We can adapt model/provider choice to privacy, latency, cost, and hosting requirements.",
        },
      ],
    },
    analytics: {
      eyebrow: "Conversation insights",
      title: "See what blocks visitors before they enquire",
      body:
        "Every conversation can be logged and tagged so you can see pricing doubts, booking friction, service-fit questions, and follow-up opportunities.",
      hostedBadge: "EU-hosted · sample dashboard data",
      kpis: [
        { label: "Conversations · 7d", value: "2,418", delta: "+18%" },
        { label: "Qualified enquiries", value: "184", delta: "+27%" },
        { label: "Follow-ups sent", value: "96", delta: "+14%" },
        { label: "Human handoffs", value: "147", delta: "-12%" },
      ],
      trafficTitle: "Visitor conversations · last 14 days",
      trafficCaption: "Daily enquiry activity, with weekend dips visible at a glance.",
      topicsTitle: "Questions before enquiring",
      topicsCaption: "Top intents over the last 7 days.",
      topics: [
        { name: "Pricing", count: 412 },
        { name: "Booking", count: 318 },
        { name: "Service fit", count: 241 },
        { name: "Timeline", count: 196 },
        { name: "Location", count: 134 },
        { name: "Follow-up", count: 98 },
      ],
      escalationsTitle: "Recent handoffs",
      escalationsCaption: "Sent to your team with clean context.",
      escalations: [
        {
          question: "Can someone contact me tomorrow?",
          reason: "High intent · routed to sales@",
        },
        {
          question: "Do you work with companies like mine?",
          reason: "Needs human confirmation · routed to founder@",
        },
        {
          question: "Here is my budget and timeline.",
          reason: "Qualified enquiry · routed to CRM",
        },
      ],
      weekdays: ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S"],
    },
    commercials: {
      eyebrow: "Pricing",
      title: "Simple project pricing",
      body:
        "Every project is scoped around your website, enquiry flow, integrations, and follow-up needs.",
      cards: [
        {
          title: "Pilot Build",
          price: "From €1,500",
          body: "For early clients and simple websites.",
        },
        {
          title: "AI Enquiry System",
          price: "From €3,500",
          body:
            "For service businesses that want chat, qualification, handoff, and follow-up.",
        },
        {
          title: "Growth System",
          price: "From €7,500",
          body:
            "For businesses that need multiple flows, CRM integration, analytics, and ongoing optimisation.",
        },
        {
          title: "Monthly Care",
          price: "From €500/month",
          body:
            "For tuning, content updates, analytics review, and new automation improvements.",
        },
      ],
      cta: "Get a free AI demo on your site",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions before installing an AI enquiry system",
      items: [
        {
          q: "Is this a chatbot platform?",
          a:
            "No. This is a done-for-you AI implementation service. We design, build, install, and tune the full enquiry workflow.",
        },
        {
          q: "How is this different from Intercom, Tidio, or Chatbase?",
          a:
            "Those are tools. We install the system around your business: website content, conversation flow, lead qualification, handoff, follow-up, and optimisation.",
        },
        {
          q: "Can it book calls?",
          a:
            "Yes. It can send visitors to your booking link or capture their details and send your team a summary.",
        },
        {
          q: "Can it follow up automatically?",
          a:
            "Yes. We can add email follow-up after an enquiry, quote request, or abandoned booking step.",
        },
        {
          q: "What happens when it does not know the answer?",
          a:
            "It escalates instead of guessing. The assistant can route unclear, risky, or sensitive questions to your team.",
        },
        {
          q: "Do I need documentation?",
          a:
            "No. We can start with your website, FAQs, service pages, and existing sales answers.",
        },
        {
          q: "Where is my data hosted?",
          a:
            "Projects can run on EU-hosted infrastructure, and we can document DPA, subprocessors, retention, and deletion terms.",
        },
        {
          q: "Who owns the system?",
          a:
            "You do. We hand over source code, prompts, retrieval settings, deployment configs, and documentation.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Done-for-you AI consultancy, not another SaaS tool",
      body:
        "BuildMyChatbot is a done-for-you AI consultancy for service businesses. We install AI website assistants, enquiry flows, and follow-up systems that help teams respond faster and capture better leads without adding another SaaS tool to manage.",
      bullets: [
        "AI chat and smart intake",
        "Lead handoff and CRM workflows",
        "EU-based implementation and tuning",
      ],
    },
    finalCta: {
      title: "Want a free AI demo on your site?",
      subtitle: "Send your website and we will show what the enquiry flow could look like.",
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
        "We will review your site and reply with the next step within 24 hours.",
    },
  },
  fr: {
    locale: "fr",
    meta: {
      title: "BuildMyChatbot | Systèmes IA de qualification de demandes",
      description:
        "Service clé en main pour mettre en place un assistant IA, un parcours de qualification et des relances automatiques sur votre site.",
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
      navItems: frNav,
      badge: "Installation clé en main. En ligne en 14 jours. Sans enfermement SaaS.",
      titleTop: "Transformez vos visiteurs en",
      titleAccent: "demandes qualifiées avec l'IA.",
      subtitle:
        "Nous mettons en place un assistant IA, un parcours de qualification et des relances automatiques pour les entreprises de services qui veulent plus de prospects, de meilleures demandes et des réponses plus rapides.",
      primaryCta: "Recevoir une démo IA sur votre site",
      secondaryCta: "Réserver un audit de 15 min",
      trustSignals: [
        "Assistant IA pour site web",
        "Qualification et transmission des demandes",
        "Relances automatiques",
      ],
    },
    heroChat: {
      label: "systeme-demandes-ia",
      status: "live",
      next: "Message suivant...",
      replay: "Rejouer",
      messages: [
        {
          role: "user",
          text: "Combien coûte généralement ce service ?",
        },
        {
          role: "bot",
          text: "La plupart des projets commencent par un build cadré. Je peux poser quelques questions sur votre site, vos demandes et vos intégrations, puis envoyer un résumé clair à l'équipe.",
          meta: "Intention : budget · Qualification démarrée",
        },
        {
          role: "user",
          text: "Quelqu'un peut-il me contacter demain ?",
        },
        {
          role: "bot",
          text: "Oui. Indiquez l'heure souhaitée et le sujet, et je transmets à l'équipe avec votre besoin, budget et délai.",
          meta: "Action : demande transmise · relance prête",
        },
      ],
    },
    transcript: {
      eyebrow: "Exemple concret",
      title: "D'une question vague à une demande utile",
      body:
        "L'assistant répond depuis vos contenus approuvés, pose les bonnes questions de qualification et transmet à votre équipe le contexte nécessaire.",
      beforeLabel: "Avant :",
      before: "les visiteurs partent, remplissent des formulaires vagues ou demandent un appel sans contexte.",
      afterLabel: "Après :",
      after:
        "les questions d'achat reçoivent une réponse, l'intention est capturée et les demandes sérieuses arrivent avec budget, délai et prochaine étape.",
      header: "Demande site web",
      pill: "qualifiée",
      messages: [
        {
          role: "Customer",
          text: "Travaillez-vous avec des entreprises comme la mienne ?",
        },
        {
          role: "Agent",
          text: "Nous aidons surtout des entreprises de services avec des demandes à forte valeur : agences, cabinets de conseil, organismes de formation, cliniques et services spécialisés.",
      source: "Source : contenu approuvé du site",
          confidence: "Confiance : élevée",
        },
        {
          role: "Customer",
          text: "Voici mon budget et mon délai. Puis-je réserver une consultation ?",
        },
        {
          role: "Agent",
          text: "Oui. Je peux vous envoyer vers le lien de réservation et transmettre votre budget, délai et besoin à l'équipe avant l'appel.",
          source: "Action : transmis à l'équipe",
          confidence: "Confiance : élevée",
        },
      ],
    },
    adaptation: {
      eyebrow: "Adapté à votre site",
      title: "L'assistant respecte votre marque et votre parcours de demande",
      body:
        "Le widget n'est qu'une partie du système. Nous adaptons le ton, les points d'entrée, les questions, les règles de transmission et les relances à votre activité.",
      sites: [
        {
          label: "Conseil",
          industry: "Scope, budget, délai",
          headline: "Demande projet",
          assistant: "Concierge projet",
          chat: "Voici mon budget et mon délai.",
          theme: "blue",
        },
        {
          label: "Formation",
          industry: "Cours, tarifs, éligibilité",
          headline: "Conseil formation",
          assistant: "Guide admissions",
          chat: "Quelle formation me convient ?",
          theme: "emerald",
        },
        {
          label: "Clinique",
          industry: "Admin et réservation",
          headline: "Cabinet privé",
          assistant: "Accueil patients",
          chat: "Puis-je réserver une consultation ?",
          theme: "violet",
        },
      ],
      points: [
        "Aligné sur vos couleurs, typographies et votre ton",
        "Disponible comme widget de chat, formulaire intelligent ou parcours guidé",
        "Route les demandes sérieuses, floues ou sensibles vers un humain",
      ],
    },
    problem: {
      eyebrow: "Le problème",
      title: "Votre site laisse filer de bonnes demandes.",
      items: [
        {
          text: "Les visiteurs partent avec des questions sans réponse",
          detail:
            "La plupart des gens ne fouillent pas votre site. S'ils ne trouvent pas vite, ils partent.",
        },
        {
          text: "Les formulaires de contact sont trop vagues",
          detail:
            "\"Bonjour, j'ai besoin d'aide\" n'est pas une demande qualifiée. Votre équipe a besoin de contexte avant de répondre.",
        },
        {
          text: "Les relances sont irrégulières",
          detail:
            "Les prospects intéressés refroidissent quand personne ne répond vite ou ne relance proprement.",
        },
        {
          text: "Vous ne voyez pas ce qui bloque les acheteurs",
          detail:
            "Les mêmes questions sur prix, process, délais et confiance reviennent sans cesse. Elles doivent être suivies.",
        },
      ],
    },
    deliverables: {
      eyebrow: "Ce qu'on installe",
      title: "Ce qu'on installe",
      items: [
        {
          title: "Assistant IA pour site web",
          body:
            "Un assistant conversationnel à votre image qui répond depuis vos contenus approuvés, FAQ et pages de services.",
        },
        {
          title: "Parcours de demande intelligent",
          body:
            "L'assistant pose les bonnes questions avant de transmettre la demande à votre équipe.",
        },
        {
          title: "Transmission des demandes",
          body:
            "Chaque demande sérieuse arrive par email, Slack, CRM, Airtable, Notion ou webhook avec un résumé clair.",
        },
        {
          title: "Relance automatique",
          body:
            "Les prospects peuvent recevoir des emails de suivi après une question, une demande d'info ou une réservation abandonnée.",
        },
        {
          title: "Insights conversations",
          body:
            "Vous voyez ce que les visiteurs demandent, où ils hésitent et quelles questions bloquent la conversion.",
        },
      ],
    },
    offer: {
      eyebrow: "L'offre",
      title: "Le système IA de demandes en 14 jours",
      body:
        "Nous auditons votre site, définissons le parcours de demande, mettons en place l'assistant IA, connectons la transmission et les relances, puis l'améliorons après lancement.",
      included: [
        "Assistant IA conversationnel",
        "Ingestion du contenu du site",
        "Flux de conversation sur mesure",
        "Qualification des demandes",
        "Transmission email / Slack / CRM",
        "Séquence email de relance",
        "Logs de conversations",
        "Insights mensuels",
        "Lancement en 14 jours",
        "Optimisation pendant 30 jours",
      ],
      cta: "Recevoir une démo sur votre site",
    },
    useCases: {
      eyebrow: "Cas d'usage",
      title: "Pour les entreprises de services avec des demandes à forte valeur",
      items: [
        {
          title: "Agences et consultants",
          body:
            "Qualifiez les demandes projet avant le premier appel : budget, délai, besoin et stade de décision.",
        },
        {
          title: "Formation et éducation",
          body:
            "Répondez aux questions sur cours, horaires, prix, éligibilité et inscription.",
        },
        {
          title: "Cliniques et cabinets privés",
          body:
            "Traitez les questions administratives, demandes de réservation, prix, localisation, horaires et transmission sûre à votre équipe.",
          note:
            "L'assistant ne donne pas d'avis médical. Il gère l'administratif et route les cas sensibles vers des humains.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "Comment ça marche",
      steps: [
        {
          num: "01",
          title: "Audit",
          desc:
            "Nous revoyons votre site, vos formulaires, vos FAQ, vos relances actuelles et les questions fréquentes des visiteurs.",
        },
        {
          num: "02",
          title: "Cadrage",
          desc:
            "Nous définissons ce que l'assistant doit répondre, demander, capturer, transmettre et envoyer.",
        },
        {
          num: "03",
          title: "Construction",
          desc:
            "Nous mettons en place l'assistant IA, connectons la transmission des demandes et créons le flux de relance.",
        },
        {
          num: "04",
          title: "Lancement",
          desc:
            "Nous testons de vraies questions, ajustons le parcours et déployons sur votre site.",
        },
        {
          num: "05",
          title: "Optimisation",
          desc:
            "Nous relisons les conversations après lancement et améliorons réponses, prompts et points de conversion.",
        },
      ],
    },
    confidence: {
      eyebrow: "Confiance technique",
      title: "Assez contrôlé pour de vraies entreprises",
      body:
        "Une fois le parcours commercial clair, nous rendons la partie technique solide : hébergement, recherche dans vos contenus, confidentialité, remise du projet et gestion des cas incertains.",
      points: [
        {
          title: "Hébergement UE et DPA",
          body:
            "Les projets peuvent tourner sur une infrastructure hébergée dans l'UE, avec DPA, rétention et sous-traitants documentés si nécessaire.",
        },
        {
          title: "Réponses sourcées",
          body:
            "L'assistant répond depuis le contenu approuvé, affine la recherche dans vos sources et transmet à votre équipe quand la confiance est faible.",
        },
        {
          title: "Remise du code source",
          body:
            "Vous recevez le code, les prompts, les réglages de recherche, la configuration du modèle et les configurations de déploiement.",
        },
        {
          title: "Flexibilité modèle",
          body:
            "Nous adaptons le modèle/fournisseur selon confidentialité, latence, coût et hébergement.",
        },
      ],
    },
    analytics: {
      eyebrow: "Insights conversations",
      title: "Voyez ce qui bloque les visiteurs avant la demande",
      body:
        "Chaque conversation peut être loggée et taguée pour révéler les doutes prix, frictions de réservation, questions de fit et opportunités de relance.",
      hostedBadge: "Hébergé UE · données exemple",
      kpis: [
        { label: "Conversations · 7j", value: "2 418", delta: "+18%" },
        { label: "Demandes qualifiées", value: "184", delta: "+27%" },
        { label: "Relances envoyées", value: "96", delta: "+14%" },
        { label: "Transmissions humaines", value: "147", delta: "-12%" },
      ],
      trafficTitle: "Conversations visiteurs · 14 derniers jours",
      trafficCaption: "Activité quotidienne avec creux du week-end visibles.",
      topicsTitle: "Questions avant demande",
      topicsCaption: "Intentions principales sur 7 jours.",
      topics: [
        { name: "Prix", count: 412 },
        { name: "Réservation", count: 318 },
        { name: "Fit service", count: 241 },
        { name: "Délai", count: 196 },
        { name: "Localisation", count: 134 },
        { name: "Relance", count: 98 },
      ],
      escalationsTitle: "Demandes transmises récemment",
      escalationsCaption: "Envoyées à votre équipe avec le contexte utile.",
      escalations: [
        {
          question: "Quelqu'un peut-il me contacter demain ?",
          reason: "Intention forte · routé vers sales@",
        },
        {
          question: "Travaillez-vous avec des entreprises comme la mienne ?",
          reason: "Confirmation humaine requise · routé vers founder@",
        },
        {
          question: "Voici mon budget et mon délai.",
          reason: "Demande qualifiée · routé vers CRM",
        },
      ],
      weekdays: ["L", "M", "M", "J", "V", "S", "D", "L", "M", "M", "J", "V", "S", "D"],
    },
    commercials: {
      eyebrow: "Tarifs",
      title: "Tarifs projet simples",
      body:
        "Chaque projet est cadré selon votre site, parcours de demande, intégrations et besoins de relance.",
      cards: [
        {
          title: "Projet pilote",
          price: "À partir de 1 500 €",
          body: "Pour premiers clients et sites simples.",
        },
        {
          title: "Système de demandes IA",
          price: "À partir de 3 500 €",
          body:
            "Pour les entreprises de services qui veulent un assistant, de la qualification, une transmission claire et des relances.",
        },
        {
          title: "Système croissance",
          price: "À partir de 7 500 €",
          body:
            "Pour plusieurs parcours, intégration CRM, tableaux de bord et optimisation continue.",
        },
        {
          title: "Suivi mensuel",
          price: "À partir de 500 €/mois",
          body:
            "Pour tuning, mises à jour contenu, revue analytics et nouvelles automatisations.",
        },
      ],
      cta: "Recevoir une démo IA sur votre site",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions avant d'installer un système IA de demandes",
      items: [
        {
          q: "Est-ce une plateforme chatbot ?",
          a:
            "Non. C'est un service d'implémentation IA clé en main. Nous concevons, construisons, installons et optimisons tout le parcours de demande.",
        },
        {
          q: "En quoi est-ce différent d'Intercom, Tidio ou Chatbase ?",
          a:
            "Ce sont des outils. Nous mettons en place le système autour de votre activité : contenu du site, parcours conversationnel, qualification, transmission, relance et optimisation.",
        },
        {
          q: "Peut-il réserver des appels ?",
          a:
            "Oui. Il peut envoyer vers votre lien de réservation ou capturer les détails et envoyer un résumé à votre équipe.",
        },
        {
          q: "Peut-il relancer automatiquement ?",
          a:
            "Oui. Nous pouvons ajouter des emails de relance après une demande, une demande de devis ou une étape de réservation abandonnée.",
        },
        {
          q: "Que se passe-t-il s'il ne connaît pas la réponse ?",
          a:
            "Il transmet à votre équipe au lieu de deviner. L'assistant peut router les questions floues, risquées ou sensibles vers un humain.",
        },
        {
          q: "Ai-je besoin de documentation ?",
          a:
            "Non. Nous pouvons commencer avec votre site, vos FAQs, pages services et réponses commerciales existantes.",
        },
        {
          q: "Où sont hébergées mes données ?",
          a:
            "Les projets peuvent tourner sur une infrastructure hébergée dans l'UE, avec DPA, sous-traitants, rétention et suppression documentés.",
        },
        {
          q: "Qui possède le système ?",
          a:
            "Vous. Nous remettons le code source, les prompts, les réglages de recherche, les configurations de déploiement et la documentation.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Consultance IA clé en main, pas un SaaS de plus",
      body:
        "BuildMyChatbot est une consultance IA clé en main pour les entreprises de services. Nous mettons en place des assistants IA pour site web, des parcours de demande et des systèmes de relance qui aident les équipes à répondre plus vite et à capter de meilleures demandes sans ajouter un autre outil SaaS à gérer.",
      bullets: [
        "Assistant IA et qualification des demandes",
        "Transmission des demandes et automatisations CRM",
        "Implémentation et optimisation basées en Europe",
      ],
    },
    finalCta: {
      title: "Vous voulez une démo IA sur votre site ?",
      subtitle: "Envoyez votre site et nous montrerons à quoi pourrait ressembler le parcours de demande.",
      divider: "ou",
      emailCta: "Envoyez-nous un email",
    },
    form: {
      emailPlaceholder: "vous@entreprise.com",
      urlPlaceholder: "https://www.votresite.com",
      submit: "Recevoir une démo",
      submitting: "Envoi...",
      successTitle: "Demande reçue",
      successBody:
        "Nous analyserons votre site et reviendrons vers vous sous 24 heures.",
    },
  },
  nl: {
    locale: "nl",
    meta: {
      title: "BuildMyChatbot | AI-aanvraagsystemen voor dienstverleners",
      description:
        "Done-for-you AI-chat, slimme intake, lead-handoff en automatische follow-up om websitebezoekers om te zetten in gekwalificeerde aanvragen.",
    },
    common: {
      homeLabel: "BuildMyChatbot home",
      emailLabel: "Email",
      privacyLabel: "Privacy",
      termsLabel: "Voorwaarden",
      languageLabel: "Taal",
    },
    hero: {
      navCta: "Vraag demo",
      navItems: nlNav,
      badge: "Done-for-you setup. Live in 14 dagen. Geen SaaS lock-in.",
      titleTop: "Zet websitebezoekers om in",
      titleAccent: "gekwalificeerde aanvragen met AI.",
      subtitle:
        "Wij installeren AI-chat, slimme intake en automatische follow-up voor dienstverleners die meer leads, betere aanvragen en snellere reacties willen.",
      primaryCta: "Vraag een gratis AI-demo op je site",
      secondaryCta: "Boek een audit van 15 min",
      trustSignals: [
        "AI website-assistent",
        "Leadkwalificatie en handoff",
        "Automatische follow-up",
      ],
    },
    heroChat: {
      label: "ai-aanvraagsysteem",
      status: "live",
      next: "Volgend bericht...",
      replay: "Opnieuw",
      messages: [
        {
          role: "user",
          text: "Wat kost deze service meestal?",
        },
        {
          role: "bot",
          text: "De meeste projecten starten met een afgebakende build. Ik kan een paar vragen stellen over je website, aanvraagvolume en integraties, en daarna een duidelijke samenvatting doorsturen.",
          meta: "Intentie: prijs · Kwalificatie gestart",
        },
        {
          role: "user",
          text: "Kan iemand mij morgen contacteren?",
        },
        {
          role: "bot",
          text: "Ja. Geef je voorkeurstijd en onderwerp door, dan stuur ik het naar het team met je behoefte, budget en timing.",
          meta: "Actie: lead-handoff · Follow-up klaar",
        },
      ],
    },
    transcript: {
      eyebrow: "In actie",
      title: "Van vage vraag naar bruikbare aanvraag",
      body:
        "De assistent antwoordt vanuit goedgekeurde websitecontent, stelt praktische kwalificatievragen en stuurt je team de context die nodig is om goed te reageren.",
      beforeLabel: "Voor:",
      before: "bezoekers vertrekken, sturen vage formulieren of vragen een gesprek zonder nuttige context.",
      afterLabel: "Na:",
      after:
        "koopvragen worden beantwoord, intentie wordt vastgelegd en serieuze aanvragen komen binnen met budget, timing en volgende stap.",
      header: "Website-aanvraag",
      pill: "gekwalificeerd",
      messages: [
        {
          role: "Customer",
          text: "Werken jullie met bedrijven zoals het mijne?",
        },
        {
          role: "Agent",
          text: "We helpen vooral dienstverleners met waardevolle aanvragen: bureaus, consultants, opleiders, klinieken en gespecialiseerde lokale diensten.",
          source: "Bron: goedgekeurde websitecontent",
          confidence: "Zekerheid: hoog",
        },
        {
          role: "Customer",
          text: "Dit is mijn budget en timing. Kan ik een consultatie boeken?",
        },
        {
          role: "Agent",
          text: "Ja. Ik kan je naar de boekingslink sturen en je budget, timing en behoefte vooraf aan het team bezorgen.",
          source: "Actie: handoff naar team",
          confidence: "Zekerheid: hoog",
        },
      ],
    },
    adaptation: {
      eyebrow: "Ontworpen rond je website",
      title: "De assistent past bij je merk en aanvraagflow",
      body:
        "De widget is maar een deel van het systeem. We stemmen toon, instappunten, vragen, handoff-regels en follow-up af op je bedrijf.",
      sites: [
        {
          label: "Consultancy",
          industry: "Scope, budget, timing",
          headline: "Projectaanvraag",
          assistant: "Project concierge",
          chat: "Dit is mijn budget en timing.",
          theme: "blue",
        },
        {
          label: "Opleiding",
          industry: "Cursussen, prijzen, toelating",
          headline: "Studieadvies",
          assistant: "Admissions guide",
          chat: "Welke opleiding past bij mij?",
          theme: "emerald",
        },
        {
          label: "Kliniek",
          industry: "Admin en boekingen",
          headline: "Private praktijk",
          assistant: "Onthaaldesk",
          chat: "Kan ik een consultatie boeken?",
          theme: "violet",
        },
      ],
      points: [
        "Afgestemd op je kleuren, typografie en tone of voice",
        "Als chatwidget, ingebouwde intake of begeleide aanvraagflow",
        "Routeert serieuze, onduidelijke of gevoelige vragen naar mensen",
      ],
    },
    problem: {
      eyebrow: "Het probleem",
      title: "Je website lekt goede aanvragen.",
      items: [
        {
          text: "Bezoekers vertrekken met onbeantwoorde vragen",
          detail:
            "De meeste mensen zoeken niet diep door je site. Als ze het antwoord niet snel vinden, zijn ze weg.",
        },
        {
          text: "Contactformulieren zijn te vaag",
          detail:
            "\"Hallo, ik heb hulp nodig\" is geen gekwalificeerde lead. Je team heeft context nodig voor het antwoord.",
        },
        {
          text: "Follow-up is inconsistent",
          detail:
            "Geïnteresseerde prospects koelen af wanneer niemand snel reageert of degelijk opvolgt.",
        },
        {
          text: "Je weet niet wat kopers tegenhoudt",
          detail:
            "Dezelfde vragen over prijs, proces, timing en vertrouwen komen telkens terug. Die moet je meten.",
        },
      ],
    },
    deliverables: {
      eyebrow: "Wat we installeren",
      title: "Wat we installeren",
      items: [
        {
          title: "AI website-assistent",
          body:
            "Een branded chatassistent die vragen beantwoordt vanuit goedgekeurde websitecontent, FAQs en servicepagina's.",
        },
        {
          title: "Slimme aanvraagflow",
          body:
            "De assistent stelt nuttige kwalificatievragen voordat de lead naar je team gaat.",
        },
        {
          title: "Lead-handoff",
          body:
            "Elke serieuze aanvraag gaat naar email, Slack, CRM, Airtable, Notion of webhook met een duidelijke samenvatting.",
        },
        {
          title: "Automatische follow-up",
          body:
            "Prospects kunnen opvolgmail krijgen na vragen, info-aanvragen of een verlaten boekingsstap.",
        },
        {
          title: "Gespreksinzichten",
          body:
            "Je ziet wat bezoekers vragen, waar ze twijfelen en welke vragen conversie blokkeren.",
        },
      ],
    },
    offer: {
      eyebrow: "Het aanbod",
      title: "Het 14-daagse AI-aanvraagsysteem",
      body:
        "We reviewen je website, mappen je aanvraagflow, installeren een AI-assistent, koppelen handoff en follow-up, en tunen na launch.",
      included: [
        "AI chatassistent",
        "Websitecontent-ingestion",
        "Custom conversatieflow",
        "Leadkwalificatie",
        "Email / Slack / CRM-handoff",
        "Follow-up e-mailreeks",
        "Conversatielogs",
        "Maandelijkse inzichten",
        "Launch in 14 dagen",
        "30 dagen tuning",
      ],
      cta: "Vraag een gratis demo op je site",
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Gebouwd voor dienstverleners met waardevolle aanvragen",
      items: [
        {
          title: "Bureaus en consultants",
          body:
            "Kwalificeer projectaanvragen voor het eerste gesprek. Leg budget, timing, behoefte en beslissingsfase vast.",
        },
        {
          title: "Training en onderwijs",
          body:
            "Beantwoord vragen over cursussen, planning, prijzen, toelating en inschrijving.",
        },
        {
          title: "Klinieken en private praktijken",
          body:
            "Behandel administratieve vragen, boekingsaanvragen, prijzen, locatie, openingsuren en veilige escalatie.",
          note:
            "De assistent geeft geen medisch advies. Hij behandelt adminvragen en routeert gevoelige gevallen naar mensen.",
        },
      ],
    },
    process: {
      eyebrow: "Werkwijze",
      title: "Hoe het werkt",
      steps: [
        {
          num: "01",
          title: "Audit",
          desc:
            "We bekijken je website, formulieren, FAQs, huidige follow-up en veelgestelde bezoekersvragen.",
        },
        {
          num: "02",
          title: "Map",
          desc:
            "We bepalen wat de assistent moet beantwoorden, vragen, capteren, escaleren en doorsturen.",
        },
        {
          num: "03",
          title: "Build",
          desc:
            "We installeren de AI-assistent, koppelen lead-handoff en maken de follow-upflow.",
        },
        {
          num: "04",
          title: "Launch",
          desc:
            "We testen echte vragen, passen de flow aan en deployen op je website.",
        },
        {
          num: "05",
          title: "Tune",
          desc:
            "We bekijken gesprekken na launch en verbeteren antwoorden, prompts en conversiepunten.",
        },
      ],
    },
    confidence: {
      eyebrow: "Technisch vertrouwen",
      title: "Gecontroleerd genoeg voor echte bedrijven",
      body:
        "Nadat de businessflow helder is, maken we de techniek degelijk: hosting, retrieval, privacy, handover en foutgedrag worden vooraf gescopeerd.",
      points: [
        {
          title: "EU-hosting en DPA",
          body:
            "Projecten kunnen draaien op EU-hosted infrastructuur, met DPA, retentie en subprocessors gedocumenteerd waar nodig.",
        },
        {
          title: "Bron-gebaseerde antwoorden",
          body:
            "De assistent antwoordt vanuit goedgekeurde content, gebruikt retrieval tuning en escaleert wanneer zekerheid laag is.",
        },
        {
          title: "Source code handover",
          body:
            "Je ontvangt source code, prompts, retrieval-instellingen, modelconfiguratie en deployment-configs.",
        },
        {
          title: "Modelflexibiliteit",
          body:
            "We stemmen model/provider af op privacy, latency, kost en hostingvereisten.",
        },
      ],
    },
    analytics: {
      eyebrow: "Gespreksinzichten",
      title: "Zie wat bezoekers tegenhoudt voor ze aanvragen",
      body:
        "Elk gesprek kan gelogd en getagd worden zodat je prijsdrempels, boekingsfrictie, fitvragen en follow-upkansen ziet.",
      hostedBadge: "EU-hosted · voorbeelddata",
      kpis: [
        { label: "Gesprekken · 7d", value: "2.418", delta: "+18%" },
        { label: "Gekwalificeerde aanvragen", value: "184", delta: "+27%" },
        { label: "Follow-ups verstuurd", value: "96", delta: "+14%" },
        { label: "Menselijke handoffs", value: "147", delta: "-12%" },
      ],
      trafficTitle: "Bezoekersgesprekken · laatste 14 dagen",
      trafficCaption: "Dagelijkse aanvraagactiviteit met weekenddip zichtbaar.",
      topicsTitle: "Vragen voor aanvraag",
      topicsCaption: "Topintenties van de laatste 7 dagen.",
      topics: [
        { name: "Prijs", count: 412 },
        { name: "Boeking", count: 318 },
        { name: "Service fit", count: 241 },
        { name: "Timing", count: 196 },
        { name: "Locatie", count: 134 },
        { name: "Follow-up", count: 98 },
      ],
      escalationsTitle: "Recente handoffs",
      escalationsCaption: "Naar je team met duidelijke context.",
      escalations: [
        {
          question: "Kan iemand mij morgen contacteren?",
          reason: "Hoge intentie · naar sales@",
        },
        {
          question: "Werken jullie met bedrijven zoals het mijne?",
          reason: "Menselijke bevestiging nodig · naar founder@",
        },
        {
          question: "Dit is mijn budget en timing.",
          reason: "Gekwalificeerde aanvraag · naar CRM",
        },
      ],
      weekdays: ["M", "D", "W", "D", "V", "Z", "Z", "M", "D", "W", "D", "V", "Z", "Z"],
    },
    commercials: {
      eyebrow: "Prijzen",
      title: "Eenvoudige projectprijzen",
      body:
        "Elk project wordt gescopeerd rond je website, aanvraagflow, integraties en follow-upbehoeften.",
      cards: [
        {
          title: "Pilot Build",
          price: "Vanaf €1.500",
          body: "Voor vroege klanten en eenvoudige websites.",
        },
        {
          title: "AI Enquiry System",
          price: "Vanaf €3.500",
          body:
            "Voor dienstverleners die chat, kwalificatie, handoff en follow-up willen.",
        },
        {
          title: "Growth System",
          price: "Vanaf €7.500",
          body:
            "Voor meerdere flows, CRM-integratie, analytics en doorlopende optimalisatie.",
        },
        {
          title: "Monthly Care",
          price: "Vanaf €500/maand",
          body:
            "Voor tuning, contentupdates, analyticsreview en nieuwe automatiseringen.",
        },
      ],
      cta: "Vraag een gratis AI-demo op je site",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Vragen voor je een AI-aanvraagsysteem installeert",
      items: [
        {
          q: "Is dit een chatbotplatform?",
          a:
            "Nee. Dit is een done-for-you AI-implementatieservice. We ontwerpen, bouwen, installeren en tunen de volledige aanvraagworkflow.",
        },
        {
          q: "Hoe verschilt dit van Intercom, Tidio of Chatbase?",
          a:
            "Dat zijn tools. Wij installeren het systeem rond je bedrijf: websitecontent, conversatieflow, leadkwalificatie, handoff, follow-up en optimalisatie.",
        },
        {
          q: "Kan het gesprekken boeken?",
          a:
            "Ja. Het kan bezoekers naar je boekingslink sturen of hun details capteren en een samenvatting naar je team sturen.",
        },
        {
          q: "Kan het automatisch opvolgen?",
          a:
            "Ja. We kunnen e-mailfollow-up toevoegen na een aanvraag, offerteaanvraag of verlaten boekingsstap.",
        },
        {
          q: "Wat gebeurt er als het antwoord onbekend is?",
          a:
            "Het escaleert in plaats van te gokken. De assistent kan onduidelijke, risicovolle of gevoelige vragen naar je team routeren.",
        },
        {
          q: "Heb ik documentatie nodig?",
          a:
            "Nee. We kunnen starten met je website, FAQs, servicepagina's en bestaande salesantwoorden.",
        },
        {
          q: "Waar wordt mijn data gehost?",
          a:
            "Projecten kunnen draaien op EU-hosted infrastructuur, met DPA, subprocessors, retentie en verwijdering gedocumenteerd.",
        },
        {
          q: "Wie bezit het systeem?",
          a:
            "Jij. We leveren source code, prompts, retrieval-instellingen, deployment-configs en documentatie op.",
        },
      ],
    },
    about: {
      eyebrow: "Over ons",
      title: "Done-for-you AI-consultancy, geen extra SaaS-tool",
      body:
        "BuildMyChatbot is een done-for-you AI-consultancy voor dienstverleners. We installeren AI website-assistenten, aanvraagflows en follow-upsystemen die teams sneller laten reageren en betere leads capteren zonder nog een SaaS-tool te beheren.",
      bullets: [
        "AI-chat en slimme intake",
        "Lead-handoff en CRM-workflows",
        "EU-gebaseerde implementatie en tuning",
      ],
    },
    finalCta: {
      title: "Wil je een gratis AI-demo op je site?",
      subtitle: "Stuur je website door en we tonen hoe je aanvraagflow eruit kan zien.",
      divider: "of",
      emailCta: "Stuur ons een email",
    },
    form: {
      emailPlaceholder: "jij@bedrijf.com",
      urlPlaceholder: "https://www.jouwsite.com",
      submit: "Vraag een gratis demo",
      submitting: "Versturen...",
      successTitle: "Aanvraag ontvangen",
      successBody:
        "We bekijken je site en komen binnen 24 uur terug met de volgende stap.",
    },
  },
};
