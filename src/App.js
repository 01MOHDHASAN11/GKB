import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/table" element={<UserTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
