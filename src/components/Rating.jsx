import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => {
        if (rating >= index + 1) return <FaStar key={index} />;

        if (rating >= index + 0.5) return <FaStarHalfAlt key={index} />;

        return <FaRegStar key={index} />;
      })}
    </div>
  );
}
