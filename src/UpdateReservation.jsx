import { useState } from "react";
import httpModule from "./axios";
import { useLoadingContext } from "./LoadingContext";

const UpdateReservation = ({ oldReservation, onClose, getReservations }) => {
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

    if (name === "classType") {
      setFormData((prev) => ({ ...prev, time: timeOptions[value][0] }));
    }
  };

  const { toggleDisable, isDisabled } = useLoadingContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleDisable();
    httpModule
      .put(`${formData.id}/`, formData)
      .then(() => {
        toggleDisable();
        onClose();
        getReservations();
      })
      .catch((error) => {
        toggleDisable();
        if (error.response.status == 400) {
          alert(error.response.data);
          return;
        }
        alert("Error, check console");
        console.log(error.response);
      });
  };

  const timeOptions = {
    Strength: ["06:00 AM", "08:00 AM"],
    Conditioning: ["08:00 AM", "10:00 AM"],
    "Community Classes": ["08:00 AM"],
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

      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
};

export default UpdateReservation;
