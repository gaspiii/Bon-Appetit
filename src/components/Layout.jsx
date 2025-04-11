import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle, Bone, PawPrint, ShoppingCart, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-[#020209]">
      <nav className="fixed w-full backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-3 md:px-2 md:py-5">
          <div className="flex px-10 items-center justify-between">
            {/* Logo con texto */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-4">
              <img src="/logo.png" alt="Bon Appetit" className="h-10 md:h-15" />
              <span className="font-jost font-black text-xl md:text-3xl text-white">
                BON APPETIT
              </span>
            </Link>

            {/* Menú de navegación para desktop */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 font-jost">
              <Link 
                to="/" 
                className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 text-sm lg:text-base ${isActive('/') ? 'font-extrabold' : ''}`}
              >
                INICIO
              </Link>
                <Link 
                to="/productos" 
                className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 text-sm lg:text-base ${isActive('/productos') ? 'font-extrabold' : ''}`}
              >
                PRODUCTOS
              </Link>
              <Link 
                to="/servicios" 
                className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 text-sm lg:text-base ${isActive('/servicios') ? 'font-extrabold' : ''}`}
              >
                SERVICIOS
              </Link>
              <Link 
                to="/contacto" 
                className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 text-sm lg:text-base ${isActive('/contacto') ? 'font-extrabold' : ''}`}
              >
                CONTACTO
              </Link>
              <Link 
                to="/sobre-nosotros" 
                className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 text-sm lg:text-base ${isActive('/sobre-nosotros') ? 'font-extrabold' : ''}`}
              >
                SOBRE NOSOTROS
              </Link>
              
              {/* Botón Neon Cyan */}
              <Link
                to="/sobre-nosotros"
                className="relative px-4 py-1 md:px-6 md:py-2 font-jost font-bold text-black bg-[#9fe0ed] rounded-xl 
                shadow-[0_0_2px_#B3F1FE] hover:shadow-[0_0_15px_#B3F1FE] transition-all duration-300
                before:absolute before:inset-0 before:rounded-full before:bg-[#B3F1FE] before:blur-[20px] before:opacity-40 before:-z-10 text-sm md:text-base"
              >
                CONÓCENOS
              </Link>
            </div>

            {/* Botón del menú móvil */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menú móvil */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-[#13121a] pb-4 transition-all duration-300`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4 font-jost">
            <Link 
              to="/" 
              className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 py-2 border-b border-gray-700 ${isActive('/') ? 'font-extrabold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              INICIO
            </Link>
            <Link 
              to="/productos" 
              className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 py-2 border-b border-gray-700 ${isActive('/productos') ? 'font-extrabold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              PRODUCTOS
            </Link>
            <Link 
              to="/servicios" 
              className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 py-2 border-b border-gray-700 ${isActive('/servicios') ? 'font-extrabold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              SERVICIOS
            </Link>
            <Link 
              to="/contacto" 
              className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 py-2 border-b border-gray-700 ${isActive('/contacto') ? 'font-extrabold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACTO
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className={`text-white hover:text-[#B3F1FE] transition-colors duration-300 py-2 border-b border-gray-700 ${isActive('/sobre-nosotros') ? 'font-extrabold' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              SOBRE NOSOTROS
            </Link>
            <Link
              to="/sobre-nosotros"
              className="w-full text-center py-2 font-jost font-bold text-black bg-[#9fe0ed] rounded-xl 
              shadow-[0_0_2px_#B3F1FE] hover:shadow-[0_0_15px_#B3F1FE] transition-all duration-300 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONÓCENOS
            </Link>
          </div>
        </div>
        
        {/* Línea rosada neon en la parte inferior */}
        <div className="h-[1px] bg-[#F348B7] to-transparent shadow-[0_0_10px_#F348B7]"></div>
      </nav>

      <main className="flex-grow pt-20 md:pt-24">{children}</main>

      <footer className="bg-[#13121a] text-white py-8 md:py-10">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          
          {/* Información de la empresa (full width en móvil, 2 cols en tablet, 1 col en desktop) */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-[#d96bf7] mb-2 md:mb-3">Bon Appétit Pet</h3>
            <p className="text-gray-400 text-sm md:text-[0.925rem]">
              Descubre lo mejor en alimentos y accesorios para tu mascota.
              Calidad, amor y bienestar en un solo lugar.
              ¡Porque ellos también merecen lo mejor!
            </p>
          </div>

          {/* Productos (1 col en móvil y tablet, 1 col en desktop) */}
          <div>
            <h3 className="text-lg font-bold text-[#d96bf7] mb-2 md:mb-3">PRODUCTOS</h3>
            <ul className="text-gray-400 text-sm md:text-[0.925rem] space-y-2 md:space-y-3">
              <li className="flex items-center gap-2">
                <Bone className="w-4 h-4 md:w-5 md:h-5 text-[#d96bf7] flex-shrink-0" />
                <Link 
                  to="/productos?category=perros&subcategory=comida" 
                  className="hover:text-[#d96bf7] transition-colors duration-200"
                >
                  Alimentos premium
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <PawPrint className="w-4 h-4 md:w-5 md:h-5 text-[#d96bf7] flex-shrink-0" />
                <Link 
                  to="/productos?category=perros&subcategory=juguetes" 
                  className="hover:text-[#d96bf7] transition-colors duration-200"
                >
                  Juguetes
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-[#d96bf7] flex-shrink-0" />
                <Link 
                  to="/productos?category=perros&subcategory=accesorios" 
                  className="hover:text-[#d96bf7] transition-colors duration-200"
                >
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces útiles (1 col en móvil y tablet, 1 col en desktop) */}
          <div>
            <h3 className="text-lg font-bold text-[#d96bf7] mb-2 md:mb-3">ENLACES ÚTILES</h3>
            <ul className="text-gray-400 text-sm md:text-[0.925rem] space-y-2 md:space-y-3">
              <li><a href="#" className="hover:text-[#d96bf7] transition-colors duration-200 block">Productos</a></li>
              <li><a href="#" className="hover:text-[#d96bf7] transition-colors duration-200 block">Servicios</a></li>
              <li><a href="#" className="hover:text-[#d96bf7] transition-colors duration-200 block">Contacto</a></li>
              <li><a href="#" className="hover:text-[#d96bf7] transition-colors duration-200 block">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Contacto (full width en móvil, 2 cols en tablet, 1 col en desktop) */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold text-[#d96bf7] mb-2 md:mb-3">CONTACTO</h3>
            <ul className="text-gray-400 text-sm md:text-[0.925rem] space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#d96bf7] mt-0.5 flex-shrink-0" />
                <span>San jorge 785, La Florida, Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#d96bf7] flex-shrink-0" />
                <span>Bonapettitpet@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#d96bf7] flex-shrink-0" />
                <span>+56 9 9779 5134</span>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="https://wa.me/56997795134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d96bf7] transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-[#d96bf7] flex-shrink-0" />
                  <span className="hidden sm:inline">Chatear en </span>WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="text-center text-gray-500 text-xs md:text-sm pt-4 md:pt-6 border-t border-gray-800">
          © 2025 Bon Appétit Pet. Todos los derechos reservados.
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Layout;