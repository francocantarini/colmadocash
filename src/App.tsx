import React, { useRef, useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Clock, 
  ShieldCheck, 
  Users, 
  Wallet,
  ClipboardList,
  UserCheck,
  Calendar,
  TrendingUp,
  Check,
  ArrowRight,
  Smartphone,
  Languages,
  MousePointerClick,
  Zap
} from 'lucide-react';
import FAQ from './components/FAQ';
import Contact from './pages/Contact';
import Logo from './components/Logo';
import Testimonials from './components/Testimonials';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 text-[#ff6a33]" />
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                to="/contacto"
                className="px-6 py-2 bg-[#ff6a33] text-white rounded-lg hover:bg-[#e55f2e] transition-colors"
              >
                Contacta
              </Link>
              <a 
                href="#download"
                className="hidden md:block h-12"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
                  alt="Disponible en Google Play"
                  className="h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Logo className="h-8 text-[#ff6a33]" />
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/contacto"
                className="px-6 py-2 bg-[#ff6a33] text-white rounded-lg hover:bg-[#e55f2e] transition-colors"
              >
                Contacta
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-400">
            © 2025 Colmado Cash. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#fff5f2] to-[#fff8f6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#ff6a33]">Moderniza tu colmado</span> con la tecnología que necesitas
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Administra tus fiados, clientes y finanzas de manera fácil y segura con la app diseñada especialmente para colmaderos dominicanos.
              </p>
              <a 
                href="#download"
                className="inline-block h-16 hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
                  alt="Disponible en Google Play"
                  className="h-full"
                />
              </a>
            </div>
            <div className="relative h-[450px]">
              <img 
                src="/f4.webp"
                alt="Colmado moderno" 
                className="absolute top-0 left-0 w-[75%] h-[400px] object-cover rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-10"
              />
              <img 
                src="/f2.webp"
                alt="Productos del colmado" 
                className="absolute bottom-4 right-0 w-56 h-48 object-cover rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-30 transform rotate-3"
              />
              <img 
                src="/f3.webp"
                alt="Gestión digital" 
                className="absolute top-12 right-12 w-40 h-32 object-cover rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-20 transform rotate-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Cómo funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-[#fff5f2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#ff6a33]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Registra tus clientes</h3>
              <p className="text-gray-600">
                Mantén un registro digital de todos tus clientes y sus historiales de fiado.
              </p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-[#fff5f2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-[#ff6a33]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evalúa la confianza</h3>
              <p className="text-gray-600">
                Conoce el score de confianza de cada cliente basado en su historial de pagos.
              </p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform">
              <div className="bg-[#fff5f2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-[#ff6a33]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Obtén financiamiento</h3>
              <p className="text-gray-600">
                Accede a financiamiento rápido y seguro a través de nuestros bancos aliados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" ref={videoSectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="video-container">
              <video
                ref={videoRef}
                controls
                playsInline
                muted
                loop
                className="w-full h-full"
              >
                <source src="/video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tan fácil como vender en tu colmado
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Colmado Cash se adapta perfectamente a la forma de trabajo de los colmados dominicanos. Desde Santo Domingo hasta Santiago, desde La Romana hasta Puerto Plata, estamos transformando la manera en que los colmados gestionan sus negocios.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fff5f2] p-3 rounded-lg">
                    <MousePointerClick className="h-6 w-6 text-[#ff6a33]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Solo 3 toques y listo</h3>
                    <p className="text-gray-600">
                      Registra tus ventas rapidito: selecciona el cliente, añade el monto ¡y pa' lante!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#fff5f2] p-3 rounded-lg">
                    <Smartphone className="h-6 w-6 text-[#ff6a33]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Si usas WhatsApp, puedes usar esto</h3>
                    <p className="text-gray-600">
                      No necesitas ser un experto en tecnología. Si manejas tu WhatsApp, ya sabes usar ColmadoCash.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#fff5f2] p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-[#ff6a33]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Funciona sin complicaciones</h3>
                    <p className="text-gray-600">
                      Trabaja offline cuando no hay internet y sincroniza automáticamente cuando vuelva la conexión.
                    </p>
                  </div>
                </div>
              </div>
              <a 
                href="#download"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#ff6a33] text-white rounded-lg hover:bg-[#e55f2e] transition-colors"
              >
                Pruébalo ahora
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#fff5f2] to-[#fff8f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Beneficios que transformarán tu negocio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#ff6a33] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Ahorra tiempo</h3>
              <p className="text-white">
                Automatiza la gestión de fiados y reduce el tiempo dedicado a tareas administrativas.
              </p>
            </div>
            <div className="bg-[#ff6a33] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <ShieldCheck className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Reduce riesgos</h3>
              <p className="text-white">
                Minimiza las pérdidas por fiados impagos con nuestro sistema de evaluación.
              </p>
            </div>
            <div className="bg-[#ff6a33] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Mejora relaciones</h3>
              <p className="text-white">
                Mantén una relación más transparente y organizada con tus clientes.
              </p>
            </div>
            <div className="bg-[#ff6a33] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Wallet className="h-8 w-8 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Acceso a capital</h3>
              <p className="text-white">
                Obtén financiamiento rápido y seguro cuando lo necesites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Control total de tus clientes y pagos
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fff5f2] p-3 rounded-lg">
                    <UserCheck className="h-6 w-6 text-[#ff6a33]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Perfiles detallados</h3>
                    <p className="text-gray-600">
                      Mantén toda la información importante de tus clientes organizada y accesible en un solo lugar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#fff5f2] p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-[#ff6a33]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Seguimiento de pagos</h3>
                    <p className="text-gray-600">
                      Visualiza fácilmente los pagos pendientes y mantén un registro claro de las fechas de vencimiento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#fff5f2] p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-[#ff6a33]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Score de confianza</h3>
                    <p className="text-gray-600">
                      Evalúa la confiabilidad de tus clientes con nuestro sistema inteligente de puntuación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/Compo20 (2).png"
                alt="Interfaz de la aplicación" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ />

      <section id="download" className="bg-gradient-to-r from-[#ff6a33] to-[#e55f2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¡Únete a la revolución de los colmados digitales!
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Descarga ahora y transforma tu colmado con herramientas digitales que te ayudarán a crecer, 
            mantener mejores relaciones con tus clientes y tomar decisiones más inteligentes para tu negocio.
          </p>
          <a 
            href="#download"
            className="inline-block h-16 hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
              alt="Disponible en Google Play"
              className="h-full"
            />
          </a>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/contacto" element={<Layout><Contact /></Layout>} />
    </Routes>
  );
}

export default App;