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

const DestinasiFilter = () => {
  return (
    <section className="hidden w-[20%] flex-col space-y-4 lg:flex">
      <div className="flex items-center space-x-3">
        <FaFilter className="text-primary" />
        <p className="text-lg font-semibold text-primary">Filter</p>
      </div>
      <div
        className="flex flex-col rounded py-5"
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        }}
      >
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
                  <FaStar className="text-yellow-400" /> <p>3 - 5 Bintang</p>
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
            <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb bg={"primary"} index={0} />
              <RangeSliderThumb bg={"primary"} index={1} />
            </RangeSlider>
          </CustomAccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default DestinasiFilter;
