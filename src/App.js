import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Moives/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Route 구성
// 1. 홈페이지 -> /
// 2. 영화 전체 보여주는 페이지 (서치) -> /movies
// 3. 영화 디테일 페이지 -> /movies/:id
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* index? AppLayout으로 모든 Route를 묶을 거임.
        AppLayout은 path가 / 일 때 보여짐.
        부모의 path랑 똑같이 보여지겠다 하면 index라고 작성해도 됨. */}
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
        {/* <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} /> 
        path가 겹치니까 묶어줄 수도 있음. (위 코드)*/}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
