import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";
    if (!form.email.includes("@")) err.email = "Invalid email";
    if (form.password.length < 6) err.password = "Password must be 6+ chars";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length === 0) {
      alert("Form submitted successfully ✅");
    } else {
      setErrors(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <p>{errors.name}</p>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <p>{errors.email}</p>

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <p>{errors.password}</p>

      <button type="submit">Submit</button>
    </form>
  );
}