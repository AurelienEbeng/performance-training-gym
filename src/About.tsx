import ScrollFadeIn from "./ScrollFadeIn";

const About = () => {
  return (
    <>
      {/* Header section */}
      <div className="text-center text-black py-4 border-y headline-one">
        About us
      </div>
      <div className="md:flex md:flex-row-reverse">
        <ScrollFadeIn style={"w-full md:w-1/2 lg:w-1/3"}>
          <img
            src="/images/about/header.jpg"
            className="w-full md:h-full object-cover"
            alt="image of people fist bumping"
          />
        </ScrollFadeIn>
        <div className="bg-color-one py-6 px-8 md:w-1/2 md:px-4 lg:w-2/3 lg:px-8">
          <div className="headline-two pb-10 lg:pb-40">
            Tap into Your Primal Power.{" "}
            <span className="lg:block">Forge a Stronger You.</span>
          </div>
          <div className="headline-five pb-4">OUR VISION</div>
          <div className="paragraph-two">
            Primal Training is committed to delivering a training experience
            rooted in raw strength, functional fitness, and unwavering community
            support. We empower our members to tap into their primal power,
            achieve their goals, and live a life of strength, resilience, and
            unwavering determination.
          </div>
        </div>
      </div>
      <div className="md:flex">
        <ScrollFadeIn style={"w-full md:w-1/2 lg:w-2/3 lg:h-screen"}>
          <img
            src="/images/about/dynamic.jpg"
            className="w-full md:h-full object-cover lg:object-cover"
            alt="Image of person deadlifting with a  barbell"
          />
        </ScrollFadeIn>
        <div className="bg-color-two p-6 md:w-1/2 lg:w-1/3">
          <div className="md:flex md:flex-col md:justify-between md:h-full">
            <div className="headline-two pb-6">DYNAMIC OPEN GYM</div>
            <div>
              At Primal Training, we strip away the fluff and focus on the
              fundamentals. Our expert coaches guide you through intense,
              functional workouts designed to build raw strength, resilience,
              and a body capable of anything.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
