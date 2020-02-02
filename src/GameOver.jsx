import React, { useRef, useEffect, useState } from "react";

function GameOver(props) {
  const [value, setValue] = useState('')
  const callRank = () =>{
      fetch('http://dreamlo.com/lb/W4plcXvGfUq8gabf5-QllAz--5ZT8dkUmgrxA7qQHiCA/add/' + value +'/' + props.score, {method: 'get'})
  }

  return (
    <div className="menu-area">
      <div style={{ padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <p>O tempo acabou </p>
          {props.score < 0 ? <div style={{lineHeight: '1.1'}}> Nao e tao facil quanto parece ajudar na recuparacao da floresta, ela ainda precisa da sua ajuda </div>: <div style={{lineHeight: '1.2'}}>Parabens, voce conseguiu ajudar a floresta a se recuperar, continue assim</div>}
          {console.log("meus props", props)}
          <div style={{margin: '10px 0'}}>{props.score}</div>
        </div>
       {props.score > 0 && <div>
            <input value={value} onChange={e =>{setValue(e.target.value)}} maxLength="4" placeholder="Insira seu nome" className="meu-input"></input>
        </div>}
        <div style={{ textAlign: "center" }}>
          <div
            className="menu-inicar"
            style={{ marginBottom: "15px" }}
            onClick={() =>{ callRank(); props.changeMenu("menu")}}
          >
            Jogar novamente
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
