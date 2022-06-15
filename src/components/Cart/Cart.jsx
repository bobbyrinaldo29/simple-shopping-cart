import { FaTrash, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../../redux/features/cartSlice";

const Cart = ({
  id,
  name,
  shirtCode,
  shirtColor,
  note,
  size,
  price,
  amount,
  img,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="py-4 md:flex md:items-center">
        <div className="justify-center w-2/3 mx-auto md:w-4/12">
          <img
            src={img}
            alt="Movie"
            className="overflow-hidden rounded-xl aspect-[3/4] w-full bg-center"
          />
        </div>
        <div className="w-full md:ml-7">
          <div className="justify-between mt-5 md:mt-0 md:items-start md:flex">
            <div className="flex-col md:space-y-3">
              <h1 className="text-lg font-bold capitalize md:text-2xl">
                {name}
              </h1>
              <p className="text-sm md:text-base">{shirtCode}</p>
            </div>
            <div className="flex-col py-5 mt-3 text-right md:py-0 md:mt-0">
              <div className="flex justify-center btn-group">
                <button
                  className="btn btn-sm"
                  onClick={() => dispatch(decrement(id))}
                >
                  -
                </button>
                <label className="flex items-center justify-center w-10 text-center">
                  {amount}
                </label>
                <button
                  className="btn btn-sm"
                  onClick={() => dispatch(increment(id))}
                >
                  +
                </button>
              </div>
              <p className="py-2 text-xs text-center">{note}</p>
            </div>
          </div>
          <div className="w-full space-y-5 uppercase">
            <p className="text-sm md:mt-8">Color {shirtColor}</p>
            <div className="flex items-center">
              <p>SIZE {size}</p>
              <p className="text-xl font-bold text-right md:text-lg md:text-right md:order-last">
                ${Number(amount * price).toFixed(2)}
              </p>
            </div>
            <div className="items-center w-full mt-5 card-actions md:flex">
              <div className="gap-2 space-y-4 md:space-y-0 md:flex">
                <button
                  className="w-full gap-2 md:w-fit btn btn-sm btn-ghost"
                  onClick={() => dispatch(remove(id))}
                >
                  <FaTrash /> Remove Item
                </button>
                <button className="w-full gap-2 md:w-fit btn btn-sm btn-ghost">
                  <FaHeart /> Move To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Cart;
