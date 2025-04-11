import { Link } from "react-router-dom";
import ProductCategories from "/src/components/ProductCategories.jsx";
import AboutUs from "/src/components/AboutUs.jsx";
import PopularProducts from "../components/PopularProducts";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";

  function Home() {
    console.log("Home se está mostrando");
    return (
      <div className="relative overflow-hidden bg-[#020209]">
{/* Hero Section */}
<section className="relative min-h-[80vh] md:min-h-screen flex items-center pt-12 md:pt-10 -mt-6 md:-mt-1 lg:-mt-28">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Contenido izquierdo */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
        <h1 className="font-jost font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
          Nutrición y Cuidado<br />para tu mascota
        </h1>
        <p className="font-poppins text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-lg">
          Descubre lo mejor en alimentos y accesorios para tu mascota. Calidad, amor y bienestar en un solo lugar.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/sobre-nosotros"
            className="relative px-6 py-2 sm:px-8 sm:py-3 font-jost font-bold text-black bg-[#9fe0ed] rounded-xl 
            shadow-[0_0_2px_#B3F1FE] hover:shadow-[0_0_15px_#B3F1FE] transition-all duration-300 
            flex justify-center items-center text-center text-sm sm:text-base"
          >
            CONÓCENOS
          </Link>
          <Link
  to="#LocationSection"
  className="inline-block px-6 py-2 sm:px-8 sm:py-3 font-jost font-bold text-white border-2 border-[#F348B7] rounded-xl 
  hover:bg-[#F348B7] transition-all duration-300 text-sm sm:text-base"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('LocationSection')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  LOCALÍZANOS
</Link>
        </div>
      </div>

      {/* Imagen del perro */}
      <div className="lg:w-1/2 relative mt-8 lg:mt-0">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#F348B7] opacity-30 blur-[80px] md:blur-[120px]"></div>
        <div className="absolute -right-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#B3F1FE] opacity-20 blur-[100px] md:blur-[150px]"></div>
        
        <div className="relative">
          <img 
            src="/hero_dog.png" 
            alt="Mascota feliz" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto z-10 relative"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Sección con borde curvado */}
<div className="relative w-full h-auto -mt-20 sm:-mt-32 md:-mt-40 z-10">
  <svg 
    viewBox="0 0 1200 200" 
    preserveAspectRatio="none" 
    className="w-full h-24 sm:h-32 md:h-40"
  >
    <path 
      d="M0,120 C200,180 400,40 600,100 S900,80 1200,120 L1200,200 L0,200 Z" 
      fill="#020209"
    />
    <path 
      d="M0,120 C200,180 400,40 600,100 S900,80 1200,120" 
      stroke="#F348B7"
      strokeWidth="0.8"
      fill="none"
      className="drop-shadow-[0_0_8px_rgba(243,72,183,0.8)]"
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
        <section id="LocationSection" className="relative   text-white  text-center">
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
  
