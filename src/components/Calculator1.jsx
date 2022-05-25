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

  function botoes() {
    const botoes = [
      {value:'AC', onclick:clear},
      {'value':'+/-', 'onclick':'changeSign'},
      {'value':'%', 'onclick':'percentage'},
      {'value':'/', 'onclick':'operatorHandler', 'class':'orange'},
      {'value':'7', onclick:inputNum, 'class':'grey'},
      {'value':'8', 'onclick':'inputNum', 'class':'grey'},
      {'value':'9', 'onclick':'inputNum', 'class':'grey'},
      {'value':'*', 'onclick':'operatorHandler', 'class':'orange'},
      {'value':'4', 'onclick':'inputNum', 'class':'grey'},
      {'value':'5', 'onclick':'inputNum', 'class':'grey'},
      {'value':'6', 'onclick':'inputNum', 'class':'grey'},
      {'value':'-', 'onclick':'operatorHandler', 'class':'orange'},
      {'value':'1', 'onclick':'inputNum', 'class':'grey'},
      {'value':'2', 'onclick':'inputNum', 'class':'grey'},
      {'value':'3', 'onclick':'inputNum', 'class':'grey'},
      {'value':'+', 'onclick':'operatorHandler', 'class':'orange'},
      {'value':'0', 'onclick':'inputNum', 'class':'grey buttonLarge'},
      {'value':'.', 'onclick':'inputNum', 'class':'grey'},
      {'value':'=', 'onclick':'calculate', 'class':'orange'}];

    return botoes.map((botao) => <button className={botao.class} onClick={botao.onclick} value={botao.value}>{botao.value}</button>);

  }

  return (
    <Container maxWidth="sm">
      <div className="wrapper">
        <h1>My Calculator</h1>
        <h1 className="result">{num}</h1>
        {botoes()}
      </div>
    </Container>
  );
}