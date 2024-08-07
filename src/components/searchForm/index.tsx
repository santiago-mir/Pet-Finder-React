import React from "react";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-fields";
type formProps = {
  onSearch: (any) => any;
};

function MyForm(props: formProps) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(e.target.item.value);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField type="text" name="item"></TextField>
      <MainButton>Buscar</MainButton>
    </form>
  );
}

export { MyForm };
