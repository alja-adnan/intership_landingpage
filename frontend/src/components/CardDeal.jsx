
import card from "../assets/card.svg"
import { TEXT } from "../constants/textLinks";

const {headingLine1,headingLine2,description}=TEXT.carddeal
const CardDeal = () => {
  return (
   <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                {headingLine1}
                <br />
                {headingLine2}
              </h2>
              <p className="text-slate-400 text-lg">
               {description}
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
