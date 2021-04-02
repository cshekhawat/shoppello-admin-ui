import SignInPage from "./pages/sign-in/sign-in.compnent.jsx";
import SignUpPage from "./pages/sign-up/sign-up.compnent.jsx";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      {" "}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </>
  );
}

export default App;
