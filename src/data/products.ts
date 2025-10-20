export type Media = { type: "image" | "video"; src: string };

export type Product = {
  id: string;
  name: string;
  media: Media[];
  description: string;
  price: string;
  phone: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Estación 500W",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/bluetti-1.jpg" },
      { type: "video", src: "/venta-estaciones-energia-vite/vid/blu.mp4" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/bluetti-3.png" },
    ],
    description: "Ideal para camping, con salida USB-C y panel solar.",
    price: "$499",
    phone: "+1234567890",
  },
  {
    id: "2",
    name: "Estación 1000W",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/bluetti-1.jpg" },
      { type: "video", src: "/venta-estaciones-energia-vite/vid/blu.mp4" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/bluetti-4.png" },
    ],
    description: "Mayor capacidad, perfecta para viajes largos.",
    price: "$899",
    phone: "+1234567890",
  },
];
