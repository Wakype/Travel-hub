"use client";
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import LogoApp from "./logo";

const LayoutMobile = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const currentNav = pathname?.split("/")[1];

  const NAVLIST = [
    { to: "/", title: "Beranda", nav: "" },
    { to: "/destinasi", title: "Destinasi", nav: "destinasi" },
  ];

  return (
    <div className="block lg:hidden">
      <>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader mb={3}>
              <div className="flex w-full justify-center">
                <LogoApp fontClassName={"text-hitam"} />
              </div>
            </DrawerHeader>

            <DrawerBody p={5}>
              <div className="flex w-full flex-col space-y-20">
                <div className="flex w-full flex-col space-y-5">
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Destinasi"
                      borderEndRadius={"none"}
                    />
                    <InputRightAddon>
                      <FaMagnifyingGlass />
                    </InputRightAddon>
                  </InputGroup>
                  <div className="flex w-full items-center justify-between space-x-3">
                    {NAVLIST.map((_, i) => {
                      return (
                        <Link href={_.to} className="w-full" key={i}>
                          <Button
                            variant={currentNav === _.nav ? "solid" : "outline"}
                            width={"100%"}
                            border={currentNav === _.nav ? "none" : "primary"}
                            color={currentNav === _.nav ? "white" : "primary"}
                            bg={
                              currentNav === _.nav ? "primary" : "transparent"
                            }
                            _hover={{
                              bg: "primaryHover",
                              color: "white",
                            }}
                          >
                            {_.title}
                          </Button>
                        </Link>
                      );
                    })}
                    {/* <Link href={"/"} className="w-full">
                      <Button
                        variant={"solid"}
                        width={"100%"}
                        color={"white"}
                        bg={"primary"}
                        _hover={{
                          bg: "primaryHover",
                        }}
                      >
                        Beranda
                      </Button>
                    </Link>
                    <Link href={"/destinasi"} className="w-full">
                      <Button
                        variant={"outline"}
                        width={"100%"}
                        color={"primary"}
                        border={"1px solid #00A9FF"}
                        _hover={{
                          bg: "primary",
                          color: "white",
                        }}
                      >
                        Destinasi
                      </Button>
                    </Link> */}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between space-x-3">
                  <Link href={"/auth/login"} className="w-full">
                    <Button
                      variant={"solid"}
                      width={"100%"}
                      color={"primary"}
                      bg={"fourth"}
                      _hover={{}}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href={"/auth/register"} className="w-full">
                    <Button
                      variant={"outline"}
                      width={"100%"}
                      color={"primary"}
                      border={"1px solid #00A9FF"}
                      _hover={{
                        bg: "primary",
                        color: "white",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>

      <section
        onClick={onOpen}
        className={`${
          isOpen ? "translate-x-40 rotate-180" : "translate-x-0 rotate-0"
        } fixed right-8 top-8 z-[900] block cursor-pointer rounded-full border border-primary bg-white p-3 text-white shadow-lg duration-[1.2s] lg:hidden`}
      >
        <FaBars className="text-primary" />
      </section>
    </div>
  );
};

export default LayoutMobile;
