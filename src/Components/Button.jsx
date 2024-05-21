import { useContext } from "react"
import { CalcContext } from "../Context/CalcContext"
import { IoMdBackspace } from "react-icons/io";

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
      ...calc, num: Math.floor(calc.num/10),
    })
  }

  const handleEquals = ()=>{
    function perfomCalc() {
      let num1 = parseInt(calc.res)
      let num2 = parseInt(calc.num)
      const operation = {
        "+": num1 + num2,
        "-": num1 - num2,
        "/": num1 / num2,
        "x": num1 * num2,
        "%": (num1*num2)/100,
      }
      return operation[calc.sign];
    }
    setCalc({
      ...calc, num: perfomCalc(), res: 0, sign: ""
    })
  }

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
