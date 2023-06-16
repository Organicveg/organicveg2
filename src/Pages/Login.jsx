import React from 'react'
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit } = useForm();
  const onFormSubmit  = data => console.log(data);
  const onErrors = errors => console.error(errors);
  return (
    <div className="bg-dark">
         <Container className="mt-5 pt-5">
        <h1 className="text-center mb-5 text-light">Login</h1>

<div className="bg-warning">
<form onSubmit={handleSubmit(onFormSubmit, onErrors)}>

  <label style={{float:'center',position: 'relative',left:'530px',top:'10px'}} className="mb-5 text-light" htmlFor="">UserName</label>
  <input type="text" style={{float:'center',position: 'relative',left:'550px',top:'10px'}} name="name" {...register('name',{ required: "name is required" })} id="" />
  <br />
  <label style={{float:'center',position: 'relative',left:'530px'}} className="mb-5 text-light" htmlFor="">Password</label>
  <input type="password" style={{float:'center',position: 'relative',left:'550px'}} name="password" {...register('password',{ required: "password is required" })} id="" />
  <br />
  
  
  
   <button style={{float:'center',position: 'relative',left:'600px'}} className="mb-5 bg-primary" type="submit">Submit</button>
</form>
</div>






      </Container>
    </div>
  )
}
