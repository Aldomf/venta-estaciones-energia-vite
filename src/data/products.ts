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
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-1-1.jpg" },
      { type: "video", src: "/venta-estaciones-energia-vite/vid/vid-p-1.mp4" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-1-2.jpg" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-1-3.jpg" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-1-4.jpg" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-1-5.jpg" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-1-6.jpg" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-1-7.jpg" },
    ],
    description:
      "Estación de energía portátil (Nuevo modelo 2025), respaldo de batería LiFePO4 de 1024 Wh con 4 tomas de corriente CA de 1800 W (3600 W de pico)",
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
        text: "Con una capacidad de 1024Wh, la estación de energía portátil Elite 100 V2 ofrece una salida de 1800W AC (2700W de potencia máxima) y 11 puertos.",
      },
      {
        title: "[Carga completa en 70 minutos]",
        text: "Recarga completamente la estación en solo 70 minutos mediante carga solar de 1000W o carga AC TurboBoost de 1200W. La carga desde el vehículo puede ser hasta 6 veces más rápida con el cargador opcional Charger 1.",
      },
      {
        title: "[Respaldo confiable de emergencia]",
        text: "La Elite 100 V2 se activa instantáneamente durante un corte de energía, protegiendo el enrutador WiFi y la PC de apagones. Además, funciona silenciosamente con un nivel de ruido de solo 30 dB, similar al de una biblioteca.",
      },
    ],
  },
  {
    id: "2",
    name: "PowMr 60A MPPT Solar Charge Controller",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-2-1.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-2-2.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-2-3.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-2-4.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-2-5.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-2-6.png" },
    ],
    description:
      "Controlador de carga solar PowMr 60A MPPT, compatible con sistemas de 12V/24V/48V (máx. 160V DC de entrada). Incluye pantalla LCD incorporada y admite hasta 12 reguladores solares conectados en paralelo. Compatible con baterías de plomo-ácido y de litio.",
    price: "$129",
    details: [
      { label: "Color", value: "Versión paralela 60A-12V-48V" },
      { label: "Marca", value: "PowMr" },
      { label: "Voltaje", value: "12 voltios (DC)" },
      { label: "Tipo de pantalla", value: "LCD" },
      {
        label: "Dimensiones del producto",
        value: '5.12" L x 3.35" W x 8.46" H',
      },
      { label: "Peso del artículo", value: "2.2 libras" },
      { label: "Material", value: "Plástico" },
      { label: "Temperatura de funcionamiento", value: "45 °C" },
      {
        label: "Componentes incluidos",
        value:
          "Controlador, terminal de conexión en paralelo, sonda de temperatura externa",
      },
    ],
    specifications: [
      {
        title: "[Diseño MPPT con actualización de software]",
        text: "Este controlador solar de 60A cuenta con tecnología 100% MPPT, logrando una eficiencia máxima ≥98.1% y una utilización fotovoltaica ≥99%. Incluye un controlador DSP de alto rendimiento que detecta automáticamente el voltaje de la batería (12V/24V/36V/48V). Asegura que las baterías superen los 12V para activarse y posean energía suficiente para la autocomprobación al conectarse.",
      },
      {
        title: "[Compatibilidad con múltiples tipos de baterías]",
        text: "Admite baterías de tipo usuario (ajustable para Litio, LiFePO4, Li(NiCoMn)O2), ventiladas, selladas, de gel o NiCd. Permite configurar parámetros personalizados como voltaje de absorción, flotación, desconexión por bajo voltaje, temporizador de carga y registro de energía en tiempo real. Conectores dobles para positivo y negativo en entradas y salidas, con cables de cobre 9AWG.",
      },
      {
        title: "[Protección completa del sistema]",
        text: "Incluye una pantalla LCD retroiluminada que muestra voltaje fotovoltaico, potencia de salida, voltaje de batería, corriente de carga, modo de trabajo y temperatura. Dispone de una función de diagnóstico para monitorear datos del sistema, detectar fallas y ajustar parámetros para un rendimiento óptimo.",
      },
      {
        title:
          "[Ventilador sin aspas actualizado y sensor de temperatura plug-and-play]",
        text: "El nuevo sistema de ventilación sin aspas se activa al superar los 45 °C y se apaga por debajo de 40 °C, proporcionando una disipación de calor más silenciosa y eficiente. Ideal para vehículos recreativos, barcos, y sistemas solares. Además, cuenta con un puerto para sensor de temperatura incluido, fácil de instalar y preciso.",
      },
      {
        title: "[Atención]",
        text: "Para baterías de plomo-ácido, ventiladas o de gel, el controlador ajusta automáticamente los parámetros. En cambio, para baterías de litio es necesario configurar los valores manualmente, ya que su voltaje varía (por ejemplo, una batería de 12V puede oscilar entre 11.1V y 14.8V). Es importante ajustar los parámetros según el voltaje real de la batería para un funcionamiento adecuado.",
      },
    ],
  },
  {
    id: "3",
    name: "BELTTT 2000W Inversor de Onda Sinusoidal Pura",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-1.png" },
      { type: "video", src: "/venta-estaciones-energia-vite/vid/vid-p-3.mp4" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-2.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-3.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-4.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-5.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-6.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-7.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-8.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-3-9.png" },
    ],
    description:
      "Inversor de potencia de 2000W de corriente continua (12V) a corriente alterna (120V), ideal para vehículos, casas rodantes, camiones, sistemas solares y uso en exteriores. Incluye puerto USB, control remoto y cableado resistente.",
    price: "$239",
    details: [
      { label: "Marca", value: "BELTTT" },
      { label: "Fuente de alimentación", value: "Energía solar y batería" },
      { label: "Potencia nominal", value: "2000 Watts (pico 4000W)" },
      { label: "Modelo", value: "BAP2000" },
      { label: "Altura del artículo", value: "3.9 pulgadas" },
      {
        label: "Componentes incluidos",
        value:
          "Inversor de onda sinusoidal pura de 2000W, 2 cables de batería 2AWG de 3 pies, 6 fusibles de 45A, control remoto con cable de 7 metros, llave de ajuste y manual de usuario",
      },
    ],
    specifications: [
      {
        title: "[Conversión potente de DC a AC]",
        text: "Proporciona 2000W de salida continua (12V DC a 110V/120V AC) y hasta 4000W de potencia pico al arrancar. Eficiencia superior al 91% y bajas pérdidas sin carga.",
      },
      {
        title: "[Onda sinusoidal pura]",
        text: "La salida del inversor imita la corriente alterna de la red eléctrica, ideal para equipos sensibles como televisores, sistemas de audio, computadoras o herramientas eléctricas, prolongando su vida útil y reduciendo fallos.",
      },
      {
        title: "[Pantalla LCD inteligente]",
        text: "Incluye una pantalla de alta luminosidad que muestra en tiempo real los voltajes de entrada y salida, el estado de la batería, la carga y condiciones de funcionamiento, permitiendo un diagnóstico rápido.",
      },
      {
        title: "[Energía donde la necesites]",
        text: "Cuenta con dos tomas de corriente AC, salida de 20A, puerto USB 5V 2.1A, puerto de conexión directa y control remoto con cable de 7 metros, ideal para energía fuera de la red o en movimiento.",
      },
      {
        title: "[Protecciones múltiples]",
        text: "Ofrece protección contra bajo y alto voltaje, sobrecarga, sobrecalentamiento, cortocircuito y conexión inversa. Su carcasa de aluminio y plástico resistente garantiza durabilidad y seguridad prolongada.",
      },
    ],
  },
  {
    id: "4",
    name: "GREENOE 12V 100Ah Batería LiFePO4 Grupo 31 con BMS Integrado",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-1.png" },
      { type: "video", src: "/venta-estaciones-energia-vite/vid/vid-p-4.mp4" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-2.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-3.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-4.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-5.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-6.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-7.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-8.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-4-9.png" },
    ],
    description:
      "Batería de litio LiFePO4 de 12V y 100Ah con sistema BMS inteligente de 100A incorporado. Compatible con grupo 31, diseñada para sistemas solares, vehículos recreativos, embarcaciones y aplicaciones fuera de la red. Ofrece más de 15,000 ciclos de carga y una vida útil de hasta 10 años.",
    price: "$389",
    details: [
      { label: "Marca", value: "GREENOE" },
      { label: "Dimensiones del producto", value: '12.9" x 6.7" x 8.6"' },
      { label: "Tipo de terminal", value: "M8 - Pernos de 5/8'' (16 mm)" },
      {
        label: "Vehículos compatibles",
        value:
          "Furgonetas, sistemas solares, RV, camiones, barcos y carritos de golf",
      },
      { label: "Voltaje", value: "12.8 Voltios" },
      { label: "Composición de la celda", value: "Litio (LiFePO4)" },
      { label: "Peso del artículo", value: "22.5 libras" },
    ],
    specifications: [
      {
        title: "[Celdas de grado A+ y más de 15,000 ciclos]",
        text: "La batería GREENOE 12V utiliza celdas LiFePO4 de grado A+ con alta densidad energética y rendimiento estable. Ofrece más de 15,000 ciclos de carga-descarga, proporcionando energía confiable durante más de 10 años y reduciendo la necesidad de reemplazos frecuentes.",
      },
      {
        title: "[Sistema inteligente de protección térmica (BMS)]",
        text: "El sistema BMS integrado corta automáticamente la descarga a temperaturas inferiores a -4°F y detiene la carga por debajo de 32°F, protegiendo contra sobretemperatura, sobrecarga, sobrecorriente, sobredescarga y cortocircuitos.",
      },
      {
        title: "[Diseño compacto y compatible con grupo 31]",
        text: "Pesa solo 22.5 libras (33% del peso de una batería de plomo-ácido convencional) y mide 12.9 x 6.7 x 8.6 pulgadas. Su tamaño compacto permite mayor densidad energética y fácil transporte para sistemas solares, RV y embarcaciones.",
      },
      {
        title: "[Aplicaciones amplias y expansión flexible]",
        text: "Admite una corriente de descarga máxima de 300A durante 3 segundos y cuenta con clasificación IP65 resistente al agua. Puede conectarse en serie o en paralelo para alcanzar hasta 48V (51.2V) y 20.48kWh (4P4S), ideal para sistemas solares, RV, marinos y respaldo doméstico.",
      },
      {
        title: "[Notas importantes]",
        text: "No se recomienda como batería de arranque o para carritos de golf. Use siempre un cargador de 14.6V ±0.2V para activarla o recargarla. Antes de conectar baterías en serie, asegúrese de que estén completamente cargadas y con diferencia de voltaje menor a 0.2V. Se recomienda recargarla cada 2-3 meses si no se usa.",
      },
    ],
  },
  {
    id: "5",
    name: "VEVOR Cargador Inteligente de Baterías 35A LiFePO4 / Ácido-Plomo",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-1.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-2.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-3.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-4.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-5.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-6.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-7.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-8.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-5-9.png" },
    ],
    description:
      "Cargador inteligente de baterías VEVOR de 35A compatible con baterías de plomo-ácido (AGM/Gel/SLA), LiFePO4 y litio. Incluye modos de carga, mantenimiento, desulfatación y suministro de energía, con pantalla LCD y protección avanzada para uso en autos, barcos, motocicletas, cortadoras de césped y sistemas de ciclo profundo.",
    price: "$129",
    details: [
      { label: "Marca", value: "VEVOR" },
      { label: "Color", value: "Negro" },
      { label: "Dimensiones del producto", value: '7.5" x 6" x 4.5"' },
      { label: "Altura del artículo", value: "2.12 pulgadas" },
      { label: "Peso del artículo", value: "1.25 kg" },
      { label: "Voltaje de salida", value: "6/12/24V AC/DC según batería" },
    ],
    specifications: [
      {
        title: "[Carga potente y versátil]",
        text: "Carga baterías de plomo-ácido (6/12/24V), litio (12/24V) y LiFePO4 (12/24V). Corriente máxima de carga 35A, ajustable según la batería para mejorar eficiencia.",
      },
      {
        title: "[Cuatro modos de operación]",
        text: "1. Modo Carga: Detecta automáticamente la batería y aplica carga inteligente. 2. Modo Mantenimiento: Carga a menor corriente. 3. Modo Desulfatación: Función de pulso para reparar baterías. 4. Modo Suministro: Carga incluso con voltajes bajos de 1V.",
      },
      {
        title: "[Pantalla LCD inteligente]",
        text: "Pantalla de 3.6 pulgadas que muestra voltajes de entrada/salida, estado de la batería, corriente y porcentaje de carga en tiempo real. Botones independientes para un manejo fácil.",
      },
      {
        title: "[Protecciones de seguridad]",
        text: "Incluye protección contra sobrecorriente, cortocircuito, polaridad inversa, sobrecalentamiento y sobrevoltaje. Tecnología de compensación térmica para un proceso de carga estable y seguro.",
      },
      {
        title: "[Accesorios incluidos]",
        text: "Incluye 2 terminales de cobre, cable de alimentación tipo figura 8 de 3 m, pinzas para batería y manual. Compatible con baterías de ciclo profundo, autos, camiones, motocicletas, embarcaciones y más.",
      },
    ],
  },
  {
    id: "6",
    name: "EF ECOFLOW DELTA 3 Estación de Energía Portátil 1024Wh",
    media: [
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-6-1.png" },
      { type: "video", src: "/venta-estaciones-energia-vite/vid/vid-p-6.mp4" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-6-2.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-6-3.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-6-4.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-6-5.png" },
      { type: "image", src: "/venta-estaciones-energia-vite/img/p-6-6.png" },
    ],
    description:
      "Estación de energía portátil EF ECOFLOW DELTA 3 con batería LiFePO4 de 1024Wh. Recarga completa en 56 minutos, salida AC de 1800W y USB-C de 100W, ideal para respaldo en el hogar y sistemas solares (panel solar opcional).",
    price: "$799",
    details: [
      { label: "Marca", value: "EF ECOFLOW" },
      { label: "Capacidad energética", value: "1024 Wh" },
      { label: "Fuente de alimentación", value: "Eléctrica y/o solar" },
      { label: "Peso del artículo", value: "12.5 kg" },
      { label: "Voltaje", value: "110V AC" },
      { label: "Potencia de salida", value: "1800W AC" },
      {
        label: "Característica especial",
        value: "Expansible hasta 5kWh con batería extra EcoFlow",
      },
      {
        label: "Componentes incluidos",
        value:
          "Cable de carga AC, estación EcoFlow DELTA 3, manual y tarjeta de garantía",
      },
    ],
    specifications: [
      {
        title: "[Carga completa en 56 minutos]",
        text: "Combinando 500W de entrada solar y 1500W de entrada AC máxima, la DELTA 3 logra una carga completa en 56 minutos y 80% en solo 30 minutos.",
      },
      {
        title: "[Expansión flexible hasta 5kWh]",
        text: "Se integra con el ecosistema EcoFlow, permitiendo expansión hasta 5kWh con DELTA 3, DELTA Pro 3 y DELTA 2 Max. La batería extra DELTA 3 es 1/3 más pequeña y ligera que la DELTA 2 Extra.",
      },
      {
        title: "[Durabilidad y confiabilidad]",
        text: "Baterías LiFePO4 con 4000 ciclos hasta 80% de capacidad, ofreciendo 25% más durabilidad que el estándar de la industria. IP65: resistente al agua, polvo y aceite.",
      },
      {
        title: "[Alimenta hasta 13 aparatos simultáneamente]",
        text: "Con múltiples interfaces, puede alimentar hasta 13 dispositivos al mismo tiempo. X-Boost soporta aparatos resistivos de hasta 2600W continuamente.",
      },
      {
        title: "[Contenido del paquete]",
        text: "Estación de energía portátil DELTA 3, cable de carga AC, manual de usuario y servicio al cliente exclusivo de 5 años.",
      },
    ],
  },
];
