
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Routes/Navbar"
import Routes from "./Routes/Routes"
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
    </>

  );
}

export default App;
