import { useEffect, useState } from "react";

import banner1 from "../assets/banner.webp";
import banner2 from "../assets/banner1.webp";
import banner3 from "../assets/banner2.webp";

const banners = [banner1, banner2, banner3];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner">
      <img src={banners[current]} alt="Banner" />
    </section>
  );
}
