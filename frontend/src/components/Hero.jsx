
import { hero } from "../constants/heroLinks";

const Hero = () => {
  const { tag, headline, highlight, description,  image, imageAlt } = hero;
  const [beforeHighlight, afterHighlight] = headline.includes(highlight)
  ? headline.split(highlight)
  : [headline, ""];


  

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Left */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-cyan-400 mb-4">{tag}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
             {beforeHighlight}
            < span className="text-cyan-400">{highlight}</span>
            {afterHighlight}
            </h1>

           
          </h1>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
            {description}
          </p>
         
        </div>

        {/* Image Right */}
        <div className="flex-1">
          <img
            src={image}
            alt={imageAlt}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
