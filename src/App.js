import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Index from "./pages";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
          <Routes>
              <Route path={"/"} element={Index()}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/registration"} element={<Registration/>}/>
          </Routes>
      </Router>

  );
}

export default App;
