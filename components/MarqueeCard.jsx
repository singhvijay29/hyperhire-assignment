import React from "react";

const MarqueeCard = ({ index, item }) => {
  return (
    <div
      key={index}
      className="card min-w-[330px] bg-[rgba(255,255,255,0.2)] rounded-[12px] flex items-center p-4 mb-4 mr-4"
    >
      {/* Left side */}
      <div className="w-[56px] h-[56px] bg-[rgba(255,255,255,0.4)] flex items-center content-center rounded-[8px]">
        {item?.icon()}
      </div>
      {/* Right side */}
      <div>
        <h2 className="text-center text-[20px] font-semibold ml-4">
          {item?.name}
        </h2>
      </div>
    </div>
  );
};

export default MarqueeCard;
