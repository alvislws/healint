import { useEffect, useState } from "react";
import { Button, Card, ListGroup, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { dummyExpensesData } from "../../staticData/dummyExpenses";
import { Categories } from "../../types.ts/apiTypes";
import Table from "../table/table";
import DashboardForm from "./form";

function Dashboard({ loginStatus }: HomeProps): JSX.Element {
  const [expensePayload, setExpensePayload] = useState<Array<Categories>>([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let history = useHistory();

  const totalOutflow = expensePayload.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.itemAmount;
  }, 0);

  const balance = dummyExpensesData.balance - totalOutflow;

  useEffect(() => {
    setExpensePayload(dummyExpensesData.categories);
    !loginStatus && history.push("/");
  }, [history, loginStatus]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    const updatedListOfTransaction = expensePayload && [
      ...expensePayload,
      {
        itemAmount: Number(form.amount.value),
        category: form.category.value,
        note: form.notes.value,
        expenseDate: form.date.value,
        isDeleted: false,
        id: (Number(expensePayload.length) + 1).toString(),
      },
    ];
    setExpensePayload(updatedListOfTransaction);
    setShow(false);
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        margin: "1rem",
      }}
    >
      <Card style={{ width: "50rem" }}>
        <Card.Title as="h5" style={{ textAlign: "center", padding: "1rem" }}>
          Overview
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item
            as="h6"
            style={{
              color: "green",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Inflow:
            <span>+${dummyExpensesData.balance}</span>
          </ListGroup.Item>
          <ListGroup.Item
            as="h6"
            style={{
              color: "red",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Outflow: <span></span>-${totalOutflow}
          </ListGroup.Item>
          <ListGroup.Item
            as="h6"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Balance:{" "}
            <span style={{ color: balance < 0 && "red" }}>${balance}</span>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="success" onClick={handleShow}>
          Add a transaction
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ borderBottom: "none" }} />
          <Modal.Body>
            <DashboardForm
              handleSubmit={handleSubmit}
              balance={balance}
              title="Add a Transaction"
            />
          </Modal.Body>
        </Modal>
      </Card>
      <Table
        expensePayload={expensePayload}
        setExpensePayload={setExpensePayload}
        balance={balance}
      />
    </div>
  );
}

interface HomeProps {
  loginStatus: boolean;
}

export default Dashboard;
