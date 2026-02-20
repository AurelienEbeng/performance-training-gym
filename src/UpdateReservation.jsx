import { useState } from "react";
import httpModule from "./axios";
import { useLoadingContext } from "./LoadingContext";

const UpdateReservation = ({ oldReservation, onClose }) => {
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

  const { toggleDisable, isDisabled } = useLoadingContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleDisable();
    httpModule
      .put(`${formData.id}/`, formData)
      .then(() => {toggleDisable(); onClose();})
      .catch((error) => {
        alert("Error, check console");
        console.log(error.response);
      });
  };

  const timeOptions = {
    Strength: ["06:00", "08:00"],
    Conditioning: ["08:00", "10:00"],
    "Community Classes": ["08:00"],
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
          className="border"
        />
      </label>

      <label for="classType">Choose a class:</label>
      <select
        name="classType"
        id="classType"
        value={formData.classType}
        onChange={handleChange}
      >
        <option value="Strength">Strength</option>
        <option value="Conditioning">Conditioning</option>
        <option value="Community Classes">Community Classes</option>
      </select>

      

      <label for="time">Choose a time:</label>
      <select
        name="time"
        id="time"
        value={formData.time}
        onChange={handleChange}
      >
        {timeOptions[formData.classType].map((timeOption) => (
          <option value={timeOption}>{timeOption}</option>
        ))}
      </select>

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

      <button type="submit" disabled={isDisabled}>Submit</button>
    </form>
  );
};

export default UpdateReservation;
