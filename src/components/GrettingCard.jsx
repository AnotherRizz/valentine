import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const floatingItems = Array.from({ length: 40 });

const GrettingCard = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden ">
      {/* MANY FLOATING DECORATIONS */}
      {floatingItems.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 6;
        const size = 14 + Math.random() * 18;

        const icons = ["❤️", "🌸", "💖", "✨"];
        const icon = icons[i % icons.length];

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
            style={{
              left: `${left}%`,
              fontSize: size,
            }}>
            {icon}
          </motion.div>
        );
      })}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-[740px] h-[560px] p-6 flex flex-col items-center justify-center">
        {/* Glow */}
        <div className="absolute w-96 h-96 bg-pink-200 blur-3xl rounded-full opacity-40 -z-10" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl text-center font-bold text-pink-600 mb-6">
          Happy Valentine <br />
          Kaka Roce ❤️
        </motion.h2>

        <div className="md:flex md:gap-8 md:justify-center items-center">
          {/* Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative">
            <div className="p-[8px] w-fit rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-pink-500 shadow-2xl">
              <img
                src="./main.jpeg"
                alt="person"
                className="w-72 h-72 object-cover rounded-2xl"
              />
            </div>

            {/* Local ornaments */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-2xl">
              ❤️
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 text-xl">
              🌸
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 -right-6 text-xl">
              ✨
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center text-pink-700 mt-6 text-base leading-relaxed max-w-sm">
            Every moment with you feels special.
            <br />
            Thank you for being part of my life.
            <br />
            You make everything brighter 💖 <br />
            You are the reason behind many small smiles that you may never even
            notice. Simple things feel more beautiful when you're in them. The
            times we spend, the conversations we share, and the little memories
            we create all have a special place in my heart. <br />
            <div className="mt-5">

            <Link to="/">
              <span className="text-pink-200 rounded-xl px-4 py-2 bg-pink-700 hover:underline cursor-pointer">
                Back
              </span>
            </Link>{" "}
            <Link to="/gallery">
              <span className="text-pink-200 rounded-xl px-4 py-2 bg-pink-700 hover:underline cursor-pointer">
                Next
              </span>
            </Link>{" "}
            </div>
           
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default GrettingCard;
