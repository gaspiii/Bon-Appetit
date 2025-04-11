import { Link } from "react-router-dom";
import { Truck, Home, Phone, MessageCircle } from "lucide-react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Despacho a Domicilio",
      description: "Llevamos los productos directamente a tu hogar con un servicio rápido y seguro.",
      icon: <Truck className="w-10 h-10 text-[#F348B7]" />,
      details: [
        "Despacho gratuito dentro de la comuna",
        "Horario de despacho: Lunes a Viernes 10:00 - 18:00",
        "Pedidos mínimos: $15.000 para despacho gratuito",
        "Enviamos fotos del pedido antes de salir"
      ],
      contactLink: "https://wa.me/56997795134?text=Hola%20BonAppetitPet,%20quiero%20información%20sobre%20el%20despacho%20a%20domicilio"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020209] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="font-jost font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#B3F1FE] to-[#F348B7]">
            Nuestros Servicios
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo podemos hacerte la vida más fácil con tu mascota
          </p>
        </div>

        {/* Servicio centrado */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl"> {/* Ancho máximo para la card */}
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-[#13121a] rounded-xl shadow-lg border border-[#2d2d42] overflow-hidden hover:border-[#F348B7] transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#0f0f1a] p-3 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <h2 className="font-jost font-bold text-2xl text-[#B3F1FE]">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="font-poppins text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start font-poppins text-sm text-gray-400">
                        <span className="text-[#F348B7] mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 font-jost font-bold text-white bg-[#25D366] rounded-xl hover:bg-[#128C7E] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Contactar por WhatsApp
                    </a>
                    <a
                      href="tel:+56997795134"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 font-jost font-bold text-white border-2 border-[#F348B7] rounded-xl hover:bg-[#F348B7] transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Llamar ahora
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de información adicional */}
        <div className=" mx-auto bg-[#13121a] rounded-xl shadow-lg p-8 my-12 border border-[#2d2d42]">
          <h2 className="font-jost font-bold text-2xl md:text-3xl text-[#B3F1FE] mb-6">
            Preguntas frecuentes sobre el despacho
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-jost font-bold text-lg text-[#F348B7] mb-2">¿Cómo solicito un despacho?</h3>
              <p className="font-poppins text-gray-300">
                Puedes contactarnos directamente por WhatsApp o llamarnos para coordinar tu despacho. 
                También puedes agregar productos a tu carrito en nuestra tienda online y seleccionar la opción de despacho.
              </p>
            </div>
            
            <div>
              <h3 className="font-jost font-bold text-lg text-[#F348B7] mb-2">¿Qué zonas cubren?</h3>
              <p className="font-poppins text-gray-300">
                Actualmente realizamos despachos en toda la comuna de La Florida sin costo adicional. 
                Para otras comunas consultar disponibilidad y costos.
              </p>
            </div>
            
            <div>
              <h3 className="font-jost font-bold text-lg text-[#F348B7] mb-2">¿Cuánto tarda el despacho?</h3>
              <p className="font-poppins text-gray-300">
                Los despachos se realizan el mismo día para pedidos confirmados antes de las 15:00 hrs. 
                Después de esa hora, se programan para el día hábil siguiente.
              </p>
            </div>
          </div>
        </div>

        {/* Botón de volver */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 font-jost font-bold text-white border-2 border-[#B3F1FE] rounded-xl 
            hover:bg-[#B3F1FE] hover:text-black transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;