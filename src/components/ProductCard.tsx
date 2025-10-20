type Props = {
  title: string;
  description: string;
  price: string;
  image: string;
  width: number;
  height: number;
  onClick?: () => void; // callback opcional
};

export default function ProductCard({ title, description, price, image, width, height, onClick }: Props) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 border-amber-800 border-2 inline-block cursor-pointer hover:scale-105 transition"
      onClick={onClick}
    >
      <div className="rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          width={width}
          height={height}
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <p className="text-green-600 font-bold mt-2">{price}</p>
      <p className="text-blue-500 mt-2">📞 +1 (555) 123-4567</p>
    </div>
  );
}
