import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_eic33gi',
        'template_jewnn6r',
        formData,
        'O67Fy-4e_kWd3kDyB'
      );

      setSubmitStatus({ success: true, message: '¡Mensaje enviado con éxito!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ success: false, message: 'Error al enviar el mensaje. Inténtalo nuevamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020209] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-jost font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#B3F1FE] to-[#F348B7]">
            Contáctanos
          </h1>
          <p className="font-poppins text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta? Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Información de contacto - Optimizado para móvil */}
          <div className="bg-[#13121a] rounded-xl shadow-lg p-6 sm:p-8 border border-[#2d2d42]">
            <h2 className="font-jost font-bold text-xl sm:text-2xl text-[#B3F1FE] mb-4 sm:mb-6">Información de contacto</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#0f0f1a] p-2 sm:p-3 rounded-lg text-[#F348B7] flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-jost font-bold text-base sm:text-lg mb-1">Dirección</h3>
                  <p className="font-poppins text-sm sm:text-base text-gray-300">San Jorge 785, La Florida, Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#0f0f1a] p-2 sm:p-3 rounded-lg text-[#F348B7] flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-jost font-bold text-base sm:text-lg mb-1">Correo electrónico</h3>
                  <p className="font-poppins text-sm sm:text-base text-gray-300">contacto@bonappetitpet.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#0f0f1a] p-2 sm:p-3 rounded-lg text-[#F348B7] flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-jost font-bold text-base sm:text-lg mb-1">Teléfono</h3>
                  <p className="font-poppins text-sm sm:text-base text-gray-300">+56 9 9779 5134</p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <a
                  href="https://wa.me/56997795134?text=Hola%20BonAppetitPet,%20tengo%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-jost font-bold text-white bg-[#25D366] rounded-xl hover:bg-[#128C7E] transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Chatear por WhatsApp
                </a>
              </div>
              <div className="mt-6 rounded-lg overflow-hidden max-h-60 w-full relative flex items-center justify-center bg-black/20">
                <img 
                  src="/local-exterior.png" 
                  alt="Mascotas felices en Bon Appétit Pet"
                  className="h-full object-contain"
                />
                
              </div>
            </div>
          </div>

          {/* Formulario de contacto - Optimizado para móvil */}
          <div className="bg-[#13121a] rounded-xl shadow-lg p-6 sm:p-8 border border-[#2d2d42]">
            <h2 className="font-jost font-bold text-xl sm:text-2xl text-[#B3F1FE] mb-4 sm:mb-6">Envíanos un mensaje</h2>
            
            {submitStatus && (
              <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg ${submitStatus.success ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'}`}>
                <p className={`font-poppins text-sm sm:text-base ${submitStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block font-poppins font-medium mb-1 sm:mb-2 text-sm sm:text-base">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#0f0f1a] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-poppins font-medium mb-1 sm:mb-2 text-sm sm:text-base">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#0f0f1a] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-poppins font-medium mb-1 sm:mb-2 text-sm sm:text-base">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#0f0f1a] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-poppins font-medium mb-1 sm:mb-2 text-sm sm:text-base">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#0f0f1a] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-poppins font-medium mb-1 sm:mb-2 text-sm sm:text-base">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#0f0f1a] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all text-sm sm:text-base"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-jost font-bold text-white bg-[#F348B7] rounded-xl hover:bg-[#d93fa0] transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;