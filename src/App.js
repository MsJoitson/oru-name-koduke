import logo from "./logo.svg";
import "./App.css";
import Home from './pages/Home'
import Favourites from "./pages/Favourites";
import {Link, Route, Routes} from "react-router-dom"
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <div className="h1">Contacts</div>
      <Navigation />
      <ul>
        <Link to="/">Home</Link>
        <Link to="favorites">Favourites</Link>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </div>

      {/* <Home />
      <Favourites /> */}
    </div>
  );
}

export default App;
