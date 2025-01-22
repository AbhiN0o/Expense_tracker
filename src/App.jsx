import { useEffect, useState } from 'react'
import Header from './components/header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'



function App() {
  const [initialTransactions,setInitialTransaction]=useState(JSON.parse(localStorage.getItem('transactionData'))||{
    transactions:[
        
    ]
})
localStorage.setItem('transactionData',JSON.stringify(initialTransactions));

  console.log(initialTransactions)
  const transactionData=initialTransactions.transactions;


  function deleteTransaction(id){
        setInitialTransaction(prevTransactions=>({
          transactions:
              prevTransactions.transactions.map((val)=>{
                return val.id===id?{...val,show:false}:val
              })
            }))
  }

  function clearHistory(){
    setInitialTransaction({
      transactions:[
          
      ]
  })
  }



  // useEffect(()=>{
  //   alert("removed")
  // },[])


  

  let req=initialTransactions.transactions.length-4;
  
  const transactions=initialTransactions.transactions.map((val,index)=>{
    console.log(initialTransactions.transactions.length)
    if(index>=req){
    return val.show && <TransactionList value={val.amount} delete={()=>{
      deleteTransaction(val.id)}} text={val.text} />
    }
})

const totalTransaction=initialTransactions.transactions.map((val,index)=>{
  return <TransactionList value={val.amount} delete={()=>{
    deleteTransaction(val.id)}} text={val.text} />
  })

  let [show,setShow]=useState(false)

  return (
    <div>
    <Header clearHistory={clearHistory} show={show} setShow={(val)=>{setShow(!val)}}/>
    <Balance transactionData={transactionData} />
    <IncomeExpenses transactions={initialTransactions}/> 
    <h3>History</h3>
        <ul className="list">
            {transactions}
        </ul>
    <AddTransaction transactionData={transactionData} Hi={(value) => { setInitialTransaction(value)}}/>
    {show && <><h3>Total History</h3>
        <ul className="list">
            {totalTransaction}
        </ul></>}
    </div>
  )
}

export default App
