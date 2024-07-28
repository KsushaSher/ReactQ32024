import { Route, Routes } from 'react-router-dom';
import ErrorPage from './error-page';
import DetailedCard from './components/DetailedCard';
import Planets from './components/Planets/Planets';
import { useTheme } from './components/Context/hooks';
import { getTestAttrs } from '../tests/getTestAttrs';

function App() {
  const theme = useTheme();

  return (
    <main {...getTestAttrs({ id: 'main' })} className={theme}>
      <Routes>
        <Route path="/" element={<Planets />}>
          <Route path="details" element={<DetailedCard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
