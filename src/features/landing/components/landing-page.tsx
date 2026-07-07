import { landingContent } from "@/features/landing/content";

export function LandingPage() {
  const {
    brand,
    navigation,
    labels,
    serviceCoverage,
    hero,
    stats,
    plans,
    process,
    faq,
    contact,
  } = landingContent;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    legalName: brand.legalName,
    taxID: brand.cnpj,
    telephone: brand.phone,
    url: "https://certikyndo.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brand.address.street}, ${brand.address.number}, ${brand.address.complement}`,
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      postalCode: brand.address.zipCode,
      addressCountry: brand.address.country,
    },
    areaServed: ["Goiânia", "Goiás", "Brasil"],
    makesOffer: plans.items.map((plan) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: plan.name,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "BRL",
        price: plan.price,
      },
    })),
  };

  return (
    <div className="relative overflow-hidden bg-[var(--ck-bg)] text-[var(--ck-ink)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,#f6d8c2_0%,transparent_38%),radial-gradient(circle_at_85%_5%,#bfe7dc_0%,transparent_35%),linear-gradient(180deg,#fefcf8_0%,#f8f5ef_100%)]" />

      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fefcf8cc] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-lg font-bold tracking-tight">
            {brand.name}
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:opacity-70">
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full bg-[var(--ck-accent)] px-4 py-2 text-white transition hover:brightness-95"
            >
              {labels.supportCta}
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pt-20">
          <div className="animate-[fadeUp_.55s_ease-out_forwards] opacity-0">
            <p className="mb-4 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
              {hero.description}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black/70">
              <span>{labels.certifierLabel}</span>
              <span className="h-1 w-1 rounded-full bg-black/30" />
              <span>{labels.certifierName}</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-[var(--ck-accent)] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3 text-sm font-semibold transition hover:bg-black/5"
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-black/80 sm:grid-cols-2">
              {hero.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--ck-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="animate-[fadeUp_.55s_.1s_ease-out_forwards] rounded-3xl border border-black/10 bg-white/90 p-6 opacity-0 shadow-[0_16px_70px_-30px_rgba(0,0,0,0.35)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
              {labels.trustStats}
            </p>
            <div className="mt-5 space-y-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-black/10 bg-[#fffdfa] p-4">
                  <p className="text-3xl font-black tracking-tight">{item.value}</p>
                  <p className="mt-1 text-sm text-black/65">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-black/65">{brand.slogan}</p>
          </aside>
        </section>

        <section id="planos" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">{plans.title}</h2>
            <p className="mt-3 text-black/70">{plans.subtitle}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {plans.items.map((plan) => (
              <article
                key={plan.name}
                className="flex flex-col justify-between rounded-3xl border border-black/10 bg-white/90 p-6"
              >
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">{plan.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-base font-bold">{plan.price}</p>
                  <a href="#contato" className="text-sm font-semibold text-[var(--ck-accent)]">
                    {labels.requestPlan}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">{process.title}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {process.steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-black/10 bg-[#fffdfa] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
                  {labels.stepPrefix} {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/65">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">{faq.title}</h2>
          <div className="mt-8 space-y-4">
            {faq.items.map((item) => (
              <details key={item.question} className="rounded-2xl border border-black/10 bg-white/90 p-5">
                <summary className="cursor-pointer text-base font-bold">{item.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
          <div className="rounded-3xl border border-black/10 bg-white/85 p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">{serviceCoverage.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-black/70 md:text-base">
              {serviceCoverage.description}
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-black/80 md:grid-cols-3">
              {serviceCoverage.regions.map((region) => (
                <li key={region} className="rounded-xl border border-black/10 bg-[#fffdfa] px-3 py-2">
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8">
          <div className="rounded-3xl bg-[var(--ck-ink)] px-6 py-10 text-white md:px-10 md:py-12">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">{contact.title}</h2>
            <p className="mt-3 max-w-2xl text-white/80">{contact.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={contact.cta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ck-accent)] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              >
                {contact.cta.label}
              </a>
              <div className="text-sm text-white/85">
                <p>{brand.whatsapp}</p>
                <p>{brand.phone}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#f3efe6] px-6 py-10 text-black/70 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-bold text-black">{brand.name}</p>
            <p className="mt-1 text-xs">{brand.legalName}</p>
            <p className="text-xs">CNPJ: {brand.cnpj}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-black">Endereço</p>
            <p className="mt-1 text-xs">
              {brand.address.street}, {brand.address.number} - {brand.address.complement}
            </p>
            <p className="text-xs">
              {brand.address.district}, {brand.address.city} - {brand.address.state}, CEP {brand.address.zipCode}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-black">Contato</p>
            <p className="mt-1 text-xs">Atendimento digital via WhatsApp e telefone</p>
            <p className="text-xs">
              Telefone: <a href="tel:+556293384009">{brand.phone}</a>
            </p>
            <p className="text-xs">
              WhatsApp: <a href={contact.cta.href}> {brand.whatsapp}</a>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-6xl border-t border-black/10 pt-4 text-xs">
          <div className="mb-2 flex flex-wrap gap-4">
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
            <a href="#contato" className="hover:underline">
              Contato
            </a>
            <a href={contact.cta.href} className="hover:underline">
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Rua+C23,+1,+Setor+Novo+Horizonte,+Goiania+-+GO,+74363-290"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Ver no mapa
            </a>
          </div>
          <p>
            {new Date().getFullYear()} {brand.name}. {labels.rightsReserved}
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </div>
  );
}
