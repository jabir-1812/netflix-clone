import './Home.css';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Netflix_logo from '../../assets/netflix_logo.svg';
import Footer from '../../components/Footer/Footer';
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { WatchlistContext } from '../../context/WatchlistContext';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;



function Banner(){
    const [movies, setMovies]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
                const data = await res.json();

                setMovies(data.results);

                console.log("API data:", data.results);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMovies();
    }, []);

    return (
         <div className='relative'>
                {
                    movies.length > 0 ?  
                    (
                        <>
                        <img src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path})`} alt="" />
                        <div className=' absolute bottom-[15%] left-[8%] w-1/3 flex flex-col gap-5'>
                            <div className='font-bold text-2xl md:text-4xl xl:text-8xl text-white m-5'>{movies[0].original_title}</div>
                            <div className='flex gap-3'>
                                <button 
                                        onClick={()=>navigate(`/movie_details/${movies[0].id}/player`)}
                                        className='flex items-center bg-white font-bold lg:px-7 text-lg lg:py-2 rounded-sm'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="fill-black size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    </span>Play
                                </button>
                                <button 
                                        className='bg-white/50 font-bold text-white lg:px-7 text-lg lg:py-2 rounded-sm flex items-center'
                                        onClick={()=>navigate(`/movie_details/${movies[0].id}`)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                                    More info
                                </button>
                            </div>
                            
                        </div>
                        </>
                    ) 
                    : 
                    (
                        <div className='bg-black/10 w-full h-full flex justify-center items-center'>⚠️ Banner not found</div>
                    )
                }
        </div>
    )
}

function MoviesList(){
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    const navigate=useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            const [popRes, topRes, upRes] = await Promise.all([
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`),
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`),
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
            ]);

            const popData = await popRes.json();
            const topData = await topRes.json();
            const upData = await upRes.json();

            console.log("popData",popData)

            setPopular(popData.results);
            setTopRated(topData.results);
            setUpcoming(upData.results);
        };

        fetchData();
    }, []);

    return(
        <div className='flex flex-col gap-10 bg-black text-white'>
            <div>
                <h1 className='font-bold text-xl my-4 scroll-smooth'>Popular movies</h1>
                <div className="flex flex-row gap-5 overflow-x-auto whitespace-nowrap">
                    {upcoming.map((movie) => {
                        return (
                            <div key={movie.id} className="flex-shrink-0">
                                <img 
                                    className="w-28"
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                                    onClick={() => navigate(`/movie_details/${movie.id}`)}
                                    alt={movie.title}
                                />
                            </div>  
                        )
                    })}
                </div>
            </div>

            <div>
                <h1 className='font-bold text-xl my-4'>Top rated movies</h1>
                <div className='flex flex-row gap-5 overflow-x-auto whitespace-nowrap'>
                    {topRated.map((movie)=>{
                        return (
                            <div key={movie.id} className='flex-shrink-0'>
                                <img 
                                    className='w-28'
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                                    onClick={()=>navigate(`/movie_details/${movie.id}`)}
                                    alt={movie.title} />
                            </div>  
                        )
                    })}
                </div>
            </div>

            <div>
                <h1 className='font-bold text-xl my-4'>Upcoming movies</h1>
                <div className='flex flex-row gap-5 overflow-x-auto whitespace-nowrap'>
                    {upcoming.map((movie)=>{
                        return (
                            <div key={movie.id} className='flex-shrink-0'>
                                <img 
                                    className='w-28'
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                                    onClick={()=>navigate(`/movie_details/${movie.id}`)}
                                    alt={movie.title} />
                            </div>  
                        )
                    })}
                </div>
            </div>
        </div>
        )
}

function Home(){
    return(
        <div>
            <Navbar/>
            <Banner/>
            <MoviesList/>
            <Footer/>
        </div>
    )
}


export default Home;