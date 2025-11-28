import { Link } from "react-router-dom";
import { LINKS } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-color-two pb-8 px-8">
      <div className="py-4 md:flex md:justify-between md:pb-40">
        <img src="/vector.svg" className="w-38 h-22" />
        <div className="font-instrument-sans text-5xl font-bold">
          PrimalTraining
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <div>
          <div className="headline-five pb-4 pt-15 md:pt-0">Contact</div>
          <div className="paragraph-three">Email: hello@figma.com</div>
          <div className="paragraph-three pb-6">Phone: (203) 555-5555</div>
        </div>
        <div>
          <div className="headline-five pb-4">Opening Hours</div>
          <div className="grid grid-cols-2 paragraph-three pb-4">
            <div>MON – FRI</div>
            <div>5:00 – 23:00</div>
            <div>SATURDAYS</div>
            <div>8:00 – 16:00</div>
            <div>SUNDAYS</div>
            <div>8:00 – 13:00</div>
            <div>HOLIDAYS</div>
            <div>8:00 – 16:00</div>
          </div>
        </div>
        <div>
          <div className="headline-five pb-4">Social</div>
          <Link
            to={LINKS.instagram}
            target="_blank"
            className="paragraph-three hover:text-gray-400 block"
          >
            Instagram
          </Link>
          <Link to={LINKS.x} target="_blank" className="paragraph-three block">
            X
          </Link>
          <Link
            to={LINKS.linkedIn}
            target="_blank"
            className="paragraph-three block"
          >
            LinkedIn
          </Link>
          <Link
            to={LINKS.spotify}
            target="_blank"
            className="paragraph-three block"
          >
            Spotify
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
