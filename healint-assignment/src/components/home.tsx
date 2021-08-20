import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { dummyExpensesData } from "../staticData/dummyExpenses";

function Home({ loginStatus }: HomeProps): JSX.Element {
  let history = useHistory();
  console.log(dummyExpensesData);
  useEffect(() => {
    !loginStatus && history.push("/");
  });

  return <p>hihihih</p>;
}

interface HomeProps {
  loginStatus: boolean;
}

export default Home;
