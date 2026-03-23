import { BrowserRouter, Routes, Route } from "react-router-dom";

import GenrePage from "../pages/genre/genre-page";
import DirectorPage from "../pages/director/director-page";
import ProducerPage from "../pages/producer/producer-page";
import TypePage from "../pages/type/type-page";
import MediaPage from "../pages/media/media-page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2 className="text-center mt-5">Dashboard</h2>} />
        <Route path="/genres" element={<GenrePage />} />
        <Route path="/directors" element={<DirectorPage />} />
        <Route path="/producers" element={<ProducerPage />} />
        <Route path="/types" element={<TypePage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;