import React from "react";
import Link from "next/link";
import ProductCard from "../components/productCard.component";
import DUMMY_DATA from "../MOCKUP_DATA.json";
import { FaArrowRightLong } from "react-icons/fa6";

const Section = ({ title, link, data }) => (
  <div className="mb-[100px] flex flex-col">
    <div className="mb-[30px] flex w-full flex-col items-start justify-between space-y-3 px-7 lg:flex-row lg:items-center lg:space-y-0 lg:px-[100px]">
      <h1 className="text-[30px] font-bold capitalize lg:text-[35px]">
        {title}
      </h1>
      <Link href={link} className="flex items-center space-x-3">
        <p className="text-sm font-sans font-normal uppercase text-primary hover:text-primaryHover lg:text-lg">
          lihat liburan lainnya
        </p>
        <FaArrowRightLong color="#00A9FF" />
      </Link>
    </div>
    <div className="noScrollbar w-full overflow-x-scroll px-7 pb-5 lg:px-[100px]">
      <div className="flex w-fit space-x-5">
        {data.map((_, i) => (
          <ProductCard
            key={i}
            days={_.duration.days}
            thumbnail={_.thumbnail}
            title={_.title}
            description={_.description}
            price={_.price}
            nights={_.duration.nights}
            rating={_.rating}
          />
        ))}
      </div>
    </div>
  </div>
);

const TravelList = () => {
  const duplicatedData = Array.from({ length: 15 }, () => ({
    ...DUMMY_DATA[0],
  }));

  return (
    <div>
      <Section title="destinasi populer" link="/" data={duplicatedData} />
      <Section title="vitamin sea" link="/" data={duplicatedData} />
      <Section
        title="naik naik ke puncak gunung"
        link="/"
        data={duplicatedData}
      />
      <Section title="menyatu dengan alam" link="/" data={duplicatedData} />
    </div>
  );
};

export default TravelList;
