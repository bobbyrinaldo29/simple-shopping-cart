import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import { getCartTotal } from "./redux/features/cartSlice";

function App() {
  const { totalCount, items, totalAmount } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])
  
  return (
    <div className="container px-4 py-4 mx-auto">
      <h1 className="py-5 text-3xl font-bold text-center">Shopping Cart</h1>
      <div className="w-full space-y-8 lg:flex lg:gap-x-8 lg:space-y-0">
        <div className="shadow-xl lg:w-8/12 card bg-base-100">
          <div className="card-body">
            <h2 className="card-title">Cart ({totalCount} items)</h2>
            {items.map((item) => {
              return <Cart key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className="w-full space-y-8 lg:w-4/12">
          <div className="shadow-xl card bg-base-100">
            <div className="card-body">
              <h2 className="mb-5 card-title">The Total Amount of</h2>
              <div className="flex justify-between w-full">
                <p className="text-left">Temporary Amount</p>
                <p className="w-1/2 text-right">{totalAmount}</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-left">Shipping</p>
                <p className="w-1/2 text-right">Gratis</p>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between w-full">
                <p className="font-bold text-left">
                  The Total Amount of (including VAT)
                </p>
                <p className="w-1/2 text-right font-bold">${totalAmount}</p>
              </div>
              <div className="w-full mt-5 card-actions">
                <button className="w-full btn btn-primary">
                  Go To Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="w-full shadow-xl card bg-base-100">
            <div className="card-body">
              <select className="w-full outline-none select select-ghost focus:outline-none">
                <option disabled defaultValue="">
                  Add a discount code (optional)
                </option>
                <option>Discount 1</option>
                <option>Discount 2</option>
                <option>Discount 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
