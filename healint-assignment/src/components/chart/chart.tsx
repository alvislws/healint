import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Categories } from "../../types.ts/apiTypes";

function Chart({ expensePayload }: ChartProps): JSX.Element {
  const dateLabel = [];

  const sortedPayload = expensePayload.sort((a, b) => {
    var aa = a.expenseDate.split("-").join(),
      bb = b.expenseDate.split("-").join();
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });

  sortedPayload.map((value) => dateLabel.push(value.expenseDate));

  const transactionAmount = [];
  sortedPayload.map((value) => transactionAmount.push(value.itemAmount));

  const data = {
    labels: dateLabel,
    datasets: [
      {
        label: "Expenses over time",
        data: transactionAmount,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <Card style={{ width: "50rem", padding: "2rem" }}>
      <Line data={data} />
    </Card>
  );
}

interface ChartProps {
  expensePayload: Array<Categories>;
}

export default Chart;
