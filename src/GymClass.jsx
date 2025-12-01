import { Link } from "react-router-dom";
import { LINKS } from "./constants";

const GymClass = ({ name, schedule, description }) => {
  return (
    <div className="bg-color-two px-6 border-b pb-6">
      <div className="headline-two pb-40 pt-4">{name}</div>
      {schedule.map((item) => (
        <>
          <div className="paragraph-one pb-1">{item}</div>
          <hr className="pb-6" />
        </>
      ))}
      <div className="paragraph-one pb-6">{description}</div>
      <Link
        className="bg-color-one links-button hover:bg-black p-4 block text-center"
        to={LINKS.reserve}
      >
        Reserve you spot
      </Link>
    </div>
  );
};

export default GymClass;
