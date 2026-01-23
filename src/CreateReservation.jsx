import React, { useState } from "react";

const CreateReservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console for details.");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-2.5 max-w-80"
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Class:
        <input
          type="text"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateReservation;
