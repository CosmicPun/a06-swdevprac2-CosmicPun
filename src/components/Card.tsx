"use client";
import Image from "next/image";
import InterectiveCard from "./InteractiveCard";

export default function Card({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
  return (
    <InterectiveCard contentName={venueName}>
      {/* Image: takes up full card, object-cover fills cleanly */}
      <div className="w-full h-[220px] relative overflow-hidden rounded-t-lg">
        <Image
          src={imgSrc}
          alt={venueName}
          fill={true}
          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Text: sits below image with clean padding */}
      <div className="px-4 py-3">
        <p className="text-sm font-medium text-gray-800 tracking-wide truncate">
          {venueName}
        </p>
      </div>
    </InterectiveCard>
  );
}