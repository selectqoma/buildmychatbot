import { NextResponse } from "next/server";
import { locales, siteContent, type Locale } from "@/lib/site-content";

type ChatRequest = {
  message?: string;
  locale?: Locale;
};

type Answer = {
  answer: string;
  source: string;
  confidence: "high" | "medium" | "low";
  cta?: string;
};

const fallbackAnswers: Record<Locale, Answer> = {
  en: {
    answer:
      "I can answer questions about BuildMyChatbot, pricing, timeline, integrations, hosting, ownership, and safe escalation. If you want a demo on your own docs, send your help center URL and email.",
    source: "BuildMyChatbot landing page",
    confidence: "low",
    cta: "Get a free demo on your docs",
  },
  fr: {
    answer:
      "Je peux répondre aux questions sur BuildMyChatbot, le budget, le délai, les intégrations, l'hébergement, la propriété du code et l'escalade prudente. Pour une démo sur vos docs, envoyez votre URL de documentation et votre email.",
    source: "Page BuildMyChatbot",
    confidence: "low",
    cta: "Recevoir une démo sur vos docs",
  },
  nl: {
    answer:
      "Ik kan vragen beantwoorden over BuildMyChatbot, budget, timing, integraties, hosting, eigendom en veilige escalatie. Voor een demo op je eigen docs stuur je je helpcenter-URL en e-mail.",
    source: "BuildMyChatbot website",
    confidence: "low",
    cta: "Demo op je eigen docs aanvragen",
  },
};

