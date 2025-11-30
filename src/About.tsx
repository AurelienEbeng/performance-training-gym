import ScrollFadeIn from "./ScrollFadeIn";

const About = () => {
  return (
    <>
    {/* Header section */}
      <div className="text-center text-black py-4 border-y headline-one">
        About us
      </div>
      <ScrollFadeIn style={"w-full md:w-1/3"}>
        <img
          src="/images/about/header.jpg"
          className="w-full md:h-full object-cover"
          alt="image of people fist bumping"
        />
      </ScrollFadeIn>
      <div className="bg-color-one py-6 px-8">
        <div className="headline-two pb-10">
          Tap into Your Primal Power. Forge a Stronger You.
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
    </>
  );
};

export default About;
