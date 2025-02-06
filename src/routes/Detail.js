import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MoveDetail';
function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                'Loading...'
            ) : (
                <MovieDetail
                    id={movie.id}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    year={movie.year}
                    like_count={movie.like_count}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    genres={movie.genres}
                />
            )}
        </div>
    );
}
export default Detail;
