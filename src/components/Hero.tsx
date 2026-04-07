import heroBg from "../assets/Mask group.png";
import truck from "../assets/truck.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-[#ececef] overflow-hidden">
      <div className="relative h-[440px] w-full">
        <motion.img
          src={heroBg}
          alt="Cargo containers"
          className="absolute inset-0 h-full w-full object-cover object-right"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Green Overlay */}
        <motion.div
          className="absolute inset-y-0 left-0 w-[68%] z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(122,146,47,0.93) 0%, rgba(122,146,47,0.80) 50%, rgba(122,146,47,0.40) 78%, transparent 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
        />

        {/* Text block: pinned in upper-left safe zone */}
        <motion.div
          className="absolute z-30 left-8 md:left-12 top-10 md:top-12 max-w-[520px] text-white"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.08]">
            Welcome To <br />
            Dash Cargo <br />
            Transport Services
          </h1>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          className="absolute bottom-0 left-0 z-20 h-9 w-full bg-[#ff7340]"
          initial={{ scaleX: 0.6, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
        />

        {/* White cut */}
        <div
          className="absolute bottom-0 right-0 z-30 h-9 w-[18%] bg-[#ececef]"
          style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}
        />

        {/* Truck pinned to bottom-left, below title area */}
        <motion.img
          src={truck}
          alt="Cargo truck"
          className="absolute z-20 -bottom-12 left-0 w-[360px] md:w-[390px] max-w-[46%] drop-shadow-[0_12px_18px_rgba(0,0,0,0.36)]"
          initial={{ opacity: 0, y: 18, x: -12 }}
          animate={{
            opacity: 1,
            x: [0, 10, 0],
            y: [0, -4, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.26, ease: "easeOut" },
            x: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

      </div>
    </section>
  );
};

export default Hero;