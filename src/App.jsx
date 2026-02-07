import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome";
import MainPage from "./pages/MainPage";
import Gallery from "./pages/Gallery";
import Game from "./pages/Game";
import Letters from "./pages/Letters";
// import MusicFloatingButton from "./components/MusicCard";

function App() {

  return (
    <section className=" font-poppins">
      {/* <MusicFloatingButton/> */}
    
    <Routes cl>
      <Route path="/" element={<Welcome />} />
      <Route path="/valentine" element={<MainPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/games" element={<Game />} />
      <Route path="/ending" element={<Letters />} />
    </Routes>
    </section>
  );
}

export default App;
