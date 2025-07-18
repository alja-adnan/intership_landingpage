import bank5 from "../assets/bank5.svg";
import appstore from "../assets/appstore.svg"
import google from "../assets/google.svg"
import { TEXT } from "../constants/textLinks";

const {headingLine1,headingLine2,description}=TEXT.billing
const Billing = () => {
  return (
     <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={bank5}
                alt="Payment Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                {headingLine1}
                <br />
                {headingLine2}
              </h2>
              <p className="text-slate-400 text-lg">
                {description}
              </p>
              <div className="flex items-center space-x-4">
                <img src={appstore} alt="App Store" className="h-10" />
                <img src={google} alt="Google Play" className="h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Billing;
