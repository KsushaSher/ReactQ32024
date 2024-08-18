import { Route, Routes } from 'react-router-dom';
import Forms from './components/Forms';
import UncontrolledForm from './components/UncontrolledForm';
import { Provider } from 'react-redux';
import store from './components/store';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Forms />}>
          <Route path="uncontrolled" element={<UncontrolledForm />} />
          <Route path="controlled" element={<ControlledForm />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
