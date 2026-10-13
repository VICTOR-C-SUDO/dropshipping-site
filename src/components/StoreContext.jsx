import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const StoreContext = createContext(null);

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    price: 35000,
    oldPrice: 45000,
    rating: 4.8,
    reviews: 24,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description:
      "Enjoy your favourite music with comfortable wireless headphones designed for everyday use.",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    price: 42000,
    oldPrice: 55000,
    rating: 4.7,
    reviews: 18,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description:
      "Keep track of your daily activities with a stylish smartwatch.",
  },
  {
    id: 3,
    name: "Premium Power Bank",
    category: "Power",
    price: 28000,
    oldPrice: 35000,
    rating: 4.6,
    reviews: 31,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1609592424854-5e3f3c1b4f8f?auto=format&fit=crop&w=800&q=80",
    description:
      "Keep your devices powered while travelling, working, or relaxing.",
  },
  {
    id: 4,
    name: "Wireless Charger",
    category: "Power",
    price: 18000,
    oldPrice: 25000,
    rating: 4.5,
    reviews: 15,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1591290619762-c588f7a0f7f8?auto=format&fit=crop&w=800&q=80",
    description:
      "Enjoy a convenient charging experience with a modern wireless charger.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 30000,
    oldPrice: 38000,
    rating: 4.8,
    reviews: 42,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description:
      "Enjoy music at home or on the go with this portable Bluetooth speaker.",
  },
  {
    id: 6,
    name: "Phone Stand",
    category: "Accessories",
    price: 12000,
    oldPrice: 16000,
    rating: 4.4,
    reviews: 12,
    badge: "Deal",
    image:
      "https://images.unsplash.com/photo-1601598851547-4302969d8e2f?auto=format&fit=crop&w=800&q=80",
    description:
      "Keep your phone comfortably positioned for watching videos and making calls.",
  },
];

function readStorage(key, fallback = []) {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) return fallback;

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [products] = useState(initialProducts);

  const [cart, setCart] = useState(() =>
    readStorage("vik-cart")
  );

  const [favorites, setFavorites] = useState(() =>
    readStorage("vik-favorites")
  );

  // Save cart whenever it changes.
  useEffect(() => {
    localStorage.setItem("vik-cart", JSON.stringify(cart));
  }, [cart]);

  // Save favorites whenever they change.
  useEffect(() => {
    localStorage.setItem(
      "vik-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Add a product to the cart.
  const addToCart = (product, quantity = 1) => {
    if (!product || quantity < 1) return;

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

  // Remove a product completely.
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // Change product quantity.
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
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

  // Empty the cart.
  const clearCart = () => {
    setCart([]);
  };

  // Add or remove a favorite.
  const toggleFavorite = (productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(productId)
        ? currentFavorites.filter((id) => id !== productId)
        : [...currentFavorites, productId]
    );
  };

  const isFavorite = (productId) =>
    favorites.includes(productId);

  // Total number of items in the cart.
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price of all cart items.
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  const value = {
    products,
    cart,
    cartCount,
    cartTotal,
    favorites,
    favoriteProducts,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleFavorite,
    isFavorite,
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
      "useStore must be used inside StoreProvider"
    );
  }

  return context;
}