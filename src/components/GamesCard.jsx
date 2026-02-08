import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const questions = [
  {
    q: "Bulan berapa kita pertama kali ketemu?",
    options: ["Oktober", "September", "Agustus", "November", "Juni"],
    answer: 1, // September
  },
  {
    q: "Dimana tempat pertama kali kita ketemu?",
    options: ["Salon", "Fish It", "Fish", "Gunung"],
    answer: 1, // Fish It
  },
  {
    q: "Apa makanan favorit aku?",
    options: ["Dimsum", "Kebab", "Seblak", "Promina", "Sushi"],
    answer: 3, // Promina
  },
  {
    q: "Minuman favorit aku?",
    options: ["Susu", "Matcha", "Kopi", "Boba", "Air Putih"],
    answer: 1, // Matcha
  },
  {
    q: "Siapa yang sering ngambek?",
    options: ["Aku", "Kaka", "Dua-duanya sama", "Ga ada"],
    answer: 2, // Dua-duanya
  },
];


const flowers = Array.from({ length: 40 });

const GamesCard = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === questions[step].answer) {
      setScore((s) => s + 1);
    }

    if (step + 1 < questions.length) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6  overflow-hidden">

      {/* FLOWER CONFETTI WHEN FINISHED */}
      {finished &&
        flowers.map((_, i) => {
          const left = Math.random() * 100;
          const delay = Math.random() * 2;
          const duration = 4 + Math.random() * 4;

          return (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 600, opacity: 1 }}
              transition={{ duration, delay, repeat: Infinity }}
              className="absolute top-0 text-xl"
              style={{ left: `${left}%` }}
            >
              🌸
            </motion.div>
          );
        })}

      <motion.div
        className="w-[420px] bg-white/5 backdrop-blur rounded-3xl shadow-2xl p-8 text-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {!finished ? (
          <>
            <h2 className="text-2xl font-bold text-pink-600 mb-6">
              Pertanyaan {step + 1}/5
            </h2>

            <p className="text-pink-700 mb-6">
              {questions[step].q}
            </p>

            <div className="space-y-3">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full p-3 rounded-xl border transition cursor-pointer
                  ${
                    selected === i
                      ? "bg-pink-500 text-white"
                      : "bg-pink-50 hover:bg-pink-100"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              disabled={selected === null}
              onClick={handleNext}
              className="mt-6 px-6 py-2 cursor-pointer bg-pink-600 text-white rounded-xl disabled:opacity-40"
            >
              Next Question
            </button>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2 className="text-3xl font-bold text-pink-600 mb-4">
                Selesai!
              </h2>

              <p className="text-xl text-pink-700">
                Skor kamu:
              </p>

              <div className="text-5xl font-bold text-pink-500 my-4">
                {score} / 5
              </div>

              <p className="text-pink-700">
                Apapun hasilnya, yang penting kita tetap Sahabat 🌸
              </p>
            </motion.div>
          </AnimatePresence>
        )}
         <motion.div
       
          initial="hidden"
          animate="show"
          className=" w-full ">
          <div className="mt-5 flex justify-center gap-5">
            <Link to="/gallery">
              <span className="text-pink-200 rounded-xl px-4 py-2 bg-pink-700 hover:underline cursor-pointer">
                Back
              </span>
            </Link>{" "}
            <Link to="/ending">
              <span className="text-pink-200 rounded-xl px-4 py-2 bg-pink-700 hover:underline cursor-pointer">
                Next
              </span>
            </Link>{" "}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GamesCard;
