import { Link } from "react-router-dom";
import ScrollFadeIn from "./ScrollFadeIn";

const Home = () => {
  return (
    <>
      <div className="text-center text-gray-900 py-4 border-y headline-one">
        Train Hard. <span className="text-color-one">Live Better</span>
      </div>
      {/* Hero section */}
      <div className="md:flex">
        <img
          src="/images/heroImage.png"
          className=" w-full md:w-2/3 object-cover"
        />
        <div className="bg-color-two px-8 md:w-1/3">
          <div className="uppercase headline-two pt-4 md:pb-40">
            FOR THE COMMITTED
          </div>
          <p className="paragraph-two">
            Train like an athlete with top-tier equipment and expert
            programming. Whether you're building muscle or breaking PRs, we help
            you push past limits.
          </p>
          <button className="links-button py-8 pl-4">
            <Link to="/about">About us</Link>
          </button>
        </div>
      </div>
      {/* Mission section */}
      <ScrollFadeIn>
        <img
          src="/images/mission.png"
          className=" w-full md:w-1/3 object-cover"
        />
      </ScrollFadeIn>
      <div className="bg-color-two p-8">
        <div className="headline-two">Guided by experts</div>
        <p className="paragraph-two">
          We believe in creating a positive environment where you can thrive.
          We're here to help you achieve your goals and unlock your full
          potential.
        </p>
      </div>
      <div className="bg-color-two p-8 border-y">
        <div className="headline-two">DYNAMIC OPEN GYM</div>
        <p className="paragraph-two">
          Our facility is the optimal environment for strength training and
          performance, fully equipped with top-of-the-line tools, ample training
          areas, and a focus on functional movement.
        </p>
      </div>
    </>
  );
};

export default Home;
