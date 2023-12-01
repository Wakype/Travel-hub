"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";
import { Button } from "@chakra-ui/react";
import { Form, FormikProvider, useFormik } from "formik";
import { CustomInput } from "@/app/components";
import CustomTextarea from "@/app/components/CustomTextarea";
import DropzoneInput from "@/app/components/CustomDropfile";

const HosterFormSection = () => {
  const router = useRouter();

  const loginSchema = yup.object().shape({
    username: yup.string().default("").required("Username tidak boleh kosong"),
    bank: yup
      .string()
      .default("")
      .required("Bank Pembayaran tidak boleh kosong"),
    foto_selfie: yup.mixed().default(undefined).optional(),
    foto_ktp: yup.mixed().default(undefined).optional(),
    foto_tabungan: yup.mixed().default(undefined).optional(),
    alamat: yup.string().default("").required("Alamat tidak boleh kosong"),
    telp: yup.number().required("Nomor Handphone tidak boleh kosong"),
    rekening: yup.number().required("Nomor Rekening tidak boleh kosong"),
    email: yup
      .string()
      .default("")
      .required("Email tidak boleh kosong")
      .email("Gunakan Format Email"),
    password: yup.string().default("").required("Passowrd tidak boleh kosong"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: loginSchema.getDefault(),
    onSubmit: async (values) => {
      console.log(values);
      return router.replace("/auth/login");
    },
    validationSchema: loginSchema,
  });

  const { values, errors, handleChange, handleBlur, handleSubmit } = formik;

  const generateInput = (id, title, type, isPassword = false) => (
    <CustomInput
      titleColor={"hitam"}
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
    <div className="w-full">
      <FormikProvider value={formik}>
        <Form
          onSubmit={handleSubmit}
          className="flex w-full flex-col space-y-8"
        >
          {generateInput("username", "Username", "text")}
          {generateInput("email", "Email", "email")}
          {generateInput("telp", "Nomor Handphone", "number")}
          {generateInput("password", "Password", "password", true)}
          <CustomTextarea
            titleColor={"hitam"}
            width={"100%"}
            id="alamat"
            title="Alamat Lengkap"
            type="text"
            isRequired
            border={"abu"}
            values={values.alamat}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isInvalid={!!errors.alamat}
            errorMessage={errors.alamat}
          />
          <DropzoneInput
            isRequired
            name="foto_ktp"
            setFieldValue={formik.setFieldValue}
            title={"Upload Foto KTP"}
          />
          <DropzoneInput
            isRequired
            name="foto_selfie"
            setFieldValue={formik.setFieldValue}
            title={"Upload Foto Selfie Dengan KTP"}
          />
          {generateInput("rekening", "Nomor Rekening", "number")}
          <DropzoneInput
            isRequired
            name="foto_tabungan"
            setFieldValue={formik.setFieldValue}
            title={"Foto Buku Tabungan"}
          />
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
  );
};

export default React.memo(HosterFormSection);
