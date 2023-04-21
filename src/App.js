import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./Pages/Header";
import { FavouriteBooks } from "./Pages/Favourites";
import { ReadBooks } from "./Pages/Read";
import { AllBooks } from "./Pages/AllBooks";
import { UserProfile } from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/favorites" element={<FavouriteBooks />} />
        <Route path="/read" element={<ReadBooks />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
