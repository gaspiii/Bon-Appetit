import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Products() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [subcategoryFilter, setSubcategoryFilter] = useState("all");
    const [priceFilter, setPriceFilter] = useState("all");
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [isFirstOrder, setIsFirstOrder] = useState(true);
    const [availableSubcategories, setAvailableSubcategories] = useState([]);

  
    // Datos de productos de ejemplo
    const products = [
      {
        id: 1,
        name: "Alimento Premium para Perros",
        description: "Alimento balanceado con alto contenido proteico para razas medianas y grandes",
        price: 35990,
        category: "perros",
        subcategory: "comida",
        image: "/perros/fit_formula.png"
      },
      {
        id: 2,
        name: "Cama Ortopédica para Gatos",
        description: "Cama ergonómica con memory foam para mayor comodidad",
        price: 24990,
        category: "gatos",
        subcategory: "comida",
        image: "/gatos/senior.png"
      },
      {
        id: 3,
        name: "Juguete para Mascotas Varias",
        description: "Juguete interactivo resistente para aves y pequeños mamíferos",
        price: 11990,
        category: "varios",
        subcategory: "comida",
        image: "/perros/pedigree.png"
      },
      {
        id: 4,
        name: "Shampoo Hidratante para Perros",
        description: "Fórmula suave con avena para pieles sensibles",
        price: 9990,
        category: "perros",
        subcategory: "premios",
        image: "/perros/littlejacs.png"
      },
      {
        id: 5,
        name: "Rascador para Gatos",
        description: "Rascador vertical con plataformas y juguete colgante",
        price: 22990,
        category: "gatos",
        subcategory: "juguetes",
        image: "/gatos/whiskas.png"
      },
      {
        id: 6,
        name: "Alimento para Conejos",
        description: "Mezcla de semillas, hierbas y vegetales deshidratados",
        price: 7990,
        category: "varios",
        subcategory: "correas",
        image: "/perros/pedigree.png"
      }
    ];

    const subcategoriesByCategory = {
        perros: ["comida", "premios", "camas", "juguetes", "correas", "otros"],
        gatos: ["comida", "premios", "camas", "juguetes", "arena", "rascadores", "otros"],
        varios: ["comida", "premios", "camas", "juguetes", "arena", "rascadores", "otros"]

    }

    useEffect(() => {
        if (categoryFilter === "all") {
          setAvailableSubcategories([]);
          setSubcategoryFilter("all");
        } else {
          setAvailableSubcategories(subcategoriesByCategory[categoryFilter] || []);
          setSubcategoryFilter("all");
        }
      }, [categoryFilter]);
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
        const matchesSubcategory = subcategoryFilter === "all" || product.subcategory === subcategoryFilter;
        const matchesPrice = priceFilter === "all" || 
                           (priceFilter === "under20" && product.price < 20000) ||
                           (priceFilter === "20to50" && product.price >= 20000 && product.price <= 50000) ||
                           (priceFilter === "over50" && product.price > 50000);
        
        return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
      });
    // Formatear precio en CLP
    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-CL', { 
        style: 'currency', 
        currency: 'CLP',
        minimumFractionDigits: 0 
      }).format(price);
    };
  
    // Manejar click en "Pedir despacho Gratis"
    const handleOrderClick = (product) => {
        setSelectedProduct(product);
        if (isFirstOrder && cart.length === 0) {
          setShowPopup(true);
        } else {
          addToCart(product);
        }
      };
  
    // Añadir producto al carrito
    const addToCart = (product, quantity = 1, redirectToWhatsApp = false) => {
        const newCart = [...cart];
        const existingItemIndex = newCart.findIndex(item => item.id === product.id);
        
        if (existingItemIndex >= 0) {
          newCart[existingItemIndex].quantity += quantity;
        } else {
          newCart.push({ ...product, quantity });
        }
        
        setCart(newCart);
        setShowPopup(false);
        setShowCart(true);
        setIsFirstOrder(false);
        
        if (redirectToWhatsApp) {
          // Crear mensaje temporal solo con este producto
          const tempMessage = `Hola, me gustaría hacer un despacho con el producto:%0A%0A-1x - ${product.name} ${formatPrice(product.price)}`;
          window.open(`https://wa.me/56997795134?text=${tempMessage}`, '_blank');
        }
      };
    
    // Eliminar producto del carrito
    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
        if (cart.length === 1) {
          setShowCart(false);
          setIsFirstOrder(true);
        }
      };
    
      // Actualizar cantidad de producto
      const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        
        setCart(cart.map(item => 
          item.id === productId 
            ? { ...item, quantity: newQuantity } 
            : item
        ));
      };
    
      // Generar mensaje de WhatsApp
      const generateWhatsAppMessage = () => {
        const productsList = cart.map(item => 
          `-${item.quantity}x - ${item.name} ${formatPrice(item.price)}`
        ).join('%0A');
        
        const message = `Hola, me gustaría hacer un despacho con los productos:%0A%0A${productsList}`;
        return message;
      };
  return (
    <div className="min-h-screen bg-[#020209] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Popup de confirmación - solo se muestra para el primer producto */}
      {showPopup && isFirstOrder && cart.length === 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-[#0f0f1a] p-6 rounded-xl max-w-md w-full mx-4 border border-[#F348B7]">
              <h3 className="font-jost font-bold text-xl mb-4 text-[#B3F1FE]">
                Confirmar despacho
              </h3>
              <p className="font-poppins mb-6">
                ¿Deseas pedir despacho solo para <span className="font-bold">{selectedProduct.name}</span> o agregar más productos?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    addToCart(selectedProduct, 1, true); // Redirige directo a WhatsApp
                  }}
                  className="flex-1 px-4 py-2 font-jost font-bold text-white bg-[#F348B7] rounded-xl hover:bg-[#d43fa0] transition-colors"
                >
                  Solo este
                </button>
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setShowCart(true);
                  }}
                  className="flex-1 px-4 py-2 font-jost font-bold text-white border-2 border-[#F348B7] rounded-xl hover:bg-[#F348B7] transition-colors"
                >
                  Agregar más
                </button>
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-1 px-4 py-2 font-jost font-bold text-white border-2 border-gray-500 rounded-xl hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

      {/* Carrito flotante */}
      {showCart && (
          <div className="fixed bottom-4 right-4 bg-[#0f0f1a] rounded-xl shadow-2xl border border-[#F348B7] z-40 w-full max-w-xs">
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-jost font-bold text-lg text-[#B3F1FE]">
                  Tu despacho
                </h3>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>
              
              <div className="max-h-64 overflow-y-auto mb-4">
                {cart.length === 0 ? (
                  <p className="font-poppins text-sm text-gray-400">No hay productos</p>
                ) : (
                  <ul className="space-y-3">
                    {cart.map(item => (
                      <li key={item.id} className="flex justify-between items-center">
                        <div className="flex-1">
                          <p className="font-poppins font-medium">{item.name}</p>
                          <p className="font-poppins text-sm text-gray-300">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-[#1a1a2e] rounded hover:bg-[#2d2d42]"
                          >
                            -
                          </button>
                          <span className="font-poppins w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-[#1a1a2e] rounded hover:bg-[#2d2d42]"
                          >
                            +
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300 ml-2"
                          >
                            ×
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="flex justify-end space-x-2">
                {cart.length > 0 && (
                  <>
                    <button
                      onClick={() => setCart([])}
                      className="px-3 py-1 text-sm font-poppins text-red-400 hover:text-red-300"
                    >
                      Vaciar
                    </button>
                    <a
                      href={`https://wa.me/56997795134?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 font-jost font-bold text-white bg-[#25D366] rounded-xl hover:bg-[#128C7E] transition-colors"
                    >
                      Confirmar por WhatsApp
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="font-jost font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#B3F1FE] to-[#F348B7]">
            Nuestros Productos
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre la mejor selección de productos para el cuidado de tu mascota
          </p>
        </div>

        {/* Filtros y búsqueda */}
        <div className="mb-12 bg-[#0f0f1a] p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Barra de búsqueda */}
              <div>
                <label htmlFor="search" className="block font-poppins font-medium mb-2">
                  Buscar productos
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Nombre o descripción..."
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filtro por categoría */}
              <div>
                <label htmlFor="category" className="block font-poppins font-medium mb-2">
                  Categoría
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">Todos los productos</option>
                  <option value="perros">Perros</option>
                  <option value="gatos">Gatos</option>
                  <option value="varios">Varios</option>
                </select>
              </div>

              {/* Filtro por subcategoría */}
              <div>
                <label htmlFor="subcategory" className="block font-poppins font-medium mb-2">
                  Subcategoría
                </label>
                <select
                  id="subcategory"
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all"
                  value={subcategoryFilter}
                  onChange={(e) => setSubcategoryFilter(e.target.value)}
                  disabled={categoryFilter === "all"}
                >
                  <option value="all">Todas las subcategorías</option>
                  {availableSubcategories.map(subcat => (
                    <option key={subcat} value={subcat}>
                      {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por precio */}
              <div>
                <label htmlFor="price" className="block font-poppins font-medium mb-2">
                  Rango de precio
                </label>
                <select
                  id="price"
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#2d2d42] focus:border-[#F348B7] focus:ring-1 focus:ring-[#F348B7] transition-all"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                >
                  <option value="all">Todos los precios</option>
                  <option value="under20">Menos de $20.000</option>
                  <option value="20to50">$20.000 - $50.000</option>
                  <option value="over50">Más de $50.000</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tabla de productos - AÑADIR COLUMNA DE SUBCATEGORÍA */}
          <div className="overflow-x-auto bg-[#0f0f1a] rounded-xl shadow-lg">
            <table className="min-w-full divide-y divide-[#2d2d42]">
              <thead className="bg-[#1a1a2e]">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left font-jost font-bold text-[#B3F1FE] uppercase tracking-wider">
                    Producto
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-jost font-bold text-[#B3F1FE] uppercase tracking-wider">
                    Descripción
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-jost font-bold text-[#B3F1FE] uppercase tracking-wider">
                    Subcategoría
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-jost font-bold text-[#B3F1FE] uppercase tracking-wider">
                    Precio
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-jost font-bold text-[#B3F1FE] uppercase tracking-wider">
                    Despacho
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#0f0f1a] divide-y divide-[#2d2d42]">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-[#1a1a2e] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16">
                            <img className="h-16 w-16 rounded-lg object-cover" src={product.image} alt={product.name} />
                          </div>
                          <div className="ml-4">
                            <div className="font-jost font-bold text-white">{product.name}</div>
                            <div className="font-poppins text-sm text-gray-300 capitalize">{product.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-poppins text-gray-300">{product.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-poppins text-gray-300 capitalize">
                          {product.subcategory}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-jost font-bold text-[#F348B7]">{formatPrice(product.price)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => handleOrderClick(product)}
                          className="inline-block px-6 py-2 font-jost font-bold text-white border-2 border-[#F348B7] rounded-xl hover:bg-[#F348B7] transition-all duration-300"
                        >
                          Pedir despacho Gratis
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center font-poppins text-gray-400">
                      No se encontraron productos que coincidan con los filtros
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

      

        {/* Botón de volver */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 font-jost font-bold text-white border-2 border-[#B3F1FE] rounded-xl 
            hover:bg-[#B3F1FE] hover:text-black transition-all duration-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;