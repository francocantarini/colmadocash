import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Contacta con nosotros
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta sobre Colmado Cash? Estamos aquí para ayudarte. 
          Completa el formulario y nos pondremos en contacto contigo lo antes posible.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}