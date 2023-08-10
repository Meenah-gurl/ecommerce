import React from 'react';
import Navbar from './Included/Navbar';
import './index.css';
import Footer from './Included/Footer';

function App() {
  return (
        <>
          <Navbar />

          <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">MINA MART</h1>
            <a href="/" className="py-6 px-10 bg-green-600 rounded-full text-3xl hover:bg-green-500 transition duration-300 ease-in-out flex items-center animate-bounce">Order Now
              <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          <Footer />
        
        </>
        
    
   
  );
}

export default App;
