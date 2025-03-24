import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import ProductCard from "../components/ProductCard";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react"; // For star ratings

// Define interfaces for the data
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface FeaturedSectionData {
  title: string;
  description: string;
  image: string;
}

interface Review {
  text: string;
  reviewer: string;
  rating: number;
}

interface Event {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface Affiliation {
  name: string;
  logo: string;
}

// Sample data for products
const products: Product[] = [
  {
    name: "The Gilded Echo Hoops",
    description: "24k Gold Plated",
    price: "Rs 55000.00",
    image: "/gemTypes/image_b2ca5c50-9833-4a03-b49d-94dab361a1cc.jpeg",
  },
  {
    name: "The Whispering Tide",
    description: "24k Gold Plated",
    price: "Rs 78000.00",
    image: "/gemTypes/CR_469RGI__2024-07-16-14-58-17.jpeg",
  },
  {
    name: "The Fragment of Dawn",
    description: "24k Gold Plated",
    price: "Rs 75000.00",
    image: "/gemTypes/IMG_1283_e641f8e3-6543-40de-b500-5ebcda473057.jpeg",
  },
  {
    name: "The Lunar Current",
    description: "Earrings",
    price: "Rs 95000.00",
    image: "/gemTypes/S5065.5__2024-07-10-12-14-58.jpeg",
  },
];

// Sample data for featured sections
const featuredSections: FeaturedSectionData[] = [
  {
    title: "Classic Collection",
    description: "A harmony of artistry and organic elegance...",
    image: "/gemTypes/WhatsAppImage2021-06-15at12.41.57PM_1.jpeg",
  },
  {
    title: "Natural Gems",
    description: "Discover the brilliance of natural gemstones...",
    image: "/gemTypes/20210101_193503.jpeg",
  },
];

// Sample data for customer reviews with ratings
const reviews: Review[] = [
  {
    text: "If you're looking for a Precious Gems and Jewelry store in Colombo, would highly recommend this store. Great and reliable Gem and Jewelry store, who are always consistent with their quality, their jewelry are exceptionally well made and look exquisite. The staff are also very professional and friendly, surely a recommendation to others looking for a good jeweler.",
    reviewer: "Abigum Chandrakanthan",
    rating: 5,
  },
  {
    text: "Good customer service & 1st grade jewelries & gemstones.would highly recommend this store. Great and reliable Gem and Jewelry store, who are always consistent with their quality, their jewelry are exceptionally well made and look exquisite. The staff are also very professional and friendly, surely a recommendation to others looking for a good jeweler.",
    reviewer: "Buddhika Imendra",
    rating: 4,
  },
  {
    text: "Good place for buying stones!.would highly recommend this store. Great and reliable Gem and Jewelry store, who are always consistent with their quality, their jewelry are exceptionally well made and look exquisite. The staff are also very professional and friendly, surely a recommendation to others looking for a good jeweler.",
    reviewer: "Promit Kumar Mondal",
    rating: 5,
  },
];

// Sample data for events
const events: Event[] = [
  {
    title: "Facets 2023: A Global Invitation to the Most Fabulous Gem Show in Sri Lanka",
    description:
      "In the heart of the Indian Ocean, where the allure of gemstones meets the enchanting landscapes of Sri Lanka, the stage is set for the ...",
    image: "/events/facets-srilanka_345x345@2x.webp",
    tags: ["Blue sapphire", "Events", "Gem Exhibition", "sustainability"],
  },
  {
    title: "Hong Kong Jewellery & Gem Fair 2023 18th-22nd September Booth Number AWE 2N09",
    description:
      "World’s Number One Fine Jewellery Event Returns in 2023, Jewellery & Gem WORLD Hong Kong (JGW), popularly known as the September Hong Kong Jewel...",
    image: "/events/IMG_9378_345x345@2x.jpg",
    tags: [],
  },
  {
    title: "Ceylon Blue Sapphire",
    description:
      "Ceylon Blue Sapphire | (Nil Manika) One of Sri Lanka’s Top Level Exports. Blue Sapphire is a very unique variety of gemstones of the mineral Corun...",
    image: "/events/IMG-20230814-WA0010_345x345@2x.webp",
    tags: ["Blue sapphire", "Cornflower Blue Sapphires"],
  },
];

// Sample data for affiliations
const affiliations: Affiliation[] = [
  {
    name: "GIA Alumni Member",
    logo: "/images/ALUM170008_Alumni_Association_Member__Gold_Vert_160x160@2x.png",
  },
  {
    name: "EDDB Registered Supplier",
    logo: "/images/NGJA-160-logo_1_160x160@2x.png",
  },
  {
    name: "J",
    logo: "/images/NGJA-160-logo_2_160x160@2x (1).png",
  },
  {
    name: "Affiliation 4",
    logo: "/images/NGJA-160-logo_2_160x160@2x.png",
  },
];

// Component to render star ratings
const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <div className="flex mb-2 sm:mb-4">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          size={16}
          sm={{ size: 20 }}
          className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />

