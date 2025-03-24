import Image from "next/image";

// Define the props interface
interface FeaturedSectionProps {
  title: string;
  description: string;
  image: string;
}

export default function FeaturedSection({ title, description, image }: FeaturedSectionProps) {
  return (
    <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center bg-gray-50 p-4 sm:p-6 rounded-lg">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-48 sm:h-64 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:pl-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}