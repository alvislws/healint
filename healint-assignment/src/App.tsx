import { useState } from "react";
import "./App.css";
import LoginForm from "./components/login/loginForm";
import NavigationBar from "./components/navBar/navigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";

function App(): JSX.Element {
  const [userCredentials, setUserCredentials] = useState<UserCredential>({});
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    return;
  };

  return (
    <>
      <NavigationBar
        name={userCredentials.username}
        loginStatus={loginStatus}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginForm
              userCredentials={userCredentials}
              setLoginStatus={setLoginStatus}
              handleInputChange={handleInputChange}
            />
          </Route>
          <Route path="/home">
            <Home loginStatus={loginStatus} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export interface UserCredential {
  [key: string]: string;
}

export default App;
