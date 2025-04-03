import { Link } from "react-router-dom";

function PopularProducts() {
  const products = [
    { name: "WHISKAS 10KG ADULTO PARA GA...", image: "/gatos/whiskas.png", link: "/producto/whiskas" },
    { name: "SENIOR 10KG ADULTO PARA GA...", image: "/gatos/senior.png", link: "/producto/senior" },
    { name: "PEDIGREE PREMIO ADULTO PARA PE...", image: "/perros/pedigree.png", link: "/producto/pedigree" },
    { name: "TILLEJACS PREMIOS ADULTO PARA PE...", image: "/perros/littlejacs.png", link: "/producto/tillejacs" },
  ];

  return (
    <section className="bg-[#020209] text-white py-16 text-center">
      <h3 className="text-lg md:text-xl text-[#d96bf7] font-poppins">Conoce Nuestros</h3>
      <h2 className="text-4xl font-extrabold font-jost mt-2 mb-8">PRODUCTOS MÁS FAMOSOS</h2>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12">
        {products.map((product, index) => (
          <Link 
            to={product.link} 
            key={index} 
            className="bg-[#13121a] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 flex flex-col items-center"
          >
            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain" />
            <h3 className="text-lg font-bold mt-4">{product.name}</h3>
            <span className="text-[#d96bf7] mt-2 inline-block hover:underline">CLICK PARA VER MÁS →</span>
          </Link>
        ))}
      </div>

      {/* Botón Ver Todos */}
      <div className="mt-8">
        <Link
          to="/productos"
          className="inline-block px-8 py-3 font-bold text-white border-2 border-[#d96bf7] rounded-xl 
          hover:bg-[#d96bf7] transition-all duration-300"
        >
          VER TODOS →
        </Link>
      </div>
    </section>
  );
}

export default PopularProducts;
