import React, { useReducer, createContext, useEffect, useState } from 'react';
import { initialState } from './Reducer';
import storeReducer from './Reducer';
import LoginPrompt from '../login/LoginPrompt';

export const Cart = createContext();

export const Context = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [showAddToCartPrompt, setShowAddToCartPrompt] = useState(false);

    const updateLocalStorage = (updatedProducts) => {
        localStorage.setItem("cart_items", JSON.stringify(updatedProducts))
    }

    // Add item to cart
    const addToCart = (item) => {
        if (userData) {
            const existingItemIndex = state.products.findIndex((prod) => prod.id === item.id);
            let updatedProducts = [];

            if (existingItemIndex !== -1) {
                const updatedItem = {...state.products[existingItemIndex], amount: state.products[existingItemIndex].amount + 1 };
                updatedProducts = [
                    ...state.products.slice(0, existingItemIndex),
                    updatedItem,
                    ...state.products.slice(existingItemIndex + 1),
                ];
                setShowAddToCartPrompt(true);
                setTimeout(() => {
                    setShowAddToCartPrompt(false)
                }, 3000);
            } else {
                updatedProducts = [...state.products, { ...item, amount: 1 }]
            }
            updatePrice(updatedProducts);
            updateLocalStorage(updatedProducts);
            dispatch({
                type: "add",
                payload: updatedProducts,
            }); 
        } else {
            setShowLoginPrompt(true);
        }       
    };
    const closeLoginPrompt = () => {
        setShowLoginPrompt(false);
    };
    
    // Remove item from cart
    const removeFromCart = (item) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.id !== item.id);
        updatePrice(updatedCart);
        updateLocalStorage(updatedCart);
        dispatch({
            type: "remove",
            payload: updatedCart
        });
    };

    // Update price
    const updatePrice = (products) => {
        const total = products.reduce((acc,curr) => acc + curr.newPrice * curr.amount, 0);
        dispatch({
            type: "update price",
            payload: total,
        });
    };

    const calculateTotal = (products) => {
        let total = 0;
        products.forEach((product) => {
            total += product.newPrice * product.amount;
        });
        return total;
    };

    // quantity increment
    const incrementItem = (id) => {
        const updatedProducts = state.products.map((product) => {
            if (product.id === id) {
                return { ...product, amount: product.amount + 1 };
            }
            return product;
        });
        const totalPrice = calculateTotal(updatedProducts);

        dispatch({
            type: "increment",
            payload: updatedProducts,
            total: totalPrice,
        });
    };

    // quantity decrement...
    const decrementItem = (id) => {
        const updatedProducts = state.products.map((product) => {
            if (product.id === id && product.amount > 1) {
                return { ...product, amount: product.amount - 1 };
            }
            return product;
        });
        const totalPrice = calculateTotal(updatedProducts);

        dispatch({
            type: "decrement",
            payload: updatedProducts,
            total: totalPrice,
        });
    };

    // Login Logout
    const [userData, setUserData] = useState({});
    const updateUserData = (action) => {
        switch (action.type) {
            case "LOGOUT":
                setUserData(null);
                localStorage.clear();
                break;
            case "LOGIN":
                setUserData(action.payload);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("user_data")));        
        const storedCartItems = JSON.parse(localStorage.getItem("cart_items"));
        if (storedCartItems) {
            dispatch({
                type: "initialize_cart",
                payload: storedCartItems
            });
        }
    }, []);

    // clear cart
    const clearCart = () => {
        dispatch({type:"clearCart"});
    };

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart,
        userData,
        updateUserData,
        incrementItem,
        decrementItem,
        clearCart,
        closeLoginPrompt 
    };

    return (
        <Cart.Provider value={value}>
            {children}
            {showAddToCartPrompt && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <h2 className='bg-teal-500 text-white'>Item added to Cart</h2>
                </div>
            )}
            {showLoginPrompt && (
                // Render a login prompt component when the user is not logged in
                <LoginPrompt closeLoginPrompt={closeLoginPrompt} />
            )}
        </Cart.Provider>
    );
};