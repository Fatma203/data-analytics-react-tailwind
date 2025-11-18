import { useState } from "react";
import { BsList } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function Navbar() {
    const [Nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!Nav);
    };

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <p className="text-green-500 font-bold text-3xl">REACT.</p>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>

            {/* Mobile Icon */}
            <div onClick={handleNav} className="block md:hidden">
                {Nav ? (
                    <MdClose size={30} className="text-green-500" />
                ) : (
                    <BsList size={30} className="text-green-500" />
                )}
            </div>

            {/* Mobile Menu */}
            <div
                className={
                    Nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "fixed left-[-100%]"
                }
            >
                <p className="text-green-500 font-bold text-3xl m-4">REACT.</p>

                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
}
