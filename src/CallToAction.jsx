import { Link } from "react-router-dom";
import { LINKS } from "./constants";

const CallToAction = ({
  bgColor,
  btnBgColor,
  headingText,
  paragraphAboveHeadingText,
  paragraphBelowHeadingText,
}) => {
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
          <Link
            className={`${btnBgColor} links-button hover:bg-black p-4`}
            to={LINKS.reserve}
          >
            Reserve you spot
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
