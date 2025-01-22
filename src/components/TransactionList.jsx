import clsx from "clsx"

export default function TransactionList(props){
    const className=clsx({
        'delete-button':true,'deduct':props.value<0,'increase':props.value>0
    })
    
    return(
        <>
        <li>
            <span>{props.text}</span> <div className="fix"><span className="amount" >₹{props.value}</span><button onClick={props.delete} className={className}>X</button></div>
        </li>
        </>
    )
}