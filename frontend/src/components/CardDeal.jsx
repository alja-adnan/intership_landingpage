
import card from "../assets/card.svg"
const CardDeal = () => {
  return (
   <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Find a better card deal
                <br />
                in few easy steps.
              </h2>
              <p className="text-slate-400 text-lg">
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet
                ultrices ac, ametau.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
            <div className="relative">
              <img
                src={card}
                alt="Analytics Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default CardDeal;
