import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
