import bank1 from "../assets/bank1.svg";

const Hero = () => {
  return (
    <section  className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Left */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-cyan-400 mb-4">20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            The Next <br />
            <span className="text-cyan-400">Generation</span> <br />
            Payment Method
          </h1>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees, and more.
          </p>
         
        </div>

        {/* Image Right */}
        <div className="flex-1">
          <img
            src={bank1}
            alt="Hero"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

