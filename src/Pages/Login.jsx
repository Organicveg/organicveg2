import React from 'react'
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit } = useForm();
  const onFormSubmit  = data => console.log(data);
  const onErrors = errors => console.error(errors);
  return (
    <div>
         <Container className="mt-5 pt-5">
        <h1 className="text-center mb-5">Form</h1>


<form onSubmit={handleSubmit(onFormSubmit, onErrors)}>

  <label className="mb-5" htmlFor="">Name</label>
  <input type="text" name="name" {...register('name',{ required: "name is required" })} id="" />
  <br />
  <label className="mb-5" htmlFor="">Address</label>
  <input type="text" name="address" {...register('address',{ required: "address is required" })} id="" />
  <br />
  <label className="mb-5" htmlFor="">Place</label>
  <input type="text" name="place" {...register('place',{ required: "place is required" })} id="" />
  <br />
  <label className="mb-5" htmlFor="">Contact number</label>
  <input type="phone" name="contact number" {...register('contact number',{ required: "contact number is required" })} id="" />
  <br />
  <label className="mb-5" htmlFor="">College</label>
  <input type="text" name="college" {...register('college',{ required: "college is required" })} id="" />
  <br />
   <button className="mb-5" type="submit">Submit</button>
</form>






      </Container>
    </div>
  )
}
