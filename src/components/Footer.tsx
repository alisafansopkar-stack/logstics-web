import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#f6f6f6] m-0 p-0">
      {/* Big rounded white panel like screenshot */}
      <div className="w-full m-0 p-0">
        <div className="w-full rounded-none bg-white shadow-none px-8 sm:px-12 lg:px-16 py-10">
          <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)] items-start">
            {/* Left: logo + follow */}
            <div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black tracking-tight text-slate-900">
                  DA
                  <span className="text-[#ff5b2c]">SH</span>
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500 font-medium">
                Anything, Anywhere
              </p>

              <div className="mt-8 flex items-center gap-6">
                <span className="text-lg font-semibold text-slate-900">
                  Follow
                </span>
                <div className="flex items-center gap-6 text-slate-900">
                  <a
                    href="#"
                    aria-label="X"
                    className="text-2xl hover:text-[#ff5b2c] transition-colors"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-2xl hover:text-[#ff5b2c] transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="text-2xl hover:text-[#ff5b2c] transition-colors"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-2xl hover:text-[#ff5b2c] transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>

            {/* Columns */}
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Travel
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li>Asia</li>
                <li>Europe</li>
                <li>Australia</li>
                <li>America</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Company
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li>About US</li>
                <li>Packages</li>
                <li>Contact US</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Extra Links
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                <li>Customer Support</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright strip */}
      <div className="m-0 w-screen relative left-1/2 -translate-x-1/2 bg-[#ff5b2c]">
        <div className="py-3 text-center text-[11px] font-semibold tracking-wide text-white/95">
          © 2026 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

