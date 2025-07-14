import { STATS } from "../constants/statsLinks";

const Stats = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {STATS.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-white">{stat.value}</div>
            <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

