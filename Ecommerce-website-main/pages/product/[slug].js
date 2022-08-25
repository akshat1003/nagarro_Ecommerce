import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import React, { useContext } from "react";
import { Store } from "../../utils/Store";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  // getting url from the route
  const { query } = useRouter();
  // getting slug variable from query
  const { id } = query;
  // find the product
  const product = products.find((x) => x.id === id);
  //   if the product is not available
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    // everything between the layout
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempora tempore expedita in, quaerat, iste exercitationem
              animi, ullam est earum nihil incidunt commodi. Provident iure
              delectus aliquam ratione consectetur voluptas maiores.{" "}
              {product.description}
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>₹ {product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
