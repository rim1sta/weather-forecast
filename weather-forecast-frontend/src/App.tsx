import { Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage/MainPage";
import { Header } from "./shared/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
