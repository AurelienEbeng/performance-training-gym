import { useState } from "react";
import httpModule from "./axios";

const UpdateReservation = ({ oldReservation }) => {
  const [formData, setFormData] = useState({
    name: oldReservation.name,
    classType: oldReservation.classType,
    date: oldReservation.date,
    time: oldReservation.time,
    id: oldReservation.id,
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
    httpModule
      .put(`${formData.id}/`, formData)
      .then((res) => console.log(res))
      .catch((error) => {
        alert("Error, check console");
        console.log(error.response);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2.5 max-w-80">
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
          name="classType"
          value={formData.classType}
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

export default UpdateReservation;
