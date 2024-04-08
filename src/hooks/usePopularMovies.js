import {useQuery} from '@tanstack/react-query';
import api from '../utils/api';

// Banner에 들어갈 popular movie
// 1-1. popular movie api 호출하기

const fetchPopularMovies = () => {
    return api.get(`/movie/popular`);
};
export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchPopularMovies,
        select:(result) => result.data,
    });
};

const TopRatedMovies = () => {
    return api.get(`/movie/top_rated`);
};
export const useTopRatedMoviesQuery = () => {
    return useQuery({
        queryKey: ['topMovie'],
        queryFn: TopRatedMovies,
        select:(result) => result.data,
    });
};

const UpComingMovies = () => {
    return api.get(`/movie/upcoming`);
};
export const UpComingMoviesQuery = () => {
    return useQuery({
        queryKey: ['upComingMovie'],
        queryFn: UpComingMovies,
        select:(result) => result.data,
    });
};

// 이렇게 hook을 만드는 이유? -> 다른 곳에서 그대로 가져다 쓰기 쉽기 때문.
// component를 비즈니스 로직과 UI를 분리시키는 게 좋음.