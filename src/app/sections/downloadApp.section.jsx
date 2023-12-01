import React from "react";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-primary px-7 lg:h-[500px] lg:flex-row lg:px-[100px]">
      <div className="flex flex-col space-y-12 py-20 lg:py-0">
        <div className="w-full lg:w-[540px]">
          <h1 className="mb-3 text-5xl font-extrabold capitalize leading-[64px] text-white">
            Download app
          </h1>
          <p className="text-lg font-normal leading-loose text-white">
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procastinating. Stay on track and
            complete on time!
          </p>
        </div>
        <div>
          <p className="mb-2 font-medium text-white">Get the App</p>
          <div className="flex items-center space-x-3">
            <div className="">
              <Image
                className=""
                objectFit="cover"
                objectPosition="center"
                width={150}
                height={0}
                quality={100}
                alt={"playstore"}
                src={"/googlePlay.png"}
              />
            </div>
            <div className="">
              <Image
                className=""
                objectFit="cover"
                objectPosition="center"
                width={150}
                height={0}
                quality={100}
                alt={"appstore"}
                src={"/appStore.png"}
              />
            </div>
          </div>{" "}
        </div>
      </div>

      <div className="flex h-full space-x-8">
        <div className="flex h-full rotate-180 items-start lg:rotate-0">
          <Image
            className=""
            objectFit="cover"
            objectPosition="center"
            width={300}
            height={0}
            quality={100}
            alt={"mobile apps"}
            src={"/mockup1.png"}
          />
        </div>
        <div className="flex h-full items-end">
          <Image
            className=""
            objectFit="cover"
            objectPosition="center"
            width={300}
            height={0}
            quality={100}
            alt={"mobile apps"}
            src={"/mockup2.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
