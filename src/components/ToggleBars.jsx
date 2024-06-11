"use client";
import { React, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const ToggleBars = () => {
  const [isBars, setIsBars] = useState(false);
  console.log(isBars);
  return (
    <div
      className="text-[20px] cursor-pointer"
      onClick={() => setIsBars((prev) => !prev)}
    >
      {!isBars ? (
        <span>
          <FaBars />
        </span>
      ) : (
        <span>
          <IoClose />
        </span>
      )}
    </div>
  );
};

export default ToggleBars;
