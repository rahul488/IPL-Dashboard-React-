import "./App.scss";
import TeamPage from "./Pages/TeamPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MatchPage from "./Pages/MatchPage";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GuarderRoute from "./Components/AuthGuard/GuarderRoute";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} />
        <GuarderRoute path="/teams/:teamName" component={TeamPage} exact />
        <GuarderRoute
          path="/teams/:teamName/matches/:year"
          component={MatchPage}
        />
        {/* <Route path="*" component={()=><h1 style={{color:'white',marginTop:'5px'}}>404 not found</h1>} exact /> */}
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
