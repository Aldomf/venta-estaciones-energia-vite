import { FaShareAlt } from "react-icons/fa";

interface ShareButtonProps {
  title?: string;
  text?: string;
  url?: string;
}

export default function ShareButton({
  title = "Venta de Estaciones de Energía",
  text = "Mira este producto",
  url = window.location.href,
}: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = { title, text, url };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        alert("🔗 Enlace copiado al portapapeles");
      }
    } catch (err) {
      console.error("Error al compartir:", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-gray-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
    >
      <FaShareAlt className="w-5 h-5" /> Compartir
    </button>
  );
}
