import Navbar from "./components/Nabar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      showAlert("success", "Dark-Mode has been enable");
    } else {
      setmode("light");
      showAlert("success", "Light-Mode has been enable");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} showAlert={showAlert}></Alert>

        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/text-form"
            element={
              <TextForm
                heading="Convert Your Text"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>
            }
          />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Convert Your Text"
                mode={mode}
                showAlert={showAlert}
              ></TextForm>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
