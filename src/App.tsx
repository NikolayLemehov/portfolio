import { Header } from "@components";
import { HomePage, NotFoundPage } from "@pages";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-grow flex-col p-6">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <div className="mt-auto">footer</div>
    </div>
  );
}

export default App;
