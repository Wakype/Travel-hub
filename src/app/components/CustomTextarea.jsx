import React from "react";
import {
  Textarea,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";

const CustomTextarea = ({
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
  titleColor,
  isRequired = false,
  ...props
}) => {
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

        <Textarea
          borderRadius={"md"}
          style={style}
          placeholder={placeholder || title}
          id={id}
          value={values}
          onChange={handleChange}
          onBlur={handleBlur}
          backgroundColor={backgroundColor || "transparent"}
          size="lg"
          height={'200px'}
          resize={"vertical"}
          color={"hitam"}
          _hover={hoverStyles || { backgroundColor: "transparent" }}
          {...props}
        />

        <FormErrorMessage size={"xs"} color={"red"} fontWeight="">
          {errorMessage}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};

export default CustomTextarea;
