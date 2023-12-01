"use client";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTopButton = ({}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  const checkScrollTop = () => {
    if (!showScrollButton && window.scrollY > 200) {
      setShowScrollButton(true);
    } else if (showScrollButton && window.scrollY <= 200) {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollButton]);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`${
          showScrollButton ? "translate-x-0" : "translate-x-40"
        } border-primary  fixed bottom-8 right-8 z-[100] block rounded-full border bg-white p-3 text-white shadow-lg duration-500 lg:hidden`}
      >
        <FaAngleUp className="text-primary" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
