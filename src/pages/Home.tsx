import { Link } from "react-router-dom";
import { products } from "../data/products";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="fixed right-0 top-0 w-full py-1 flex flex-row justify-center items-center bg-white shadow-md z-50">
        {/* Botón de llamada fijo */}
        <a
          href="tel:+5354377277"
          className=" bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <FaPhoneAlt /> Llamar al +53 54377277
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-20">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/producto/${product.id}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={product.media[0].src}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-2 flex flex-col items-center text-center">
              <div className="p-2 font-semibold text-center">
                {product.name}
              </div>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {product.description}
              </p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-300 lg:cursor-pointer">
                Ver detalles
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
