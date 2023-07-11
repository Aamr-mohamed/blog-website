import LoginForm from "./components/login";
import signupForm from "./components/signup";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div
      className="page"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/technology-background_23-2148119855.jpg?w=1380&t=st=1688998470~exp=1688999070~hmac=957eb0c4621e85c9ae1f4b85781a4407d450d2f59eb8badfdce7338ac38423ae")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/login" component={LoginForm} />
          <Route path="/signup" component={signupForm} />
        </Routes>
      </Router>
      <BrowserRouter>
        <signupForm />
        <LoginForm />
      </BrowserRouter>
    </div>
  );
}
export default App;
