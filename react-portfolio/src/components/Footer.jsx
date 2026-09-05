import React from "react";

function Footer(){

     const d = new Date();
    
     return(
     <>
        <footer className="bg-gray-800 py-6">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-gray-300 text-sm">
                @{d.getFullYear()} Taylin. This website is front-end only.
              </p>
            </div>
        </footer>
    </>
    )
}

export default Footer;