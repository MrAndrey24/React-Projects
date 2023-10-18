import "../styles/Counter.css";

function Counter({ clicks }){
    return (
        <div className="contador">
            {clicks}
        </div>
    )
}

export default Counter