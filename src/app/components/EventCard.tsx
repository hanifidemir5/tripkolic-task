import React from "react";
import { TourPackage } from "../Data/DummyData";
import coast from "../../../public/DSC_0753.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

type EventCardProps = {
  tourPackage: TourPackage;
};

const EventCard: React.FC<EventCardProps> = ({ tourPackage }) => {
  const currency = "THB";

  return (
    <div
      className="m-4 h-[350px] min-w-[300px] max-w-[300px] overflow-hidden rounded-xl shadow-md"
      key={tourPackage.id}
    >
      <div className="relative">
        <Image src={coast.src} alt="coast" width={300} height={150} className="max-h-[150px]" />
        <p className="absolute top-4 left-4 px-3 py-1 text-[#F78410] font-bold bg-white rounded-lg cursor-pointer">
          30% OFF
        </p>
        <p className="absolute right-4 top-4 bg-white w-10 h-10 rounded-lg items-center flex justify-center cursor-pointer">
          <FontAwesomeIcon icon={faHeart} />
        </p>
        <p className="absolute bottom-4 left-4 text-white bg-[#F78410] px-2 py-1 rounded-lg font-bold">
          {tourPackage.category}
        </p>
      </div>
      <div className="h-[200px] w-full p-2 flex flex-col justify-between">
        <div className="overflow-hidden w-full flex flex-row flex-nowrap text-ellipsi text-sm">
          <p className="w-1/2 flex items-center gap-1">
            <FontAwesomeIcon icon={faStar} color="gold" />
            <strong>{tourPackage.rating}</strong> ({tourPackage.reviews})
          </p>
          <p className="w-1/2 whitespace-nowrap overflow-hidden text-ellipsis">
            <FontAwesomeIcon icon={faLocationDot} color="gold" className="mr-1" />
            <span className="inline text-gray-600">{tourPackage.location}</span>
          </p>
        </div>
        <h1 className="text-lg font-bold font-sans">{tourPackage.title}</h1>
        <p className="flex justify-end gap-2 items-center">
          <span className="line-through text-red-500">
            {currency} {tourPackage.originalPrice}
          </span>
          <span className="rotate-90 text-red-500 text-2xl">&#8599;</span>
          <strong>
            {currency} {tourPackage.discountedPrice}
          </strong>
        </p>
        <div className="flex justify-between">
          <a className="text-[#F78410] underline items-center">
            Details <span className="text-2xl">&#8594;</span>
          </a>
          <button className="px-2 py-1 my-1 bg-[#F78410] text-white rounded-md text-sm">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
