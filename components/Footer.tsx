import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"; // For social media icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Blue Sapphire",
                "Teal Sapphire",
                "Padparadscha",
                "Peach Sapphire",
                "Pink Sapphire",
                "Green Sapphire",
                "White Sapphire",
                "Blog",
                "Specialized Services",
                "Terms of Service",
                "Return policy",
                "Shipping Policy",
              ].map((link, index) => (
                <li key={index}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Subscribe to our monthly newsletter!
            </h3>
            <form className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 sm:p-3 rounded-l-md sm:rounded-l-md rounded-t-md sm:rounded-t-none bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-r-md sm:rounded-r-md rounded-b-md sm:rounded-b-none hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Contact Info
            </h3>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">
              No: 730 Galle Road, Colombo-03, 00300 Sri Lanka.
            </p>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">
              Phone: +94 71 5300 268
            </p>
            <p className="text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">
              Email:{" "}
              <a
                href="mailto:info@wijayagems.lk"
                className="hover:text-white transition-colors duration-300"
              >
                info@wijayagems.lk
              </a>
            </p>
            <p className="text-gray-400 mb-2 text-sm sm:text-base">
              20457 Fraser Hwy, Langley City, BC V3A 4G3, Canada
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              Phone: +12363353255
            </p>
          </div>
        </div>

        {/* Social Media and Currency Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4 sm:pt-6">
          {/* Currency Selector */}
          <div className="mb-4 sm:mb-0">
            <select
              className="bg-gray-800 text-gray-300 p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            >
              <option>LKR Rs</option>
              <option>USD $</option>
              <option>CAD $</option>
            </select>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors duration-300"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors duration-300"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors duration-300"
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-white transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}