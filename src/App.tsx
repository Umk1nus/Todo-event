import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import {Event} from './pages/Event';

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/event" element={<Event/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
