"use client";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { Form, FormikProvider, useFormik, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import React, { useState } from "react";

const LoginSection = () => {
  // const { mutate, isLoading } = useLoginService();
  const [show, setShow] = useState(false);
  const router = useRouter();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .default("")
      .required("Email tidak boleh kosong")
      .email("Gunakan Format Email"),
    password: yup.string().default("").required("Passowrd tidak boleh kosong"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...loginSchema.getDefault(),
    },
    onSubmit: async (values) => {
      return router.replace("/");
      // return mutate(values);
    },
    validationSchema: loginSchema,
  });

  let { values, errors, handleChange, handleBlur, handleSubmit } = formik;
  return (
    <div className="w-full">
      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit}>
          <Stack spacing={5} className="mb-10">
            <FormControl isInvalid={!!errors?.email}>
              <FormLabel color="primary" htmlFor="email" fontWeight="semibold">
                Email
              </FormLabel>
              <Input
                id="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                color={"black"}
                backgroundColor={"gray.100"}
                _hover={{ bgColor: "violet.100" }}
                _placeholder={{ opacity: 1, color: "gray.500" }}
                variant="filled"
                placeholder="Masukkan Email"
                size="lg"
              />

              <FormErrorMessage color={"red"} fontWeight="bold">
                {errors?.email}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors?.password}>
              <FormLabel
                color="primary"
                htmlFor="password"
                fontWeight="semibold"
              >
                Password
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color={"black"}
                  backgroundColor={"gray.100"}
                  _hover={{ bgColor: "violet.100" }}
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  // borderColor={'gray'}
                  variant="filled"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Masukkan password"
                />
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
              </InputGroup>
              <div className="flex items-center justify-between">
                <FormErrorMessage size={"xs"} color={"red"} fontWeight="bold">
                  {errors?.password}
                </FormErrorMessage>
                <p className="cursor-pointer text-right hover:pr-1 hover:text-primary">
                  Lupa password
                </p>
              </div>
            </FormControl>
          </Stack>

          <Button
            width={"full"}
            type="submit"
            h="50px"
            variant={"solid"}
            color={"white"}
            bg={"primary"}
            _hover={{
              bg: "primaryHover",
            }}
          >
            LOGIN
          </Button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default LoginSection;
