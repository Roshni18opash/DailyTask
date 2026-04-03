import React, { useState } from "react";

const ResultCard = ({ item, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderContent = () => {
    if (type === "videos") {
      return (
        <div 
          className="media-card glass-card relative h-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <video 
              autoPlay 
              muted 
              loop 
              className="absolute inset-0 w-full h-full object-cover"
              src={item.video_files?.[0]?.link}
            />
          ) : (
            <img 
              src={item.image} 
              alt={item.user?.name || "Video"} 
              className="w-full h-full object-cover transition-transform duration-700"
            />
          )}
          
          <div className="media-card-overlay bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
            <p className="text-white font-medium text-sm truncate">{item.user?.name || "Unknown Author"}</p>
            <p className="text-gray-300 text-xs truncate">Pexels Video</p>
          </div>
        </div>
      );
    }

    // Default: photos
    return (
      <div className="group media-card glass-card relative h-full overflow-hidden">
        <img 
          src={item.urls?.small} 
          alt={item.alt_description || "Image"} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="media-card-overlay bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white font-medium text-sm truncate">{item.user?.name || "Unknown Photographer"}</p>
          <p className="text-gray-300 text-xs truncate">Unsplash Photo</p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-48 group">
      {renderContent()}
    </div>
  );
};

export default ResultCard;
