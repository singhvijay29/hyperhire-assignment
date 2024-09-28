import React from "react";

const ProfileCard = ({
  name,
  role,
  experience,
  skills,
  profileImage,
  flagImage,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md py-9 px-3 md:p-9 flex justify-center flex-col items-center">
      <div className="relative w-max">
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-[69px] md:w-[120px] h-[69px] md:h-[120px] object-cover rounded-full"
        />
        <img
          src={flagImage}
          alt="Country flag"
          className="absolute bottom-0 right-16 w-6 h-4 rounded-sm absolute right-3"
        />
      </div>
      <h2 className="text-[18px] font-bold text-center mb-1 poppin-900 text-black">
        {name}
      </h2>
      <p className="text-[14px] text-center mb-4 text-[#4A77FF]">
        {role} • {experience}
      </p>

      <div className="flex flex-wrap gap-1 justify-center px-1">
        {skills?.map((skill, index) => (
          <span
            key={index}
            className="border-[1px] border-[#C1C5CF] text-[#5E626F] text-[14px] px-2 py-1 rounded-[6px]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
