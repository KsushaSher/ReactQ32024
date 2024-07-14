import { Route, Routes } from 'react-router-dom';
import ErrorPage from './error-page';
import DetailedCard from './components/DetailedCard';
import Planets from './Planets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Planets />}>
        <Route path="/details/:id" element={<DetailedCard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
