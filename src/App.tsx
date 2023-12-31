import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage, HomePage } from 'pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
