import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/esm/Card";
import InputField from "./inputFields";

function LoginForm({
  validated,
  handleSubmit,
  handleInputChange,
}: LoginFormProps): JSX.Element {
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
  validated: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default LoginForm;
