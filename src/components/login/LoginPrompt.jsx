import React from 'react';
import { IoWarning } from "react-icons/io5";


const LoginPrompt = ({ closeLoginPrompt }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-teal-900 text-white p-8 rounded-md text-center">
                <div className='flex justify-center items-center text-4xl text-red-500'>
                    <IoWarning />
                </div>
                <h2 className="text-2xl font-bold mb-4">Sign In Required</h2>
                <p className=" mb-4">Please sign in to add items to your cart.</p>
                <button onClick={closeLoginPrompt} className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Close
                </button>
            </div>
        </div>
    );
};

export default LoginPrompt;
