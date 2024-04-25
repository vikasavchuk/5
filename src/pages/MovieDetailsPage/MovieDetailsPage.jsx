import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import serMovieDetails from "../../services/serMovieDetails";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorName, setErrorName] = useState("");
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getFilmById = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await serMovieDetails(movieId);
        setFilm(data);
      } catch (error) {
        setIsError(true);
        setErrorName(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFilmById();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error errorName={errorName} />}
      {film !== null && (
        <div>
          <Link to={backLinkRef.current}>Go Back</Link>
          <h1>{film.title}</h1>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt=""
            />
            <div>
              <p>{film.original_title}</p>
              <p>
                <b>Overview</b>
              </p>
              <p>{film.overview}</p>
              <p>
                <b>Popularity:</b> {film.popularity}
                <b>Release date:</b> {film.release_date}
              </p>
            </div>
          </div>
          <div>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;