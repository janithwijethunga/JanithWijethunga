import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Page1 from "./Pages/Page1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Page1" element={<Page1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
