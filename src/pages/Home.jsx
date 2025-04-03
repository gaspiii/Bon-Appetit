import { Link } from "react-router-dom";
import ProductCategories from "/src/components/ProductCategories.jsx";
import AboutUs from "/src/components/AboutUs.jsx";
import PopularProducts from "../components/PopularProducts";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";

function Home() {
    return (
      <div className="relative overflow-hidden bg-[#020209]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center -mt-20 md:-mt-24 lg:-mt-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Contenido izquierdo */}
              <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                <h1 className="font-jost font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                  Nutrición y Cuidado<br />para tu mascota
                </h1>
                <p className="font-poppins text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                  Descubre lo mejor en alimentos y accesorios para tu mascota. Calidad, amor y bienestar en un solo lugar. ¡Porque ellos también merecen lo mejor!
                </p>
                <div className="flex flex-wrap gap-4">
                <Link
                to="/conocenos"
                className="relative px-8 py-3 font-jost font-bold text-black bg-[#9fe0ed] rounded-xl 
                shadow-[0_0_2px_#B3F1FE] hover:shadow-[0_0_15px_#B3F1FE] transition-all duration-300 
                flex justify-center items-center text-center"
                >
                CONÓCENOS
                </Link>
                                <Link
                to="/localizanos"
                className="inline-block px-8 py-3 font-jost font-bold text-white border-2 border-[#F348B7] rounded-xl 
                hover:bg-[#F348B7] transition-all duration-300"
                >
                LOCALÍZANOS
                </Link>

                </div>
              </div>
  
              {/* Imagen del perro */}
              <div className="lg:w-1/2 relative">
                <div className="absolute -bottom-28 -left-24 w-80 h-80 rounded-full bg-[#F348B7] opacity-30 blur-[120px]"></div>
                <div className="absolute -right-16 w-96 h-96 rounded-full bg-[#B3F1FE] opacity-20 blur-[150px]"></div>
                
                <div className="relative">
                  <img 
                    src="/hero_dog.png" 
                    alt="Mascota feliz" 
                    className="w-full max-w-lg left-30 mx-auto z-10 relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Sección con borde curvado */}
        <div className="relative w-full h-auto -mt-40 z-10">
          <svg 
            viewBox="0 0 1200 200" 
            preserveAspectRatio="none" 
            className="w-full h-full"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path 
              d="M0,120 C200,180 400,40 600,100 S900,80 1200,120 L1200,200 L0,200 Z" 
              fill="#020209"
            />
            <path 
              d="M0,120 C200,180 400,40 600,100 S900,80 1200,120" 
              stroke="#F348B7"
              strokeWidth="0.8"
              fill="none"
              filter="url(#glow)"
            />
          </svg>
        </div>
        <section className="relative z-20  bg-[#020209] text-white  text-center">
        {/* Sección de productos */}
            <ProductCategories />
        </section>
        <section className="relative z-20  bg-[#020209] text-white  text-center">
        {/* Sección de productos */}
            <AboutUs />
        </section>
        <section className="relative   text-white  text-center">
        {/* Sección de productos */}
            <PopularProducts />
        </section>
        <section className="relative   text-white  text-center">
        {/* Sección de productos */}
            <LocationSection />
        </section>
        <section className="relative   text-white  text-center">
        {/* Sección de productos */}
            <ContactSection />
        </section>
      </div>
    );
  }
  
  export default Home;
  
