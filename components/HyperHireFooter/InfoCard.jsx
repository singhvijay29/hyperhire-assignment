import React from "react";

const InfoCard = ({ title, subtitle, description }) => {
  return (
    <div>
      <div className="text-[12px] text-color-1 mb-[10px]">{title}</div>
      <div className="text-[13px] text-color-f">{subtitle}</div>
      <div className="text-[13px] text-color-f mb-5">{description}</div>
    </div>
  );
};

export default InfoCard;
