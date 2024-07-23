import { Route, Routes } from 'react-router-dom';
import ErrorPage from './error-page';
import DetailedCard from './components/DetailedCard';
import Planets from './Planets';
import ThemeProvider from './components/Context';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Planets />}>
          <Route path="details" element={<DetailedCard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
