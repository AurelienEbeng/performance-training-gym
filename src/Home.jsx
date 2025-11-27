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
      <div className="md:flex md:flex-row-reverse">
        <ScrollFadeIn style={"w-full md:w-1/3"}>
          <img src="/images/mission.png" className=" w-full object-cover" />
        </ScrollFadeIn>
        <div className="md:flex border-b md:w-2/3">
          <div className="bg-color-two p-8 md:w-1/2">
            <div className="headline-two md:pb-40">Guided by experts</div>
            <p className="paragraph-two">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>
          <div className="bg-color-two p-8 max-sm:border-y md:border-l md:w-1/2">
            <div className="headline-two md:pb-40">DYNAMIC OPEN GYM</div>
            <p className="paragraph-two">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>
        </div>
      </div>
      {/* Community section */}
      <div className="headline-one text-center py-4">
        Join the <span className="text-color-one">COMMUNITY</span>
      </div>
      <div className="md:flex md:flex-row-reverse">
        <ScrollFadeIn style={"w-full md:w-1/2"}>
        <img src="/images/community.png" className="w-full md:h-full object-cover" />
      </ScrollFadeIn>
      <div className="bg-color-two md:w-1/2">
        <div className="headline-two text-center py-4 border-b">
          DISCOVER YOUR POTENTIAL
        </div>
        <div className="p-6 border-b">
          <div className="headline-four">Expert Coaching</div>
          <p className="paragraph-two">
            Trainers who are passionate about your progress.
          </p>
        </div>
        <div className="p-6 border-b">
          <div className="headline-four">Results-Driven Programs</div>
          <p className="paragraph-two">
            Workouts that deliver tangible, measurable results.
          </p>
        </div>
        <div className="p-6 border-b">
          <div className="headline-four">A Supportive Tribe</div>
          <p className="paragraph-two">
            A community that pushes you to be your best.
          </p>
        </div>
        <button className="w-full p-10">
          <Link to="/reserve" className="links-button p-4">
            View Classes
          </Link>
        </button>
      </div>
      </div>
    </>
  );
};

export default Home;
