import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart() {
    const cartItems = useSelector((state) => state.apiKey.cart);
    const totalPrice = useSelector((state) => state.apiKey?.Total);
    const itemCount = useSelector((state) => state.apiKey?.item);

    return (
        <div className="max-w-6xl mx-auto p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Items in Your Cart</h3>
                        <ul className="divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex justify-between items-center py-4 space-x-4 hover:bg-gray-50 rounded-lg transition duration-300"
                                >
                                    <div className="flex items-center space-x-6">
                                        <img
                                            className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                                            src={item.img}
                                            alt={item.title}
                                        />
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900">
                                        ₹{item.price * item.quantity}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gray-100 shadow-md rounded-lg p-6 border border-gray-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between text-gray-700 font-medium text-lg">
                                <span>Total Items:</span>
                                <span>{itemCount}</span>
                            </li>
                            <li className="flex justify-between text-gray-800 font-bold text-xl">
                                <span>Total Amount:</span>
                                <span>₹{totalPrice}</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300">
                                Proceed to Checkout
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <Link to="/" className="text-blue-600 hover:underline">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center mt-16">
                    <p className="text-gray-700 text-lg font-medium mb-6">Your cart is currently empty.</p>
                    <Link to="/">
                        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
                            Start Shopping
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
