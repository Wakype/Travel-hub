import { TopNavigation } from "@/app/components";
import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import BottomNav from "@/app/components/bottomNav";

const CustomButton = React.memo(({ href, children }) => (
  <Link href={href}>
    <Button
      bg={"primary"}
      fontWeight={"bold"}
      fontSize={"22px"}
      width={"100%"}
      px={"150px"}
      py={"30px"}
      color={"white"}
      _hover={{ bg: "primaryHover" }}
    >
      {children}
    </Button>
  </Link>
));
CustomButton.displayName = "CustomButton";

const Register = () => {
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
            <div className="flex w-fit flex-col rounded border-t-[5px] border-primary bg-white px-7 py-16">
              <h1 className="mb-14 text-[30px] font-medium capitalize border-l-4 border-primary pl-3">
                Choose registration
              </h1>
              <div className="flex w-full flex-col space-y-10">
                <CustomButton href={"/auth/register/user"}>
                  Register as User
                </CustomButton>
                <div className="flex w-full items-center space-x-5">
                  <div className="h-[1px] w-full bg-hitam"></div>
                  <p className="text-lg font-normal">Or</p>
                  <div className="h-[1px] w-full bg-hitam"></div>
                </div>
                <CustomButton href={"/auth/register/hoster"}>
                  Register as Hoster
                </CustomButton>
              </div>
            </div>
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

export default Register;
