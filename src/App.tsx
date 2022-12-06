import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColumnPage, MyRecord, TopPage } from "./pages";
import { Footer, Header } from "./components";
import { ScrollBackToTop } from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/my-record" element={<MyRecord />} />
            <Route path="/column" element={<ColumnPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ScrollBackToTop />
    </BrowserRouter>
  );
}

export default App;
