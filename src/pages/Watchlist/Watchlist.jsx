import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WatchlistContext } from "../../context/WatchlistContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;



export default function Watchlist(){
    const {watchlist, removeFromWatchlist} = useContext(WatchlistContext)
    const [movies, setMovies] = useState([]);

    const navigate=useNavigate();

    useEffect(() => {
    const fetchMovies = async () => {
        const responses = await Promise.all(
            watchlist.map((id) =>
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
                    .then((res) => res.json())
            )
        );

        setMovies(responses);
    };

    fetchMovies();
    }, [watchlist]);
    return(
        <>
        <Navbar/>
        <h1 className="bg-black mt-24 text-3xl text-white p-5 font-bold">watchlist page</h1>
        <div className="bg-black grid grid-cols-7 gap-2 p-8">
            {movies.map((movie) => (
                <div 
                    className="flex flex-col gap-2 items-center"
                    key={movie.id}>
                    <img
                        className="w-36"
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        onClick={()=>navigate(`/movie_details/${movie.id}`)}
                    />

                    <button 
                            className="bg-white px-5 py-2 text-sm rounded-sm text-black"
                            onClick={()=>navigate(`/movie_details/${movie.id}/player`)}>
                        Play
                    </button>
                    <button className="bg-red-600 px-5 py-2 text-sm rounded-sm text-white" onClick={()=>removeFromWatchlist(movie.id)}>Remove from Watchlist</button>
                </div>
                ))}
        </div>
        <Footer/>
        </>
    )
}