import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LogoApp from "./logo";

const navLinks = [
  {
    header: "company",
    links: [
      { href: "/about", text: "about" },
      { href: "/press", text: "press" },
      { href: "/careers", text: "careers" },
      { href: "/contact", text: "contact" },
    ],
  },
  {
    header: "support",
    links: [
      { href: "/help-center", text: "help center" },
      { href: "/terms-of-service", text: "terms of service" },
      { href: "/legal", text: "legal" },
      { href: "/privacy-policy", text: "privacy policy" },
    ],
  },
  {
    header: "kerja sama",
    links: [
      { href: "/auth/register", text: "daftar jadi hoster" },
      { href: "/hoster-terdaftar", text: "hoster terdaftar" },
    ],
  },
];

const SocialLink = ({ href, ariaLabel, icon }) => (
  <a href={href} target="_blank">
    <IconButton
      bg={"hitam"}
      color={"white"}
      borderRadius={"100%"}
      _hover={{ bg: "primary" }}
      aria-label={ariaLabel}
      icon={icon}
    />
  </a>
);

const BottomNav = () => (
  <section className="mt-[100px] flex w-full flex-col">
    <div className="mb-36 flex w-full flex-col items-start justify-between space-y-10 px-7 lg:flex-row lg:space-y-0 lg:px-[100px]">
      <div>
        <LogoApp fontClassName={"text-hitam text-[40px]"} iconSize={35} />
      </div>
      <div className="flex flex-col items-start space-y-8 lg:flex-row lg:space-x-32 lg:space-y-0">
        {navLinks.map((section, i) => (
          <div className="flex flex-col space-y-4 lg:space-y-8" key={i}>
            <h1 className="text-xl font-medium capitalize leading-[30px]">
              {section.header}
            </h1>
            <div className="flex flex-col space-y-3">
              {section.links.map((link, i) => (
                <Link href={link.href} key={i}>
                  <p className="text-base font-normal capitalize leading-relaxed hover:text-primary">
                    {link.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="mb-2 font-medium text-hitam">Get the App</p>
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
        </div>
      </div>
    </div>
    <div className="flex w-full flex-col items-center justify-between space-y-2 bg-black px-7 py-6 lg:flex-row lg:space-y-0 lg:px-[100px]">
      <p className="text-sm text-white">
        © 2023 OPENTRIP. All rights reserved
      </p>
      <div className="flex items-center space-x-4">
        <SocialLink
          href="https://www.instagram.com/im.waky/"
          ariaLabel="Instagram"
          icon={<FaInstagram />}
        />
        <SocialLink
          href="https://twitter.com/wakypeee"
          ariaLabel="Twitter"
          icon={<FaTwitter />}
        />
        <SocialLink
          href="https://www.youtube.com/channel/UC7JSaEVgUPKkirPf3fKmKrg"
          ariaLabel="Youtube"
          icon={<FaYoutube />}
        />
        <SocialLink
          href="https://www.tiktok.com/@im.wakype"
          ariaLabel="Tiktok"
          icon={<FaTiktok />}
        />
      </div>
    </div>
  </section>
);

export default BottomNav;
