import React, { useEffect, useState } from "react";
import * as css from "./index.css";
import { useDropzone } from "react-dropzone";

function BasicDropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className={css.thumb} key={file.name}>
      <div className={css.inner}>
        <img
          src={file.preview}
          className={css.img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className={css.container}>
      <div {...getRootProps({ className: css.dropzone })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className={css.thumbscont}>{thumbs}</aside>
    </section>
  );
}

export { BasicDropzone };
