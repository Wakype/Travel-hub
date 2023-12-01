"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";
import { Button } from "@chakra-ui/react";
import { Form, FormikProvider, useFormik } from "formik";
import { CustomInput } from "@/app/components";

const UserFormSection = () => {
  const router = useRouter();

  const loginSchema = useCallback(
    () =>
      yup.object().shape({
        username: yup
          .string()
          .default("")
          .required("Username tidak boleh kosong"),
        email: yup
          .string()
          .default("")
          .required("Email tidak boleh kosong")
          .email("Gunakan Format Email"),
        password: yup
          .string()
          .default("")
          .required("Passowrd tidak boleh kosong"),
      }),
    [],
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...loginSchema().getDefault(),
    },
    onSubmit: async (values) => {
      return router.replace("/auth/login");
    },
    validationSchema: loginSchema(),
  });

  const { values, errors, handleChange, handleBlur, handleSubmit } = formik;

  const generateInput = (id, title, type, isPassword = false) => (
    <CustomInput
      py={"25px"}
      width={"100%"}
      id={id}
      title={title}
      type={type}
      isRequired
      border={"abu"}
      values={values[id]}
      handleChange={handleChange}
      handleBlur={handleBlur}
      isInvalid={!!errors[id]}
      errorMessage={errors[id]}
      isPassword={isPassword}
    />
  );

  return (
    <div className="flex w-[40%] flex-col rounded border-t-[5px] border-primary bg-white px-7 py-16">
      <h1 className="mb-14 border-l-4 border-primary pl-3 text-[30px] font-medium capitalize">
        register
      </h1>
      <div className="">
        <FormikProvider value={formik}>
          <Form
            onSubmit={handleSubmit}
            className="flex w-full flex-col space-y-7"
          >
            {generateInput("username", "Username", "text")}
            {generateInput("email", "Email", "email")}
            {generateInput("password", "Password", "password", true)}
            <Button
              type="submit"
              bg={"primary"}
              fontWeight={"bold"}
              fontSize={"17px"}
              width={"100%"}
              px={"150px"}
              py={"25px"}
              color={"white"}
              _hover={{ bg: "primaryHover" }}
            >
              Register
            </Button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default React.memo(UserFormSection);
