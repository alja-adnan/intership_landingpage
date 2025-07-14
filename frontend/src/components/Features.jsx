


import { FEATURES } from "../constants/featuresLink";
import { TEXT } from "../constants/textLinks";

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex items-start space-x-4">
    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
      <Icon className="w-6 h-6 text-teal-400" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  </div>
);
const { headingLine1, headingLine2, description } = TEXT.features;

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            {headingLine1} <br />{headingLine2}
          </h2>
          <p className="text-slate-400 text-lg">
            {description}
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>

        {/* Right Features List */}
          <div className="space-y-6">
          {FEATURES.map((item, index) => (
            <FeatureCard
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
