import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";
import { dummyExpensesData } from "../staticData/dummyExpenses";

function Home({ loginStatus }: HomeProps): JSX.Element {
  let history = useHistory();

  const totalOutflow = dummyExpensesData.categories.reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue.itemAmount;
    },
    0
  );

  const balance = dummyExpensesData.balance - totalOutflow;

  useEffect(() => {
    !loginStatus && history.push("/");
  });

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
      <Button variant="success">Add Transaction</Button>
      <p style={{ color: "green" }}>Inflow: ${dummyExpensesData.balance}</p>
      <p style={{ color: "red" }}>Outflow: ${totalOutflow}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
}

interface HomeProps {
  loginStatus: boolean;
}

export default Home;
