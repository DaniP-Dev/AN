import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "El Observador | Análisis periodístico", description: "Análisis de noticias de El Heraldo" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
