import Modal from "./Modal";
import { useState } from "react";
import CreateReservation from "./CreateReservation";

const GymClass = ({ name, schedule, description }) => {
   const [isOpen, setIsOpen] = useState(false)
  function handleReserveYourSpot(){
    setIsOpen(true);
  }
  return (
    <div
      className={`bg-color-two px-6 border-b pb-6 md:flex md:flex-col md:justify-between ${
        name === "Strength" ? "" : "md:border-l"
      }`}
    >
      <div className="headline-two pb-40 pt-4">{name}</div>
      {schedule.map((item) => (
        <>
          <div className="paragraph-one pb-1">{item}</div>
          <hr className="pb-6" />
        </>
      ))}
      <div className="paragraph-one pb-6">{description}</div>
      <button className="bg-[#808CFD] p-3 rounded-xl [word-spacing:5px] hover:bg-black hover:text-white links-nav"
      onClick={handleReserveYourSpot}>
        Reserve your spot
      </button>
      <Modal isOpen={isOpen} onClose={()=> setIsOpen(false)}><CreateReservation /></Modal>
    </div>
  );
};

export default GymClass;
