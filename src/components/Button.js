import React, { useState } from "react";

 const Button = ({number}) => {
    const [namberUn, setNamberUn] = useState("");
    let counter = 0;
    //
    const handleNumsAdd = (num) => {
        if (num === '+' || num === '-' || num === '*' || num === '/') {
            counter += 1;
        }
        //
            setNamberUn(namberUn + num);

            if (counter === 2) {
                equalNums();
            }
        }
        //
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
            <div>
                <button onClick={() => handleNumsAdd("1")}>{number}</button>

            </div>
        )
    }
 export default Button;
