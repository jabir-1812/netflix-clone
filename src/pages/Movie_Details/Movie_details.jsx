import { useEffect, useState, useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


export default function MovieDetails(){

    const {movieId}=useParams();
    const [movie, setMovie]=useState(null);
    const [similar, setSimilar] = useState([]);

    const navigate=useNavigate();


    //context
    const {watchlist, addToWatchlist, removeFromWatchlist}=useContext(WatchlistContext)
    const isInWatchlist = watchlist.includes(Number(movieId));
    
    


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then((res)=>{ return res.json()})
            .then((data)=> setMovie(data));

        // fetch similar movies
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setSimilar(data.results));
        
    },[movieId])


    if(!movie){
        return(
            <div>
                <h1 className="">Loading movie details page....</h1>
            </div>
        )
    }

    return(
        <>
            <Navbar/>
            <div className="bg-black">
                <div className="relative">
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                    <div className='absolute bottom-52 left-20 w-1/3 flex flex-col gap-10'>
                        <div className='font-bold text-8xl text-white'>{movie.original_title}</div>
                        <div className='flex gap-3'>
                            <button 
                                    onClick={()=>navigate(`/movie_details/${movieId}/player`)}
                                    className='flex items-center bg-white font-bold px-7 text-lg py-2 rounded-sm'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="fill-black size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </span>Play
                            </button>
                            {
                                isInWatchlist ? 
                                    (
                                        <button 
                                                onClick={()=>removeFromWatchlist(Number(movieId))}
                                                className="text-white rounded-sm py-2 px-5 bg-black border border-white font-bold">
                                            Remove from Watchlist
                                        </button>
                                    )
                                    :
                                    (
                                        <button
                                                onClick={()=>addToWatchlist(Number(movieId))}
                                                className='bg-white font-bold px-5 py-2 rounded-sm'>
                                            Add to Watchlist
                                        </button>
                                    )
                            }
                            
                        </div>
                        
                    </div>
                </div>

                <div className="font-bold p-3 text-white underline">Movie Overview</div>
                <div className="flex text-white py-5 px-5">
                    <div className="flex-1">
                        {movie.overview}
                    </div>
                    <div className="flex-1"></div>
                </div>

                <div className="p-4">
                    <h1 className="font-bold text-white text-xl my-4 px-4">Similar Movies</h1>
                    <div className="flex gap-5 overflow-x-auto whitespace-nowrap">
                        {similar.map((movie)=>{
                                return (
                                    <div key={movie.id} className="flex-shrink-0">
                                        <img 
                                                className="w-28"
                                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                                                onClick={()=>navigate(`/movie_details/${movie.id}`)}
                                                alt={movie.title} />
                                    </div>  
                                )
                            })}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}