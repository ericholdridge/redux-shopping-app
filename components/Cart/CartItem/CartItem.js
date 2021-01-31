import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../redux/actions/updateQuantity/updateQuanity";
import { removeItem } from "../../../redux/actions/removeItem/removeItem";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-3 gap-36">
      {cart?.line_items?.map((item) => (
        <div key={item.id} className="shadow-xl rounded-md">
          <div className="rounded-md relative grid justify-center bg-white">
            <Image
              src={item.media.source}
              alt={item.product_name}
              width="180"
              height="200"
              className="object-contain"
            />
          </div>
          <div className="rounded-md p-3 bg-white">
            <div className="flex justify-between items-center">
              <h1 className="text-gray-900 font-bold text-2xl">
                {item.product_name}
              </h1>
              <h1 className="text-gray-700 font-bold text-xl">
                {item.line_total.formatted_with_symbol}
              </h1>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex justify-between items-center w-40">
                <p>Quantity: </p>
                <button
                  onClick={() =>
                    dispatch(updateQuantity(item.id, item.quantity - 1))
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(updateQuantity(item.id, item.quantity + 1))
                  }
                >
                  +
                </button>
              </div>
              <button
                className="bg-black border-none px-4 py-1 rounded text-white"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
