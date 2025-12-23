// "use client";
// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart from local storage on startup
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) setCartItems(JSON.parse(savedCart));
//   }, []);

//   // Save cart to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product, size, quantity) => {
//     setCartItems((prev) => {
//       // Check if item with same ID AND same SIZE already exists
//       const existingItem = prev.find(
//         (item) => item._id === product._id && item.size === size
//       );

//       if (existingItem) {
//         return prev.map((item) =>
//           item._id === product._id && item.size === size
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       // If new item, add it to the list
//       return [...prev, { ...product, size, quantity }];
//     });
//   };

//   const removeFromCart = (id, size) => {
//     setCartItems((prev) => prev.filter((item) => !(item._id === id && item.size === size)));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// "use client";
// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) setCartItems(JSON.parse(savedCart));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product, size, quantity) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find(
//         (item) => item._id === product._id && item.size === size
//       );
//       if (existingItem) {
//         return prev.map((item) =>
//           item._id === product._id && item.size === size
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prev, { ...product, size, quantity }];
//     });
//   };

//   const removeFromCart = (id, size) => {
//     setCartItems((prev) => prev.filter((item) => !(item._id === id && item.size === size)));
//   };

//   // --- NEW: Function to empty cart after purchase ---
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem("cart");
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);









"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, size, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item._id === product._id && item.size === size
      );
      if (existingItem) {
        return prev.map((item) =>
          item._id === product._id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, size, quantity }];
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) => 
      prev.filter((item) => !(item._id === id && item.size === size))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);