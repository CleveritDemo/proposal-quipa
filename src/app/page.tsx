"use client";

import Image from "next/image";
import { useState } from "react";

type Token = {
  name: string;
  value: string;
  usage: string;
};

type Asset = {
  title: string;
  description: string;
  file: string;
  bg: string;
  width: number;
  height: number;
  ogImage: AssetVariant;
  tokens: Token[];
  variants?: AssetVariant[];
};

type AssetVariant = {
  label: string;
  file: string;
  previewFile?: string;
  width: number;
  height: number;
  bg?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicAsset(path: string) {
  return `${basePath}${path}`;
}

const logoAssets: Asset[] = [
  {
    title: "Propuesta 01",
    description: "Ruta visual A con contraste oscuro y acento violeta/magenta.",
    file: "/brand/quipa-logo-a-6.svg",
    bg: "bg-[#0D0D0D]",
    width: 659,
    height: 168,
    ogImage: {
      label: "OG Image",
      file: "/brand/og-imagen-a.png",
      previewFile: "/brand/og-imagen-a.png?v=2",
      width: 1200,
      height: 630,
      bg: "bg-white",
    },
    tokens: [
      { name: "--qhipa-a-bg", value: "#0D0D0D", usage: "Fondo principal" },
      { name: "--qhipa-a-white", value: "#FAFAFA", usage: "Logotipo principal" },
      { name: "--qhipa-a-white-soft", value: "#F9F8F9", usage: "Detalle secundario" },
      { name: "--qhipa-a-accent", value: "#ED56E1", usage: "Punto de marca" },
      { name: "--qhipa-a-gradient-start", value: "#FD3BE1", usage: "Inicio gradiente" },
      { name: "--qhipa-a-gradient-end", value: "#9551FB", usage: "Fin gradiente" },
    ],
    variants: [
      { label: "Versión light", file: "/brand/light/Component 2.svg", width: 659, height: 168, bg: "bg-white" },
      { label: "Isotipo", file: "/brand/quipa-logo-a-5.svg", width: 230, height: 230 },
      { label: "Vertical", file: "/brand/quipa-logo-a7.svg", width: 460, height: 350 },
    ],
  },
  {
    title: "Propuesta 02",
    description: "Ruta visual B con energía tech, gradiente verde/celeste y composición dinámica.",
    file: "/brand/quipa-logo-b-6.svg",
    bg: "bg-[#050908]",
    width: 692,
    height: 183,
    ogImage: {
      label: "OG Image",
      file: "/brand/og-imagen-b.png",
      previewFile: "/brand/og-imagen-b.png?v=2",
      width: 1200,
      height: 630,
      bg: "bg-white",
    },
    tokens: [
      { name: "--qhipa-b-bg", value: "#050908", usage: "Fondo principal" },
      { name: "--qhipa-b-white", value: "#FAFAFA", usage: "Logotipo principal" },
      { name: "--qhipa-b-white-soft", value: "#F9F8F9", usage: "Detalle secundario" },
      { name: "--qhipa-b-accent", value: "#3FBE8A", usage: "Punto de marca" },
      { name: "--qhipa-b-gradient-start", value: "#3EBC7C", usage: "Inicio gradiente" },
      { name: "--qhipa-b-gradient-end", value: "#44CBE3", usage: "Fin gradiente" },
    ],
    variants: [
      { label: "Versión light", file: "/brand/light/Component 3.svg", width: 692, height: 183, bg: "bg-white" },
      { label: "Isotipo", file: "/brand/quipa-logo-b-5.svg", width: 230, height: 230 },
      { label: "Vertical", file: "/brand/quipa-logo-b-7.svg", width: 460, height: 395 },
    ],
  },
  {
    title: "Propuesta 03",
    description: "Ruta visual C con carácter digital, gradiente azul y lectura robusta.",
    file: "/brand/quipa-logo-c-7.svg",
    bg: "bg-[#01060E]",
    width: 681,
    height: 168,
    ogImage: {
      label: "OG Image",
      file: "/brand/og-imagen-c.png",
      previewFile: "/brand/og-imagen-c.png?v=2",
      width: 1200,
      height: 630,
      bg: "bg-white",
    },
    tokens: [
      { name: "--qhipa-c-bg", value: "#01060E", usage: "Fondo principal" },
      { name: "--qhipa-c-white", value: "#FAFAFA", usage: "Logotipo principal" },
      { name: "--qhipa-c-white-soft", value: "#F9F8F9", usage: "Detalle secundario" },
      { name: "--qhipa-c-accent", value: "#37C0E2", usage: "Punto de marca" },
      { name: "--qhipa-c-gradient-start", value: "#37C0E2", usage: "Inicio gradiente" },
      { name: "--qhipa-c-gradient-end", value: "#003AD4", usage: "Fin gradiente" },
    ],
    variants: [
      { label: "Versión light", file: "/brand/light/Component 4.svg", width: 681, height: 168, bg: "bg-white" },
      { label: "Isotipo", file: "/brand/quipa-logo-c-5.svg", width: 230, height: 230 },
      { label: "Vertical", file: "/brand/quipa-logo-c-6.svg", width: 460, height: 379 },
    ],
  },
];

export default function Home() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);
  const activeLogo = logoAssets[activeLogoIndex];
  const activeLight = activeLogo.variants?.find((variant) => variant.label === "Versión light");
  const activeVertical = activeLogo.variants?.find((variant) => variant.label === "Vertical");
  const activeIsotipo = activeLogo.variants?.find((variant) => variant.label === "Isotipo");

  async function copyToken(token: Token) {
    await navigator.clipboard.writeText(`${token.name}: ${token.value};`);
    setCopiedToken(token.name);
    window.setTimeout(() => setCopiedToken(null), 1400);
  }

  async function copyActiveTokens() {
    await navigator.clipboard.writeText(
      activeLogo.tokens.map((token) => `${token.name}: ${token.value};`).join("\n"),
    );
    setCopiedToken("all");
    window.setTimeout(() => setCopiedToken(null), 1400);
  }

  return (
    <main className="min-h-screen bg-[#f4f7f6] text-[#101112]">
      <div className="mx-auto max-w-[1216px] px-5 py-4 sm:px-8">
        <header className="flex items-center justify-between border-b border-[#dfe5e2] pb-4">
          <div className="flex items-center gap-4">
            <a className="text-2xl font-black tracking-[-0.06em]" href="#inicio">
              qhipa.
            </a>
            <span className="h-8 w-px bg-[#dfe5e2]" />
            <p className="hidden text-sm text-[#515554] sm:block">Brand Book · Propuestas de identidad</p>
          </div>
        </header>

        <section id="inicio" className="grid gap-10 py-10 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-[#515554]">Qhipa / Brand Capital</p>
            <h1 className="mt-5 max-w-[620px] text-5xl font-black leading-[0.96] tracking-[-0.07em] sm:text-6xl">
              Definicion de marca
            </h1>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[290px_1fr]">
          <aside className="grid content-start gap-5">
            <InfoCard title="Brand mínimo" icon="☷">
              <InfoBlock label="Sistema visual" value="3 rutas" text="Cada propuesta cubre una dirección de marca con asset SVG descargable." />
              <InfoBlock label="Tokens" value="6 colores" text="Variables CSS copiables para llevar la identidad a producto." />
              <InfoBlock label="Formato" value="SVG" text="Logotipos preparados para web y documentación." />
            </InfoCard>
          </aside>

          <div className="grid gap-5">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Propuestas de logotipo">
              {logoAssets.map((asset, index) => (
                <button
                  key={asset.file}
                  aria-selected={activeLogoIndex === index}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    activeLogoIndex === index
                      ? "bg-[#101112] text-white"
                      : "border border-[#dfe5e2] bg-white text-[#515554] hover:border-[#101112] hover:text-[#101112]"
                  }`}
                  onClick={() => setActiveLogoIndex(index)}
                  role="tab"
                  type="button"
                >
                  {asset.title}
                </button>
              ))}
            </div>

            <section id="logotipos" className="rounded-xl border border-[#dfe5e2] bg-white p-4 shadow-sm sm:p-5">
              <div className="mx-auto grid max-w-5xl gap-5">
                <div className="text-left">
                  <p className="text-sm text-[#515554]">Propuesta activa</p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">{activeLogo.title}</h2>
                  <p className="mt-4 max-w-2xl leading-7 text-[#515554]">{activeLogo.description}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <ProposalAssetPreview
                    bg={activeLogo.bg}
                    file={activeLogo.file}
                    height={activeLogo.height}
                    label="Logotipo horizontal"
                    title={activeLogo.title}
                    width={activeLogo.width}
                  />

                  {activeVertical ? (
                    <ProposalAssetPreview
                      bg={activeLogo.bg}
                      file={activeVertical.file}
                      height={activeVertical.height}
                      label="Versión vertical"
                      title={`${activeLogo.title} version vertical`}
                      width={activeVertical.width}
                    />
                  ) : null}
                </div>

                {activeLight ? (
                  <ProposalAssetPreview
                    bg={activeLight.bg ?? "bg-white"}
                    file={activeLight.file}
                    height={activeLight.height}
                    label="Versión light"
                    title={`${activeLogo.title} version light`}
                    width={activeLight.width}
                  />
                ) : null}

                {activeIsotipo ? (
                  <ProposalAssetPreview
                    bg={activeLogo.bg}
                    file={activeIsotipo.file}
                    height={activeIsotipo.height}
                    label="Isotipo"
                    title={`${activeLogo.title} isotipo`}
                    width={activeIsotipo.width}
                  />
                ) : null}

                <ProposalAssetPreview
                  bg={activeLogo.ogImage.bg ?? "bg-white"}
                  file={activeLogo.ogImage.file}
                  height={activeLogo.ogImage.height}
                  label="OG Image"
                  previewFile={activeLogo.ogImage.previewFile}
                  title={`${activeLogo.title} og image`}
                  width={activeLogo.ogImage.width}
                />

                <section id="tokens" className="rounded-xl border border-[#dfe5e2] bg-[#f7faf9] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-black tracking-[-0.04em]">Paleta de colores.</h2>
                    <button
                      className="shrink-0 rounded-full bg-[#101112] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#2d3130]"
                      onClick={copyActiveTokens}
                      type="button"
                    >
                      {copiedToken === "all" ? "Copiado" : "Copiar tokens"}
                    </button>
                  </div>
                  <p className="mt-3 text-[#515554]">
                    Tokens base para implementar la identidad visual de Qhipa en producto digital.
                  </p>
                  <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {activeLogo.tokens.map((token) => (
                      <article key={token.name} className="rounded-xl border border-[#dfe5e2] bg-white p-4">
                        <div className="h-20 rounded-lg border border-black/5" style={{ backgroundColor: token.value }} />
                        <div className="mt-4 flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate font-mono text-xs font-bold text-[#515554]">{token.name}</p>
                            <p className="mt-1 text-xl font-black tracking-[-0.04em]">{token.value}</p>
                            <p className="mt-1 text-sm text-[#515554]">{token.usage}</p>
                          </div>
                          <button
                            className="shrink-0 rounded-full bg-[#fff4e8] px-3 py-2 text-sm font-medium text-[#a14f08] transition hover:bg-[#ffe4c7]"
                            onClick={() => copyToken(token)}
                            type="button"
                          >
                            {copiedToken === token.name ? "Copiado" : "Copiar"}
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoCard({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <article className="rounded-xl border border-[#dfe5e2] bg-white p-4 shadow-sm">
      <h2 className="flex items-center gap-3 text-2xl font-black tracking-[-0.04em]">
        <span>{icon}</span>
        {title}
      </h2>
      <div className="mt-6 grid gap-5">{children}</div>
    </article>
  );
}

function InfoBlock({ label, value, text }: { label: string; value: string; text: string }) {
  return (
    <div>
      <p className="text-sm text-[#515554]">{label}</p>
      <p className="mt-2 text-xl font-medium">{value}</p>
      <p className="mt-2 leading-6 text-[#515554]">{text}</p>
    </div>
  );
}

function ProposalAssetPreview({
  bg,
  file,
  height,
  label,
  previewFile,
  title,
  width,
}: {
  bg: string;
  file: string;
  height: number;
  label: string;
  previewFile?: string;
  title: string;
  width: number;
}) {
  return (
    <article className="rounded-xl border border-[#dfe5e2] bg-[#f7faf9] p-4">
      <p className="mb-3 text-center text-sm font-medium text-[#515554]">{label}</p>
      <div className={`grid h-[320px] place-items-center rounded-lg p-6 ${bg}`}>
        <Image
          src={publicAsset(previewFile ?? file)}
          alt={title}
          width={width}
          height={height}
          className="max-h-[240px] w-auto max-w-full"
          priority={label === "Logotipo horizontal"}
        />
      </div>
      <div className="mt-3 rounded-lg border border-[#dfe5e2] bg-white p-3 font-mono text-xs text-[#515554]">
        {file}
      </div>
      <a
        className="mt-3 inline-flex w-full justify-center rounded-full bg-[#101112] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2d3130]"
        href={publicAsset(file)}
        download
      >
        Descargar SVG
      </a>
    </article>
  );
}
