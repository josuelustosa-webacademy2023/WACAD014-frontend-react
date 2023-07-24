import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Flip, ToastContainer } from "react-toastify";

// Componentes
import Routes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <Routes />
      <ToastContainer autoClose={2000} transition={Flip} theme={"colored"} />
    </Router>
  );
};

export default App;
