import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center text-gray-900 py-4 border-y headline-one">
        Train Hard. <span className="text-color-one">Live Better</span>
      </div>
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
    </>
  );
};

export default Home;
