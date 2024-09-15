import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Faq from "./components/Faq";
import Translator from "./components/Translator";

function App() {
  return (
    <>
      {/* <Two name="Upasana" />
      <One name="upasana angris " contact="123456789" >
        <h1>hi there!!!</h1>
      </One>
      <div className="box">hello world</div>;<div>Chandighar 134109</div>
      <img src={home14} alt="my img" />
      <img src={logo} alt="my img" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/translator" element={<Translator />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
