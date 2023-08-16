import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsDetail from "./components/NewsDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#282828";
      // showAlert(" Dark Mode is Enabled ", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert(" Light Mode is Enabled ", "success ");
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggle={toggle} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                pageSize={8}
                category="general"
                key="general"
                mode={mode}
                apikey={apikey}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                pageSize={8}
                category="entertainment"
                key="entertainment"
                mode={mode}
                apikey={apikey}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                pageSize={8}
                category="business"
                key="business"
                mode={mode}
                apikey={apikey}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                pageSize={8}
                category="health"
                key="health"
                mode={mode}
                apikey={apikey}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                pageSize={8}
                category="science"
                key="science"
                mode={mode}
                apikey={apikey}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                pageSize={8}
                category="sports"
                key="sports"
                mode={mode}
                apikey={apikey}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                pageSize={8}
                category="technology"
                key="technology"
                mode={mode}
                apikey={apikey}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
