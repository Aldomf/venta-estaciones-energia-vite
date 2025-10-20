import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
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
  );
}
