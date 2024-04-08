import React from 'react';
import { useTopPopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import 'react-multi-carousel/lib/styles.css';

const TopPopularMovieSlide = () => {

    const {data, isLoading, isError, error} = useTopPopularMoviesQuery();
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>;
    }

  return (
    <div>
       <MovieSlider 
        title='TopPopular Movies' 
        movies={data.results} 
        responsive={responsive}
       />
    </div>
  )
}

export default TopPopularMovieSlide