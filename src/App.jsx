import { Route, Routes } from "react-router-dom";
import { useRef } from "react";

import Welcome from "./pages/welcome";
import MainPage from "./pages/MainPage";
import Gallery from "./pages/Gallery";
import Game from "./pages/Game";
import Letters from "./pages/Letters";
import Ask from "./pages/Ask";

function App() {
  const iframeRef = useRef(null);

  const handlePlay = () => {
    iframeRef.current?.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  };

  const handlePause = () => {
    iframeRef.current?.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  };

  return (
    <section className="font-poppins">
      {/* Player disembunyikan, mulai dari 2:08 */}
      <iframe
        ref={iframeRef}
        title="bg-music"
        width="0"
        height="0"
        style={{ position: "fixed", opacity: 0 }}
        src="https://www.youtube.com/embed/HkAB1Gavw1Y?enablejsapi=1&start=121"
        allow="autoplay"
      />

      {/* Tombol kontrol */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        <button
          onClick={handlePlay}
          className="bg-pink-500 cursor-pointer text-white px-4 py-2 rounded-full"
        >
          ▶ Play Music
        </button>

        <button
          onClick={handlePause}
          className="bg-gray-500 cursor-pointer text-white px-4 py-2 rounded-full"
        >
          ⏸ Pause
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Ask />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/valentine" element={<MainPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/games" element={<Game />} />
        <Route path="/ending" element={<Letters />} />
      </Routes>
    </section>
  );
}

export default App;
