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

  const listOfTransaction = [];
  const res: Array<{ expenseDate: string; itemAmount: number }> = Object.values(
    sortedPayload.reduce((r, o) => {
      r[o.expenseDate] = r[o.expenseDate] || {
        expenseDate: o.expenseDate,
        itemAmount: 0,
      };
      r[o.expenseDate].itemAmount += +o.itemAmount;
      return r;
    }, {})
  );

  res.map((value) => listOfTransaction.push(value.itemAmount));
  const data = {
    labels: [...new Set(dateLabel)],
    datasets: [
      {
        label: "Expenses over time",
        data: listOfTransaction,
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
