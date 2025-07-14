


import { Star, Shield, TrendingUp } from "lucide-react";

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

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            You do the business, <br /> we'll handle the money.
          </h2>
          <p className="text-slate-400 text-lg">
            With the right credit card, you can improve your financial life by building credit, earning rewards and
            saving money. But with hundreds of credit cards on the market.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>

        {/* Right Features List */}
        <div className="space-y-6">
          <FeatureCard
            Icon={Star}
            title="Rewards"
            description="The best credit cards offer some tantalizing combinations of promotions and prizes."
          />
          <FeatureCard
            Icon={Shield}
            title="100% Secured"
            description="We take proactive steps to make sure your information and transactions are secure."
          />
          <FeatureCard
            Icon={TrendingUp}
            title="Balance Transfer"
            description="A balance transfer credit card can save you a lot of money in interest charges."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
