import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const SuperAdminPanel = () => {
  const [current, setCurrent] = useState("login");

  const toggleForm = (formName) => {
    setCurrent(formName);
  };

  return (
    <div>
      {current === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default SuperAdminPanel;
