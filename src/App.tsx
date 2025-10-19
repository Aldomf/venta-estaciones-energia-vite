import { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductCarousel from "./components/ProductCarousel";

type Media = { type: "image" | "video"; src: string };

const product: {
  title: string;
  description: string;
  price: string;
  media: Media[];
  width: number;
  height: number;
} = {
  title: "Bluetti Elite 1",
  description: "Estación de energía portátil de 2000W",
  price: "$1,299 USD",
  media: [
    { type: "image", src: "/img/bluetti-1.jpg" },
    { type: "video", src: "/vid/blu.mp4" },
    { type: "image", src: "/img/bluetti-4.png" },
    { type: "image", src: "/img/bluetti-3.webp" },
  ],
  width: 894,
  height: 638,
};

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <ProductCard
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.media[0].src}
        width={product.width}
        height={product.height}
        onClick={() => setOpen(true)}
      />

      {open && (
        <ProductCarousel
          media={product.media}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
