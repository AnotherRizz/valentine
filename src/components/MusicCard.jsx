// import { useEffect, useState } from "react";

// const VIDEO_ID = "E7Aif6vPMhU";

// let iframeEl = null; // global singleton
// let isPlaying = true;

// export default function MusicFloatingButton() {
//   const [playing, setPlaying] = useState(isPlaying);

//   useEffect(() => {
//     // kalau iframe sudah pernah dibuat → jangan buat lagi
//     if (iframeEl) return;

//     iframeEl = document.createElement("iframe");
//     iframeEl.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0`;
//     iframeEl.allow = "autoplay";
//     iframeEl.style.position = "fixed";
//     iframeEl.style.width = "0px";
//     iframeEl.style.height = "0px";
//     iframeEl.style.border = "0";
//     iframeEl.style.opacity = "0";

//     document.body.appendChild(iframeEl);
//   }, []);

//   const toggleSound = () => {
//     if (!iframeEl) return;

//     // pause = stop video
//     if (playing) {
//       iframeEl.src = "";
//       isPlaying = false;
//       setPlaying(false);
//     } else {
//       iframeEl.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0`;
//       isPlaying = true;
//       setPlaying(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleSound}
//       className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-pink-500 text-white shadow-xl flex items-center justify-center text-xl"
//     >
//       {playing ? "🔊" : "🔇"}
//     </button>
//   );
// }
