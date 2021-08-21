import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

function DashboardForm({
  handleSubmit,
  balance,
}: DashboardFormProps): JSX.Element {
  return (
    <Form style={{ padding: "1rem" }} onSubmit={handleSubmit}>
      <Card.Title as="h5" style={{ textAlign: "center", padding: "1rem" }}>
        Add a transaction
      </Card.Title>
      <Form.Group controlId="formGridState" className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control name="category" as="select">
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="foodAndBeverage">Food and Beverage</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          name="amount"
          type="number"
          required
          onChange={(e) =>
            Number(e.target.value) > balance &&
            alert(
              "The amount you entered is currently exceedingly your wallet balance"
            )
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="note">
        <Form.Label>Note</Form.Label>
        <Form.Control name="note" type="text" placeholder="Enter a note" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="note">
        <Form.Label>Date of transaction</Form.Label>
        <Form.Control type="date" name="date" required />
      </Form.Group>
      <Button variant="success" type="submit">
        Save
      </Button>
    </Form>
  );
}

interface DashboardFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  balance: number;
}

export default DashboardForm;
