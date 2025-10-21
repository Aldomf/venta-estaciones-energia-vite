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
    name: "BLUETTI Elite 100 V2",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/bluetti-1.jpg" },
      { type: "video", src: "/venta-estaciones-energia-vite/vid/blu.mp4" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/bluetti-3.png" },
    ],
    description: "Estación de energía portátil (Nuevo modelo 2025), respaldo de batería LiFePO4 de 1024 Wh con 4 tomas de corriente CA de 1800 W (3600 W de pico), 35% más compacta, generador solar para campismo, cortes de energía y respaldo tipo UPS",
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
