import './App.css';
import {Route, Routes} from 'react-router-dom';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage';
import {HomePage} from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
