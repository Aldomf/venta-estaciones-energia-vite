import { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/ProductCarousel";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [showCarousel, setShowCarousel] = useState(false);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="mt-20 p-6">
      {/* Imagen principal */}
      <img
        src={product.media[0].src}
        alt={product.name}
        className="cursor-pointer"
        onClick={() => setShowCarousel(true)}
      />

      {/* Info principal */}
      <div className="">
        <h1 className="text-gray-800 text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <p className="text-green-600 font-bold mt-2">{product.price}</p>
      </div>

      {/* Detalles del producto */}
      <div>
        <h2 className="font-bold text-3xl py-4">Detalles del producto</h2>
        {product.details.map((detail, index) => (
          <div
            key={index}
            className="flex justify-between py-2 border-b border-gray-400 border-dashed"
          >
            <p className="font-semibold">{detail.label}</p>
            <p className="pl-6 leading-tight text-right">{detail.value}</p>
          </div>
        ))}
      </div>

      {/* Especificaciones */}
      <div>
        <h2 className="font-bold text-3xl py-4">
          Especificaciones del producto
        </h2>
        {product.specifications.map((spec, index) => (
          <p key={index} className="mb-3">
            • <b>{spec.title}</b> - {spec.text}
          </p>
        ))}
      </div>

      {/* Modal del carrusel */}
      {showCarousel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowCarousel(false)}
        >
          <div
            className="relative w-[90vw] max-w-3xl"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click en el carrusel
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
              onClick={() => setShowCarousel(false)}
            >
              ×
            </button>

            {/* Carrusel */}
            <Carousel
              media={product.media}
              onClose={() => setShowCarousel(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
