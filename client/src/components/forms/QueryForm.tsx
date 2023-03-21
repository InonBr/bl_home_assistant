import { Button, Form } from "react-bootstrap";
import { FieldValues, useForm } from "react-hook-form";
import RadioButtons from "./RadioButtons";
import { useState } from "react";
import { queryRequest } from "../../lib/api";

const QueryForm = () => {
  const [companyNameSearchType, setCompanyNameSearchType] = useState<
    "eq" | "sw" | "ew" | "mi"
  >("eq");
  const [addressSearchType, setAddressSearchType] = useState<
    "eq" | "sw" | "ew" | "mi"
  >("eq");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const nameQuery = data.companyName
      ? `companyName=${data.companyName}&`
      : "";
    const addressQuery = data.companyAddress
      ? `address=${data.companyAddress}&`
      : "";
    const phoneQuery = data.phone ? `phone=${data.phone}&` : "";
    const companyNameQuery = `companyNameSearchType=${companyNameSearchType}&`;
    const addressSearchQuery = `addressSearchType=${addressSearchType}`;

    const q = `?${nameQuery}${addressQuery}${phoneQuery}${companyNameQuery}${addressSearchQuery}`;

    const x = await queryRequest(q);

    console.log(x);
  };

  return (
    <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor="companyName">Company Name</Form.Label>
        <Form.Control
          id="companyName"
          type="text"
          aria-invalid={errors.companyName ? "true" : "false"}
          {...register("companyName", {
            required: false,
          })}
        />

        <RadioButtons
          setSearchType={setCompanyNameSearchType}
          radioId="companyName"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="companyAddress">Company Address</Form.Label>
        <Form.Control
          id="companyAddress"
          type="text"
          aria-invalid={errors.companyAddress ? "true" : "false"}
          {...register("companyAddress", {
            required: false,
          })}
        />

        <RadioButtons
          setSearchType={setAddressSearchType}
          radioId="companyAddress"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="phone">Phone Number</Form.Label>
        <Form.Control
          id="phone"
          type="text"
          aria-invalid={errors.phone ? "true" : "false"}
          {...register("phone", {
            required: false,
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone must only contain numbers",
            },
          })}
        />
        {errors.phone && errors.phone.type === "pattern" && (
          <Form.Text className="red-text" role="alert">
            Phone must only contain numbers
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Submit Query
      </Button>
    </Form>
  );
};

export default QueryForm;
