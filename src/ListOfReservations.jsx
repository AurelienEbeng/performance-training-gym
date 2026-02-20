import { useEffect, useState } from "react";
import httpModule from "./axios";
import Modal from "./Modal";
import UpdateReservation from "./UpdateReservation";

const ListOfReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [oldReservation, setOldReservation] = useState({});

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
    httpModule
      .delete(`${id}/`)
      .then(getReservations())
      .catch((error) => console.log(error));
  }

  return (
    <div className="pb-10">
      <div className="text-center text-black py-4 headline-one">
        Reservations
      </div>
      <table className="w-9/10 text-center m-auto">
        <thead>
          <tr>
            <th className="border">Name</th>
            <th className="border">Class</th>
            <th className="border">Time</th>
            <th className="border">Date</th>
            <th className="border"></th>
            <th className="border"></th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr>
              <td className="border">{reservation.name}</td>
              <td className="border">{reservation.classType}</td>
              <td className="border">{reservation.time}</td>
              <td className="border">{reservation.date}</td>
              <td className="border py-3">
                <button
                  className="bg-black text-white rounded-xl px-3"
                  onClick={() => {
                    setOpenModal(true);
                    setOldReservation(reservation);
                  }}
                >
                  Update
                </button>
              </td>
              <td className="border">
                <button
                  className="bg-black text-white rounded-xl px-3"
                  onClick={() => handleDelete(reservation.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <UpdateReservation oldReservation={oldReservation} onClose={() => setOpenModal(false)}/>
      </Modal>
    </div>
  );
};

export default ListOfReservations;
