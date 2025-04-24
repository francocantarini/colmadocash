import { useState, FormEvent } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  acceptPolicy: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptPolicy: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    if (!formData.acceptPolicy) {
      newErrors.acceptPolicy = 'Debes aceptar la política de privacidad';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPolicy) {
      setErrors({
        acceptPolicy: 'Debes aceptar la política de privacidad para enviar el mensaje'
      });
      return;
    }
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const { error } = await supabase
          .from('contact')
          .insert([
            {
              full_name: formData.fullName.trim(),
              email: formData.email.trim(),
              phone_number: formData.phone.trim() || null,
              subject: formData.subject.trim(),
              message: formData.message.trim()
            }
          ]);

        if (error) {
          throw error;
        }

        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          acceptPolicy: false
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({
          submit: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.'
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h2>
        <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
        <Link
          to="/"
          className="inline-block mt-8 px-6 py-2 bg-[#ff6a33] text-white rounded-lg hover:bg-[#e55f2e] transition-colors"
        >
          Ir al inicio
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo *
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          className={`w-full px-4 py-2 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#ff6a33] focus:border-transparent`}
          disabled={isSubmitting}
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#ff6a33] focus:border-transparent`}
          disabled={isSubmitting}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6a33] focus:border-transparent"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Asunto *
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          className={`w-full px-4 py-2 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#ff6a33] focus:border-transparent`}
          disabled={isSubmitting}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[#ff6a33] focus:border-transparent`}
          disabled={isSubmitting}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="acceptPolicy"
          checked={formData.acceptPolicy}
          onChange={(e) => setFormData({...formData, acceptPolicy: e.target.checked})}
          className="mt-1 h-4 w-4 text-[#ff6a33] focus:ring-[#ff6a33] border-gray-300 rounded"
          disabled={isSubmitting}
        />
        <label htmlFor="acceptPolicy" className="ml-2 text-sm text-gray-600">
          Acepto la política de privacidad y el tratamiento de mis datos personales *
        </label>
      </div>
      {errors.acceptPolicy && <p className="text-sm text-red-500">{errors.acceptPolicy}</p>}
      {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

      <button
        type="submit"
        className="w-full px-6 py-3 bg-[#ff6a33] text-white font-medium rounded-lg hover:bg-[#e55f2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting || !formData.acceptPolicy}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}