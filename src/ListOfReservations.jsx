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
    <div className="pb-10">
      <div className="text-center text-black py-4 headline-one">
        Reservations
      </div>
      <table className="w-7/10 text-center m-auto">
        <tr>
          <th className="border">Name</th>
          <th className="border">Class</th>
          <th className="border">Time</th>
          <th className="border">Date</th>
          <th className="border"></th>
        </tr>
        {
          reservations.map(reservation =>(<tr>
            <td className="border">{reservation.name}</td>
            <td className="border">{reservation.classType}</td>
            <td className="border">{reservation.time}</td>
            <td className="border">{reservation.date}</td>
            <td className="border">
              <button className="w-1/2" onClick={() => setOpenModal(true)}>Update</button>
              <button className="w-1/2" onClick={() => handleDelete(reservation.id)}>
                Delete
              </button>
            </td>
          </tr>))
        }
      </table>
    </div>
  );
};

export default ListOfReservations;
