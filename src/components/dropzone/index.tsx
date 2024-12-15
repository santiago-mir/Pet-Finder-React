import React, { useEffect, useState } from "react";
import * as css from "./index.css";
import { useDropzone } from "react-dropzone";

function BasicDropzone({ onImageUpload }) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [], // Solo imágenes
    },
    onDrop: (acceptedFiles) => {
      const updatedFiles = acceptedFiles.map((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          const dataUrl = reader.result; // Aquí está la data URL
          onImageUpload(dataUrl); // Envía la data URL al componente padre
        };

        reader.readAsDataURL(file); // Convierte el archivo a data URL
        return Object.assign(file, {
          preview: URL.createObjectURL(file), // Crea un preview para mostrar
        });
      });

      setFiles(updatedFiles);
    },
  });

  const thumbs = files.map((file) => (
    <div className={css.thumb} key={file.name}>
      <div className={css.inner}>
        <img
          src={file.preview}
          className={css.img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview); // Limpia el preview de la memoria
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Limpia los objetos URL al desmontar el componente
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className={css.container}>
      <div {...getRootProps({ className: css.dropzone })}>
        <input {...getInputProps()} />
        <p>Subi una foto de tu mascota perdida</p>
      </div>
      <aside className={css.thumbscont}>{thumbs}</aside>
    </section>
  );
}

export { BasicDropzone };
