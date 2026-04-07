import worker from "../assets/worker.jpg";
import truck from "../assets/truck.png";

const Features = () => {
  return (
    <section className="bg-[#ececef]">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 py-14 lg:py-16">
        {/* top category row */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[34px]">
          {["Logistics", "FREIGHTEX", "TRAVELGOOD", "TRUCKING", "FLYFASTER"].map(
            (item) => (
              <span
                key={item}
                className="text-[31px] font-extrabold uppercase tracking-wide text-slate-500/75"
              >
                {item}
              </span>
            )
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr] items-start">
          {/* left info */}
          <div className="pt-1">
            <span className="inline-flex rounded-full bg-[#e67a55] px-7 py-1 text-[10px] font-extrabold uppercase text-white">
              About
            </span>

            <h2 className="mt-4 max-w-md text-5xl font-extrabold leading-[1.12] text-[#334109]">
              We&apos;ll keep your items damage free
            </h2>

            <p className="mt-4 max-w-xl text-[13px] leading-7 text-slate-500">
              Logistics is the strategic process of planning, implementing,
              and controlling the efficient, forward and reverse flow and
              storage of goods, services, and information from origin to
              consumption. It ensures products reach the right destination
              at the right time, involving warehousing and delivery steps.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-7 gap-y-2 border-l-4 border-[#ff6f3f] bg-white/55 px-5 py-4 max-w-[560px]">
              {[
                "International Shipping",
                "Receiving Materials",
                "Storage Of Goods",
                "Distribution To Customers",
                "Efficient Logistics",
                "Handling Returns",
              ].map((point) => (
                <p key={point} className="text-[12px] text-slate-600">
                  <span className="mr-2 text-[#ff6f3f] font-bold">›</span>
                  {point}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <button className="rounded bg-[#738d2b] px-6 py-2.5 text-[12px] font-bold text-white hover:bg-[#839f35] transition-colors">
                Contact Us
              </button>
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-full bg-[#f19a74] text-white flex items-center justify-center text-[14px]">
                  📞
                </span>
                <div>
                  <p className="text-[12px] font-bold text-slate-700">
                    Have Questions
                  </p>
                  <p className="text-[12px] text-slate-500">+91 6785878686</p>
                </div>
              </div>
            </div>
          </div>

          {/* right visual */}
          <div className="relative pt-2">
            <div className="relative ml-auto w-[92%] max-w-[470px] overflow-hidden rounded-[48px_0_0_48px]">
              <img
                src={worker}
                alt="Worker"
                className="h-[360px] w-full object-cover"
              />
            </div>

            <div className="absolute left-[18%] top-[46%] w-[68%] rounded-md border-[8px] border-white bg-white shadow-lg">
              <img
                src={truck}
                alt="Truck in motion"
                className="h-[110px] w-full object-cover"
              />
            </div>

            <div className="absolute left-[3%] bottom-0 flex items-center gap-4 rounded-[0_0_0_28px] bg-[#ff5b2c] px-7 py-4 text-white">
              <div>
                <p className="text-6xl font-extrabold leading-none">20</p>
                <p className="text-[20px] font-semibold leading-tight">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
              <div className="h-14 w-px bg-white/40" />
              <div>
                <p className="text-[17px] font-semibold leading-tight">
                  10 Country
                  <br />
                  Operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;