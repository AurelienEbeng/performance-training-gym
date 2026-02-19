import { useEffect, useState } from "react";
import httpModule from "./axios";
import Modal from "./Modal";
import UpdateReservation from "./UpdateReservation";

const ListOfReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getReservations();
  }, []);

  function getReservations() {
    httpModule
      .get("")
      .then((res) => setReservations(res.data))
      .catch((error) => console.log(error));
  }

  function handleDelete(id) {
    httpModule.delete(`${id}/`).then(getReservations()).catch((error) => console.log(error));
  }

  return (
    <div>
      <div className="text-center text-black py-4 border-y headline-one">
        Reservations
      </div>
      {reservations.map((reservation) => (
        <>
          <div className="pb-4" key={reservation.id}>
            <div>Name: {reservation.name}</div>
            <div>Class: {reservation.classType}</div>
            <div>Time: {reservation.time}</div>
            <div>Date: {reservation.date}</div>
            <div className="flex flex-row gap-x-2">
              <button onClick={() => setOpenModal(true)}>Update</button>
              <button onClick={() => handleDelete(reservation.id)}>
                Delete
              </button>
            </div>
          </div>
          <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
            <UpdateReservation oldReservation={reservation} />
          </Modal>
        </>
      ))}
    </div>
  );
};

export default ListOfReservations;
