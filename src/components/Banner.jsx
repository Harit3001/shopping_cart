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
      <div className="banner-image">
        <img src={banners[current]} alt="Banner" />

        <div className="banner-overlay">
          <div className="banner-content">
            <span>NEW COLLECTION 2026</span>

            <h1>
              Discover Your
              <br />
              Next Favorite Tech
            </h1>

            <p>
              Premium devices with the latest technology, trusted quality and
              exclusive deals.
            </p>

            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className="banner-indicator">
        {banners.map((_, index) => (
          <span key={index} className={current === index ? "active" : ""} />
        ))}
      </div>
    </section>
  );
}
