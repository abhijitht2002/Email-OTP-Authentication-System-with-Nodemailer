import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { register } from "./auth.api";

function Register() {
  const location = useLocation();
  const email = location.state?.email;

  const [formData, setFormdata] = useState({
    name: "",
    email: email,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Create clicked");
    try {
      const res = await register(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input type="text" name="email" value={formData.email} disabled />
          <input
            type="text"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Create account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
