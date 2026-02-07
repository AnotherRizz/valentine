import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const photos = [
  { src: "./11.jpeg", name: "Momen Bahagia 1" },
  { src: "./22.jpeg", name: "Momen Bahagia 2" },
  { src: "./33.jpeg", name: "Momen Bahagia 3" },
  { src: "./44.jpeg", name: "Momen Bahagia 4" },
  { src: "./55.jpeg", name: "Momen Bahagia 5" },
];

const flowers = Array.from({ length: 35 });

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const GalleryCard = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden ">
      {/* FLOWERS */}
      {flowers.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 6;
        const size = 14 + Math.random() * 18;

        return (
          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: -120, opacity: 1 }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
            className="absolute pointer-events-none z-40"
            style={{ left: `${left}%`, fontSize: size }}>
            🌸
          </motion.div>
        );
      })}

      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600">
          Our Memories
        </h2>

        <p className="text-center text-pink-700 mt-3 mb-8 max-w-2xl mx-auto">
          Setiap foto menyimpan cerita, setiap momen punya arti. Kenangan kecil
          yang kita lewati bersama akan selalu menjadi bagian yang paling hangat
          untuk diingat.
        </p>

        {/* GRID + STAGGER ANIMATION */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(photo)}
              className={`
                relative cursor-pointer overflow-hidden rounded-2xl shadow-lg group
                ${i === 0 ? "col-span-2 row-span-2" : ""}
              `}>
              <img
                src={photo.src}
                className="w-full h-full object-cover"
                alt=""
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{photo.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className=" w-full ">
          <div className="mt-5 flex justify-center gap-5">
            <Link to="/valentine">
              <span className="text-pink-200 rounded-xl px-4 py-2 bg-pink-700 hover:underline cursor-pointer">
                Back
              </span>
            </Link>{" "}
            <Link to="/games">
              <span className="text-pink-200 rounded-xl px-4 py-2 bg-pink-700 hover:underline cursor-pointer">
                Next
              </span>
            </Link>{" "}
          </div>
        </motion.div>
      </div>

      {/* DIALOG */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}>
            <motion.img
              src={selected.src}
              alt=""
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              className="max-h-[80vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryCard;
