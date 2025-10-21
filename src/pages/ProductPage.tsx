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
        <p className="text-blue-500 mt-2">{product.phone}</p>
      </div>

      {/* Detalles del producto */}
      <div className="">
        <h2 className="font-bold text-3xl py-4">Detalles del producto</h2>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Marca</p>
          <p>BLUETTI</p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Capacidad energética</p>
          <p>1024 Watt-hora</p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Fuente de alimentación</p>
          <p className="pl-24 leading-tight">
            {" "}
            energía eléctrica y/o energía solar <br /> si cuenta con panel solar
          </p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Peso del artículo</p>
          <p>25 libras</p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Voltaje</p>
          <p>110 voltios (CA)</p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Potencia de salida</p>
          <p>1800 Watts</p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Característica especial</p>
          <p>Portátil</p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Voltaje</p>
          <p>110 voltios (CA)</p>
        </div>
        <div className="flex justify-between py-2 border-b-1 border-gray-400 border-dashed">
          <p className="font-semibold">Componentes incluidos</p>
          <p className="pl-24 leading-tight">
            Cable de carga CA, BLUETTI Elite 100 V2, Tornillo de conexión a
            tierra, Cable de carga solar, Manual de usuario
          </p>
        </div>
      </div>

      {/* Mas información */}
      <div>
        <h2 className="font-bold text-3xl py-4">Especificaciones del producto</h2>

        <p>
          • <b>[Alimenta 11 dispositivos]</b> - Con una capacidad de 1024Wh, la
          estación de energía portátil Elite 100 V2 ofrece una salida de 1800W
          AC (2700W de potencia máxima) y 11 puertos, ideal para acampar al aire
          libre, casas rodantes (RV) y trabajo remoto.
        </p>

        <p>
          • <b>[35% más pequeña, 30% más ligera]</b> - La Elite 100 V2 pesa 25
          libras y tiene un diseño compacto de 17L. Llévala con una sola mano
          gracias a su asa oculta, perfecta para transportarla desde la oficina
          en casa hasta el campamento o una cabaña sin conexión eléctrica.
        </p>

        <p>
          • <b>[Carga completa en 70 minutos]</b> - Recarga completamente la
          estación en solo 70 minutos mediante carga solar de 1000W o carga AC
          TurboBoost de 1200W. La carga desde el vehículo puede ser hasta 6
          veces más rápida con el cargador opcional Charger 1.
        </p>

        <p>
          • <b>[Respaldo confiable de emergencia]</b> - La Elite 100 V2 se
          activa instantáneamente durante un corte de energía, protegiendo el
          enrutador WiFi y la PC de apagones. Además, funciona silenciosamente
          con un nivel de ruido de solo 30 dB, similar al de una biblioteca.
        </p>

        <p>
          • <b>[Qué incluye]</b> - Estación de energía portátil BLUETTI Elite
          100 V2, cable de carga AC, cable de carga solar, tornillo de conexión
          a tierra y manual de usuario.
        </p>
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
