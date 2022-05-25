import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";

export default function Calculator() {
  const [num,setNum] = useState(0)
  const [oldNum,setOldNum] = useState(0)
  const [operator,setOperator] = useState()

  function inputNum(e) {
      var input = e.target.value
      if(num == 0)
        setNum(input)
      else
        setNum(num + input)
  }

  function clear() {
    setNum(0)
  }

  function percentage() {
    setNum(num/100)
  }

  function changeSign() {
    setNum(num*-1)
  }

  function calculate() {
    if(operator == '/') {
      setNum(oldNum/num)
    } else if(operator == '*') {
      setNum(oldNum*num)
    } else if(operator == '-') {
      setNum(oldNum-num)
    } else if(operator == '+') {
      setNum(parseFloat(oldNum)+parseFloat(num))
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  return (
    <Container maxWidth="sm">
      <div className="wrapper">
        <h1>My Calculator</h1>
        <h1 className="result">{num}</h1>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={percentage}>%</button>
        <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
        <button className="grey" onClick={inputNum} value={7}>7</button>
        <button className="grey" onClick={inputNum} value={8}>8</button>
        <button className="grey" onClick={inputNum} value={9}>9</button>
        <button className="orange" onClick={operatorHandler} value={"*"}>X</button>
        <button className="grey" onClick={inputNum} value={4}>4</button>
        <button className="grey" onClick={inputNum} value={5}>5</button>
        <button className="grey" onClick={inputNum} value={6}>6</button>
        <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
        <button className="grey" onClick={inputNum} value={1}>1</button>
        <button className="grey" onClick={inputNum} value={2}>2</button>
        <button className="grey" onClick={inputNum} value={3}>3</button>
        <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
        <button className="grey buttonLarge" onClick={inputNum} value={0}>0</button>
        <button className="grey" onClick={inputNum} value={"."}>.</button>
        <button className="orange" onClick={calculate}>=</button>
      </div>
    </Container>
  );
}
