import { Link } from "react-router-dom";

function ProductCategories() {
  const categories = [
    { name: "PERROS", image: "/dogs.png", link: "/perros" },
    { name: "GATOS", image: "/cats.png", link: "/gatos" },
    { name: "VARIOS", image: "/var.png", link: "/varios" },
    { name: "SERVICIOS", image: "/shipp.png", link: "/servicios" },
  ];

  return (
    <section className="bg-[#020209] text-white text-center py-5">
      <h3 className="text-lg md:text-xl  text-[#d96bf7] font-poppins">Conoce más sobre</h3>
      <h2 className="text-6xl font-extrabold font-jost  mb-8">NUESTROS PRODUCTOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6 md:px-12">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="group block bg-[#13121a] p-3 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-full h-48 flex justify-center items-center">
              <img src={category.image} alt={category.name} className="w-40 h-40 object-contain" />
            </div>
            <h3 className="text-2xl font-bold mt-4">{category.name}</h3>
            <p className="text-[#d96bf7] mt-2 group-hover:underline">CLICK PARA VER MÁS →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductCategories;
