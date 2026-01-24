import { Link, useRouteError } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        {/* Big 404 */}
        {/* <h1 className="text-7xl font-bold text-primary font-jomhuria">404</h1> */}
        <h1 className="text-6xl font-bold text-primary font-jomhuria">
          This page is in under maintenance
        </h1>

        {/* Title */}
        {/* <p className="text-2xl font-jost mt-4 mb-3 uppercase">Page Not Found</p> */}

        {/* Message */}
        {/* <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p> */}

        {/* Button */}
        <Link
          to="/"
          className="
            inline-block
            bg-primary text-white
            px-8 py-3
            rounded-full
            transition-all duration-300
            hover:scale-105 hover:shadow-xl
          "
        >
          Back to Home
        </Link>

        {/* Optional debug (dev only) */}
        {error && (
          <p className="text-xs text-red-400 mt-6">
            {error.statusText || error.message}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ErrorPage;
