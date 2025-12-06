import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

            <h1 className="text-[10rem] font-extrabold text-red-600 animate-bounce">404</h1>

            <p className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
                Oops! Page Not Found
            </p>

            <p className="text-gray-500 mt-2">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-lg transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
