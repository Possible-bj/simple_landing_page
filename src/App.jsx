import React from "react";
//rotas
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routers />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
