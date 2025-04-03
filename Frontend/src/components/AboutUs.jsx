import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <section className="relative bg-[#020209] text-white py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Texto */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold font-jost">
            Conoce Más <br /> <span className="text-white">Sobre Nosotros</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-lg">
            En Bon Appetit Pet, nos dedicamos a ofrecer productos de calidad para el cuidado y alimentación de tus mascotas. 
            Creemos que cada mascota merece lo mejor, por eso seleccionamos con amor cada producto.
          </p>
          <Link
            to="/sobre-nosotros"
            className="inline-block mt-6 px-6 py-3 font-bold text-black bg-[#9fe0ed] rounded-xl 
            shadow-[0_0_2px_#B3F1FE] hover:shadow-[0_0_15px_#B3F1FE] transition-all duration-300"
          >
            SOBRE NOSOTROS
          </Link>
        </div>

        {/* Imagen con luces */}
        <div className="lg:w-1/2 relative flex justify-center">
          {/* Luces detrás */}
          <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-[#F348B7] opacity-30 blur-[120px]"></div>
          <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-[#B3F1FE] opacity-20 blur-[150px]"></div>

          {/* Imagen */}
          <img
            src="/about-us.png" 
            alt="Perros y gatos juntos"
            className="relative w-full max-w-lg z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
