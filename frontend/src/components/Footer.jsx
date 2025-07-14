import { TEXT } from "../constants/textLinks";
import { footer } from "../constants/footer";

const { headingLine1, description } = TEXT.footer;

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">{headingLine1}</span>
            </div>
            <p className="text-slate-400">{description}</p>
          </div>

          {/* Footer Sections */}
          {footer.map(({ title, links }, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <div className="space-y-2 text-slate-400">
                {links.map((link, i) => (
                  <div key={i} className="hover:text-white cursor-pointer transition-colors">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>Copyright Ⓒ 2021 HooBank. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








