"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import dmasLogo from "../dmas.png";
import superLikeLogo from "../superlike.webp";
import { categorias, noticias, type Categoria, type Noticia } from "../data/noticias";

const color: Record<Categoria, string> = {
  Economía: "#147d64", Política: "#c63336", Entretenimiento: "#9a4db1",
  Región: "#d06d24", Cultura: "#3467a4", Deportes: "#197348",
};


function SectionBrand({ categoria, compact = false }: { categoria: Categoria; compact?: boolean }) {
  if (categoria === "Deportes") return <div className={`sectionBrand dmas ${compact ? "compact" : ""}`}><Image src={dmasLogo} alt="D Más" priority={false} /></div>;
  if (categoria === "Entretenimiento") return <div className={`sectionBrand superlike ${compact ? "compact" : ""}`}><Image src={superLikeLogo} alt="Super Like" priority={false} /></div>;
  return <div className={`sectionBrand ahora ${compact ? "compact" : ""}`}><span className="anMark">AN</span><span className="anWords"><b>AHORA</b><small>NOTICIAS</small></span></div>;
}

function Detail({ item, close }: { item: Noticia; close: () => void }) {
  return <div className="modal" role="dialog" aria-modal="true" aria-label={`Análisis de ${item.titulo}`} onMouseDown={close}>
    <article className="detail" onMouseDown={(e)=>e.stopPropagation()}>
      <button className="close" onClick={close} aria-label="Cerrar">×</button>
      <SectionBrand categoria={item.categoria} />
      <div className="eyebrow" style={{color:color[item.categoria]}}>{item.categoria}{item.etiqueta ? ` · ${item.etiqueta}` : ""}</div>
      <h2>{item.titulo}</h2>
      <p className="summary">{item.sumario}</p>
      <section><h3>Lead o entradilla</h3><p className="lead">{item.lead}</p></section>
      <section><h3>¿En qué se enfoca?</h3><p>{item.enfoque}</p></section>
      <section><h3>Las W presentes</h3><div className="wgrid">{Object.entries(item.w).map(([k,v])=><div className="witem" key={k}><b>{k}</b><span>{v}</span></div>)}</div></section>
      <section className="type"><span>Tipo y valor noticioso</span><strong>{item.tipo}</strong></section>
      {item.enlace && <a className="origin" href={item.enlace} target="_blank" rel="noreferrer">Leer noticia original ↗</a>}
    </article>
  </div>
}

export default function Portal() {
  const [categoria, setCategoria] = useState<Categoria | "Todas">("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [seleccionada, setSeleccionada] = useState<Noticia | null>(null);
  const filtradas = useMemo(() => noticias.filter(n => (categoria === "Todas" || n.categoria === categoria) && `${n.titulo} ${n.sumario} ${n.tipo}`.toLowerCase().includes(busqueda.toLowerCase())), [categoria,busqueda]);
  return <>
    <header className="top"><div className="topline"></div><div className="mast"><span className="issue">BOLETÍN DIGITAL · 2026</span><div className="mainBrand"><span className="mainMark">AN</span><span><b>AHORA</b><small>NOTICIAS</small></span></div><p>Análisis periodístico de <b>El Heraldo</b></p></div>
      <nav>{["Todas",...categorias.map(c=>c.nombre)].map(c=><button key={c} onClick={()=>setCategoria(c as Categoria|"Todas")} className={categoria===c?"active":""}>{c}</button>)}</nav>
    </header>
    <main>
      <section className="hero"><div><div className="kicker">LABORATORIO DE PERIODISMO</div><h2>Cómo se construye<br/><em>una noticia</em></h2><p>Una lectura comparada de titulares, sumarios, leads, seis W y valores noticiosos en seis secciones.</p></div><div className="heroGraphic"><span>6</span><small>secciones</small><i></i><span>30</span><small>noticias analizadas</small></div></section>
      <section className="intro"><span>ENFOQUE GENERAL</span><p>El medio privilegia un enfoque informativo: comunica hechos actuales mediante titulares directos, sumarios de contexto y leads que concentran los datos esenciales. Las fotografías, cifras, declaraciones y enlaces amplían la comprensión del lector.</p></section>
      <section className="toolbar"><div><h2>{categoria === "Todas" ? "Todos los análisis" : categoria}</h2><span>{filtradas.length} resultados</span></div><label><span>⌕</span><input value={busqueda} onChange={e=>setBusqueda(e.target.value)} placeholder="Buscar por tema o titular..." /></label></section>
      <section className="grid">{filtradas.map((n,i)=><article className="card" key={n.id} onClick={()=>setSeleccionada(n)} tabIndex={0} onKeyDown={e=>e.key==="Enter"&&setSeleccionada(n)}>
        <SectionBrand categoria={n.categoria} compact />
        <div className="cardTop"><span style={{background:color[n.categoria]}}>{n.categoria}</span><small>{String(i+1).padStart(2,"0")}</small></div>
        {n.etiqueta && <div className="tag">{n.etiqueta}</div>}<h3>{n.titulo}</h3><p>{n.sumario}</p><div className="cardFoot"><span>{n.tipo}</span><b>Ver análisis →</b></div>
      </article>)}</section>
      {filtradas.length===0 && <div className="empty">No encontramos noticias con esa búsqueda.</div>}
    </main>
    <footer><b>Ahora Noticias</b><span>Proyecto de análisis periodístico · El Heraldo</span><span>Next.js · App Router</span></footer>
    {seleccionada && <Detail item={seleccionada} close={()=>setSeleccionada(null)} />}
  </>;
}
