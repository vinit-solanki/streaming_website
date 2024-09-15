import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  // Toggle drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Close drawer when clicking outside of it
  const handleClickOutside = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Hamburger Button to toggle drawer */}
      <button 
        onClick={toggleDrawer} 
        className="fixed top-4 left-4 z-50 p-2 text-white bg-red-600 rounded-md focus:outline-none">
        {/* Hamburger icon */}
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}>
        <nav className='p-4 mt-12'>
          <ul className='space-y-4 flex flex-col justify-center '>
            <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
            <li><Link to="/accounts" onClick={toggleDrawer}>Accounts</Link></li>
            <li><Link to="/subscriptions" onClick={toggleDrawer}>Subscriptions</Link></li>
            <li><Link to="/splitnpay" onClick={toggleDrawer}>Split 'n Pay</Link></li>
            <li><Link to="/settings" onClick={toggleDrawer}>Settings</Link></li>
          </ul>
        </nav>
      </div>

      {/* Overlay for closing the drawer when clicking outside */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
}

export default Header;
