import React from 'react';
import {Badge} from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {

    const {data:genreData} = useMovieGenreQuery(); // data:genreData 이름 재정의
    const showGenre = (genreIdList) => {
        if (!genreData) return []
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        });

        return genreNameList;
    };
    console.log("ggg", genreData);
  return (
    <div 
    style={{
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"
    }}
    className='movie-card'>
        <div className='overlay'>
            <h1>{movie.title}</h1>
            <div>{movie.adult? '🔞18세':'✅ALL'}</div>
            <div className='genre-text'>
                {showGenre(movie.genre_ids).map((id) => (
                    <Badge bg="danger">
                        {id}
                    </Badge>
                ))}
            </div>
            <div className='overlay-text'>
                <div>⭐{movie.vote_average}</div>
                <div>❤️{movie.popularity}</div>
            </div>
        </div>    
    </div>
  )
}

export default MovieCard;