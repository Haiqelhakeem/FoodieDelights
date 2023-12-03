const Hero = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="hero w-1/2 min-h-screen bg-white">
          <img src="https://source.unsplash.com/781x1010?food" alt="" />
        </div>
        <div className="hero w-1/2 min-h-screen bg-white">
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
              <button
                href="#"
                className="btn bg-black border-none hover:bg-orange-500 text-orange-500 hover:text-black"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
