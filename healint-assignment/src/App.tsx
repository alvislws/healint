import { useState } from "react";
import "./App.css";
import LoginForm from "./components/login/loginForm";
import NavigationBar from "./components/navBar/navigationBar";
import { user } from "./staticData/userLogin";

function App(): JSX.Element {
  const [validated, setValidated] = useState<boolean>(false);
  const [userCredentials, setUserCredentials] = useState<UserCredential>({});
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const form = e.currentTarget;
    const validateLoginCredential =
      userCredentials.username === user.username &&
      userCredentials.password === user.password;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (validateLoginCredential) {
      setLoginStatus(true);
    }
    if (!validateLoginCredential) {
      e.preventDefault();
      e.stopPropagation();
      alert("Please use the credentials stated below the input field");
    }
    setValidated(true);
  };

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
      <LoginForm
        validated={validated}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

interface UserCredential {
  [key: string]: string;
}

export default App;
