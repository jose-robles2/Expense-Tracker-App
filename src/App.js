import React from "react";
import { Header } from "./components/Header";
import "./App.css"
import {Balance} from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider> {/*replaces our div, serves as a wrapper, it contains children comps and provides to them a global state*/} 
      <Header />       
      <div className="container">
        <Balance /> 
        <IncomeExpenses />
        <TransactionList /> 
        <AddTransaction />

      </div>
    </GlobalProvider>
  );
}

export default App;
