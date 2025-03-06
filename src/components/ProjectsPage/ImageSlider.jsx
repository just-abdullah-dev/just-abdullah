"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = ({ item }) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % item?.images.length);
        setFade(true); // Start fade-in effect
      }, 200); // Fade-out duration (should match CSS)
    }, 2000);

    return () => clearInterval(interval);
  }, [item?.images.length]);

  return (
    <div className="relative w-full h-fit overflow-hidden">
      <Image
        className={`w-full h-fit transition-opacity duration-200 ${fade ? "opacity-100" : "opacity-50"}`}
        src={item?.images[index]}
        alt={`${item?.title} picture`}
        width={300}
        height={300}
        priority
      />
    </div>
  );
};

export default ImageSlider;
