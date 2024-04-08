import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide';
import UpComingMovieSlide from './components/UpComingMovieSlide/UpComingMovieSlide';

// 1. 배너 만들기 => popular 영화를 들고와서 첫 번째 아이템을 보여주자.
// 1-1. popular movie api 호출하기
// 2. popular movie 가져오기
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpComingMovieSlide />
    </div>
  )
}

export default Homepage