import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product/Product";
import Image from "next/image";
import { addToCart } from "../../redux/actions/addToCart/addToCart";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [itemIndex, setItemIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState();

  const handleAddToCart = (e, productId) => {
    if (e.target.className.includes(productId)) {
      setItemIndex(productId);
      setSuccessMessage("Successfully added item!");
    }
    dispatch(addToCart(productId, 1));
  };

  return (
    <div className="container px-4 md:px-0 mx-auto py-20 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-14">
      {products.map((product) => (
        <div key={product.id} className="shadow-xl rounded-md bg-white">
          <div className="rounded-md relative grid justify-center bg-white">
            <Image
              src={product.media.source}
              alt={product.name}
              width="180"
              height="200"
              className="object-contain"
            />
          </div>
          <div className="wrapper p-3">
            <div className="flex justify-between items-center">
              <h1 className="text-gray-900 font-bold text-2xl">
                {product.name}
              </h1>
              <h1 className="text-gray-700 font-bold text-xl">
                {product.price.formatted_with_symbol}
              </h1>
            </div>
            <div className="pt-3">
              <p
                className="text-gray-700 font-bold"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></p>
            </div>
            <div className="h-8 flex justify-between items-center mt-4">
              <button
                onClick={(e) => handleAddToCart(e, product.id)}
                className={`${product.id} h-full text-sm bg-black border-none px-4 py-1 rounded text-white font-bold`}
              >
                Add to Cart
              </button>
              {itemIndex === product.id && (
                <div className="bg-green-500 rounded text-white font-bold h-full flex items-center px-1">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
