import Button from "../components/Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="hero w-full md:w-1/2 md:min-h-screen bg-white">
          <img src="https://source.unsplash.com/781x1010?food" alt="" />
        </div>
        <div className="hero w-full md:w-1/2 h-screen md:min-h-screen bg-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-orange-500">
                What is Foodie Delights?
              </h1>
              <p className="py-6 text-black">
                Foodie Delights is a food recommendation website that provides
                you a cafe, restaurant or many more culinary options
                recommendation.
              </p>
              <Button value="Explore" link="/explore" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
