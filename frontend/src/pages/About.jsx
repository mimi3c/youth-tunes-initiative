import React from 'react';
import logo from "../images/YTI_logo.svg";

const About = () => {
  return (
    <div>
      {/* Other content in the About page */}
      <div className="bg-night py-40 grid justify-center items-center">
        <h1 className="text-5xl font-caprasimo uppercase text-center text-sea font-shrikhand">Our Volunteers</h1>
        </div>

        <div className="flex justify-center items-center h-80"> {/* Increased height as needed */}
            <img src={logo} alt="logo" className="h-48 object-cover mx-12"/> {/* Increased height and margin */}
            <img src={logo} alt="logo" className="h-48 object-cover mx-12"/> {/* Increased height and margin */}
            <img src={logo} alt="logo" className="h-48 object-cover mx-12"/> {/* Increased height and margin */}
        </div>




    </div>


      
  );
}

export default About;
