import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {Link} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';  
import './login.css';
import Navbar from "../navbar/navbar";
function Login(props) {
    let {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    let [user, setUser] = useState([]);
    let formSubmit = (userObj) => {
      setUser([...user, userObj]);
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userObj })
      })
        .then((response) => response.json())
        .then((message) => {
          console.log("message is:", message);
        })
        .catch((error) => {
          console.error("err is", error);
        });
    };
  
    return (
      <div><Navbar/>
      
      <div className="w-50 mx-auto mt-5">
        <form className="form " onSubmit={{handleSubmit}}>
          <div className="container">
            <h4 className="mb-4 text-center">Registration Form</h4>
            {/* name */}
            <div className="combine">
              <div className="mb-3 w-50">
                <lable htmlFor="fn">First Name</lable>
                <input
                  type="text"
                  id="fn"
                  className="form-control"
                  {...register("fn", {
                    required: true,
                    minLength: "4",
                    maxLength: "6"
                  })}
                />
                {errors.fn?.type === "required" && (
                  <p className="text-danger">*required</p>
                )}
                {errors.fn?.type === "minLength" && (
                  <p className="text-danger">*minimum 4 characters required</p>
                )}
                {errors.fn?.type === "maxLength" && (
                  <p className="text-danger">*max limit 6 characters</p>
                )}
              </div>
  
              <div className="mb-3 w-50 ">
                <lable htmlFor="ln">Last Name</lable>
                <input
                  type="text"
                  id="ln"
                  className="form-control"
                  {...register("ln", {
                    required: true,
                    minLength: "4",
                    maxLength: "6"
                  })}
                />
                {errors.ln?.type === "required" && (
                  <p className="text-danger">*required</p>
                )}
                {errors.ln?.type === "minLength" && (
                  <p className="text-danger">*minimum 4 characters required</p>
                )}
                {errors.ln?.type === "maxLength" && (
                  <p className="text-danger">*max limit 6 characters</p>
                )}
              </div>
            </div>
  
            <div className="combine">
              <div className="mb-3 w-50">
                <lable htmlFor="Dob">Date of Birth</lable>
                <input
                  type="date"
                  id="Dob"
                  className="form-control"
                  {...register("Dob", { required: true })}
                />
                {errors.Dob?.type === "required" && (
                  <p className="text-danger">*required</p>
                )}
              </div>
  
              <div>
                <div className="mb-3 w-50">
                  <label htmlFor="Gender">Gender</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="Male"
                      {...register("Gender", { required: true })}
                    />
                    <label className="form-check-label" htmlFor="Male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="Female"
                      {...register("Gender", { required: true })}
                    />
                    <label className="form-check-label" htmlFor="Female">
                      Female
                    </label>
                    </div>
                    <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="Transgender"
                      {...register("Gender", { required: true })}
                    />
                    <label className="form-check-label" htmlFor="Transgender">
                      Transgender
                    </label>
                  </div>
                  {errors.Gender?.type === "required" && (
                    <p className="text-danger">*required</p>
                  )}
                </div>
              </div>
            </div>
  
            <div className="combine">
              <div className="mb-3 w-50">
                <lable htmlFor="email">Email</lable>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  {...register("email", {
                    required: true
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-danger">*required</p>
                )}
              </div>
  
              <div className="w-50 mb-3">
                <lable htmlFor="Phno">Phone Number</lable>
                <input
                  type="number"
                  id="Phno"
                  className="form-control"
                  {...register("Phno", {
                    required: true,
                    maxLength: "10"
                  })}
                />
                {errors.Phno?.type === "required" && (
                  <p className="text-danger">*required</p>
                )}
                {errors.Phno?.type === "maxLength" && (
                  <p className="text-danger">*only 10 characters</p>
                )}
              </div>
            </div>
            <div className="text-center">
              <Link className ='btn btn-primary mb-2'to = '/'>Register</Link>
            </div>
          </div>
        </form>
      </div></div>
      
    );
  }
  
  export default Login;
