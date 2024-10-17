import React from "react";
import { MainButton } from "../../ui/buttons";

type formProps = {
  onSearch: (any) => any;
};

function otroForm(props: formProps) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(e.target.item.value);
  };
  return <form onSubmit={handleSubmit} className="form"></form>;
}

export { otroForm };
