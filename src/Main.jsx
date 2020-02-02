import React, { useRef, useEffect, useState } from "react";
import App from './App'
import GameOver from "./GameOver";
import Rank from "./Rank";
import Instrucoes from "./Instrucoes";
function Main() {
    const [start, setStart] = useState('menu')
    const [lastScore, setLastScore] = useState(0);

switch(start){
    case 'menu':
        return (
            <div className="menu-area">
              <div style={{ padding: "10px" }}>
                <div style={{ textAlign: "center", marginBottom: '50px' }}>
                  <p>Ajude </p>
                  <p>a Floresta</p>
                </div>
                <div className="meio" style={{ textAlign: "center" }}>
                  <div className="menu-inicar" style={{marginBottom: '15px'}} onClick={()=>setStart('game')}>Iniciar</div>
                  <div className="menu-inicar"  style={{marginBottom: '15px'}} onClick={()=>setStart('instrucoes')}>Instrucoes</div>
                  <div className="menu-inicar" onClick={()=>setStart('ranking')}>Ranking</div>
                </div>
              </div>
            </div>
          );
    case 'game':
        return <App changeMenu={setStart} setScore={setLastScore} />
    case 'ranking':
        return <Rank changeMenu={setStart}/>
    case 'gameOver':
        return <GameOver changeMenu={setStart} score={lastScore}/>
    case 'instrucoes':
        return <Instrucoes changeMenu={setStart}/>
}
}

export default Main;
