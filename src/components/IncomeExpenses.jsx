export default function IncomeExpenses(props){
    const transactions=props.transactions.transactions
    let income=0;
    let expense=0;
    transactions.forEach(element => {
                if(element.amount>0 && element.show)income+=element.amount
                if(element.amount<0 && element.show)expense+=element.amount
    });
    return(
        <div className="income-expenses">
            <div className="income-box">
                <h4>Income</h4>
                <p className="income">+₹{income}</p>
            </div>
            <div className="expense-box">
                <h4>Expense</h4>
                <p className="expense">-₹{expense*-1}</p>
            </div>
        </div>
    )
}