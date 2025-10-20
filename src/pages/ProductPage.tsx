import { useParams } from "react-router-dom";
import Carousel from "../components/ProductCarousel";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Carousel
        media={product.media}
        onClose={() => {}}
      />
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
}
