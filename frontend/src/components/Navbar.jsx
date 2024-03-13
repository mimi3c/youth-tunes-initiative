import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [sticky, setSticky] = useState("");
    const [open, setOpen] = useState(false);

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
            ? setSticky("scale-[2]")
            : setSticky("");
        }
    }
    
    return(
        <div className="flex justify-center px-5">
            <nav className={`${sticky} inset-x-5 mt-5 rounded-3xl z-50 bg-white fixed flex align-center transition-transform duration-75`}>
                <p className="p-2 text-white">shh</p>
            </nav>
            <nav className="inset-x-5 mt-5 rounded-3xl z-50 bg-white fixed flex justify-between align-center px-5">
                <img src="" alt="logo" />
                <div className="w-2/4">
                    <ul className="flex justify-between text-orange font-bold">
                        <li className="p-2">Home</li>
                        <li className="p-2">About</li>
                        <li className="p-2">Impact</li>
                        <li className="p-2">Contact Us</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;