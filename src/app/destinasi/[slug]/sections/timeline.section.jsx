import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col space-y-20">
      <div className="flex w-full items-start space-x-7 lg:space-x-20">
        <div
          style={{ flexShrink: 0 }}
          className="flex w-[70px] lg:w-[100px] flex-col items-center justify-center space-y-3 rounded bg-primary p-3 lg:space-y-5"
        >
          <p className="-mb-2 text-lg font-medium text-white lg:text-2xl">
            Hari
          </p>
          <p className="text-xl font-medium text-white lg:text-[40px]">1</p>
        </div>

        <div className="flex flex-col space-y-5">
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">20:30</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Berkumpul di meeting point
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">21:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Perjalanan menuju Indomaret
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start space-x-7 lg:space-x-20">
        <div
          style={{ flexShrink: 0 }}
          className="flex w-[70px] lg:w-[100px] flex-col items-center justify-center space-y-3 rounded bg-primary p-3 lg:space-y-5"
        >
          <p className="-mb-2 text-lg font-medium text-white lg:text-2xl">
            Hari
          </p>
          <p className="text-xl font-medium text-white lg:text-[40px]">2</p>
        </div>

        <div className="flex flex-col space-y-5">
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">12:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Makan Siang di Lokal Restorant (Biaya Pribadi) di meeting point
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">13:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Perjalanan menuju homestay
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">13:45</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Tiba di Homestay untuk beristirahat & Free time (Waktu Bebas)
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">22:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Persiapan perjalanan menuju Raja Ampat
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">22:30</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Perjalanan menuju Raja Ampat untuk melihat sunrise
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start space-x-7 lg:space-x-20">
        <div
          className="flex w-[70px] lg:w-[100px] flex-col items-center justify-center space-y-3 rounded bg-primary p-3 lg:space-y-5"
          style={{ flexShrink: 0 }}
        >
          <p className="-mb-2 text-lg font-medium text-white lg:text-2xl">
            Hari
          </p>
          <p className="text-xl font-medium text-white lg:text-[40px]">3</p>
        </div>

        <div className="flex flex-col space-y-5">
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">03:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Tiba di Raja Ampat, transfer Jeep menuju Pananjakan 1 untuk
              melihat Sunrise di Raja Ampat, dilanjutkan menuju ke Lautan Pasir,
              menuju ke Pura dan Raja Ampat (dapat dengan berjalan kaki atau
              naik kuda dengan biaya pribadi), menuju ke Savana / Bukit
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">09:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Perjalanan kembali menuju homestay
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">11:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Tiba di Homestay untuk beristirahat
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">12:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">Proses Check out</p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">13:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              City Tour dan Sight Seeing Kota Batu
            </p>
          </div>
          <div className="flex items-start space-x-5 lg:space-x-14">
            <p className="text-lg font-medium">17:00</p>
            <p className="w-full lg:w-2/4 text-lg font-medium">
              Perjalanan kembali ke Jakarta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
