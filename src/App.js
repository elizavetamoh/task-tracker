import Login from "./pages/Login";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./pages";

function App() {
  return (
      <Router>
          <Routes>
              <Route path={"/"} element={Index()}/>
              <Route path={"/login"} element={<Login/>}/>
          </Routes>
      </Router>

  );
}

export default App;
