import callIcon from "../assets/Group 1597881186.png";
import stopWatchIcon from "../assets/stop-watch 1.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full overflow-x-clip">
      {/* Top info strip */}
      <div className="relative bg-[#efefef] border-b border-black/10 h-[24px] overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[210px] bg-[#6f8a28]"
          style={{ clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-0 h-full flex items-center justify-between text-[11px] min-w-0">
          <div className="flex items-center gap-6 text-[#5b5b5b]">
            <span className="inline-flex items-center gap-2">
              <img src={stopWatchIcon} alt="Stopwatch" className="h-3.5 w-3.5 object-contain" />
              Opening Hours : Contact on Whatsapp
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 pr-[225px]">
            <span className="inline-flex items-center gap-1.5 text-[#6e6e6e]">
              <span className="inline-flex h-3.5 w-3.5 items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                  <path
                    d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"
                    fill="none"
                    stroke="#ff7a43"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.2" fill="#ff7a43" />
                </svg>
              </span>
              Location Here
            </span>
            <span className="text-[#ff5b2c] font-semibold">San Francisco</span>
          </div>
        </div>
      </div>

      {/* Main navbar bar */}
      <div className="relative bg-[#6f8a28] text-white h-[54px] overflow-hidden">
        {/* Left small orange corner (like screenshot) */}
        <div
          className="pointer-events-none absolute left-0 bottom-0 h-[22px] w-[34px] bg-[#ff5b2c]"
          style={{ clipPath: "polygon(0% 100%, 0% 0%, 100% 100%)" }}
        />

        {/* Right diagonal orange panel (exact call + quote area) */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[360px] bg-[#f57c45]"
          style={{ clipPath: "polygon(16% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        {/* Green sub-panel behind call block */}
        <div
          className="pointer-events-none absolute right-[155px] top-0 h-full w-[165px] bg-[#6f8a28]"
          style={{ clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)" }}
        />

        <div className="max-w-6xl mx-auto px-6 lg:px-0 h-full relative min-w-0">
          {/* Stable 3-column layout */}
          <div className="h-full grid grid-cols-[220px_1fr_300px] items-center">
            <div className="leading-none">
              <p className="text-[28px] font-black tracking-tight text-white">
                DA<span className="text-[#ff7a43]">SH</span>
              </p>
              <p className="text-[9px] font-medium text-white/75 -mt-1">
                Anything, Anywhere
              </p>
            </div>

            {/* Center menu */}
            <nav className="hidden md:flex items-center justify-center min-w-0">
              <ul className="flex items-center gap-6 lg:gap-7 text-[12px] lg:text-[13px] font-semibold tracking-[0.01em] whitespace-nowrap">
                <li className="cursor-pointer hover:text-orange-200 transition-colors">
                  Home
                </li>
                <li className="cursor-pointer hover:text-orange-200 transition-colors">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-orange-200 transition-colors">
                  Services
                </li>
                <li className="cursor-pointer hover:text-orange-200 transition-colors">
                  Project
                </li>
                <li className="cursor-pointer hover:text-orange-200 transition-colors">
                  Team
                </li>
                <li className="cursor-pointer hover:text-orange-200 transition-colors">
                  Blog
                </li>
                <li className="cursor-pointer hover:text-orange-200 transition-colors">
                  Contact
                </li>
              </ul>
            </nav>

            {/* Right call + button (sits on orange diagonal) */}
            <div className="justify-self-end flex items-center gap-3 pr-3 min-w-0">
              <div className="hidden lg:flex items-center gap-2 min-w-[118px]">
                <img src={callIcon} alt="Call icon" className="h-6 w-6 object-contain shrink-0" />
                <div className="leading-tight">
                  <p className="text-[10px] text-white/90 leading-none mb-1">Call Us Anytime</p>
                  <p className="text-[12px] leading-none font-semibold text-[#8dd14a]">
                    +91 6785878686
                  </p>
                </div>
              </div>

              <button className="hidden lg:inline-flex h-[28px] rounded-[2px] bg-[#6f8a28] px-4 text-[10px] font-extrabold tracking-wide text-white shadow-sm hover:bg-[#7fa733] transition-colors items-center">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;