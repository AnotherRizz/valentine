import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const flowers = Array.from({ length: 35 });

const CardLetters = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 p-6 overflow-hidden">
      {/* Taburan bunga */}
      {flowers.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 5;

        return (
          <motion.div
            key={i}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 700, opacity: 1 }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
            className="absolute text-xl z-50 top-2"
            style={{ left: `${left}%` }}>
            🌸
          </motion.div>
        );
      })}

      {/* Kertas surat */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur p-10 md:p-14 rounded-2xl shadow-2xl border border-pink-200 relative">
          {/* Ornamen atas */}
          <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 rounded-t-2xl" />

          <h2 className="text-3xl font-semibold text-pink-700 mb-6 text-center">
            Untuk Kak Roce 💌
          </h2>

          <div className="text-pink-800 leading-relaxed space-y-4 text-[15px] md:text-base">
            <p>Hai Kak Roce,</p>

            <p>
              Di hari Valentine ini, aku cuma ingin menuliskan sesuatu yang
              sederhana, tapi datang dari hati. Mungkin ini bukan tentang
              cokelat atau bunga, tapi tentang rasa syukur karena punya sahabat
              seperti kamu.
            </p>

            <p>
              Terima kasih sudah selalu jadi tempat cerita, tempat ketawa, dan
              kadang tempat mengeluh juga. Banyak momen kecil yang mungkin
              terlihat biasa, tapi buat aku itu berarti. Karena semua itu
              dijalani bareng kamu.
            </p>

            <p>
              Aku senang bisa kenal kamu, bisa dekat, dan bisa jadi bagian dari
              perjalanan harimu. Kamu orang yang kuat, baik, dan selalu punya
              cara buat bikin suasana jadi lebih hangat. Kadang tanpa sadar,
              kamu sudah ngasih banyak hal yang bikin orang di sekitarmu merasa
              nyaman.
            </p>

            <p>
              Valentine bukan cuma soal pasangan, tapi juga tentang orang-orang
              yang kita sayang dan hargai. Dan buat aku, kamu salah satu orang
              yang penting. Sahabat yang selalu ada, selalu peduli, dan selalu
              tulus.
            </p>

            <p>
              Semoga kamu selalu dikelilingi hal-hal baik, selalu bahagia, dan
              semoga semua yang kamu perjuangkan pelan-pelan bisa tercapai.
              Jangan lupa jaga diri, dan jangan terlalu keras sama diri sendiri
              ya, Kak.
            </p>

            <p>Terima kasih sudah jadi sahabat yang luar biasa.</p>

            <p className="mt-6">
              Dengan hangat,
              <br />
              <span className="font-semibold text-pink-700">Arsela 🌸</span>
            </p>
          </div>

          {/* Hiasan sudut */}
          <div className="absolute bottom-3 right-4 text-2xl opacity-70">
            💖
          </div>
        </div>
      <motion.div
        initial="hidden"
        animate="show"
        className=" w-full ">
        <div className="mt-5 flex justify-center gap-5">
          <Link to="/games">
            <span className="text-pink-200 rounded-xl px-4 py-2 bg-pink-700 hover:underline cursor-pointer">
              Back
            </span>
          </Link>{" "}
          <Link to="/">
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

export default CardLetters;