const cannedAnswers: Record<Locale, Array<Answer & { keywords: string[] }>> = {
  en: [
    {
      keywords: ["price", "pricing", "cost", "fee", "quote", "expensive"],
      answer:
        "We scope the build around your docs, handoff flow, and deployment needs, then agree a fixed project quote before any work starts. Ongoing support is optional.",
      source: "Commercials",
      confidence: "high",
      cta: "Get a fixed quote",
    },
    {
      keywords: ["timeline", "time", "long", "weeks", "delivery", "deploy"],
      answer:
        "The standard delivery target is two weeks for a scoped customer service chatbot: docs ingestion, tuning, deployment, and handover.",
      source: "Process",
      confidence: "high",
    },
    {
      keywords: ["data", "gdpr", "host", "hosting", "eu", "privacy", "secure"],
      answer:
        "Docs and chat logs can run in your infrastructure or in a dedicated EU cloud instance. The handover includes deployment configuration so your team knows where everything lives.",
      source: "Production confidence",
      confidence: "high",
    },
    {
      keywords: ["wrong", "hallucination", "hallucinate", "guess", "safe", "confidence"],
      answer:
        "The agent is configured to answer from indexed sources only. If confidence is low or no relevant source exists, it logs the question and escalates instead of inventing a reply.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["own", "ownership", "source", "code", "lock", "handover"],
      answer:
        "You own the delivered system. We hand over source code, prompts, retrieval settings, deployment configs, and documentation.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["integrate", "integration", "slack", "email", "crm", "zendesk", "intercom"],
      answer:
        "The standard setup supports a website widget plus Slack or email handoff. CRM and helpdesk integrations can be connected through webhooks or API work during discovery.",
      source: "Deliverables",
      confidence: "high",
    },
    {
      keywords: ["language", "languages", "french", "dutch", "english", "multilingual"],
      answer:
        "The agent can answer in many languages, including English, French, Dutch, German, and Spanish. We can configure multilingual responses even if your docs are mostly in English.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["demo", "docs", "try", "test", "start"],
      answer:
        "Send a help center URL and an email. We can prepare a small demo on your own docs so you can judge answer quality before committing.",
      source: "Final CTA",
      confidence: "high",
      cta: "Get a free demo on your docs",
    },
  ],
  fr: [
    {
      keywords: ["prix", "budget", "cout", "coût", "tarif", "devis"],
      answer:
        "Nous cadrons le projet selon vos docs, votre handoff et vos contraintes de déploiement, puis validons un devis fixe avant tout travail. Le suivi mensuel est optionnel.",
      source: "Commercial",
      confidence: "high",
      cta: "Recevoir un devis fixe",
    },
    {
      keywords: ["delai", "délai", "temps", "semaines", "livraison", "déploiement"],
      answer:
        "La cible standard est une livraison en deux semaines : ingestion des docs, réglage, déploiement et handover.",
      source: "Processus",
      confidence: "high",
    },
    {
      keywords: ["donnees", "données", "rgpd", "hébergement", "hebergement", "ue", "privacy", "sécurité"],
      answer:
        "Vos docs et logs peuvent tourner dans votre infrastructure ou dans une instance cloud dédiée en Europe. Le handover inclut la configuration de déploiement.",
      source: "Confiance en production",
      confidence: "high",
    },
    {
      keywords: ["faux", "hallucination", "invente", "escalade", "confiance"],
      answer:
        "L'agent répond uniquement depuis des sources indexées. Si la confiance est faible ou si la source manque, il journalise la question et escalade au support au lieu d'inventer.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["propriétaire", "propriete", "code", "source", "lock", "handover"],
      answer:
        "Vous possédez le système livré : code source, prompts, réglages de retrieval, configs de déploiement et documentation.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["integration", "intégration", "slack", "email", "crm", "zendesk", "intercom"],
      answer:
        "Le setup standard couvre un widget web avec handoff Slack ou email. Les intégrations CRM/helpdesk peuvent être ajoutées via webhooks ou API pendant la découverte.",
      source: "Livrables",
      confidence: "high",
    },
    {
      keywords: ["langue", "langues", "français", "anglais", "néerlandais", "multilingue"],
      answer:
        "L'agent peut répondre dans plusieurs langues, dont français, anglais, néerlandais, allemand et espagnol.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["demo", "démo", "docs", "essai", "tester", "commencer"],
      answer:
        "Envoyez une URL de centre d'aide et un email. Nous pouvons préparer une petite démo sur vos propres docs pour juger la qualité avant de vous engager.",
      source: "CTA",
      confidence: "high",
      cta: "Recevoir une démo sur vos docs",
    },
  ],
  nl: [
    {
      keywords: ["prijs", "budget", "kost", "kosten", "tarief", "offerte"],
      answer:
        "We bepalen de scope op basis van je docs, handoff en deploymentvereisten, en spreken een vaste projectofferte af voor het werk start. Maandelijkse opvolging is optioneel.",
      source: "Commercials",
      confidence: "high",
      cta: "Vaste offerte aanvragen",
    },
    {
      keywords: ["tijd", "weken", "levering", "delivery", "deploy", "duurt"],
      answer:
        "De standaarddoelstelling is levering in twee weken: docs ingestion, tuning, deployment en handover.",
      source: "Proces",
      confidence: "high",
    },
    {
      keywords: ["data", "gdpr", "avg", "hosting", "eu", "privacy", "veilig"],
      answer:
        "Docs en chatlogs kunnen draaien in je eigen infrastructuur of in een dedicated EU-cloudinstantie. De handover bevat de deploymentconfiguratie.",
      source: "Productiezekerheid",
      confidence: "high",
    },
    {
      keywords: ["fout", "hallucinatie", "verzint", "escalatie", "vertrouwen"],
      answer:
        "De agent antwoordt alleen vanuit geindexeerde bronnen. Bij lage zekerheid of ontbrekende bron logt hij de vraag en escaleert hij in plaats van iets te verzinnen.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["eigendom", "code", "source", "broncode", "lock", "handover"],
      answer:
        "Jij bezit het geleverde systeem: broncode, prompts, retrieval-instellingen, deploymentconfigs en documentatie.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["integratie", "slack", "email", "crm", "zendesk", "intercom"],
      answer:
        "De standaardsetup ondersteunt een websitewidget met Slack- of e-mailhandoff. CRM- en helpdeskintegraties kunnen via webhooks of API-werk worden toegevoegd.",
      source: "Deliverables",
      confidence: "high",
    },
    {
      keywords: ["taal", "talen", "frans", "nederlands", "engels", "meertalig"],
      answer:
        "De agent kan in meerdere talen antwoorden, waaronder Nederlands, Frans, Engels, Duits en Spaans.",
      source: "FAQ",
      confidence: "high",
    },
    {
      keywords: ["demo", "docs", "testen", "probeer", "start"],
      answer:
        "Stuur een helpcenter-URL en e-mailadres. We kunnen een kleine demo op je eigen docs voorbereiden zodat je de kwaliteit vooraf kunt beoordelen.",
      source: "CTA",
      confidence: "high",
      cta: "Demo op je eigen docs aanvragen",
    },
  ],
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function pickLocale(locale: unknown): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : "en";
}

function scoreAnswer(message: string, answer: { keywords: string[] }) {
  const normalizedMessage = normalize(message);
  return answer.keywords.reduce((score, keyword) => {
    return normalizedMessage.includes(normalize(keyword)) ? score + 1 : score;
  }, 0);
}

export async function POST(req: Request) {
  let body: ChatRequest;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const locale = pickLocale(body.locale);
  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json(
      { error: "Message required" },
      { status: 400 },
    );
  }

  const faqAnswers = siteContent[locale].faq.items.map((item) => ({
    keywords: item.q.split(/\W+/).filter((word) => word.length > 3),
    answer: item.a,
    source: "FAQ",
    confidence: "medium" as const,
  }));

  const candidates = [...cannedAnswers[locale], ...faqAnswers]
    .map((answer) => ({
      ...answer,
      score: scoreAnswer(message, answer),
    }))
    .sort((a, b) => b.score - a.score);

  const best = candidates[0];

  if (!best || best.score === 0) {
    return NextResponse.json(fallbackAnswers[locale]);
  }

  return NextResponse.json({
    answer: best.answer,
    source: best.source,
    confidence: best.confidence,
    cta: "cta" in best ? best.cta : undefined,
  });
}
