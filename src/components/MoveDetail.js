import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MoveDetail.module.css';

function MovieDetail({
    id,
    medium_cover_image,
    title,
    year,
    like_count,
    rating,
    runtime,
    genres,
}) {
    return (
        <div className={styles.movie__detail}>
            <img
                src={medium_cover_image}
                alt={title}
                className={styles.movie__img}
            />
            <div>
                <h2 className={styles.movie__title}>{title}</h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>{like_count}</p>
                <p>{rating}</p>
                <p>{runtime}</p>

                <ul className={styles.movie__genres}>
                    {genres.map(g => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

MovieDetail.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    like_count: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
