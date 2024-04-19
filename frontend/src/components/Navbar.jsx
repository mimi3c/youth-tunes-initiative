import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../images/YTI_logo.svg";

const Navbar = () => {
    const [sticky, setSticky] = useState("");
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    
        return () => {
          window.removeEventListener("scroll", stickNavbar);
        };
    });
    
    const stickNavbar = () => {
        if (window !== undefined) {
            const windowHeight = window.scrollY;

            windowHeight > 4
            ? setSticky("scale-[2] -translate-y-2 border border-night")
            : setSticky("");
        }
    }
    
    return(
        <div className="flex justify-center px-5">
            <nav className={`${sticky} inset-x-5 mt-5 rounded-3xl z-40 bg-white fixed flex transition-transform duration-75`}>
                <p className="p-2 text-white">shh</p>
            </nav>
            <nav className="inset-x-5 mt-4 rounded-3xl z-50 bg-white fixed flex justify-between pr-5 pl-1">
                <img src={logo} alt="logo" className="h-10 my-1"/>
                <div className="flex items-center lg:hidden">
                    <FiMenu size={24} color='#E68C00'onClick={() => {
                        navRef.current.classList.toggle("-translate-y-full")
                    }}/>
                </div>
                <div className="lg:grid hidden w-2/4">
                    <ul className="flex items-center justify-between text-orange font-medium font-ubuntu">
                        <li className="p-1">Home</li>
                        <li className="p-1">About</li>
                        <li className="p-1">Impact</li>
                        <li className="p-1">Contact Us</li>
                    </ul>
                </div>
            </nav>
            <div ref = {navRef} className="transition duration-200 border-b-2 border-color-night bg-white w-full pt-20 fixed pr-10 pb-5 -translate-y-full">
                <ul className="text-right text-orange p-1 font-bold">
                    <li className="p-1">Home</li>
                    <li className="p-1">About</li>
                    <li className="p-1">Impact</li>
                    <li className="p-1">Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;