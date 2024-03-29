import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext();

export const useCarts = () => useContext(CartContext);

export const CartProvider = (props) => {
  const { children } = props;
  const [carts, setCarts] = useState([]);

  const addToCart = useCallback((product) => {
    setCarts((prev) => {
      const cart = prev.find((item) => item.id === product.id);
      if (cart) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity <= 5 ? item.quantity + 1 : item.quantity,
              }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeCart = useCallback((id) => {
    setCarts((prev) => prev.filter((cart) => cart.id !== id));
  }, []);

  const incrementCart = useCallback((id) => {
    setCarts((prev) =>
      prev.map((cart) =>
        cart.id === id
          ? {
              ...cart,
              quantity: cart.quantity <= 5 ? cart.quantity + 1 : cart.quantity,
            }
          : cart
      )
    );
  }, []);

  const decrementCart = useCallback((id) => {
    setCarts((prev) =>
      prev.map((cart) =>
        cart.id === id
          ? {
              ...cart,
              quantity: cart.quantity > 1 ? cart.quantity - 1 : cart.quantity,
            }
          : cart
      )
    );
  }, []);

  const value = useMemo(
    () => ({
      carts,
      addToCart,
      removeCart,
      incrementCart,
      decrementCart,
    }),
    [carts, addToCart, removeCart, incrementCart, decrementCart]
  );

  return <CartContext.Provider value={value}>{children} </CartContext.Provider>;
};
