import Image from "next/image";
import { Button } from "@chakra-ui/react";
import React from "react";
import formatRupiah from "../hooks/useFormatRupiah";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const ProductCard = ({
  thumbnail,
  title,
  description,
  rating,
  price,
  days,
  nights,
}) => {
  function replaceSpacesWithHyphens(input) {
    return input.replace(/ |,/g, "-");
  }

  return (
    <div className="lg:w-[305px] h-[580px] rounded-lg shadow-lg">
      <div className="relative h-[45%] w-full">
        <Image
          className="rounded-t-lg object-cover"
          layout="fill"
          quality={100}
          alt={title}
          src={thumbnail}
          style={{
            objectFit: "cover",
            objectPosition: "center 80%",
            overflow: "hidden",
          }}
        />
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-70">
          <p className="px-4 py-1 text-base font-semibold text-white">
            {days}D{nights}N
          </p>
        </div>
      </div>

      <div className="flex h-[55%] w-full flex-col justify-between p-5">
        <div className="flex flex-col space-y-5">
          <h1 className="text-base font-bold lg:text-[22px]">{title}</h1>
          <p className="text-[12px] font-medium lg:text-base">{description}</p>
          <div className="flex flex-col items-start justify-between space-y-2 lg:flex-row lg:items-center lg:space-y-0">
            <h1 className="text-sm font-bold text-primary lg:text-[20px]">
              {formatRupiah(price)}
              <span className="text-xs font-medium text-hitam"> / orang</span>
            </h1>
            <div className="flex items-center space-x-2">
              <FaStar color="#FFC619" />
              <p className="text-xs font-bold">{rating}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="hidden lg:block">
            <Link href={`/destinasi/${replaceSpacesWithHyphens(title)}`}>
              <Button
                px={10}
                width={"100%"}
                bg={"primary"}
                color={"white"}
                _hover={{ bg: "primaryHover" }}
              >
                Pesan Sekarang
              </Button>
            </Link>
          </div>
          <div className="block lg:hidden">
            <Link href={`/destinasi/${replaceSpacesWithHyphens(title)}`}>
              <Button
                size={"sm"}
                px={10}
                width={"100%"}
                bg={"primary"}
                color={"white"}
                _hover={{ bg: "primaryHover" }}
              >
                Pesan Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
