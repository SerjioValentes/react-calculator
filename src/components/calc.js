import React, {useState} from "react";
import "../styles/app.css";

// Для того чтобы отслеживать нажатия знаков вычисления и реагировать на каждый второй знак
let counter = 0;

function Calculator() {

    const [namberUn, setNamberUn] = useState("");

    const handleNumsAdd = (num) => {
        if (namberUn.length > 30) {
            return console.log("Your input number is too long!");
        }

        if (num === '+' || num === '-' || num === '*' || num === '/') {
            counter += 1;
            console.log("counter: " + counter)
        }

        setNamberUn(namberUn + num);

        if (counter === 2) {
            equalNums();
        }
    }

    //Срабатывает при нажатии на равно - делает проверку на знак в строке и отправляет вычисление в ту функцию, которая подходит под этот знак
    const equalNums = () => {

        if (typeof namberUn === "number") {
            return console.log("Please give me more numbers =)");
        }

        const array = [...namberUn];

        array.filter((nums) => {

            if (nums === "+") {
                plusNums();
            }

            if (nums === "-") {
                minusNums();
            }

            if (nums === "*") {
                multiplication();
            }

            if (nums === "/") {
                division();
            }

        });

        function multiplication() {
            let result = 1;
            let total = namberUn.split("*");

            total.map((num) => {
                num = num - 0;
                if (num === "NaN") {
                    return console.log("NaN")
                }
                return result = num * result;
            })

            setNamberUn(result);
            counter = 0;
        }

        function division() {
            let total = namberUn.split("/");
            let result = (total[0] - 0) / (total[1] - 0)
            if (!isFinite(result)) {
                counter = 0;
                return setNamberUn(0);
            }
            counter = 0;
            setNamberUn(result);
        }


        function minusNums() {
            counter = 0;
            let array = [...namberUn];

            let arr = array.slice(1).join("").split("-");
            let result = (arr[0] - 0) + (arr[1] - 0);

            if (isNaN(result)) {
                return console.log("isNaN");
            }
            setNamberUn(-result);
        }


        function plusNums() {
            let total = namberUn.split("+");

            let result = (total[0] - 0) + (total[1] - 0);
            if (isNaN(result)) {
                result = (total[1] - 0) + (total[2] - 0);
            }
            setNamberUn(result);
            counter = 0;
        }
    }


    function clearNums() {
        setNamberUn("");
        counter = 0;
    }

    function backspace() {
        if (typeof namberUn === "number") {
            var string = namberUn.toString();
            return setNamberUn(string);
        }
        let array = namberUn.split("");
        array.pop();
        setNamberUn(array.join(""));
    }

    return (
        <div className="calc-wrapper">
            <div>
                <div className="input-col">
                    <div className="input-col__input">
                        {namberUn}
                    </div>
                    <button className="backspace-button" onClick={backspace}>Backspace</button>
                </div>
                <div className="nums-wrapper">
                    <div className="nums-col">
                        <button className="nums-col__button" onClick={() => handleNumsAdd("1")}>1</button>
                        <button className="nums-col__button" onClick={() => handleNumsAdd("2")}>2</button>
                        <button className="nums-col__button" onClick={() => handleNumsAdd("3")}>3</button>
                    </div>
                    <div className="nums-col">
                        <button className="nums-col__button" onClick={() => handleNumsAdd("4")}>4</button>
                        <button className="nums-col__button" onClick={() => handleNumsAdd("5")}>5</button>
                        <button className="nums-col__button" onClick={() => handleNumsAdd("6")}>6</button>
                    </div>
                    <div className="nums-col">
                        <button className="nums-col__button" onClick={() => handleNumsAdd("7")}>7</button>
                        <button className="nums-col__button" onClick={() => handleNumsAdd("8")}>8</button>
                        <button className="nums-col__button" onClick={() => handleNumsAdd("9")}>9</button>
                    </div>
                    <div className="nums-col">
                        <button className="nums-col__button" onClick={() => handleNumsAdd("0")}>0</button>
                        <button className="nums-col__button spec-button" onClick={() => handleNumsAdd("+")}>+</button>
                        <button className="nums-col__button spec-button" onClick={() => handleNumsAdd("-")}>-</button>
                    </div>
                    <div className="nums-col">
                        <button className="nums-col__button spec-button" onClick={() => handleNumsAdd("*")}>*</button>
                        <button className="nums-col__button spec-button" onClick={() => handleNumsAdd("/")}>/</button>
                        <button className="nums-col__button spec-button" onClick={clearNums}>clear</button>
                    </div>
                    <div className="nums-col">
                        <button className="nums-col__last-button" onClick={() => equalNums("=")}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator;
