import { Header, ThemeSwitcher } from "@components";
import { HomePage, NotFoundPage } from "@pages";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-grow flex-col">
        <Header />
        <ThemeSwitcher />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <div className="container mx-auto mt-auto py-4 text-center">Developed by Mykola Liemiekhov</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
