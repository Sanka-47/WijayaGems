"use client";
import Link from "next/link";
import Image from "next/image";
import { Marcellus } from "next/font/google";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"; // Import Lucide icons, including Menu and X for hamburger
import { useState, useEffect } from "react"; // Import React hooks for carousel and menu toggle

// Font setup
const mrc = Marcellus({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Array of carousel images
const carouselImages = [
  "/carousel/Web_Banner_2_1_540x.png",
  "/carousel/Web_Banner_2.png",
  "/carousel/Web_Banner_3_720x.png",
];

export default function Header() {
  // State to track the current image index for the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect to handle automatic image switching every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds interval

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-gray-100">
      {/* Free Shipping Banner */}
      <div className="bg-gray-800 text-white text-center py-2 text-xs sm:text-sm">
        Free Shipping on ALL Goods from Canada
      </div>

      {/* Navigation Bar */}
      <nav className="w-full px-4 sm:px-6 py-4 relative bg-gray-100">
        <div className="bg-white rounded-full py-2 sm:py-3 px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? (
                  <X size={24} className="text-black" />
                ) : (
                  <Menu size={24} className="text-black" />
                )}
              </button>
            </div>

            {/* Navigation Links (Centered on Desktop, Hidden on Mobile when Menu is Closed) */}
            <ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6 flex-1 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-10 shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
            >
              <li>
                <Link
                  href="/new-in"
                  className="hover:underline text-black text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/earrings"
                  className="hover:underline text-black text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/rings"
                  className="hover:underline text-black text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BirthStones
                </Link>
              </li>
              <li>
                <Link
                  href="/rings"
                  className="hover:underline text-black text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/rings"
                  className="hover:underline text-black text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/rings"
                  className="hover:underline text-black text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/rings"
                  className="hover:underline text-black text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Icons on the Right */}
            <div className="flex space-x-3 sm:space-x-4">
              <Link href="/search">
                <Search className="text-black w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/account">
                <User size={20} className="text-black" />
              </Link>
              <Link href="/cart">
                <ShoppingBag size={20} className="text-black" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {carouselImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Header Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority={index === 0} // Priority for the first image only
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl text-[#c9c0bb] tracking-widest ${mrc.className}`}
          >
            WG
          </h1>
        </div>
      </div>
    </header>
  );
}