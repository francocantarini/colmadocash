import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Cómo funciona el sistema de fiados en Colmado Cash?",
    answer: "Colmado Cash te permite registrar y gestionar digitalmente los fiados de tus clientes. Puedes establecer límites, ver historiales de pago y recibir notificaciones de vencimiento, todo desde tu teléfono."
  },
  {
    question: "¿Qué requisitos necesito para usar la aplicación?",
    answer: "Solo necesitas un teléfono Android con acceso a internet y tu colmado registrado legalmente en República Dominicana. La aplicación es gratuita para descargar y configurar."
  },
  {
    question: "¿Cómo se calcula el score de confianza de los clientes?",
    answer: "El score se calcula automáticamente basado en varios factores: historial de pagos, puntualidad, monto promedio de fiados y tiempo como cliente. Este sistema te ayuda a tomar mejores decisiones sobre los créditos."
  },
  {
    question: "¿Es segura la información de mis clientes?",
    answer: "Sí, toda la información está protegida con encriptación de nivel bancario. Solo tú tienes acceso a los datos de tu negocio y cumplimos con todas las regulaciones de protección de datos de República Dominicana."
  },
  {
    question: "¿Cómo funciona el financiamiento a través de la app?",
    answer: "Trabajamos con bancos aliados en República Dominicana que evalúan tu historial de fiados y ventas para ofrecerte préstamos pre-aprobados. El proceso es 100% digital y los fondos pueden estar disponibles en 24-48 horas."
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer: "Sí, contamos con soporte técnico en República Dominicana disponible de lunes a sábado de 7am a 7pm. Puedes contactarnos a través de la app, WhatsApp o llamando a nuestro número de servicio al cliente."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-[#ff6a33]/20 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#fff5f2] transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#ff6a33]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#ff6a33]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-[#fff5f2]">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}