

const Stats = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center">
          <div className="text-4xl font-bold text-white">3800+</div>
          <p className="text-slate-400 text-sm mt-2">APP ACTIVE</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">230+</div>
          <p className="text-slate-400 text-sm mt-2">TRUSTED BY COMPANY</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-white">$230M+</div>
          <p className="text-slate-400 text-sm mt-2">TRANSACTION</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
