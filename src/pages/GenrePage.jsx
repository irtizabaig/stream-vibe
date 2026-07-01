import { ChevronRight } from "lucide-react";
import Nav from "../components/Layout/Nav";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesByGenre, getShowsByGenre } from "../Services/movieService";
import { IMAGE_BASE_URL } from "../utils/constants";
import Footer from "../components/Layout/Footer";

const GenrePage = () => {
  const [searchParams] = useSearchParams();

  const genreId = searchParams.get("genre");
  const type = searchParams.get("type");
  const mode = searchParams.get("mode");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (type === "movie") {
          const movieData = await getMoviesByGenre(genreId);
          setMovies(movieData || []);
          setShows([]);
        }

        if (type === "show") {
          const showData = await getShowsByGenre(genreId);
          setShows(showData || []);
          setMovies([]);
        }
      } catch (err) {
        console.log(err);
        setError("Something Went Wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [genreId, type]);

  // ---------------- helpers (OPTIMIZATION) ----------------
  const data = type === "movie" ? movies : shows;
  const list = mode === "top10" ? data?.slice(0, 10) : data;

  const getTitle = (item) =>
    item.title || item.name || "No Title";

  const getDetailRoute = (itemId) =>
    type === "movie"
      ? `/movie-detail/${itemId}`
      : `/show-detail/${itemId}`;

  // ---------------- CARD COMPONENT ----------------
  const Card = ({ item }) => (
    <div
      onClick={() => navigate(getDetailRoute(item.id))}
      className="border border-[#262626] rounded-[10px] bg-[#1a1a1a] lg:p-5 p-3 lg:min-h-[280px] lg:w-[250px] h-70 w-45 lg:w-70 flex flex-col justify-between overflow-hidden hover:border-[rgba(229,0,0,0.72)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      <div className="mb-5 h-[180px] relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-[30%] after:to-[#1a1a1a] after:pointer-events-none">
        <div className="w-full h-full rounded-[5px] overflow-hidden bg-[#242424]">
          <img
            src={`${IMAGE_BASE_URL}${item.poster_path}`}
            loading="lazy"
            onError={(e) => (e.target.style.display = "none")}
            className="w-full h-full object-cover block"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-[10px] text-white text-[16px] font-semibold">
        <span>{getTitle(item)}</span>
        <ChevronRight size={16} />
      </div>
    </div>
  );

  // ---------------- EARLY RETURNS ----------------
  if (loading)
    return (
      <h1 className="text-3xl text-white text-center mt-10">
        Loading...
      </h1>
    );

  if (error)
    return (
      <h1 className="text-3xl text-white text-center mt-10">
        {error}
      </h1>
    );

  // ---------------- MAIN UI ----------------
  return (
    <div className="w-full min-h-screen justify-center bg-black">
      <Nav />

      <div className="w-full min-h-[90vh] flex items-start lg:pt-30 pt-20 pb-10 justify-center">
        <div className="w-[1300px] flex flex-wrap lg:gap-5 gap-2 min-h-screen items-start lg:justify-start justify-center">
          {list?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GenrePage;