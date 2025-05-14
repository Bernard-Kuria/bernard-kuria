import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

import FrontPage from "./Front_page/Front-page.jsx";

library.add(faXmark);
library.add(faSortUp);
library.add(faSortDown);
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<FrontPage />} />
          <Route path="/" element={<FrontPage />} />
          {/* <Route path="account">
            <Route index element={<Accounts />} />
            <Route path="*" element={<Accounts />} />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
