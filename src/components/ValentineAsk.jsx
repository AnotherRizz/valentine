import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ValentineAsk = () => {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 120) - 60;
    setNoPos({ x: randomX, y: randomY });
  };


  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/30 backdrop-blur rounded-3xl shadow-2xl p-10 text-center w-[540px]">
        {/* Image */}
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1xMDRldmdqNWhmZm1pNTdjZWY2bXBvajd3ZWtwcWc5YWQxbmUwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d37mEpcaGP3pudPoho/giphy.gif"
          alt="cute"
          className="w-40 rounded-full mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-700">
          Will you be my Valentine? 🥺👉👈
        </h2>

        <p className="text-sm text-gray-500 mt-2 mb-6">
          I promise to make you very happy ❤️
        </p>

        <div className="relative flex items-center justify-around gap-6 mt-4">
          {/* YES BUTTON */}
          <button
            onClick={() => navigate("/welcome")}
            className="px-6 py-3 cursor-pointer hover:scale-95 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg">
            Yes 🥰
          </button>

          {/* NO BUTTON (RUN AWAY) */}
          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 300 }}
            onMouseEnter={moveNoButton}
            className="px-6 py-3 rounded-full bg-gray-200 text-gray-600 font-semibold absolute right-0">
            No 😏
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ValentineAsk;
