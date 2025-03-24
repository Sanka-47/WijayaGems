import Image from "next/image";

// Define the props interface
interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, description, price, image }: ProductCardProps) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-md"
      />
      <h4 className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800">{name}</h4>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      <p className="text-gray-800 font-semibold text-sm sm:text-base">{price}</p>
    </div>
  );
}