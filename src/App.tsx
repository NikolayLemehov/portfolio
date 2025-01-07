import { HomePage, NotFoundPage } from "@pages";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reactLogo from "@assets/react.svg";
// import { HomePage, NotFoundPage } from "@pages/index.ts";

function App() {
  console.log(reactLogo);
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
