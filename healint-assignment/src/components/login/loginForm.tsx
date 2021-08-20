import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/esm/Card";
import InputField from "./inputFields";
import { user } from "../../staticData/userLogin";
import { useHistory } from "react-router-dom";
import { UserCredential } from "../../App";
import { useState } from "react";

function LoginForm({
  handleInputChange,
  userCredentials,
  setLoginStatus,
}: LoginFormProps): JSX.Element {
  const [validated, setValidated] = useState<boolean>(false);

  let history = useHistory();

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
      e.preventDefault();
      e.stopPropagation();
      setLoginStatus(true);
      history.push("/home");
    }
    if (!validateLoginCredential) {
      e.preventDefault();
      e.stopPropagation();
      alert("Please use the credentials stated below the input field");
    }
    setValidated(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <Card border="dark" style={{ width: "30rem" }}>
        <Card.Body style={{ padding: "4rem" }}>
          <Card.Title as="h2">Login</Card.Title>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <InputField handleInputChange={handleInputChange} />
            <Button variant="dark" type="submit" style={{ margin: "1rem 0" }}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

interface LoginFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userCredentials: UserCredential;
  setLoginStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export default LoginForm;
