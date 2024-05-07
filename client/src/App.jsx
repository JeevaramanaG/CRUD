import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./create";
import Update from "./update";
import User from "./user";
import San from "./sample";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/" element={<User />} />
        <Route path="/sample" element={<San />} />
      </Routes>
    </Router>
  );
};

export default App;
