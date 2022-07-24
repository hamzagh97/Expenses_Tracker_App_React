import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import "../filter/ExpensesFilter";
import ExpensesFilter from "../filter/ExpensesFilter";

function Expenses(props) {
  const [select, setState] = useState("2020");
  const getSelectState = function (selectState) {
    setState(selectState);
    console.log(selectState);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectChange={getSelectState} />
        <ExpenseItem
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />
        <ExpenseItem
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />
        <ExpenseItem
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
