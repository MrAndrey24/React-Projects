import { useState } from "react";
import Button from "./Button";
import Counter from "./Counter";

function ClickCounter(){
    const [clicks, setClicks] = useState(0)

    const handleButtonClick = () => {
    setClicks(clicks + 1);
    }

    const handleButtonRestart = () => {
    setClicks(0);
    }

    return (
        <div className='contenedor-principal'>
            <Counter clicks={clicks} />
        <Button
        text='Click'
        buttonClick={true}
        actionClick={handleButtonClick} 
        />
        <Button
        text='Restart'
        buttonClick={false}
        actionClick={handleButtonRestart} 
        />
    </div>
    )
}

export default ClickCounter
