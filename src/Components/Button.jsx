import { useContext } from "react"
import { CalcContext } from "../Context/CalcContext"

export default function Button({ btn }) {

  const {calc, setCalc} = useContext(CalcContext);

  function handleOnClick() {
    const actionFunc = {
      ".": handleDecimal,
      "+": handleOperation,
      "-": handleOperation,
      "x": handleOperation,
      "/": handleOperation,
      "%": handleOperation,
      "C": clearScreen,
      "=": handleEquals,
      "DEL": handleDelete,
    }

    if (actionFunc[btn]) {
      actionFunc[btn]();
    } else {
      handleNumber();
    }
  }

  const handleNumber = ()=>{
    setCalc({
      ...calc, num: calc.num === 0 ? btn : calc.num + `${btn}`
    })
  }
  
  const handleOperation = () =>{
    setCalc({
      ...calc, sign: btn, res: calc.num, num: 0
    })
  }

  const handleDecimal = ()=>{
    setCalc({
      ...calc, num: calc.num + "."
    })
  }

  const clearScreen = ()=>{
    setCalc({
      ...calc, num: 0, res: 0, sign: ""
    })
  }
  const handleDelete = ()=>{
    setCalc({
      ...calc,
      num: calc.num.length > 1 ? calc.num.slice(0, -1) : 0,
    })
  }

  const handleEquals = () => {
    const performCalc = () => {
      const num1 = parseFloat(calc.res);
      const num2 = parseFloat(calc.num);
  
      const operation = {
        "+": num1 + num2,
        "-": num1 - num2,
        "/": num2 !== 0 ? num1 / num2 : "Error",
        "x": num1 * num2,
        "%": (num1 * num2) / 100,
      };
  
      return operation[calc.sign];
    };
  
    const result = performCalc();
  
    setCalc({
      ...calc,
      num: result !== "Error" ? result.toString() : "Error",
      res: 0,
      sign: "",
    });
  };

  const classNameMap = {
    "=": "equals button",
    ".": "button",
  };
  const defaultClass = isNaN(btn) ? "opts button" : "button";
  const styling = classNameMap[btn] || defaultClass;

  return (
    <button className={styling} onClick={handleOnClick}>{btn}</button>
  );
}
