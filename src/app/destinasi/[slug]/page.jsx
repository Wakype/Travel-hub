"use client";
import { TopNavigation } from "@/app/components";
import BottomNav from "@/app/components/bottomNav";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Button,
  Progress,
  useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaRegCalendar, FaLocationDot, FaPlus, FaMinus } from "react-icons/fa6";
import formatRupiah from "@/app/hooks/useFormatRupiah";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Timeline from "./sections/timeline.section";

const DetailDestinasi = ({ params }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [count, setCount] = useState(1);
  const toast = useToast();

  const TITIK_PENJEMPUTAN = [
    { values: 1, title: "Indomart Point Raya Waisai" },
    { values: 2, title: "Indomart Waisai WTC" },
    { values: 3, title: "Indomart Lukas Dailon" },
  ];
  return (
    <div className="flex w-full flex-col">
      <TopNavigation color="text-hitam" />

      <section className="mb-32 flex flex-col space-x-0 lg:flex-row lg:space-x-20">
        <div className="relative h-[50vh] w-full lg:h-screen lg:w-[80%]">
          <Image
            className="absolute"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            alt={"playstore"}
            src={"https://wallpaperaccess.com/full/1564172.jpg"}
          />
        </div>

        <div className="mt-10 flex w-full flex-col px-7 lg:mt-24 lg:pr-20">
          <div className="mb-10 w-full">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink color={"primary"} href="/">
                  Destinasi
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink color={"primary"} href="#">
                  {params.slug?.replace(/-/g, " ")}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="mt-5 h-[1px] w-full bg-abu" />
          </div>

          <div className="mb-10 w-full">
            <h1 className="text-[30px] font-bold lg:text-[45px]">
              Raja Ampat, Papua
            </h1>
            <p className="text-sm font-normal lg:text-base">
              Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku
            </p>
          </div>

          <div className="mb-8 flex items-center justify-between rounded bg-abu bg-opacity-50 px-4 py-5">
            <p className="text-base font-normal lg:text-lg">
              {startDate.toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="flex items-center">
              <label
                htmlFor="date"
                className="hidden cursor-pointer items-center space-x-3 text-primary hover:text-primaryHover lg:flex"
              >
                <FaRegCalendar className="primaryHover" />
                <p className="text-base font-medium capitalize text-primary hover:text-primaryHover lg:text-lg">
                  lihat tanggal lain
                </p>
              </label>
              <label
                htmlFor="date"
                className="block cursor-pointer text-primary hover:text-primaryHover lg:hidden"
              >
                <FaRegCalendar className="primaryHover" />
              </label>

              <div className="">
                <DatePicker
                  className="hidden"
                  id="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>

          <div className="mb-12 flex w-full flex-col space-y-5">
            <div className="flex w-full items-center justify-between space-x-7">
              <div className="flex items-center space-x-2">
                <FaLocationDot className="text-primary" />
                <p className="text-sm font-medium capitalize lg:text-base">
                  titik penjemputan
                </p>
              </div>
              <div>
                <Select iconColor="primary" border={"primary"}>
                  {TITIK_PENJEMPUTAN.map((_, i) => {
                    return (
                      <option value={_.values} key={_.values}>
                        {_.title}
                      </option>
                    );
                  })}
                </Select>
              </div>
            </div>
            <div className="flex h-[300px] w-full items-center justify-center rounded border border-primary">
              google map (belum bisa 🗿🙏🏻)
            </div>
          </div>

          <div className="flex w-full flex-col space-y-6">
            <div className="flex w-full flex-col space-y-2">
              <div className="flex w-full items-center justify-between space-x-10">
                <p className="text-base font-medium lg:text-lg">
                  Harga berdasarkan jumlah orang
                </p>
                <p className="text-lg font-bold text-primary">
                  {formatRupiah(7000000 * count)}{" "}
                  <span className="text-right text-xs font-medium">
                    / Orang
                  </span>
                </p>
              </div>
              <div className="w-full">
                <Progress value={20} rounded={"10px"} />
              </div>
              <div className="w-full">
                <p className="text-base font-medium">
                  3 dari 10 kuota sudah terisi{" "}
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between space-x-4 lg:justify-normal">
              <div className="flex items-center space-x-10 rounded border border-primary px-5 py-1">
                <div
                  className="cursor-pointer rounded-full border border-primary p-1 hover:bg-primary hover:text-white"
                  onClick={() => {
                    if (count <= 1) return;
                    setCount(count - 1);
                  }}
                >
                  <FaMinus
                    size={15}
                    className="text-primary hover:text-white"
                  />
                </div>
                <p className="text-[22px] font-medium">{count}</p>
                <div
                  className="cursor-pointer rounded-full border border-primary p-1 hover:bg-primary hover:text-white"
                  onClick={() => setCount(count + 1)}
                >
                  <FaPlus size={15} className="text-primary hover:text-white" />
                </div>
              </div>
              <Link
                href={"/"}
                onClick={() => {
                  const examplePromise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve(200), 5000);
                  });
                  toast.promise(examplePromise, {
                    success: {
                      title: "Pemesanan Berhasil",
                      description: "Tiket berhasil dipesan",
                    },
                    error: {
                      title: "Pemesanan Gagal",
                      description: "tiket gagal dipesan",
                    },
                    loading: {
                      title: "Mohon Tunggu",
                      description: "Tiket sedang dipesan",
                    },
                  });
                }}
              >
                <Button
                  color={"white"}
                  bg={"primary"}
                  _hover={{ bg: "primaryHover" }}
                >
                  Pesan Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-28 px-7 lg:px-20">
        <Tabs>
          <TabList
            className={
              "noScrollbar mb-4 flex items-center space-x-7 overflow-x-scroll"
            }
          >
            <Tab
              selectedClassName="text-white bg-primary rounded"
              className={
                "px-5 py-2 text-lg font-medium capitalize lg:px-10 lg:text-2xl"
              }
            >
              detail perjalanan
            </Tab>
            <Tab
              selectedClassName="text-white bg-primary rounded"
              className={
                "px-5 py-2 text-lg font-medium capitalize lg:px-10 lg:text-2xl"
              }
            >
              syarat & ketentuan
            </Tab>
            <Tab
              selectedClassName="text-white bg-primary rounded"
              className={
                "px-5 py-2 text-lg font-medium capitalize lg:px-10 lg:text-2xl"
              }
            >
              galeri
            </Tab>
            <Tab
              selectedClassName="text-white bg-primary rounded"
              className={
                "px-5 py-2 text-lg font-medium capitalize lg:px-10 lg:text-2xl"
              }
            >
              ulasan
            </Tab>
          </TabList>
          <div className="mb-20 h-[1px] w-full bg-abu" />

          <TabPanel className={"noScrollbar overflow-x-scroll"}>
            <Timeline />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </section>

      <BottomNav />
    </div>
  );
};

export default DetailDestinasi;
