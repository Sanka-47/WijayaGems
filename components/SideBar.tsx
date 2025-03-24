import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  // Define shiny gradient styles for each gem type
  const gemGradients: { [key: string]: string } = {
    "Blue Sapphires": "bg-gradient-to-r from-blue-200 via-blue-100/70 via-30% to-blue-50 to-90% hover:from-blue-300 hover:via-blue-200/70 hover:to-blue-100",
    "Ruby": "bg-gradient-to-r from-red-200 via-red-100/70 via-30% to-red-50 to-90% hover:from-red-300 hover:via-red-200/70 hover:to-red-100",
    "Padparadscha": "bg-gradient-to-r from-orange-200 via-orange-100/70 via-30% to-pink-50 to-90% hover:from-orange-300 hover:via-orange-200/70 hover:to-pink-100",
    "Teal Sapphires": "bg-gradient-to-r from-teal-200 via-teal-100/70 via-30% to-teal-50 to-90% hover:from-teal-300 hover:via-teal-200/70 hover:to-teal-100",
    "Pink Sapphires": "bg-gradient-to-r from-pink-200 via-pink-100/70 via-30% to-pink-50 to-90% hover:from-pink-300 hover:via-pink-200/70 hover:to-pink-100",
    "Yellow Sapphires": "bg-gradient-to-r from-yellow-200 via-yellow-100/70 via-30% to-yellow-50 to-90% hover:from-yellow-300 hover:via-yellow-200/70 hover:to-yellow-100",
    "Star Sapphires": "bg-gradient-to-r from-indigo-200 via-indigo-100/70 via-30% to-indigo-50 to-90% hover:from-indigo-300 hover:via-indigo-200/70 hover:to-indigo-100",
    "Emerald": "bg-gradient-to-r from-green-200 via-green-100/70 via-30% to-green-50 to-90% hover:from-green-300 hover:via-green-200/70 hover:to-green-100",
    "Other Gemstones": "bg-gradient-to-r from-gray-200 via-gray-100/70 via-30% to-gray-50 to-90% hover:from-gray-300 hover:via-gray-200/70 hover:to-gray-100",
    "White Sapphires": "bg-gradient-to-r from-gray-100 via-white/70 via-30% to-white to-90% hover:from-gray-200 hover:via-white/70 hover:to-white",
  };

  // Define image paths for each gem type
  const gemImages: { [key: string]: string } = {
    "Blue Sapphires": "/gemTypes/craiyon_135338_transparent.png",
    "Ruby": "/gemTypes/craiyon_131441_transparent.png",
    "Padparadscha": "/gemTypes/craiyon_130234_transparent.png",
    "Teal Sapphires": "/gemTypes/craiyon_131246_transparent.png",
    "Pink Sapphires": "/gemTypes/craiyon_131321_transparent.png",
    "Yellow Sapphires": "/gemTypes/craiyon_131142_transparent.png",
    "Star Sapphires": "/gemTypes/craiyon_131413_transparent.png",
    "Emerald": "/gemTypes/craiyon_135425_transparent.png",
    "Other Gemstones": "/gemTypes/craiyon_135451_transparent.png",
    "White Sapphires": "/gemTypes/craiyon_131347_transparent.png",
  };

  // List of gem types for the sidebar links
  const gemTypes = [
    "Blue Sapphires",
    "Ruby",
    "Padparadscha",
    "Teal Sapphires",
    "Pink Sapphires",
    "Yellow Sapphires",
    "Star Sapphires",
    "Emerald",
    "Other Gemstones",
    "White Sapphires",
  ];

  return (
    <aside className="w-full sm:w-1/3 md:w-1/4 p-3 sm:p-4 bg-white shadow-md rounded-lg">
      {/* Material Section */}
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">
        Material
      </h3>
      <nav className="space-y-1 sm:space-y-2">
        {gemTypes.map((gem, index) => (
          <Link
            key={index}
            href={`/${gem.toLowerCase().replace(/\s+/g, "-")}`} // Dynamic route based on gem name
            className={`block text-gray-700 hover:text-gray-900 relative px-2 sm:px-3 py-1 sm:py-2 rounded-md transition-all duration-300 ${gemGradients[gem]} shadow-sm hover:shadow-md hover:brightness-110 text-sm sm:text-base`}
          >
            <Image
              src={gemImages[gem]} // Dynamically set the image based on the gem type
              alt={`${gem} icon`}
              width={32}
              height={32}
              className="inline mr-1 sm:mr-2 w-8 h-8 sm:w-10 sm:h-10"
            />
            {gem}
          </Link>
        ))}
      </nav>

      {/* Color Section */}
      <h3 className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4 text-gray-800">
        Color
      </h3>
      <div className="space-y-1 sm:space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-1 sm:mr-2 accent-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-700 text-sm sm:text-base">Blue</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-1 sm:mr-2 accent-red-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-700 text-sm sm:text-base">Red</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-1 sm:mr-2 accent-pink-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-700 text-sm sm:text-base">Pink</span>
        </label>
        {/* Add more colors as needed */}
      </div>

      {/* Price Range Section */}
      <h3 className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4 text-gray-800">
        Price Range
      </h3>
      <div className="space-y-1 sm:space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-1 sm:mr-2 accent-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-700 text-sm sm:text-base">Rs 100,000 - Rs 200,000</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-1 sm:mr-2 accent-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-700 text-sm sm:text-base">Rs 200,000 - Rs 300,000</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-1 sm:mr-2 accent-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-gray-700 text-sm sm:text-base">Rs 300,000 - Rs 400,000</span>
        </label>
      </div>
    </aside>
  );
}