import React from "react";

function Footer(){

     const d = new Date();
    
     return(
     <>
        <footer className="bg-gray-600 p-2 ">
            <p className="font-bold text-white text-md">@{d.getFullYear()}  Taylin.</p>
        </footer>
    </>
    )
}

export default Footer;