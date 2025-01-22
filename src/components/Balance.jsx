export default function Balance(props){
    let balance=0;
    
    props.transactionData.forEach((val)=>{
        if(val.show){
        balance+=parseInt(val.amount,10)}
    })
    
    return(
        <div className="balance">
            <h4>
                Your Balance
            </h4>
            <h1>
            ₹{balance}
            </h1>
        </div>
    )
}