import s1 from "../assets/service1.jpg";
import s2 from "../assets/service2.jpg";
import s3 from "../assets/service3.jpg";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { img: s1, title: "Maritime Freight", subtitle: "transportation" },
    { img: s2, title: "Maritime Freight", subtitle: "transportation" },
    { img: s3, title: "Maritime Freight", subtitle: "transportation" },
  ];

  return (
    <section className="relative bg-[#f6f6f6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 pt-14 pb-12">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#ff5b2c] px-4 py-1 text-[10px] font-bold tracking-wide text-white shadow-sm">
            ABOUT 
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#6f8a28]">
            Wide Variety of Logistics Services
          </h2>
          <p className="mt-3 text-[12px] text-slate-500 max-w-md mx-auto leading-relaxed">
            Transportation, inventory management, warehousing, material
            handling, packaging, and order fulfillment.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3 items-start">
          {services.map((s, i) => (
            <motion.article
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="relative h-[270px] w-full overflow-hidden rounded-md bg-white shadow-sm">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* White overlay card (bottom-right) */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 -bottom-8 w-[78%] rounded-md bg-white shadow-xl px-5 py-5"
              >
                <p className="text-[9px] font-bold tracking-[0.18em] text-[#ff5b2c]">
                  SERVICE NOW
                </p>
                <h3 className="mt-2 text-[14px] font-extrabold leading-snug text-slate-900">
                  {s.title}
                  <br />
                  {s.subtitle}
                </h3>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
                  Coordinating the flow of materials customer demands while
                  optimizing costs.
                </p>
                <button className="mt-4 inline-flex items-center justify-center rounded bg-[#e67a55] px-4 py-2 text-[10px] font-bold text-white hover:bg-[#ff5b2c] transition-colors">
                  Learn More
                </button>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* no extra gradient space */}
    </section>
  );
};

export default Services;