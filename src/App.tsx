import { Route, Routes } from 'react-router-dom';
import Forms from './components/Forms';
import Form1 from './components/Form1';
import Form2 from './components/Form2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Forms />}>
        <Route path="form1" element={<Form1 />} />
        <Route path="form2" element={<Form2 />} />
      </Route>
    </Routes>
  );
}

export default App;
