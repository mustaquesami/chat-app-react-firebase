import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './config/firebase'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}
