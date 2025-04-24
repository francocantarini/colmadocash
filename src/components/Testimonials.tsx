import { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Juan Pérez",
    role: "Propietario de Colmado El Progreso",
    text: "Colmado Cash ha revolucionado la forma en que manejo mi negocio. El control de fiados es mucho más fácil y profesional ahora.",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Mario Torres",
    role: "Dueño de Colmado La Bendición",
    text: "Desde que uso esta aplicación, he reducido significativamente las pérdidas por fiados no pagados.",
    image: "/c3.svg"
  },
  {
    name: "Pedro Martínez",
    role: "Gerente de Colmado San José",
    text: "La aplicación es súper fácil de usar. Mis clientes están más contentos porque todo es más organizado.",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Ana Mercado",
    role: "Propietaria de Colmado El Vecino",
    text: "El sistema de puntuación me ayuda a tomar mejores decisiones. Ahora tengo más confianza al dar fiado.",
    image: "https://images.unsplash.com/photo-1581475319737-4ae69b8926c7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Luis Medina",
    role: "Dueño de Colmado La Esquina",
    text: "Lo que más me gusta es que puedo usar la app sin internet. Es perfecta para zonas con mala señal.",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Rosa Jiménez",
    role: "Propietaria de Colmado Rosa",
    text: "La gestión de fiados nunca había sido tan profesional. Mis clientes aprecian la transparencia del sistema.",
    image: "/c1.svg"
  }
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // Clone testimonials for seamless loop
    const items = track.children;
    const itemWidth = items[0].getBoundingClientRect().width;
    const totalWidth = items.length * itemWidth;

    // Clone enough items to fill the container twice
    const cloneCount = Math.ceil((2 * container.offsetWidth) / itemWidth);
    for (let i = 0; i < cloneCount; i++) {
      const index = i % items.length;
      const clone = items[index].cloneNode(true);
      track.appendChild(clone);
    }

    let currentTranslate = 0;
    let animationFrameId: number;

    const animate = () => {
      currentTranslate -= 0.3; // Reduced speed from 1 to 0.3
      
      // Reset position when we've scrolled past all original items
      if (Math.abs(currentTranslate) >= totalWidth) {
        currentTranslate = 0;
      }
      
      track.style.transform = `translateX(${currentTranslate}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Lo que dicen nuestros clientes
        </h2>

        <div 
          ref={containerRef} 
          className="overflow-hidden"
        >
          <div 
            ref={trackRef}
            className="flex gap-6"
            style={{ 
              willChange: 'transform',
              transition: 'transform 0.05s linear'
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[300px] md:w-[350px]"
              >
                <div className="bg-gradient-to-br from-white to-[#fff5f2] rounded-2xl p-6 h-full border border-[#ff6a33]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-[#ff6a33]/10"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-[#ff6a33]/80 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#ff6a33] fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}