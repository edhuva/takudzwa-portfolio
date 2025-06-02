import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const GenerateBreadCumb = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const location = useLocation(); // Get the current location

    // Function to handle navigation to a specific page
    const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
    };

    // Function to generate the breadcrumb navigation
    const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter((path) => path !== ''); // Split the path into segments
    return paths.map((path, index) => {
        const route = `/${paths.slice(0, index + 1).join('/')}`; // Build the route for each segment
        const isLast = index === paths.length - 1; // Check if it's the last segment
        return (
        <span key={path} className="flex items-center">
            {isLast ? (
            <span className="text-gray-400 capitalize font-bold">{path}</span> // Display the current page without a link
            ) : (
            <span
                className="font-bold text-blue-500  hover:text-blue-600 cursor-pointer capitalize transition duration-300"
                onClick={() => handleNavigate(route)}
            >
                {path}
            </span>
            )}
            {!isLast && <span className="mx-2 text-xl text-gray-400"><FontAwesomeIcon icon={faAngleRight} /></span>} {/* Add a separator between segments */}
            </span>
          );
        });
    };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="flex justify-start mb-8">
        <div className="text-white flex items-center space-x-2 border-b border-t py-1 border-gray-400">
          <span
            className="font-bold text-blue-400 hover:text-blue-600 cursor-pointer transition duration-300"
            onClick={() => handleNavigate('/')} // Navigate to the home page
          >
            Home
          </span>
          <span className="text-gray-400 text-xl"><FontAwesomeIcon icon={faAngleRight} /></span>
          {generateBreadcrumbs()} {/* Generate the breadcrumb navigation */}
        </div>
      </div>
    </>
  )
}

export default GenerateBreadCumb
