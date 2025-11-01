"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

// import fotoCeramica from "../images/foto-ceramica.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pieces = [
    {
      id: 1,
      name: "Vaso Orgânico",
      description:
        "Peça única feita à mão com argila branca e esmalte roxo translúcido",
      image: "https://placehold.co/400x400/f8f9fa/8b5cf6?text=Vaso+Orgânico",
    },
    {
      id: 2,
      name: "Conjunto de Tigelas",
      description: "Tigelas artesanais perfeitas para servir com elegância",
      image: "/foto-ceramica.png",
    },
    {
      id: 3,
      name: "Escultura Abstrata",
      description: "Peça decorativa inspirada nas formas da natureza",
      image: "https://placehold.co/400x400/f8f9fa/8b5cf6?text=Escultura",
    },
    {
      id: 4,
      name: "Jogo de Xícaras",
      description:
        "Xícaras artesanais com detalhes em roxo e acabamento rústico",
      image: "https://placehold.co/400x400/f8f9fa/8b5cf6?text=Xícaras",
    },
    {
      id: 5,
      name: "Prato Decorativo",
      description: "Prato grande com texturas e esmaltes únicos",
      image: "https://placehold.co/400x400/f8f9fa/8b5cf6?text=Prato",
    },
    {
      id: 6,
      name: "Luminária Cerâmica",
      description: "Luminária artesanal que cria jogos de luz e sombra",
      image: "https://placehold.co/400x400/f8f9fa/8b5cf6?text=Luminária",
    },
  ];

  const whatsappLink = "https://wa.me/5583988878788";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-purple-700">
              Cristina De Rezende
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#inicio"
                  className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="#portfolio"
                  className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contato"
                  className="text-gray-900 hover:text-purple-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contato
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-purple-700 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-900 hover:text-purple-700"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block px-3 py-2 text-gray-900 hover:text-purple-700"
              >
                Sobre
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-900 hover:text-purple-700"
              >
                Portfolio
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 text-gray-900 hover:text-purple-700"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Arte em <span className="text-purple-700 block">Cerâmica</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Peças únicas criadas com paixão, técnica e a beleza das formas
            naturais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Encomendar Peças
            </a>
            <a
              href="#portfolio"
              className="border-2 border-purple-700 text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
            >
              Ver Portfolio
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-700" size={32} />
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Minha História
            </h3>
            <p className="text-gray-600 mb-4">
              Sou Cristina Antunes De Rezende, ceramista há mais de 15 anos.
              Minha jornada com a cerâmica começou como uma forma de expressão
              artística e se transformou em uma paixão que guia cada peça que
              crio.
            </p>
            <p className="text-gray-600 mb-4">
              Cada trabalho é feito à mão, com atenção aos detalhes e respeito
              pelo material. Utilizo técnicas tradicionais combinadas com
              abordagens contemporâneas para criar peças funcionais e
              esculturais.
            </p>
            <p className="text-gray-600">
              Minha inspiração vem da natureza, das formas orgânicas e dos
              contrastes entre o rústico e o refinado.
            </p>
          </div>
          <div className="relative max-w-md mx-auto">
            <img
              src="/foto-perfil.png"
              alt="Cristina Antunes De Rezende"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-purple-700 text-white p-4 rounded-lg">
              <p className="font-semibold">X+ anos</p>
              <p className="text-sm">de experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Cada peça é única e feita à mão com dedicação e amor pela cerâmica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pieces.map((piece) => (
              <div
                key={piece.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={piece.image}
                  alt={piece.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {piece.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{piece.description}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-purple-700 text-white py-2 px-4 rounded-md font-medium hover:bg-purple-800 transition"
                  >
                    Encomendar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Ficou interessado em alguma peça ou quer encomendar algo
            personalizado?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Phone className="text-purple-700 mx-auto mb-3" size={24} />
              <p className="font-semibold">WhatsApp</p>
              <a
                href={whatsappLink}
                className="text-purple-700 hover:underline"
              >
                Enviar mensagem
              </a>
            </div>
            <div>
              <Mail className="text-purple-700 mx-auto mb-3" size={24} />
              <p className="font-semibold">E-mail</p>
              <a
                href="mailto:contato@cristinaantunes.com.br"
                className="text-purple-700 hover:underline"
              >
                email@gmail.com
              </a>
            </div>
            <div>
              <MapPin className="text-purple-700 mx-auto mb-3" size={24} />
              <p className="font-semibold">Localização</p>
              <p>João Pessoa, PB</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-purple-700 hover:text-purple-800"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-purple-700 hover:text-purple-800"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2024 Cristina Antunes De Rezende. Todos os direitos reservados.</p>
        <p className="text-gray-400 text-sm mt-1">
          Peças únicas feitas à mão com amor e dedicação
        </p>
      </footer>
    </div>
  );
}
