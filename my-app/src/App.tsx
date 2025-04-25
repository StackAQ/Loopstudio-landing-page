import React, { useState } from "react";
import {
  FaBars,
  FaCross,
  FaFacebook,
  FaXTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";
import "./index.css";

const navLinks = [
  { name: "About" },
  { name: "Careers" },
  { name: "Events" },
  { name: "Products" },
  { name: "Support" },
];

const creations = [
  { img: "/image-deep-earth.jpg", name: "DEEP EARTH" },
  { img: "/image-night-arcade.jpg", name: "NIGHT ARCADE" },
  { img: "/image-soccer-team.jpg", name: "SOCCER TEAM VR" },
  { img: "/image-grid.jpg", name: "THE GRID" },
  { img: "/image-from-above.jpg", name: "FROM UP ABOVE VR" },
  { img: "/image-pocket-borealis.jpg", name: "POCKET BOREALIS" },
  { img: "/image-curiosity.jpg", name: "THE CURIOSTIY" },
  { img: "/image-fisheye.jpg", name: "MAKE IT FISHEYE" },
];

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="bg-[url('/image-hero.jpg')] bg-cover w-full bg-no-repeat bg-center h-[50vh] lg:h-screen text-white">
        <div className="p-4 lg:py-10 lg:px-20 grid gap-24 lg:gap-32 relative">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              loopstudios
            </h1>
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((e, index) => (
                <a
                  key={index}
                  href=""
                  className="font-medium lg:text-lg hover:text-gray-200"
                >
                  {e.name}
                </a>
              ))}
            </div>
            <button onClick={toggleMenu} className="lg:hidden text-xl">
              <FaBars />
            </button>
          </nav>
          {isOpen && (
            <div className="absolute top-0 left-0 h-screen w-full z-50 bg-black p-3 grid gap-8">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-3xl">loopstudios</h1>
                <button onClick={toggleMenu}>
                  <FaCross />
                </button>
              </div>
            </div>
          )}
          <div className="border-2 border-white p-4 lg:w-1/3">
            <h1 className="uppercase text-5xl lg:text-6xl">
              immersive experiences that deliver
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 lg:p-20 lg:flex lg:relative">
        <img
          src="/image-interactive.jpg"
          className="max-w-full mx-auto lg:mx-0"
          alt=""
        />
        <div className="p-8 bg-white text-center max-w-full lg:max-w-[60%] lg:text-left lg:absolute lg:bottom-0 lg:right-8">
          <h1 className="text-5xl uppercase font-light py-8 lg:text-4xl">
            The leader in interactive VR
          </h1>
          <p className="text-2xl text-gray-500 font-medium lg:text-lg">
            Founded in 2011, Loopstudios has been producing world-className
            virtual reality projects for some of the best companies around the
            globe. Our award-winning creations have transformed businesses
            through digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div className="px-4 py-8 lg:p-20 grid gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase">
            our creations
          </h1>
          <button className="hidden lg:block px-6 py-1 text-sm sm:text-lg border-2 border-black">
            SEE ALL
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {creations.map((e, index) => (
            <div className="relative" key={index}>
              <img
                src={e.img}
                className="h-40 sm:h-48 md:h-56 lg:h-full object-center object-cover w-full"
                alt=""
              />
              <h1 className="text-lg sm:text-xl lg:text-3xl text-white absolute top-[50%] sm:top-[60%] lg:top-[80%] lg:w-2/3 left-4">
                {e.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <footer className="p-4 lg:p-20 lg:py-8 flex flex-col lg:flex-row gap-6 justify-center lg:justify-between items-center bg-black text-white">
        <div className="grid gap-4">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            loopstudios
          </h1>
          <div className="flex items-center gap-4 flex-col lg:flex-row lg:text-lg">
            {navLinks.map((e, index) => (
              <a href="" key={index}>
                {e.name}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          <div className="flex gap-4 justify-center items-center text-xl">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaPinterest />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
          <span>&copy; 2021 Loopstudios. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
