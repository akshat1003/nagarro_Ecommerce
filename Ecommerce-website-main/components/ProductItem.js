import React from "react";
import Link from "next/link";

export default function ProductItem({ product }) {
  return (
    <div className="card ml-5 mr-5 h-auto">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product.image}
            alt={product.title}
            className="rounded shadow h-[400px] justify-center items-center"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <a>
            <h2 className="text-lg">{product.title}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.category}</p>
        <p>₹ {product.price * 30}</p>
        <div className="relative">
          <Link href={`/product/${product.id}`}>
            <button className="primary-button" type="button">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
