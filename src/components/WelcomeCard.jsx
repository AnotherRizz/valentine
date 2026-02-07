import React from "react";
import { motion } from "framer-motion";

const FloatingLove = ({ delay, left }) => (
  <motion.div
    initial={{ y: 80 }}
    animate={{ y: -120 }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
    className="absolute text-pink-400 text-2xl z-10 pointer-events-none"
    style={{ left }}
  >
    ❤️
  </motion.div>
);

const FloatingFlower = ({ delay, left }) => (
  <motion.div
    initial={{ y: 60 }}
    animate={{ y: -100 }}
    transition={{
      duration: 7,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
    className="absolute text-pink-300 text-2xl z-10 pointer-events-none"
    style={{ left }}
  >
    🌸
  </motion.div>
);

const WelcomeCard = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Floating di pinggir (tidak lewat tengah) */}
      <FloatingLove delay={0} left="5%" />
      <FloatingLove delay={2} left="12%" />
      <FloatingLove delay={4} left="88%" />
      <FloatingLove delay={1} left="95%" />

      <FloatingFlower delay={0} left="8%" />
      <FloatingFlower delay={3} left="92%" />
      <FloatingFlower delay={5} left="15%" />
      <FloatingFlower delay={2} left="85%" />

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 md:max-w-4xl flex flex-col items-center mx-auto p-10 rounded-3xl"
      >
        <h1 className="text-4xl font-bold text-pink-700 text-center mb-4">
          Happy Valentine's Day
        </h1>

        <p className="text-pink-600 mb-6 text-center">
          A little surprise filled with love just for you
        </p>

        <motion.img
          src="./1.svg"
          alt="valentine"
          className="w-80 drop-shadow-lg relative z-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <a href="/valentine">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-full font-semibold mt-10 shadow-lg"
          >
            From Me 💌
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default WelcomeCard;
