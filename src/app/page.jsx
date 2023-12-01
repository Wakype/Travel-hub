import React from "react";
import { TopNavigation } from "./components";
import HomeSlider from "./sections/homeSlider.section";
import TravelList from "./sections/homeListTravel.section";
import DownloadApp from "./sections/downloadApp.section";
import BottomNav from "./components/bottomNav";

const Home = () => {
  return (
    <div className="w-full">
      <TopNavigation />

      <section className="">
        <HomeSlider />
      </section>

      <section className="">
        <TravelList />
      </section>

      <section className="mb-28">
        <DownloadApp />
      </section>

      <BottomNav />
    </div>
  );
};

export default Home;
