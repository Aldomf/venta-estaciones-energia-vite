import { useState, useEffect } from "react";
import { FaWindowClose, FaArrowLeft , FaArrowRight } from "react-icons/fa";

type Media = { type: "image" | "video"; src: string };

type Props = {
  media: Media[];
  initialIndex?: number;
  onClose: () => void;
};

export default function ProductCarousel({ media, initialIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => setIndex((i) => (i - 1 + media.length) % media.length);
  const next = () => setIndex((i) => (i + 1) % media.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  let startX = 0;
  const handleTouchStart = (e: React.TouchEvent) => (startX = e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (diff > 50) prev();
    else if (diff < -50) next();
  };

  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="absolute top-2 right-2 z-50"
          onClick={onClose}
        >
          <FaWindowClose className="text-3xl lg:cursor-pointer"/>
        </button>

        {media[index].type === "image" ? (
          <img
            src={media[index].src}
            alt={`Media ${index + 1}`}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
          />
        ) : (
          <video
            src={media[index].src}
            controls
            autoPlay
            muted={false}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
          />
        )}

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl px-2 py-2 lg:cursor-pointer bg-black rounded-full opacity-80"
          onClick={prev}
        >
          <FaArrowLeft className="text-white text-2xl"/>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl px-2 py-2 lg:cursor-pointer bg-black rounded-full opacity-80"
          onClick={next}
        >
          <FaArrowRight className="text-white text-2xl"/>
        </button>

        <div className="absolute bottom-(-1) left-1/2 -translate-x-1/2 text-white font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
          {index + 1} / {media.length}
        </div>
      </div>
    </div>
  );
}
