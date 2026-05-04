import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;



export default function Player(){
    const { movieId } = useParams();
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
        fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
        )
        .then((res) => res.json())
        .then((data) => {
            const trailer = data.results.find(
            (vid) =>
                vid.type === "Trailer" && vid.site === "YouTube"
            );
            setVideoKey(trailer?.key);
        });
    }, [movieId]);

    if (!videoKey) return <h2>Loading...</h2>;

    return (
        <div className="player">
        <iframe
            width="100%"
            height="800"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="Trailer"
            allowFullScreen
        ></iframe>
        </div>
    );
}