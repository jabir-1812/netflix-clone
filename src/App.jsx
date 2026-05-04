import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import MovieDetails from "./pages/Movie_Details/Movie_details";
import Player from "./pages/Player/Player";
import Watchlist from "./pages/Watchlist/Watchlist";
import { WatchlistContext } from "./context/WatchlistContext";



function App() {
    const [watchlist, setWatchlist]=useState([]);

    function addToWatchlist(movieId){
        console.log("addtoWatchlist working...")
        console.log("movie id:", movieId)
        setWatchlist([...watchlist, movieId]);
    }

    function removeFromWatchlist(movieId){
        console.log("remove from watchlist running.....")
        const newWatchlist=watchlist.filter((id)=>{
            return id!==movieId
        })
        console.log("before removing ...", watchlist)
        setWatchlist([...newWatchlist]);
        console.log("after removing id", newWatchlist)
    }

    useEffect(()=>{
        console.log("watchlist updation", watchlist)
    }, [watchlist])



  return (
    <WatchlistContext.Provider value={{watchlist, addToWatchlist, removeFromWatchlist}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/movie_details/:movieId" element={<MovieDetails/>}/>
                <Route path="/movie_details/:movieId/player" element={<Player/>}/>
                <Route path="/watchlist" element={<Watchlist/>}/>
            </Routes>
        </BrowserRouter>
    </WatchlistContext.Provider>
  );
}



export default App;