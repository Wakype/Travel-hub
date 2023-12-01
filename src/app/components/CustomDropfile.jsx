"use client";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { useState } from "react";
import { FormLabel } from "@chakra-ui/react";

const DropzoneInput = ({
  title,
  name,
  setFieldValue,
  isRequired = false,
  titleColor = "hitam",
}) => {
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
      setFieldValue(name, acceptedFiles[0]);
    },
    onDragOver: () => {
      setIsDragActive(true);
    },
    onDragLeave: () => {
      setIsDragActive(false);
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <Image
          className=""
          objectFit="cover"
          objectPosition="center"
          width={200}
          height={0}
          quality={100}
          src={file.preview}
          alt="Preview"
        />
      </div>
      <div>
        <p>
          {file.path} - {file.size} bytes
        </p>
      </div>
    </div>
  ));

  return (
    <div className="flex w-full flex-col">
      <FormLabel
        cursor="pointer"
        style={{ width: "fit-content" }}
        color={titleColor}
        htmlFor={name}
        fontWeight=""
      >
        {title}
        {isRequired ? <span className="text-red-500">*</span> : undefined}
      </FormLabel>
      <div
        {...getRootProps({
          className: `border-2 border-dashed p-10 text-center cursor-pointer rounded ${
            isDragActive ? "border-primary" : "hover:border-gray-500"
          }`,
        })}
      >
        <input {...getInputProps()} className="hidden" id={name} />
        <p className="text-abu">Drag n drop some files here, or click to select files</p>
      </div>
      <aside>
        <ul>{images}</ul>
      </aside>
    </div>
  );
};

export default DropzoneInput;
