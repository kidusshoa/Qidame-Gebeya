import { useCarts } from "../contexts/Cart";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { UserInput } from "./UserInput";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { carts, removeCart, incrementCart, decrementCart } = useCarts();
  const summary = useMemo(() => {
    const subTotal = carts.reduce(
      (total, current) => total + current.price * current.quantity,
      0
    );
    const taxCut = subTotal * 0.15;
    const shipping = 65;
    const total = subTotal + taxCut + shipping;
    return {
      total: total.toFixed(2),
      taxCut: taxCut.toFixed(2),
      shipping,
      subTotal: subTotal.toFixed(2),
    };
  }, [carts]);

  return (
    <div className="">
      <div className="h-full w-full md:p-10 p-5 gap-10 bg-third text-white flex items-center justify-center flex-col">
        <div className="w-full h-20 bg-second hover:bg-fourth rounded-xl flex justify-between items-center p-10 ">
          <h1 className="text-4xl font-bold">Cart</h1>
          <div className="flex gap-2">
            <Link
              to="/"
              className="px-8 py-4 bg-first hover:bg-third rounded p-2 font-bold"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="px-8 py-4 bg-first hover:bg-third rounded p-2 font-bold"
            >
              Products
            </Link>
          </div>
        </div>
        <div className=" w-full flex md:flex-row flex-col gap-4">
          <div className="md:w-2/3 flex flex-col gap-4 ">
            <div className="w-full flex bg-second rounded flex-row">
              <div className=" w-1/3 md:h-10 flex items-center justify-center">
                <h1 className="text-2xl font-bold">Item</h1>
              </div>

              <div className=" w-1/3 md:h-10 flex items-center justify-center">
                <h1 className="text-2xl font-bold">Product Name</h1>
              </div>
              <div className=" w-1/3 md:h-10 flex items-center justify-center">
                <h1 className="text-2xl font-bold">Price and Quantity</h1>
              </div>
            </div>
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="w-full flex bg-second rounded flex-row "
              >
                <div className="w-1/3 flex items-center justify-center h-80">
                  <img src={cart.image} alt="" className="w-3/4 h-60" />
                </div>
                <div className="w-1/3 flex items-center justify-center">
                  <h1 className="text-xl font-bold">{cart.name}</h1>
                </div>
                <div className="w-1/3 flex items-center gap-4 justify-center flex-col">
                  <h1 className="text-xl font-bold">
                    {cart.price * cart.quantity} ETB
                  </h1>
                  <div className="flex justify-between items-center gap-2">
                    <CiSquarePlus
                      size={30}
                      onClick={() => {
                        incrementCart(cart.id);
                        toast.info("Incrementing");
                      }}
                    />
                    <h1 className="text-xl font-bold">{cart.quantity}</h1>
                    <CiSquareMinus
                      size={30}
                      onClick={() => {
                        decrementCart(cart.id);
                        toast.info("Decrementing");
                      }}
                    />
                    <FaDeleteLeft
                      size={30}
                      onClick={() => {
                        removeCart(cart.id);
                        toast.info("removed successfully");
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/3 w-full bg-second h-screen rounded flex flex-col  gap-5 items-center justify-center">
            <div className="flex w-full md:w-1/2 flex-row items-center text-left justify-center gap-4">
              <div className=" flex flex-col text-right  ">
                <h1 className="text-xl font-bold">Subtotal</h1>
                <h1 className="text-xl font-bold">Tax(15%)</h1>
                <h1 className="text-xl font-bold">Shipping</h1>
                <h1 className="text-xl font-bold">Grand Total</h1>
              </div>
              <div className=" flex flex-col ">
                <h1 className="text-xl font-bold">{summary.subTotal} ETB</h1>
                <h1 className="text-xl font-bold">{summary.taxCut} ETB</h1>
                <h1 className="text-xl font-bold">{summary.shipping} ETB</h1>
                <h1 className="text-xl font-bold">{summary.total} ETB</h1>
              </div>
            </div>

            <button
              type="submit"
              value="SUBMIT"
              onClick={() => setIsOpen(true)}
              className="w-1/2 h-16 bg-first hover:bg-fourth rounded font-bold"
            >
              Checkout
            </button>
            <UserInput
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              summary={summary}
              carts={carts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
