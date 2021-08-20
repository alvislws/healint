import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";

interface InputFieldProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ handleInputChange }: InputFieldProps): JSX.Element {
  return (
    <>
      <Form.Group
        controlId="validationCustomUsername"
        style={{ margin: "1rem 0" }}
      >
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            name="username"
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            As this is a prototype; please use "test1" as the username
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please enter a username.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="validationCustomPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            name="password"
            type="password"
            aria-describedby="inputGroupPrepend"
            required
            onChange={handleInputChange}
          />
          <Form.Text className="text-muted">
            As this is a prototype; please use "testing123" as the password
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please enter a password.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
}

export default InputField;
