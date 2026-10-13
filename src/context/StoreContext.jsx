import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("vik-gadgets-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("vik-gadgets-favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("vik-gadgets-cart", JSON.stringify(cart));
  }, [cart]);

  // Save favorites whenever they change
  useEffect(() => {
    localStorage.setItem(
      "vik-gadgets-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // Remove product completely
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // Increase cart quantity
  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease cart quantity
  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Update quantity directly
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  // Empty entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Add/remove favorite
  const toggleFavorite = (product) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentFavorites.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentFavorites, product];
    });
  };

  // Check if product is favorite
  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  // Number of different products in cart
  const cartItemsCount = cart.length;

  // Total quantity of products in cart
  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
    cart,
    favorites,

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    clearCart,

    toggleFavorite,
    isFavorite,

    cartItemsCount,
    cartQuantity,
    cartTotal,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      "useStore must be used inside a StoreProvider"
    );
  }

  return context;
}