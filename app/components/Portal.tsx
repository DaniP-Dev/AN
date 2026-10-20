"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import dmasLogo from "../dmas.png";
import superLikeLogo from "../superlike.webp";
import { noticias, enfoques, type Categoria, type Noticia } from "../data/noticias";

const categorias: Categoria[] = ["Economía", "Política", "Entretenimiento", "Región", "Cultura", "Deportes"];
const color: Record<Categoria, string> = {
  Economía: "#287c67",
  Política: "#8b278f",
  Entretenimiento: "#ff2e9a",
  Región: "#b25b24",
  Cultura: "#6840a1",
  Deportes: "#18e472",
};

function Brand({ categoria, compact = false }: { categoria: Categoria; compact?: boolean }) {
  if (categoria === "Deportes") {
    return <div className={`sectionBrand dmas ${compact ? "compact" : ""}`}><Image src={dmasLogo} alt="D Más" /></div>;
  }

  if (categoria === "Entretenimiento") {
    return <div className={`sectionBrand superlike ${compact ? "compact" : ""}`}><Image src={superLikeLogo} alt="Super Like" /></div>;
  }

  return (
    <div className={`sectionBrand ahora ${compact ? "compact" : ""}`}>
      <span className="anMark">AN</span>
      <span className="anWords"><b>AHORA</b><small>NOTICIAS</small></span>
    </div>
  );
}

function Analysis({ label, text }: { label: string; text: string }) {
  return (
    <section className="analysisBox">
      <h3>¿En qué se enfoca el {label.toLowerCase()}?</h3>
      <p>{text}</p>
    </section>
  );
}

function Detail({ item, close }: { item: Noticia; close: () => void }) {
  return (
    <div className={`modal theme-${item.categoria.toLowerCase()}`} onMouseDown={close}>
      <article className="detail" onMouseDown={(event) => event.stopPropagation()}>
        <button className="close" onClick={close}>×</button>
        <Brand categoria={item.categoria} />
        <div className="eyebrow" style={{ color: color[item.categoria] }}>
          {item.categoria}{item.etiqueta ? ` · ${item.etiqueta}` : ""}
        </div>
        <h2>{item.titulo}</h2>
        <Analysis label="Título" text={item.enfoqueTitulo} />
        <section><h3>Sumario completo</h3><p className="summary">{item.sumario}</p></section>
        <Analysis label="Sumario" text={item.enfoqueSumario} />
        <section><h3>Lead completo</h3><p className="lead">{item.lead}</p></section>
        <Analysis label="Lead" text={item.enfoqueLead} />
        <section>
          <h3>Las W presentes</h3>
          <div className="wgrid">
            {Object.entries(item.w).map(([key, value]) => (
              <div className="witem" key={key}><b>{key}</b><span>{value}</span></div>
            ))}
          </div>
        </section>
        <section className="type"><span>Tipo y valor noticioso</span><strong>{item.tipo}</strong></section>
        {item.enlace && <a className="origin" href={item.enlace} target="_blank" rel="noreferrer">Leer noticia original ↗</a>}
      </article>
    </div>
  );
}

export default function Portal() {
  const [categoria, setCategoria] = useState<Categoria | "Todas">("Todas");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Noticia | null>(null);
  const list = useMemo(
    () => noticias.filter((item) =>
      (categoria === "Todas" || item.categoria === categoria)
      && `${item.titulo} ${item.sumario}`.toLowerCase().includes(q.toLowerCase()),
    ),
    [categoria, q],
  );
  const sectionCount = categoria === "Todas"
    ? noticias.length
    : noticias.filter((item) => item.categoria === categoria).length;
  const theme = categoria === "Todas" ? "newsWorld" : `newsWorld section-${categoria.toLowerCase()}`;
  const sectionAccent = categoria === "Todas" ? undefined : color[categoria];

  return (
    <div className={theme}>
      <header className="top">
        <div className="topline" />
        <div className="mast">
          <span className="issue">BOLETÍN DIGITAL · 2026</span>
          <div className="mainBrand">
            <span className="mainMark">AN</span>
            <span><b>AHORA</b><small>NOTICIAS</small></span>
          </div>
          <p>Análisis periodístico de <b>El Heraldo</b></p>
        </div>
        <nav>
          {["Todas", ...categorias].map((item) => (
            <button
              key={item}
              onClick={() => setCategoria(item as Categoria | "Todas")}
              className={categoria === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>
      <main>
        <section className="hero">
          <div>
            <div className="kicker">
              {categoria === "Todas" ? "LABORATORIO DE PERIODISMO" : `ANÁLISIS PERIODÍSTICO · ${categoria.toUpperCase()}`}
            </div>
            <h2>
              {categoria === "Todas"
                ? <>Cómo se construye<br /><em>una noticia</em></>
                : <>Así informa El Heraldo<br /><em>{categoria}</em></>}
            </h2>
            <p>
              {categoria === "Todas"
                ? "Una lectura comparada de titulares, sumarios, leads, seis W y valores noticiosos en seis secciones."
                : `Explora ${sectionCount} noticias de ${categoria} y descubre cómo se organizan sus titulares, sumarios y leads.`}
            </p>
          </div>
          <div
            className="heroGraphic"
            style={sectionAccent ? { background: `linear-gradient(145deg, ${sectionAccent}, #211927)` } : undefined}
          >
            <span>{categoria === "Todas" ? "6" : "1"}</span>
            <small>{categoria === "Todas" ? "secciones" : "sección activa"}</small>
            <i />
            <span>{sectionCount}</span>
            <small>noticias analizadas</small>
          </div>
        </section>
        <section className="intro" style={sectionAccent ? { borderColor: sectionAccent } : undefined}>
          <span style={sectionAccent ? { color: sectionAccent } : undefined}>
            {categoria === "Todas" ? "ANÁLISIS GENERAL DEL MEDIO" : `ENFOQUE DE ${categoria.toUpperCase()}`}
          </span>
          <p>
            {categoria === "Todas"
              ? "En conclusión, consideramos que El Heraldo tiene un enfoque principalmente informativo, porque busca comunicar hechos actuales y relevantes para la sociedad, apoyándose especialmente en textos escritos, fotografías y fuentes de información."
              : enfoques[categoria]}
          </p>
        </section>
        <section className="toolbar">
          <div>
            <h2>{categoria === "Todas" ? "Todos los análisis" : categoria}</h2>
            <span>{list.length} resultados</span>
          </div>
          <label>
            <span>⌕</span>
            <input value={q} onChange={(event) => setQ(event.target.value)} placeholder="Buscar por tema o titular..." />
          </label>
        </section>
        <section className="grid">
          {list.map((item, index) => (
            <article className="card" key={item.id} onClick={() => setSelected(item)} tabIndex={0}>
              <Brand categoria={item.categoria} compact />
              <div className="cardTop">
                <span style={{ background: color[item.categoria] }}>{item.categoria}</span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
              {item.etiqueta && <div className="tag">{item.etiqueta}</div>}
              <h3>{item.titulo}</h3>
              <p>{item.sumario}</p>
              <div className="cardFoot"><span>{item.tipo}</span><b>Ver análisis →</b></div>
            </article>
          ))}
        </section>
      </main>
      <footer><b>Ahora Noticias</b><span>Proyecto de análisis periodístico</span></footer>
      {selected && <Detail item={selected} close={() => setSelected(null)} />}
    </div>
  );
}