      {/* Sidebar and Main Content */}
      <div className="container mx-auto p-4 sm:p-6 flex flex-col md:flex-row">
        <Sidebar />
        <main className="w-full md:w-3/4 p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
          {featuredSections.map((section, index) => (
            <FeaturedSection
              key={index}
              title={section.title}
              description={section.description}
              image={section.image}
            />
          ))}
        </main>
      </div>

      {/* View All Button for Products */}
      <div className="text-center my-6 sm:my-8">
        <Link href="/products">
          <button className="bg-black text-white font-bold py-2 px-4 sm:px-6 rounded-md hover:bg-gray-800 text-sm sm:text-base">
            VIEW ALL
          </button>
        </Link>
      </div>

      {/* Customer Reviews Section */}
      <section className="container mx-auto p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <StarRating rating={review.rating} />
              <div className="text-3xl sm:text-4xl text-gray-300 mb-3 sm:mb-4">“</div>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-5">
                {review.text}
              </p>
              <p className="text-gray-800 font-semibold text-right text-sm sm:text-base">
                — {review.reviewer}
              </p>
            </div>
          ))}
        </div>
        {/* View All Button for Reviews */}
        <div className="text-center mt-6 sm:mt-8">
          <Link href="/reviews">
            <button className="bg-black text-white font-bold py-2 px-4 sm:px-6 rounded-md hover:bg-gray-800 text-sm sm:text-base">
              VIEW ALL
            </button>
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 sm:h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">
                  {event.description}
                </p>
                {event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/events/${index}`}>
                  <span className="inline-block text-gray-700 font-medium border border-gray-700 px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    READ MORE
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button for Events */}
        <div className="text-center mt-6 sm:mt-8">
          <Link href="/events">
            <button className="bg-black text-white font-bold py-2 px-4 sm:px-6 rounded-md hover:bg-gray-800 text-sm sm:text-base">
              VIEW ALL
            </button>
          </Link>
        </div>
      </section>

      {/* Location and Affiliations Section */}
      <section className="relative py-12 sm:py-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/showroomone.png" // Replace with actual image path
            alt="Christina Jewelry Location"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Darker overlay for better contrast */}
        </div>

        {/* Location Card */}
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-md sm:max-w-lg mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl text-center transform transition-all duration-500 hover:scale-105">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Our Christina Jewelry Location in Colombo!
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              730 Galle Road, Colombo 03
            </p>
            <Link href="https://maps.google.com">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 text-sm sm:text-base">
                GET DIRECTIONS
              </button>
            </Link>
          </div>
        </div>

        {/* Affiliations */}
        <div className="relative container mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-6 sm:mb-8 drop-shadow-md">
            Our Affiliations
          </h3>
          <div className="flex justify-center gap-6 sm:gap-12 flex-wrap bg-white bg-opacity-90 py-4 sm:py-6 rounded-lg shadow-lg">
            {affiliations.map((affiliation, index) => (
              <div
                key={index}
                className="flex items-center transform transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={affiliation.logo}
                  alt={affiliation.name}
                  width={80}
                  height={80}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}