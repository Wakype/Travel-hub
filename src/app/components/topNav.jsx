"use client";
import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import LogoApp from "./logo";

const TopNavigation = ({ color = "white" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const currentNav = pathname?.split("/")[1];

  const NAVLIST = [
    { to: "/", title: "Beranda", nav: "" },
    { to: "/destinasi", title: "Destinasi", nav: "destinasi" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hidden w-full flex-col lg:flex">
      <div
        className={`${
          isScrolled
            ? "h-[55px] bg-white drop-shadow-md lg:h-[70px]"
            : "h-[65px] bg-transparent lg:h-[100px]"
        } fixed top-0 z-[150] flex w-full items-center justify-between px-7 py-2 duration-500 lg:px-[100px]`}
      >
        <section className="flex items-center space-x-3">
          {NAVLIST.map((_, i) => {
            return (
              <Link href={_.to} key={i}>
                <Button
                  variant={"solid"}
                  color={
                    currentNav === _.nav ? "white" : isScrolled ? "" : color
                  }
                  bg={currentNav === _.nav ? "primary" : "transparent"}
                  _hover={{
                    bg: currentNav === _.nav ? "primaryHover" : "primary",
                    color: "white",
                  }}
                >
                  {_.title}
                </Button>
              </Link>
            );
          })}

          <IconButton
            aria-label="Search"
            color={isScrolled ? "" : color}
            bg={"transparent"}
            _hover={{
              color: "white",
              bg: "primary",
            }}
            icon={<RiSearchLine />}
          />
        </section>

        <section className="">
          <LogoApp fontClassName={`${isScrolled ? "" : `text-${color}`}`} />
        </section>

        <section className="flex items-center space-x-3">
          <Link href={"/auth/login"}>
            <Button
              variant={"solid"}
              color={"primary"}
              bg={"fourth"}
              _hover={{}}
            >
              Login
            </Button>
          </Link>
          <Link href={"/auth/register"}>
            <Button
              variant={"outline"}
              color={"primary"}
              border={"1px solid #00A9FF"}
              _hover={{
                bg: "primary",
                color: "white",
              }}
            >
              Sign Up
            </Button>
          </Link>
        </section>
      </div>
      {/* <div className="w-full border-t-4 fixed top-3 z-[200] border-primary px-[100px]">hai</div> */}
    </div>
  );
};

export default TopNavigation;
