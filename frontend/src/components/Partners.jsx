import { partner } from "../constants/partnerLink";

const Partners = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          {partner.map(({ name }, index) => (
            <span key={index} className="text-2xl font-bold">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

 