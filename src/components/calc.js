import React, {useState} from "react";
import Button from "./Button";
let counter = 0;

function Calculator() {

    const [namberUn, setNamberUn] = useState("");

    const handleNumsAdd = (num) => {
        if (num === '+' || num === '-' || num === '*' || num === '/') {
            counter += 1;
        }

        setNamberUn(namberUn + num);

        if (counter === 2) {
            equalNums();
        }
    }

    const equalNums = () => {
        let result = 0;
        if (typeof namberUn === "number") {
            return console.log("Please give me more numbers =)")
        }

        const array = [...namberUn];

        array.filter((nums) => {

            if (nums === "+") {
                plusNums();
            }
            if (nums === "-") {
                minusNums()
            }
        });

        function minusNums() {
            let total = namberUn.split("-");
            total.map((num) => {
                num = num - 0;
                if (num === "NaN") {
                    return console.log("NaN")
                }
                return result = num - result;
            })
            setNamberUn(-result);
            counter = 0;
        }

        function plusNums() {
            let result = 0;
            let total = namberUn.split("+");

            for (let i = 0; i < total.length; i++) {
                if (isNaN(result)) {
                    console.log("Nan!!!");
                }
                result += total[i]-0;
            }

            setNamberUn(result);
            counter = 0;
        }
    }

    function clearNums() {
        setNamberUn("")
        counter = 0;
    }

    return (
        <div className="wrapperCalculator">
            <div>
                {namberUn}
            </div>
            <div>
                <button onClick={() => handleNumsAdd("1")}>1</button>
                <button onClick={() => handleNumsAdd("2")}>2</button>
                <button onClick={() => handleNumsAdd("3")}>3</button>
                <button onClick={() => handleNumsAdd("4")}>4</button>
                <button onClick={() => handleNumsAdd("5")}>5</button>
                <button onClick={() => handleNumsAdd("6")}>6</button>
                <button onClick={() => handleNumsAdd("7")}>7</button>
                <button onClick={() => handleNumsAdd("8")}>8</button>
                <button onClick={() => handleNumsAdd("9")}>9</button>
                <button onClick={() => handleNumsAdd("0")}>0</button>
                <button onClick={() => handleNumsAdd("+")}>+</button>
                <button onClick={() => handleNumsAdd("-")}>-</button>
                <button onClick={clearNums}>clear</button>
                <button onClick={() => equalNums("=")}>=</button>
            </div>
        </div>
    );
}

export default Calculator;
