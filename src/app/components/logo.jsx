import React from "react";
import Link from "next/link";
import { FaCompass } from "react-icons/fa6";

const LogoApp = ({ fontClassName, iconSize = 24 }) => {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-3 text-[30px]">
        <h1 className={`${fontClassName} font-extrabold`}>TRAVELHUB</h1>
        <span>
          <FaCompass color="#00A9FF" size={iconSize} />
        </span>
      </div>
    </Link>
  );
};

export default LogoApp;
