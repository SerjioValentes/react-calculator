import React, {useState} from "react";
import Button from "./Button";

function Calculator() {
    // const [name, setName] = useState();

    // const handleChangeName = (name) => {
    //     setName(name);
    // }

    return (
        <div className="wrapperCalculator">
            <div>
                {/*{name}*/}
            </div>
            <div>
                {/*<Button handleChangeName={handleChangeName}/>*/}
                <Button number={1}/>
                <Button number={2}/>
                <Button number={3}/>
                {/*<button onClick={() => handleNumsAdd("1")}>1</button>*/}
                {/*<button onClick={() => handleNumsAdd("2")}>2</button>*/}
                {/*<button onClick={() => handleNumsAdd("3")}>3</button>*/}
                {/*<button onClick={() => handleNumsAdd("4")}>4</button>*/}
                {/*<button onClick={() => handleNumsAdd("5")}>5</button>*/}
                {/*<button onClick={() => handleNumsAdd("6")}>6</button>*/}
                {/*<button onClick={() => handleNumsAdd("7")}>7</button>*/}
                {/*<button onClick={() => handleNumsAdd("8")}>8</button>*/}
                {/*<button onClick={() => handleNumsAdd("9")}>9</button>*/}
                {/*<button onClick={() => handleNumsAdd("0")}>0</button>*/}
                {/*<button onClick={() => handleNumsAdd("+")}>+</button>*/}
                {/*<button onClick={() => handleNumsAdd("-")}>-</button>*/}
                {/*<button onClick={clearNums}>clear</button>*/}
                {/*<button onClick={() => equalNums("=")}>=</button>*/}
            </div>
        </div>
    );
}

export default Calculator;
