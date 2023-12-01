import Image from "next/image";
import { CustomInput } from "../components";
import { Button } from "@chakra-ui/react";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const HomeSlider = () => {
  return (
    <div className="relative mb-[300px] w-full lg:mb-[200px]">
      <div className="relative h-[400px] w-full lg:h-[650px]">
        <Image
          className="object-cover"
          layout="fill"
          quality={100}
          alt="slider"
          src="https://wallpaperaccess.com/full/1564172.jpg"
          style={{
            objectFit: "cover",
            objectPosition: "center 80%",
            overflow: "hidden",
          }}
        />
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
        <div className="absolute left-4 top-4 z-20 block lg:hidden">
          <p className="text-sm font-medium capitalize leading-normal text-white lg:text-lg">
            raja ampat, papua
          </p>
        </div>
        <div className="absolute z-20 hidden lg:bottom-24 lg:right-24 lg:block">
          <p className="text-sm font-medium capitalize leading-normal text-white lg:text-lg">
            raja ampat, papua
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center px-5 lg:items-start lg:px-[200px]">
        <h1 className="text-[30px] font-bold uppercase text-white lg:text-[45px]">
          never stop
        </h1>
        <h1 className="text-[30px] font-bold uppercase text-white lg:text-[45px]">
          exploring the world
        </h1>
      </div>

      <div className="absolute -bottom-48 z-20 flex w-full justify-center lg:-bottom-14">
        <div className="flex w-[80%] flex-col items-center space-x-0 space-y-7 rounded bg-white p-5 shadow-lg lg:w-[70%] lg:flex-row lg:space-x-10 lg:space-y-0">
          <div className="flex h-full w-full flex-col items-center space-x-0 space-y-4 lg:flex-row lg:space-x-5 lg:space-y-0">
            <CustomInput
              title="Tujuan"
              placeholder={"Semua Tempat"}
              px={0}
              _focus={{
                border: "none",
              }}
            />
            <div className="hidden h-full w-[2px] bg-hitam lg:block"></div>
            <CustomInput
              title="Jadwal"
              type={"date"}
              placeholder={"Kapan Saja"}
              px={0}
              _focus={{
                border: "none",
              }}
            />
          </div>
          <div className="w-full lg:h-full lg:w-fit">
            <div className="hidden h-full w-full lg:block">
              <Button
                leftIcon={<RiSearchLine />}
                height={"100%"}
                width={"100%"}
                px={10}
                bg={"primary"}
                color={"white"}
                _hover={{ bg: "primaryHover" }}
              >
                Cari Destinasi
              </Button>
            </div>
            <div className="block h-full w-full lg:hidden">
              <Button
                leftIcon={<RiSearchLine />}
                height={"100%"}
                width={"100%"}
                py={3}
                bg={"primary"}
                color={"white"}
                _hover={{ bg: "primaryHover" }}
              >
                Cari Destinasi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
