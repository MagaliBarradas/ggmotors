import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/ggmotors-branco.png.asset.json";
import fotoCapo from "@/assets/oficina-carro-capo.jpg.asset.json";
import fotoElevado from "@/assets/oficina-carro-elevado.jpg.asset.json";
import fotoMotor from "@/assets/motor-detalhe.jpg.asset.json";
import videoOficina from "@/assets/oficina-gg-motors.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GG Motors | Oficina Automóvel em Oliveira de Azeméis" },
      {
        name: "description",
        content:
          "GG Motors — Oficina automóvel em Oliveira de Azeméis. Entre em contacto connosco e saiba como podemos ajudar a cuidar do seu automóvel.",
      },
      { property: "og:title", content: "GG Motors | Oficina Automóvel em Oliveira de Azeméis" },
      {
        property: "og:description",
        content:
          "O seu carro em boas mãos. Oficina automóvel em Oliveira de Azeméis — atenção, transparência e profissionalismo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TEL = "911911843";
const EMAIL = "Ggmotors.oficina@gmail.com";
const WHATSAPP = "https://wa.me/351911911843";
const INSTAGRAM = "https://www.instagram.com/oficinaggmotors/";

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Rua+da+Portela+310+3720-299+Oliveira+de+Azem%C3%A9is";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua%20da%20Portela%20310%2C%203720-299%20Oliveira%20de%20Azem%C3%A9is&output=embed";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contacto", href: "#contacto" },
];

const GALERIA = [
  { src: fotoCapo.url, alt: "Automóvel com o capô aberto em manutenção na oficina GG Motors" },
  { src: fotoElevado.url, alt: "Automóvel elevado em intervenção mecânica na GG Motors" },
  { src: fotoMotor.url, alt: "Detalhe de um motor desmontado na oficina GG Motors" },
];

function Logo({ className = "h-10" }: { className?: string }) {
  return <img src={logo.url} alt="GG Motors" className={`${className} w-auto`} />;
}

