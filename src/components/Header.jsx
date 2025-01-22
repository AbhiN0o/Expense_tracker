export default function Header(props){
    function showHistory(){
        props.setShow(props.show)
    }

    return(
        <div className="header">
        <h2>
            Expense Tracker
        </h2>
        <div className="imp-btn">
        <button onClick={props.clearHistory} id="clear-btn">
            Clear History
        </button>
        <button id="history-btn" onClick={showHistory}>{!props.show?"Overall History":"Close History"}</button>
        </div>
        </div>
    )
}