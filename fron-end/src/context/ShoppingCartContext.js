import { createContext, useContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext()

export default function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  };
  const increaseCartQuantity = (id) => {
    console.log(id);
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
// export default ShoppingCartContext;

// export const useShoppingCart = () => {
//   return useContext(ShoppingCartContext);
// }
// export default ShoppingCartProvider;