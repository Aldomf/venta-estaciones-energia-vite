import { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/ProductCarousel";
import { products } from "../data/products";

import { FaFacebookF, FaWhatsapp } from "react-icons/fa"; // usando react-icons también


export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [showCarousel, setShowCarousel] = useState(false);

  if (!product)
    return (
      <p className="text-center py-20 text-gray-500 text-lg">
        Producto no encontrado
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto mt-24 px-6 md:px-10 lg:px-16 font-inter text-gray-800">
      {/* Sección superior */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Botón de atrás */}
        <a
          href="/"
          className="fixed top-0 left-0 rounded-xl text-3xl lg:text-5xl z-50"
        >
          ⬅️
        </a>
        {/* Botón de llamada fijo */}
        <a
          href="tel:+5354377277"
          className="fixed top-0 right-0 bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-green-700 transition-colors duration-300 z-50"
        >
          📞 Llamar al +53 54377277
        </a>

        {/* Imagen principal */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={product.media[0].src}
            alt={product.name}
            className="lg:cursor-pointer lg:transition-transform lg:hover:scale-105 lg:duration-300"
            onClick={() => setShowCarousel(true)}
          />
          {/* Texto debajo de la imagen */}
          <p className="mt-3 text-sm text-gray-500 text-center">
            Dar click en la imagen para ver más imágenes y videos
          </p>
        </div>

        {/* Info principal */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            {product.description}
          </p>
          <p className="text-green-600 font-bold text-2xl">{product.price}</p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              <FaFacebookF className="w-5 h-5" /> Ir a Facebook
            </a>
            <a
              href="https://wa.me/5354377277?text=Hola%2C%20estoy%20interesado%20en%20el%20producto%20que%20vi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-xl text-center font-medium hover:bg-green-600 transition-colors duration-300"
            >
              <FaWhatsapp className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="lg:mt-10 flex flex-col lg:flex-row gap-10 w-full">
        {/* Detalles del producto */}
        <div className="mt-10 lg:mt-16 flex-1">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-6">
            Detalles del producto
          </h2>

          <div className="divide-y divide-dashed divide-gray-400">
            {product.details.map((detail, index) => (
              <div
                key={index}
                className={`flex justify-between py-3 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } px-4 rounded-md`}
              >
                <p className="font-semibold">{detail.label}</p>
                <p className="pl-6 text-right text-gray-700 max-w-[60%]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Especificaciones */}
        <div className="mt-10lg:mt-16 flex-1 mb-10">
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-6">
            Especificaciones del producto
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {product.specifications.map((spec, index) => (
              <p key={index} className="flex items-start gap-2">
                <span className="text-green-600 text-xl leading-none mt-0.5">
                  •
                </span>
                <span>
                  <b>{spec.title}</b> - {spec.text}
                </span>
              </p>
            ))}
          </div>
        </div>
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
              className="absolute top-2 right-2 text-white text-4xl font-bold z-50 hover:scale-110 transition"
              onClick={() => setShowCarousel(false)}
            >
              ×
            </button>

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
