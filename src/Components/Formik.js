import React, { useEffect } from "react";
import { useFormik } from "formik";
import "../index.css"
const Formik = () => {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit:(values)=>{
        console.log("Form is Submitted",values);
    },
  
    validate:(values)=>{
        let errors= {};
if(!values.name){
    errors.name="Name is Required"
}
if(!values.email){
    errors.email="Email is Required"
}
if(!values.password){
    errors.password="password is Required"
}
return errors;
    },
    
  });

//   console.log(formik.values)
  return (
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
    <div className="container">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="name"
          className="form-control"
          id="exampleInputEmail1"
          name="name"
          placeholder="Enter name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name?<div className="errors">{formik.errors.name}</div>:null}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          placeholder="Enter email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
          {formik.errors.email?<div className="errors">{formik.errors.email}</div>:null}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
          {formik.errors.password?<div className="errors">{formik.errors.password}</div>:null}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    </form>
  );
};
export default Formik;
