"use client";
import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Button,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

const CustomInput = ({
  id,
  title,
  errorMessage,
  style,
  values,
  handleChange,
  handleBlur,
  isInvalid,
  placeholder,
  backgroundColor,
  hoverStyles,
  type,
  titleColor,
  isRequired = false,
  isPassword = false,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const inputType = show ? "text" : type;

  return (
    <>
      <FormControl isInvalid={isInvalid}>
        <FormLabel
          cursor="pointer"
          style={{ width: "fit-content" }}
          color={titleColor}
          htmlFor={id}
          fontWeight=""
        >
          {title}
          {isRequired ? <span className="text-red-500">*</span> : undefined}
        </FormLabel>
        <InputGroup size="lg">
          <Input
            style={style}
            as="input"
            type={isPassword ? inputType : type}
            id={id}
            value={values}
            onChange={handleChange}
            onBlur={handleBlur}
            color={"hitam"}
            backgroundColor={backgroundColor || "transparent"} // Use the provided backgroundColor or a default value
            _hover={hoverStyles || { backgroundColor: "#ffffff" }}
            variant="filled"
            placeholder={placeholder || title}
            {...props}
          />
          {isPassword ? (
            <InputRightElement width="4.5rem">
              <Button
                type="button"
                h="1.75rem"
                size="sm"
                color={"black"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          ) : undefined}
        </InputGroup>

        <FormErrorMessage size={"xs"} color={"red"} fontWeight="">
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default CustomInput;
