import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const loadCart = () => {
  try {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const initialState = {
  cartItems: loadCart(),
  totalQuantity: 0,
  totalPrice: 0,
};

const calculateTotals = (cartItems) => {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return { totalQuantity, totalPrice };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        i => i.id === item.id && i.size === item.size
      );

      let updatedCartItems;
      if (existingItem) {
        updatedCartItems = state.cartItems.map(i =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        updatedCartItems = [...state.cartItems, item];
      }

      const totals = calculateTotals(updatedCartItems);
      return {
        ...state,
        cartItems: updatedCartItems,
        ...totals,
      };
    }

    case 'REMOVE_FROM_CART': {
      const { id, size } = action.payload;
      const updatedCartItems = state.cartItems.filter(
        item => !(item.id === id && item.size === size)
      );
      const totals = calculateTotals(updatedCartItems);
      return {
        ...state,
        cartItems: updatedCartItems,
        ...totals,
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, size, quantity } = action.payload;
      const updatedCartItems = state.cartItems.map(item =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      );
      const totals = calculateTotals(updatedCartItems);
      return {
        ...state,
        cartItems: updatedCartItems,
        ...totals,
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        totalQuantity: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id, size) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, size } });
  };

  const updateQuantity = (id, size, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
