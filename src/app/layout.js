import "./globals.css";

export const metadata = {
  title: "Cristina Antunes de Rezende - Arte em Cerâmica",
  description:
    "Portfólio de Cristina Antunes de Rezende, ceramista e artista brasileira.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