function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-charcoal/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <Logo className="h-16 sm:h-20" />
          <span className="sr-only">GG Motors</span>
        </a>

        <div className="flex shrink-0 items-center gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contacto" className="btn-primary hidden min-h-11 text-sm sm:inline-flex">
            Contactar
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-charcoal px-5 pb-6 pt-2 sm:px-8 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-link block border-b border-border py-4 text-base"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${TEL}`}
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full text-sm"
          >
            Ligar agora
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[88vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={fotoCapo.url}
        aria-label="Interior da oficina GG Motors"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={videoOficina.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <Reveal>
          <p className="eyebrow">GG Motors — Oficina Automóvel</p>
          <h1 className="mt-5 text-[clamp(2.75rem,10vw,6.5rem)]">
            O seu carro
            <br />
            <span className="text-primary">em boas mãos.</span>
          </h1>
          <span className="rule-orange mt-7" />
          <p className="mt-6 max-w-xl text-base text-lightgray sm:text-lg">
            Cuidamos do seu carro com atenção, transparência e profissionalismo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              Contactar
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="btn-ghost">
              Como chegar
            </a>
          </div>
          <p className="mt-12 font-tech text-[0.65rem] leading-relaxed tracking-[0.3em] text-lightgray/60">
            GG MOTORS · OFICINA AUTOMÓVEL · OLIVEIRA DE AZEMÉIS
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={fotoMotor.url}
            alt="Motor desmontado a ser trabalhado na oficina GG Motors"
            className="aspect-4/5 w-full object-cover lg:aspect-square"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">GG Motors</p>
          <h2 className="mt-5 text-[clamp(2rem,5.5vw,3.5rem)]">
            Cuidamos do que
            <br />
            o leva mais longe.
          </h2>
          <span className="rule-orange mt-6" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-lightgray">
            Na GG Motors acreditamos que um bom serviço começa com confiança.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-lightgray">
            Trabalhamos com atenção, responsabilidade e dedicação para cuidar do seu automóvel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Manutencao() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={fotoElevado.url}
        alt="Automóvel elevado durante uma manutenção mecânica na GG Motors"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="eyebrow">GG Motors</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2rem,6vw,4rem)]">
            Manutenção que
            <br />
            faz a diferença.
          </h2>
          <span className="rule-orange mt-6" />
          <p className="mt-6 max-w-md text-base text-lightgray">
            Cada detalhe importa quando se trata do seu automóvel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="galeria" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-xl text-[clamp(2rem,5.5vw,3.5rem)]">
            Por dentro da
            <br />
            <span className="text-primary">GG Motors.</span>
          </h2>
          <span className="rule-orange mt-6" />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {GALERIA.map((foto, i) => (
            <Reveal
              key={foto.src}
              delay={i * 100}
              className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block h-full w-full overflow-hidden"
                aria-label={`Ampliar fotografia: ${foto.alt}`}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                    i === 0 ? "aspect-4/3 lg:h-full" : "aspect-4/3"
                  }`}
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-5"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
            className="absolute right-5 top-5 font-display text-sm tracking-[0.2em] text-lightgray hover:text-primary"
          >
            FECHAR ✕
          </button>
          <img
            src={GALERIA[lightbox]!.src}
            alt={GALERIA[lightbox]!.alt}
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

function Servicos() {
  return (
    <section id="contacto" className="border-y border-border bg-graphite/25 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">GG Motors</p>
          <h2 className="mt-5 text-[clamp(2rem,5.5vw,3.5rem)]">Serviços</h2>
          <span className="rule-orange mt-6" />
          <p className="mt-6 max-w-lg text-base text-lightgray">
            Fale connosco para saber como podemos ajudar com o seu automóvel.
          </p>
          {/* Lista de serviços a adicionar futuramente. */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              Falar com a GG Motors
            </a>
            <a href={`tel:${TEL}`} className="btn-ghost">
              911 911 843
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaIntermedio() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={fotoMotor.url}
        alt="Detalhe de motor em intervenção na oficina GG Motors"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/90" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-[clamp(2rem,6vw,4rem)]">
            Precisa de cuidar
            <br />
            do seu carro?
          </h2>
          <p className="mt-6 text-base text-lightgray">Entre em contacto connosco.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary mt-9">
            Falar connosco
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Localizacao() {
  return (
    <section id="localizacao" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Onde estamos</p>
          <h2 className="mt-5 text-[clamp(2rem,5.5vw,3.25rem)]">GG Motors</h2>
          <span className="rule-orange mt-6" />

          <address className="mt-8 not-italic text-base leading-relaxed text-lightgray">
            Rua da Portela, 310
            <br />
            3720-299 Oliveira de Azeméis
            <br />
            Portugal
          </address>

          <dl className="mt-8 space-y-4 text-base">
            <div>
              <dt className="font-display text-xs tracking-[0.2em] text-lightgray/60">TELEFONE</dt>
              <dd>
                <a href={`tel:${TEL}`} className="text-foreground hover:text-primary">
                  911 911 843
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs tracking-[0.2em] text-lightgray/60">E-MAIL</dt>
              <dd className="break-words">
                <a href={`mailto:${EMAIL}`} className="text-foreground hover:text-primary">
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={MAPS} target="_blank" rel="noreferrer" className="btn-primary">
              Abrir no Google Maps
            </a>
            <a href={`tel:${TEL}`} className="btn-ghost">
              Ligar agora
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <iframe
            title="Mapa da localização da GG Motors em Oliveira de Azeméis"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border border-border grayscale-[35%] lg:h-full lg:min-h-[420px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[#111111] py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <Logo className="h-24" />
          <p className="mt-5 text-sm leading-relaxed text-lightgray">
            GG Motors
            <br />
            Oficina Automóvel
            <br />
            Oliveira de Azeméis
          </p>
        </div>

        <div className="text-sm leading-relaxed text-lightgray">
          <p className="font-display text-xs tracking-[0.2em] text-lightgray/60">CONTACTO</p>
          <a href={`tel:${TEL}`} className="mt-3 block hover:text-primary">
            911 911 843
          </a>
          <a href={`mailto:${EMAIL}`} className="mt-1 block break-words hover:text-primary">
            {EMAIL}
          </a>
          <p className="mt-5 font-display text-xs tracking-[0.2em] text-lightgray/60">ENDEREÇO</p>
          <p className="mt-3">
            Rua da Portela, 310
            <br />
            3720-299 Oliveira de Azeméis
          </p>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.2em] text-lightgray/60">NAVEGAÇÃO</p>
          <nav className="mt-3 space-y-2">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm text-lightgray hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <p className="mt-5 font-display text-xs tracking-[0.2em] text-lightgray/60">INSTAGRAM</p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-lightgray hover:text-primary"
          >
            @oficinaggmotors
          </a>

        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border px-5 pt-6 sm:px-8">
        <p className="text-xs text-lightgray/50">
          © 2026 GG Motors. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a GG Motors no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-charcoal p-1 shadow-lg transition-transform duration-200 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </span>
    </a>
  );
}

function Index() {
  return (
    <div className="bg-charcoal">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Manutencao />
        <Galeria />
        <Servicos />
        <CtaIntermedio />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

