import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <>
                    <div>
                        <p>
                            <Link to="/">Home</Link>
                        </p>
                        <p>
                            <Link to="/store-test">Redux Test</Link>
                        </p>
                        <p>
                            <Link to="/to-do-list">ToDoList</Link>
                        </p>
                        <p>
                            <Link to="/react-hook">React Hook(useInput)</Link>
                        </p>
                        <p>
                            <Link to="/react-hookTaps">
                                React Hook(useTaps)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useEffect">
                                React Hook(useEffect)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useTitle">
                                React Hook(useTitle)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useClick">
                                React Hook(useClick)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useHover">
                                React Hook(useHover)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useConfirm">
                                React Hook(useConfirm)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-usePreventLeave">
                                React Hook(usePreventLeave)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-usePageLeave">
                                React Hook(usePageLeave)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useFadeIn">
                                React Hook(useFadeIn)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useNetwork">
                                React Hook(useNetwork)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useScroll">
                                React Hook(useScroll)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useFullScreen">
                                React Hook(useFullScreen)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useNotification">
                                React Hook(useNotification)
                            </Link>
                        </p>
                        <p>
                            <Link to="/react-useAxios">
                                React Hook(useAxios)
                            </Link>
                        </p>
                    </div>
                    <div className={styles.movies}>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
export default Home;
