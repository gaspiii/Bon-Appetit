import { Link } from "react-router-dom";

function ProductCategories() {
  const categories = [
    { name: "PERROS", image: "/dogs.png", link: "/perros" },
    { name: "GATOS", image: "/cats.png", link: "/gatos" },
    { name: "VARIOS", image: "/var.png", link: "/varios" },
    { name: "SERVICIOS", image: "/shipp.png", link: "/servicios" },
  ];

  return (
    <section className="bg-[#020209] text-white text-center py-8 md:py-12">
      <h3 className="text-base md:text-xl text-[#d96bf7] font-poppins">Conoce más sobre</h3>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-jost mb-6 md:mb-10">
        NUESTROS PRODUCTOS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6 md:px-12">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="group block bg-[#13121a] p-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <div className="w-full h-32 sm:h-40 md:h-48 flex justify-center items-center">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain" 
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 sm:mt-3 md:mt-4">
              {category.name}
            </h3>
            <p className="text-[#d96bf7] text-sm sm:text-base mt-1 md:mt-2 group-hover:underline">
              CLICK PARA VER MÁS →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductCategories;