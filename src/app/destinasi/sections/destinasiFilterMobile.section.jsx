/* eslint-disable react/no-children-prop */
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  FaFilter,
  FaMagnifyingGlass,
  FaStar,
  FaCalendar,
} from "react-icons/fa6";

const CustomAccordionItem = ({ title, children }) => {
  return (
    <AccordionItem border={"none"}>
      <h2 className="border-b border-abu">
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
            {title}
          </Box>
          <AccordionIcon
            color={"primary"}
            fontSize={"x-large"}
            bg={"gray.100"}
            borderRadius={"full"}
          />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
};

const DestinasiFilterMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <section className="mb-7 block w-full lg:hidden">
      <IconButton
        aria-label="Filter menu"
        ref={btnRef}
        onClick={onOpen}
        variant="outline"
        border={"primary"}
        bg={isOpen ? "primary" : "transparent"}
        color={"primary"}
        icon={<FaFilter />}
        _hover={{ bg: "primary", color: "white" }}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"primary"}>Filter</DrawerHeader>

          <DrawerBody>
            <Accordion defaultIndex={[0]} allowMultiple width={"100%"}>
              <CustomAccordionItem title="Tipe Perjalanan">
                <div className="mb-6 mt-3 flex flex-col space-y-4">
                  <Checkbox>Open Trip</Checkbox>
                  <Checkbox>Private Trip</Checkbox>
                </div>
              </CustomAccordionItem>

              <CustomAccordionItem title="Tema Perjalanan">
                <div className="mb-6 mt-3 flex flex-col space-y-4">
                  <Checkbox>Destinasi Populer</Checkbox>
                  <Checkbox>Vitamin Sea</Checkbox>
                  <Checkbox>Naik Naik Ke Puncak Gunung</Checkbox>
                  <Checkbox>Menyatu Dengan Alam</Checkbox>
                </div>
              </CustomAccordionItem>

              <CustomAccordionItem title="Budget">
                <div className="mb-6 mt-3 flex flex-col space-y-2">
                  <InputGroup>
                    <InputLeftAddon children="Rp" />
                    <Input
                      type="number"
                      placeholder="Budget Minimum"
                      borderStartRadius={"none"}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Rp" />
                    <Input
                      type="number"
                      placeholder="Budget Maximum"
                      borderStartRadius={"none"}
                    />
                  </InputGroup>
                </div>
              </CustomAccordionItem>

              <CustomAccordionItem title="Lokasi Keberangkatan">
                <div className="mb-6 mt-3 flex flex-col space-y-2">
                  <InputGroup>
                    <InputLeftAddon>
                      <FaMagnifyingGlass />
                    </InputLeftAddon>
                    <Input
                      type="text"
                      placeholder="Cari Lokasi Keberangkatan"
                      borderStartRadius={"none"}
                    />
                  </InputGroup>
                </div>
              </CustomAccordionItem>

              <CustomAccordionItem title="Destinasi">
                <div className="mb-6 mt-3 flex flex-col space-y-2">
                  <InputGroup>
                    <InputLeftAddon>
                      <FaMagnifyingGlass />
                    </InputLeftAddon>
                    <Input
                      type="text"
                      placeholder="Destinasi"
                      borderStartRadius={"none"}
                    />
                  </InputGroup>
                </div>
              </CustomAccordionItem>

              <CustomAccordionItem title="Rating">
                <div className="mb-6 mt-3 flex flex-col space-y-4">
                  <Checkbox>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" /> <p>5 Bintang</p>
                    </div>
                  </Checkbox>
                  <Checkbox>
                    <div className="flex items-center space-x-2">
                      <FaStar className="text-yellow-400" />{" "}
                      <p>3 - 5 Bintang</p>
                    </div>
                  </Checkbox>
                </div>
              </CustomAccordionItem>

              <CustomAccordionItem title="Periode Berangkat">
                <div className="mb-6 mt-3 flex flex-col space-y-2">
                  <InputGroup>
                    <InputLeftAddon>
                      <FaCalendar />
                    </InputLeftAddon>
                    <Input
                      type="date"
                      placeholder="Pilih Tanggal Keberangkatan"
                      borderStartRadius={"none"}
                    />
                  </InputGroup>
                </div>
              </CustomAccordionItem>

              <CustomAccordionItem title="Durasi">
                <div className="mb-6 mt-3 flex space-x-2">
                  <InputGroup>
                    <Input
                      type="number"
                      placeholder="Hari"
                      borderEndRadius={"none"}
                    />
                    <InputRightAddon children="Hari" />
                  </InputGroup>
                  <InputGroup>
                    <Input
                      type="number"
                      placeholder="Hari"
                      borderEndRadius={"none"}
                    />
                    <InputRightAddon children="Hari" />
                  </InputGroup>
                </div>
                <RangeSlider
                  aria-label={["min", "max"]}
                  defaultValue={[10, 30]}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb bg={"primary"} index={0} />
                  <RangeSliderThumb bg={"primary"} index={1} />
                </RangeSlider>
              </CustomAccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" colorScheme="red" mr={3} type="reset">
              Reset
            </Button>
            <Button
              bg={"primary"}
              color={"white"}
              _hover={{
                bg: "secondary",
              }}
              type="submit"
            >
              Terapkan
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default DestinasiFilterMobile;
