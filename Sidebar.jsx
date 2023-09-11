import {useRef} from "react";
import {GiHamburgerMenu} from "react-icons/gi"



export default function Sidebar(){


    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("-translate-x-full");
    }
    return(

        <div className="relative min-h-screen">

            <div className="bg-red-700 text-white flex justify-between">
                <a href="#" className="block p-4 text-white font-bold">Website Title</a>
                <button onClick={showNav} className="p-4">
                   
                    < GiHamburgerMenu />

                </button>
            </div>

            <div ref={navRef} className="bg-red-700 text-red-50 w-64 space-y-6 py-7 px-2 absolute inset-y-0 transform left-0 -translate-x-full transition duration-200 ease-in-out">
                <a className="text-white flex items-center space-x-2 px-4" href="#">Website Title</a>
                <nav>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-400">Home</a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-400">1</a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-400">2</a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:text-white hover:bg-red-400">3</a>
                </nav>
            </div>
            <div className="p-10 text-2xl font-bold flex-1">
                Content goes here
            </div>

        </div>


    );
}
