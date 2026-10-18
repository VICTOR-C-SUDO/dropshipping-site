import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const StoreContext = createContext(null);

// VIK GADGETS PRODUCTS
const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Audio",
    price: 18500,
    oldPrice: 24000,
    rating: 4.8,
    reviews: 124,
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    description:
      "Enjoy clear sound and comfortable listening with these premium wireless headphones.",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Accessories",
    price: 25000,
    oldPrice: 32000,
    rating: 4.7,
    reviews: 98,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    description:
      "A stylish smartwatch for everyday use, activity tracking, and notifications.",
  },
  {
    id: 3,
    name: "Premium Power Bank",
    category: "Power",
    price: 22000,
    oldPrice: 28500,
    rating: 4.9,
    reviews: 156,
    badge: "TOP RATED",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600",
    description:
      "Keep your devices powered while travelling, working, or relaxing.",
  },
  {
    id: 4,
    name: "Wireless Charger",
    category: "Power",
    price: 15000,
    oldPrice: 19500,
    rating: 4.6,
    reviews: 76,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1591290619762-c588b0f8d6e0?w=600",
    description:
      "A convenient wireless charging accessory for compatible devices.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 28000,
    oldPrice: 35000,
    rating: 4.8,
    reviews: 112,
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    description:
      "Enjoy your favourite music with a portable Bluetooth speaker.",
  },
  {
    id: 6,
    name: "Phone Stand",
    category: "Accessories",
    price: 8500,
    oldPrice: 12000,
    rating: 4.5,
    reviews: 64,
    badge: "GREAT VALUE",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600",
    description:
      "A practical stand for hands-free viewing at home, school, or work.",
  },
];

// Safely read saved data from localStorage.
function readStorage(key, fallback) {
  try {
    const savedData = localStorage.getItem(key);

    return savedData ? JSON.parse(savedData) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [products] = useState(initialProducts);

  // Load saved cart items.
  const [cart, setCart] = useState(() => {
    const savedCart = readStorage("vik-cart", []);

    if (!Array.isArray(savedCart)) {
      return [];
    }

    return savedCart
      .filter(
        (item) =>
          item &&
          item.id !== undefined &&
          Number(item.quantity) > 0
      )
      .map((item) => ({
        ...item,
        quantity: Math.max(1, Math.floor(Number(item.quantity))),
      }));
  });

  // Load saved favourite product IDs.
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = readStorage("vik-favorites", []);

    return Array.isArray(savedFavorites) ? savedFavorites : [];
  });

  // Save cart whenever it changes.
  useEffect(() => {
    localStorage.setItem("vik-cart", JSON.stringify(cart));
  }, [cart]);

  // Save favourites whenever they change.
  useEffect(() => {
    localStorage.setItem(
      "vik-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // ADD PRODUCT TO CART.
  const addToCart = (product, quantity = 1) => {
    if (!product || product.id === undefined) {
      return;
    }

    const amount = Math.max(
      1,
      Math.floor(Number(quantity) || 1)
    );

    setCart((previousCart) => {
      const existingItem = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: Number(item.quantity) + amount,
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: amount,
        },
      ];
    });
  };

  // REMOVE PRODUCT COMPLETELY FROM CART.
  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== productId)
    );
  };

  // UPDATE QUANTITY.
  // The quantity supplied here is the NEW quantity,
  // not an amount to add or subtract.
  const updateQuantity = (productId, quantity) => {
    const newQuantity = Number(quantity);

    // Do not allow invalid quantities or quantities below 1.
    if (
      !Number.isFinite(newQuantity) ||
      newQuantity < 1
    ) {
      return;
    }

    const safeQuantity = Math.floor(newQuantity);

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: safeQuantity,
            }
          : item
      )
    );
  };

  // EMPTY THE ENTIRE CART.
  const clearCart = () => {
    setCart([]);
  };

  // ADD OR REMOVE A FAVOURITE.
  const toggleFavorite = (productId) => {
    setFavorites((previousFavorites) => {
      const alreadyFavorite = previousFavorites.includes(productId);

      if (alreadyFavorite) {
        return previousFavorites.filter(
          (id) => id !== productId
        );
      }

      return [...previousFavorites, productId];
    });
  };

  // CHECK WHETHER A PRODUCT IS A FAVOURITE.
  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  // TOTAL NUMBER OF ITEMS, INCLUDING QUANTITIES.
  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  // TOTAL PRICE OF THE CART.
  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  // GET COMPLETE FAVOURITE PRODUCT OBJECTS.
  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  const value = {
    products,
    cart,
    favorites,
    favoriteProducts,
    cartCount,
    cartTotal,
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

// ACCESS STORE DATA AND FUNCTIONS.
export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error(
      "useStore must be used inside a StoreProvider"
    );
  }

  return context;
}

export default StoreContext;