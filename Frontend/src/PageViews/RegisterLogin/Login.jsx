import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const SubmitFunction = (data) => {
    console.log(data);
    
    const storedUserDetails = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUserDetails &&
      storedUserDetails.username === data.username &&
      storedUserDetails.password === data.password
    ) {
      console.log("Login successful");
      alert("Login successful"); // Output login success message to console for debugging
      navigate("/home"); // Redirect to main page upon successful login
    } else {
      console.log("Invalid username or password");
      alert("Invalid username or password. Please try again."); // Output login failure message to console for debugging
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello </h1>
          <p>
            Welcome to our premier social media platform! Here, find a community
            of individuals from diverse backgrounds, all coming together to
            share their thoughts, experiences, and passions
          </p>
          <span>Don't you have an account?</span>

          <button onClick={() => navigate("/register")}>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(SubmitFunction)}>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
