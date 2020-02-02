import React, { useRef, useEffect, useState } from "react";

function Instrucoes(props) {
    const [pag, setPag] =useState(0)
    const pagInstrucao = () =>{
        switch(pag){
            case 0:
                return <p style={{lineHeight: '1.2'}}>Voce deve plantar arvores para o reflorestamento e deve evitar com que os lenhadores chegem na floresta!</p>
            case 1:
                return <div>
                    <p>asdf hjkl - movimentam o personagem</p>
                    <p>qwer yuio - planta e faz crescer a arvore</p>
                </div>

        }
    }
  return (
    <div className="menu-area">
      <div style={{ padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <p>Instrucoes</p>
          {pagInstrucao()}
        </div>
        <div style={{ textAlign: "center", display: 'flex', flexDirection: 'row' }}>
          <div
            className="menu-inicar"
            style={{ margin: '15px 0', flex: 1}}
            onClick={() =>{ props.changeMenu("menu")}}
          >
            Menu
          </div>
         {pag === 0 ? <div
            className="menu-inicar"
            style={{ margin: '15px 0',flex: 1}}
            onClick={() =>{ setPag(1)}}
          >
            Proximo
          </div> : <div
            className="menu-inicar"
            style={{ margin: '15px 0',flex: 1}}
            onClick={() =>{ setPag(0)}}
          >
            voltar
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Instrucoes;
