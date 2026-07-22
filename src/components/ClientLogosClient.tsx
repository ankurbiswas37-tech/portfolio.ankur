"use client";

import { motion } from "framer-motion";

export interface ClientLogoType {
  _id: string;
  name: string;
  logoUrl: string;
}

export default function ClientLogosClient({ logos }: { logos: ClientLogoType[] }) {
  if (!logos || logos.length === 0) return null;

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full py-12 bg-[#0B0B0F] overflow-hidden border-y border-white/5 relative select-none">
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0B0B0F] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0B0B0F] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
          TRUSTED BY INNOVATIVE BRANDS & AGENCIES
        </span>
      </div>

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client._id}-${index}`}
              className="flex items-center justify-center h-12 w-32 relative cursor-pointer group"
            >
              <img
                src={client.logoUrl}
                alt={client.name}
                className="max-h-10 max-w-[120px] object-contain transition-all duration-80 brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}