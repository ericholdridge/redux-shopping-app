import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/addToCart/addToCart";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
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
          <h1 className="text-gray-900 font-bold text-2xl">{product.name}</h1>
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
        <div className="flex">
          <button
            onClick={() => dispatch(addToCart(product.id))}
            className="ml-auto bg-black border-none mt-2 px-4 py-1 rounded text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
