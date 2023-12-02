/* eslint-disable react/no-children-prop */
"use client";

import React, { useEffect, useState } from "react";
import { Select, Button } from "@chakra-ui/react";
import { TopNavigation } from "../components";
import BottomNav from "../components/bottomNav";
import DUMMY_DATA from "../MOCKUP_DATA.json";
import ProductCard from "../components/productCard.component";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import DestinasiFilter from "./sections/destinasiFilter.section";
import DestinasiFilterMobile from "./sections/destinasiFilterMobile.section";

const duplicatedData = Array.from({ length: 25 }, () => ({
  ...DUMMY_DATA[0],
}));

const Destinasi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const SELECT_OPTIONS = [
    { value: "1", label: "terbaru" },
    { value: "2", label: "terlama" },
    { value: "3", label: "paling murah" },
    { value: "4", label: "paling mahal" },
  ];

  const PAGESIZE_OPTIONS = [
    { value: 3, label: 3 },
    { value: 6, label: 6 },
    { value: 9, label: 9 },
    { value: 12, label: 12 },
    { value: 15, label: 15 },
  ];

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const changePageSize = (size) => {
    setItemsPerPage(size);
    setCurrentPage(1); // Reset to first page
  };

  const getPageNumbers = (currentPage, totalPages) => {
    let startPage, endPage;
    if (totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 5 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    return Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i,
    );
  };

  useEffect(() => {
    setTotalPages(Math.ceil(duplicatedData.length / itemsPerPage));
    setCurrentItems(
      duplicatedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    );
  }, [currentPage, itemsPerPage]);

  return (
    <>
      <TopNavigation color="text-hitam" />

      <div className="mt-7 flex w-full flex-col px-7 lg:mt-36 lg:px-[100px]">
        <div className="mb-14 flex w-full flex-col space-y-4">
          <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
            <h1 className="text-[35px] font-bold capitalize">semua tur</h1>
            <div className="flex items-center space-x-3">
              <p className="text-[15px] font-semibold capitalize">urutkan</p>
              <Select
                iconColor="primary"
                border={"primary"}
                placeholder="Pilih Urutan"
              >
                {SELECT_OPTIONS.map((option) => (
                  <option
                    className="capitalize"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex items-end">
            <div className="h-[8px] w-[10%] bg-primary" />
            <div className="h-[1px] w-full bg-abu" />
          </div>
        </div>

        <div className="flex w-[full] flex-col lg:flex-row lg:justify-between">
          <>
            <DestinasiFilter />
            <DestinasiFilterMobile />
          </>

          <section className="flex w-full flex-col items-center space-y-20 lg:w-[70%] lg:items-end">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
              {currentItems.map((_, i) => (
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

            <div className="flex items-center space-x-7">
              <div className="flex items-center space-x-5">
                <Button
                  size={"md"}
                  bg={"primary"}
                  color={"white"}
                  _hover={{
                    bg: "primaryHover",
                  }}
                  onClick={prevPage}
                >
                  <FaChevronLeft className="text-white" size={15} />
                </Button>
                <div className="flex items-center space-x-3">
                  {/* Page: {currentPage} / {totalPages} */}
                  {getPageNumbers(currentPage, totalPages).map((page, i) => (
                    <Button
                      key={i}
                      size={"md"}
                      bg={currentPage === page ? "primary" : "white"}
                      color={currentPage === page ? "white" : "primary"}
                      border={"primary"}
                      _hover={{
                        bg: "primaryHover",
                        color: "white",
                        border: "primaryHover",
                      }}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  size={"md"}
                  bg={"primary"}
                  color={"white"}
                  _hover={{
                    bg: "primaryHover",
                  }}
                  onClick={nextPage}
                >
                  <FaChevronRight className="text-white" size={15} />
                </Button>
              </div>
              <div>
                <Select
                  iconColor="primary"
                  border={"primary"}
                  value={itemsPerPage}
                  placeholder="Page Size"
                  onChange={(e) => changePageSize(e.target.value)}
                >
                  {PAGESIZE_OPTIONS.map((option) => (
                    <option
                      className="capitalize"
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Destinasi;
