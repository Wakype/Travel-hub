import { TopNavigation } from "@/app/components";
import BottomNav from "@/app/components/bottomNav";
import React from "react";
import HosterFormSection from "./sections/hosterForm.section";

const RegisterHoster = () => {
  return (
    <div className="w-full">
      <TopNavigation color="hitam" />

      <div className="flex w-full items-center justify-center bg-[#F5F5F5] py-40">
        <div className="flex w-[60%] flex-col rounded border-t-4 border-primary bg-white px-24 py-20 shadow-lg">
          <h1 className="mb-10 border-l-4 border-primary pl-3 text-[28px] font-medium  tracking-tight">
            Register as Hoster
          </h1>

          <HosterFormSection />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default RegisterHoster;
