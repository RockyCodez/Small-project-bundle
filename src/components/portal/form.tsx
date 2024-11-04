import { useEffect, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormDataInterface, FormInterface } from "src/types/components";

import Button from "../button";
import Input from "../inputs/input";
import Dropdown from "../inputs/dropdown";

import "src/styles/components/form.css";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    quantity: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .nullable()
      .required("Quantity is required"),
    price: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .nullable()
      .required("Price is required"),
  })
  .required();

const Form = ({ submitData, itemToEdit }: FormInterface) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    data["isAddedToStart"] = selectedOption;
    submitData(data as FormDataInterface);
  };

  useEffect(() => {
    if (itemToEdit) {
      methods.setValue("title", itemToEdit.title);
      methods.setValue("quantity", itemToEdit.quantity);
      methods.setValue("price", itemToEdit.price);
    }
  }, [itemToEdit, methods]);

  return (
    <div>
      <FormProvider {...methods}>
        <form
          className="form-wrapper"
          onSubmit={(data) => console.log("data", data)}
        >
          <Input
            label="Title"
            name="title"
            helperText={methods.formState.errors["title"]?.message}
          />
          <Input
            label="Quantity"
            name="quantity"
            type="number"
            helperText={methods.formState.errors["quantity"]?.message}
          />
          <Input
            label="Price"
            name="price"
            type="number"
            helperText={methods.formState.errors["price"]?.message}
          />
          {!itemToEdit && (
            <Dropdown
              label="Select where to add item"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          )}
        </form>
        <div className="button-wrapper">
          <Button
            text={itemToEdit ? "Edit" : "Submit"}
            onClick={methods.handleSubmit(onSubmit)}
          />
        </div>
      </FormProvider>
    </div>
  );
};

export default Form;
