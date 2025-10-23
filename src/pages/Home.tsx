import { Link } from "react-router-dom";
import { products } from "../data/products";
import { FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="fixed right-0 top-0 w-full py-1 flex flex-row justify-center items-center bg-white shadow-md">
        {/* Botón de llamada fijo */}
        <a
          href="tel:+5354377277"
          className=" bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-green-700 transition-colors duration-300 z-50 flex items-center justify-center gap-2"
        >
          <FaPhoneAlt /> Llamar al +53 54377277
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6 mt-16">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/producto/${product.id}`}
            className="block border rounded-xl overflow-hidden shadow hover:scale-105 transition"
          >
            <img src={product.media[0].src} alt={product.name} />
            <div className="p-2 font-semibold text-center">{product.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
