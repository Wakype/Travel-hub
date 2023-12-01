import { TopNavigation } from "@/app/components";
import React from "react";
import Image from "next/image";
import BottomNav from "@/app/components/bottomNav";
import UserFormSection from "./sections/userForm.section";

const RegisterUser = () => {
  return (
    <div className="w-full">
      <TopNavigation />

      <section className="relative h-screen w-full">
        <div className="relative h-full w-full">
          <Image
            className="h-full w-full"
            objectFit="cover"
            objectPosition="center"
            width={1000}
            height={0}
            quality={100}
            alt={"candi borobudur"}
            src={"https://images2.alphacoders.com/466/466392.jpg"}
          />
          <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

          <div className="absolute inset-0 z-20 flex h-full w-full items-center px-24 ">
            <UserFormSection />
          </div>
          
          <div className="absolute bottom-9 right-24 z-20">
            <p className="text-lg font-medium capitalize leading-normal text-white">
              candi borobudur, magelang
            </p>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default RegisterUser;
