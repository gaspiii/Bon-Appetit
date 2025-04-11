import { Link } from "react-router-dom";

function PopularProducts() {
  const products = [
    { name: "WHISKAS 10KG ADULTO PARA GA...", image: "/gatos/whiskas.png", link: "/producto/whiskas" },
    { name: "SENIOR 10KG ADULTO PARA GA...", image: "/gatos/senior.png", link: "/producto/senior" },
    { name: "PEDIGREE PREMIO ADULTO PARA PE...", image: "/perros/pedigree.png", link: "/producto/pedigree" },
    { name: "TILLEJACS PREMIOS ADULTO PARA PE...", image: "/perros/littlejacs.png", link: "/producto/tillejacs" },
  ];

  return (
    <section className="bg-[#020209] text-white py-10 sm:py-12 md:py-16 text-center">
      <h3 className="text-base sm:text-lg md:text-xl text-[#d96bf7] font-poppins">Conoce Nuestros</h3>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-jost mt-1 sm:mt-2 mb-6 sm:mb-8">
        PRODUCTOS MÁS FAMOSOS
      </h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-12">
        {products.map((product, index) => (
          <Link 
            to={product.link} 
            key={index} 
            className="bg-[#13121a] p-3 sm:p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] flex flex-col items-center"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain" 
            />
            <h3 className="text-sm sm:text-base md:text-lg font-bold mt-2 sm:mt-3 md:mt-4">
              {product.name}
            </h3>
            <span className="text-[#d96bf7] text-xs sm:text-sm mt-1 sm:mt-2 inline-block hover:underline">
              CLICK PARA VER MÁS →
            </span>
          </Link>
        ))}
      </div>

      {/* Botón Ver Todos */}
      <div className="mt-6 sm:mt-8">
        <Link
          to="/productos"
          className="inline-block px-6 py-2 sm:px-8 sm:py-3 font-bold text-white border-2 border-[#d96bf7] rounded-xl 
          hover:bg-[#d96bf7] transition-all duration-300 text-sm sm:text-base"
        >
          VER TODOS →
        </Link>
      </div>
    </section>
  );
}

export default PopularProducts;