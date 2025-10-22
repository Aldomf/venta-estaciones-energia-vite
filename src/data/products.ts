export type Media = { type: "image" | "video"; src: string };

export type Product = {
  id: string;
  name: string;
  media: Media[];
  description: string;
  price: string;
  details: {
    label: string;
    value: string;
  }[];
  specifications: {
    title: string;
    text: string;
  }[];
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
    description:
      "Estación de energía portátil (Nuevo modelo 2025), respaldo de batería LiFePO4 de 1024 Wh con 4 tomas de corriente CA de 1800 W (3600 W de pico), 35% más compacta, generador solar para campismo, cortes de energía y respaldo tipo UPS",
    price: "$499",
    details: [
      { label: "Marca", value: "BLUETTI" },
      { label: "Capacidad energética", value: "1024 Watt-hora" },
      {
        label: "Fuente de alimentación",
        value:
          "Energía eléctrica y/o energía solar (requiere panel solar compatible)",
      },
      { label: "Peso del artículo", value: "25 libras" },
      { label: "Voltaje", value: "110 voltios (CA)" },
      { label: "Potencia de salida", value: "1800 Watts" },
      { label: "Característica especial", value: "Portátil" },
      {
        label: "Componentes incluidos",
        value:
          "Cable de carga CA, BLUETTI Elite 100 V2, tornillo de conexión a tierra, cable de carga solar, manual de usuario",
      },
    ],
    specifications: [
      {
        title: "[Alimenta 11 dispositivos]",
        text: "Con una capacidad de 1024Wh, la estación de energía portátil Elite 100 V2 ofrece una salida de 1800W AC (2700W de potencia máxima) y 11 puertos, ideal para acampar al aire libre, casas rodantes (RV) y trabajo remoto.",
      },
      {
        title: "[35% más pequeña, 30% más ligera]",
        text: "La Elite 100 V2 pesa 25 libras y tiene un diseño compacto de 17L. Llévala con una sola mano gracias a su asa oculta, perfecta para transportarla desde la oficina en casa hasta el campamento o una cabaña sin conexión eléctrica.",
      },
      {
        title: "[Carga completa en 70 minutos]",
        text: "Recarga completamente la estación en solo 70 minutos mediante carga solar de 1000W o carga AC TurboBoost de 1200W. La carga desde el vehículo puede ser hasta 6 veces más rápida con el cargador opcional Charger 1.",
      },
      {
        title: "[Respaldo confiable de emergencia]",
        text: "La Elite 100 V2 se activa instantáneamente durante un corte de energía, protegiendo el enrutador WiFi y la PC de apagones. Además, funciona silenciosamente con un nivel de ruido de solo 30 dB, similar al de una biblioteca.",
      },
      {
        title: "[Qué incluye]",
        text: "Estación de energía portátil BLUETTI Elite 100 V2, cable de carga AC, cable de carga solar, tornillo de conexión a tierra y manual de usuario.",
      },
    ],
  },
];
