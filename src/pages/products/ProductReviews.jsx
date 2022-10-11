import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ProductReviews({ rate, count }) {
  const totalStars = 5;
  const rateCount = Math.floor(rate);

  return (
    <div className="flex items-center gap-4 mt-3">
      <span className="flex">
        {Array(totalStars)
          .fill("_")
          .map((_, index) => {
            return index < rateCount ? <AiFillStar /> : <AiOutlineStar />;
          })}
      </span>
      <span>({count} Reviews)</span>
    </div>
  );
}

export default ProductReviews;
