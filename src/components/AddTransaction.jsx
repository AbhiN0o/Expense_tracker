import { useRef, useState } from "react"
import uniqid from'uniqid'
export default function AddTransaction(props){
    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)
    const focusText=useRef(null)

    const handleAddTransaction = () => {

        props.Hi({
            transactions:[
                ...props.transactionData,{id:uniqid(),text:text,amount:parseInt(amount,10),show:true}
            ]
        });
        setText('')
        setAmount(0)
        focusText.current.focus()
        
    };
    return(
        <>
        <h3>Add New Transaction</h3>
        <form id="form">
            <div>
            <label htmlFor="text">Text</label>
            <input name="" type="text" value={text} onChange={(e)=>{setText(e.currentTarget.value)}} ref={focusText} placeholder="Enter text..." id="text"></input>
            </div>
            <div>
            <label htmlFor="amount">Amount<br></br>(negative-expense,positive-income)</label>
            <input id="amount" name="" type="number" value={amount} onChange={(e)=>{setAmount(e.currentTarget.value)}} placeholder="Enter Amount..."></input>
            </div>
            <button className="btn" onClick={(event)=>{
                event.preventDefault();
                handleAddTransaction()}}>Add Transaction</button>
        </form>
        </>
    )
}