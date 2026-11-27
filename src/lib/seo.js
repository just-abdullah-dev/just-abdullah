import { SITE, SITE_URL, absoluteUrl } from "@/lib/site";

export function buildMetadata({
  title,
  description = SITE.description,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
  keywords = SITE.keywords,
}) {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.titleDefault;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.brand,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: SITE.twitter,
      images: [absoluteUrl(image)],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    alternateName: ["Just Abdullah", "just-abdullah", "justabdullahdev"],
    url: SITE_URL,
    image: absoluteUrl("/about.jpg"),
    email: SITE.email,
    telephone: SITE.phone,
    jobTitle: "Full Stack Engineer & Founder",
    worksFor: {
      "@type": "Organization",
      name: "GateTak",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haripur",
      addressCountry: "PK",
    },
    sameAs: [
      SITE.linkedin,
      SITE.github,
      "https://twitter.com/just_abdullah_3",
      "https://instagram.com/just_abdullah_._",
    ],
    knowsAbout: [
      "Next.js",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "SaaS Architecture",
      "AI Integrations",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.brand,
    url: SITE_URL,
    description: SITE.description,
    publisher: {
      "@type": "Person",
      name: SITE.name,
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function creativeWorkJsonLd(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary || project.tagline,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: project.images?.[0] ? absoluteUrl(project.images[0]) : undefined,
    author: {
      "@type": "Person",
      name: SITE.name,
      url: SITE_URL,
    },
    keywords: project.keywords?.join(", "),
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
