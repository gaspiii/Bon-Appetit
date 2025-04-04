import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle, Bone, PawPrint, ShoppingCart } from "lucide-react";


function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#020209]">
      <nav className="fixed w-full  backdrop-blur-md z-50">
        <div className="container mx-auto px-2 py-5">
          <div className="flex items-center justify-between">
            {/* Logo con texto */}
            <Link to="/" className="flex items-center space-x-4">
              <img src="/logo.png" alt="Bon Appetit" className="h-15" />
              <span className="font-jost font-black text-3xl text-white">
                BON APPETIT
              </span>
            </Link>

            {/* Menú de navegación */}
            <div className="hidden md:flex items-center space-x-8 font-jost">
              <Link 
                to="/" 
                className="text-white font-extrabold hover:text-[#B3F1FE] transition-colors duration-300"
              >
                INICIO
              </Link>
              <Link 
                to="/productos" 
                className="text-white hover:text-[#B3F1FE] transition-colors duration-300"
              >
                PRODUCTOS
              </Link>
              <Link 
                to="/servicios" 
                className="text-white hover:text-[#B3F1FE] transition-colors duration-300"
              >
                SERVICIOS
              </Link>
              <Link 
                to="/contacto" 
                className="text-white hover:text-[#B3F1FE] transition-colors duration-300"
              >
                CONTACTO
              </Link>
              <Link 
                to="/sobre-nosotros" 
                className="text-white hover:text-[#B3F1FE] transition-colors duration-300"
              >
                SOBRE NOSOTROS
              </Link>
              
              {/* Botón Neon Cyan */}
              <Link
                to="/reservar"
                className="relative px-6 py-2 font-jost font-bold text-black bg-[#9fe0ed] rounded-xl 
                shadow-[0_0_2px_#B3F1FE] hover:shadow-[0_0_15px_#B3F1FE] transition-all duration-300
                before:absolute before:inset-0 before:rounded-full before:bg-[#B3F1FE] before:blur-[20px] before:opacity-40 before:-z-10"
              >
                CONÓCENOS
              </Link>
            </div>
          </div>
        </div>
        
        {/* Línea rosada neon en la parte inferior */}
        <div className="h-[1px] bg-[#F348B7] to-transparent shadow-[0_0_10px_#F348B7]"></div>
      </nav>

      <main className="flex-grow pt-24">{children}</main>

      <footer className="bg-[#13121a] text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Información de la empresa */}
        <div>
          <h3 className="text-lg font-bold text-[#d96bf7]">Bon Appétit Pet</h3>
          <p className="text-gray-400 text-sm mt-2">
            Descubre lo mejor en alimentos y accesorios para tu mascota.
            Calidad, amor y bienestar en un solo lugar.
            ¡Porque ellos también merecen lo mejor!
          </p>
        </div>

        {/* Productos */}
        <div>
          <h3 className="text-lg font-bold text-[#d96bf7]">PRODUCTOS</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Bone className="w-5 h-5 text-[#d96bf7]" /> Alimentos premium
            </li>
            <li className="flex items-center gap-2">
              <PawPrint className="w-5 h-5 text-[#d96bf7]" /> Juguetes
            </li>
            <li className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#d96bf7]" /> Accesorios
            </li>
          </ul>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-lg font-bold text-[#d96bf7]">ENLACES ÚTILES</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-[#d96bf7]">Productos</a></li>
            <li><a href="#" className="hover:text-[#d96bf7]">Servicios</a></li>
            <li><a href="#" className="hover:text-[#d96bf7]">Contacto</a></li>
            <li><a href="#" className="hover:text-[#d96bf7]">Sobre Nosotros</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold text-[#d96bf7]">CONTACTO</h3>
          <ul className="mt-2 text-gray-400 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-7 h-7 text-[#d96bf7]" />San jorge 785, La Florida, Santiago, Chile
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#d96bf7]" /> contacto@bonappetitpet.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#d96bf7]" /> +56 9 9779 5134
            </li>
            <li className="flex items-center gap-2">
            <a
                href="https://wa.me/56986999317?text=%C2%A1Hola%21%20estoy%20interesado%20en%20tus%20servicios%20de%20sitios%20web!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#d96bf7] transition-all duration-300"
                >
                <MessageCircle className="w-5 h-5 text-[#d96bf7]" />
                Chatear en WhatsApp
                </a>

            </li>
          </ul>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © 2025 Bon Appétit Pet. Todos los derechos reservados.
      </div>
    </footer>
    </div>
  );
}

export default Layout;