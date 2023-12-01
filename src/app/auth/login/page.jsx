import { LoginSection } from "@/app/auth/login/sections";
import Image from "next/image";
import React from "react";
import LogoApp from "@/app/components/logo";

const Login = ({}) => {
  return (
    <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-8">
      <section className="relative col-span-5 hidden h-full w-full bg-primary lg:block">
        <Image
          className="h-full w-full"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          quality={100}
          alt={"candi borobudur"}
          src={"https://images2.alphacoders.com/466/466392.jpg"}
        />
        <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
        <div className="absolute bottom-9 right-24 z-20">
          <p className="text-lg font-medium capitalize leading-normal text-white">
            candi borobudur, magelang
          </p>
        </div>
      </section>

      <section className="flex h-full w-full flex-col justify-center px-8 lg:col-span-3 lg:px-20">
        <div className="mb-20">
          <LogoApp />
          <h1>Log in untuk merasakan segala manfaat yang ditawarkan!</h1>
        </div>

        <LoginSection />
      </section>
    </div>
  );
};

export default Login;
