import { Link } from "react-router-dom";
import { Heart, MapPin, Clock, Phone, Mail } from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-[#020209] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="font-jost font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#B3F1FE] to-[#F348B7]">
            Sobre Nosotros
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce más sobre Bon Appétit Pet y nuestra pasión por las mascotas
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Imagen del local con mejoras - Filtro de degradado actualizado */}
          <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-[#F348B7] h-80 sm:h-96 lg:h-auto">
            <img 
              src="/local-exterior.png" 
              alt="Local Bon Appétit Pet" 
              className="w-full h-full object-cover"
            />
            {/* Filtro de degradado azul a rosado con mayor opacidad */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/50 to-pink-700/20 mix-blend-colory"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2">
                <MapPin className="text-[#B3F1FE]" />
                <span className="font-jost font-bold">San Jorge 785, La Florida, Santiago</span>
              </div>
            </div>
          </div>

          {/* Texto descriptivo ampliado */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#13121a] rounded-xl shadow-lg p-8 border border-[#2d2d42]">
              <h2 className="font-jost font-bold text-2xl text-[#B3F1FE] mb-6 flex items-center gap-3">
                <Heart className="text-[#F348B7]" />
                Nuestra Historia
              </h2>
              
              <div className="space-y-4 font-poppins text-gray-300">
                <p>
                  Bon Appétit Pet nació en 2023 de nuestra profunda pasión por los animales. 
                  Como amantes de las mascotas, entendíamos la frustración de encontrar productos 
                  de baja calidad que afectaban la salud de nuestros compañeros peludos.
                </p>
                <p>
                  Comenzamos como un pequeño emprendimiento familiar desde nuestro hogar, 
                  seleccionando personalmente cada producto que ofreceríamos. Hoy, gracias 
                  al apoyo de nuestra comunidad, tenemos un local físico en La Florida donde 
                  atendemos con el mismo cariño de siempre.
                </p>
                <p>
                  Lo que nos diferencia es nuestro proceso de selección: cada alimento, 
                  juguete o accesorio es probado primero por nuestras propias mascotas 
                  (¡tenemos 3 perros y 2 gatos como tester oficiales!). Solo ofrecemos 
                  productos que aprobarían sin dudarlo.
                </p>
                <p>
                  Además de la venta de productos, nos enorgullece ofrecer asesoría 
                  nutricional gratuita. Sabemos que cada mascota es única y merece una 
                  alimentación adaptada a sus necesidades específicas.
                </p>
                <p>
                  Nuestro sueño es convertirnos en el referente de cuidado animal en Santiago, 
                  manteniendo siempre la calidez y atención personalizada que nos caracteriza 
                  desde el primer día.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestros valores */}
        <div className="bg-[#13121a] rounded-xl shadow-lg p-8 border border-[#2d2d42] mb-16">
          <h2 className="font-jost font-bold text-2xl text-[#B3F1FE] mb-8 text-center">
            Nuestros Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Calidad Certificada",
                description: "Trabajamos directamente con proveedores que comparten nuestros estándares éticos y de calidad. Todos nuestros productos cuentan con certificaciones de sanidad animal.",
                icon: "⭐"
              },
              {
                title: "Amor Incondicional",
                description: "Para nosotros, las mascotas son familia. Cada recomendación que hacemos está basada en lo que elegiríamos para nuestros propios animales.",
                icon: "❤️"
              },
              {
                title: "Asesoría Experta",
                description: "Nuestro equipo recibe capacitación constante en nutrición animal. Ofrecemos planes alimenticios personalizados según edad, raza y condición de salud.",
                icon: "📚"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#0f0f1a] p-6 rounded-lg border border-[#2d2d42] hover:border-[#F348B7] transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-jost font-bold text-xl text-[#B3F1FE] mb-2">{item.title}</h3>
                <p className="font-poppins text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Horario y contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#13121a] rounded-xl shadow-lg p-8 border border-[#2d2d42]">
            <h2 className="font-jost font-bold text-2xl text-[#B3F1FE] mb-6 flex items-center gap-3">
              <Clock className="text-[#F348B7]" />
              Horario de Atención
            </h2>
            
            <ul className="space-y-4 font-poppins text-gray-300">
              <li className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="text-white">10:00 - 19:00 hrs</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span className="text-white">10:00 - 15:30 hrs</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos</span>
                <span className="text-white">Cerrado</span>
              </li>
              <li className="pt-4 text-sm text-[#B3F1FE]">
                * Horario especial para retiro de pedidos hasta las 20:00 hrs con cita previa
              </li>
            </ul>
          </div>

          <div className="bg-[#13121a] rounded-xl shadow-lg p-8 border border-[#2d2d42]">
            <h2 className="font-jost font-bold text-2xl text-[#B3F1FE] mb-6 flex items-center gap-3">
              <Phone className="text-[#F348B7]" />
              Contacto
            </h2>
            
            <ul className="space-y-4 font-poppins text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-[#F348B7] w-5 h-5" />
                <span>contacto@bonappetitpet.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#F348B7] w-5 h-5" />
                <span>+56 9 9779 5134</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-[#F348B7] w-5 h-5" />
                <span>San Jorge 785, La Florida, Santiago</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link
                to="/contacto"
                className="inline-block px-6 py-3 font-jost font-bold text-white border-2 border-[#B3F1FE] rounded-xl 
                hover:bg-[#B3F1FE] hover:text-black transition-all duration-300"
              >
                Escríbenos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;