import React from "react";

interface ReviewCardProps {
  mouseName: string;
  description: string;
  imageUrl: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ mouseName, description, imageUrl }) => {
  return (
    <div
      className="mx-auto max-w-4xl mb-8 w-full rounded-md text-center p-16 relative transition duration-200 hover:-translate-y-1 hover:cursor-pointer overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-white text-4xl font-bold mb-4">{mouseName}</h1>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;