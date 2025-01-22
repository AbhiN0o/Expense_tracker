export default function OverallHistory(){
    return(
        <li>
            <span>{props.text}</span> <div className="fix"><span className="amount" >₹{props.value}</span><button onClick={props.delete} className={className}>X</button></div>
        </li>
    )
}