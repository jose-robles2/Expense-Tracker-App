import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  // state hook, create a var, then define a function to modify it 
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault() // prevent refresh on submit 

    // build the new transaction 
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), 
      // text and amount are already defined above , the new transaction needs a text and an amount 
      text: text, 
      amount: +amount // "int" -> int
    }
    // Pass the new object to our function 
    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>  
    </>
  )
}
