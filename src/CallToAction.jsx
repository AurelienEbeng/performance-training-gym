import Modal from "./Modal";
import { useState } from "react";
import CreateReservation from "./CreateReservation";

const CallToAction = ({
  bgColor,
  btnBgColor,
  headingText,
  paragraphAboveHeadingText,
  paragraphBelowHeadingText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleReserveYourSpot() {
    setIsOpen(true);
  }
  return (
    <div>
      <div
        className={`${bgColor} h-screen flex justify-center items-center border-y`}
      >
        <div className="text-center space-y-5 md:px-20 lg:px-0">
          <div className="paragraph-two uppercase">
            {paragraphAboveHeadingText}
          </div>
          <div className="headline-three">{headingText}</div>
          <div className="paragraph-two md:px-20 lg:px-70">
            {paragraphBelowHeadingText}
          </div>
          <button
            className={`${btnBgColor} links-button hover:bg-black p-4`}
            onClick={handleReserveYourSpot}
          >
            Reserve Your Spot
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CreateReservation />
      </Modal>
    </div>
  );
};

export default CallToAction;
