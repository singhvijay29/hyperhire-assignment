import React from "react";

const Drowpdown = () => {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-3 ">
        <h2 className="text-lg font-semibold text-gray-800">채용</h2>
      </div>
      <ul className="">
        <li className="px-4 py-3 cursor-pointer">
          <span className="text-sm text-gray-700">해외 개발자 원격 채용</span>
        </li>
        <li className="px-4 py-3 cursor-pointer">
          <span className="text-sm text-gray-700">
            외국인 원격 채용 (비개발 직군)
          </span>
        </li>
        <li className="px-4 py-3 cursor-pointer border-t border-gray-200">
          <span className="text-sm text-gray-700">한국어 가능 외국인 채용</span>
        </li>
      </ul>
    </div>
  );
};

export default Drowpdown;
