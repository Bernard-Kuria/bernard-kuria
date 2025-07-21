// modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

library.add(faXmark);
library.add(faSortUp);
library.add(faSortDown);
library.add(faArrowsRotate);

// components
import FrontPage from "./Front_page/Front-page.jsx";

// styles
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<FrontPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
