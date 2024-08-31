import { Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const apikey = process.env.REACT_APP_API_KEY;

function App() {
  return;
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="movies">
        <Route index element={<MoviePage />} />
        <Route path=":id" element={<MovieDetailPage />} />
      </Route>
      {/* <Route path="/movies" element={<MoviePage />} />
      <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>;
}

export default App;
