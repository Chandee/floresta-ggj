import React, { useRef, useEffect, useState } from "react";
import Player from "./Player";
import Enenmy from "./Enemy";
import Arvore from "./Arvore";

function App(props) {
  const [movePlayer, setMovePlayer] = useState([0, 1]);
  const [moveEnemy, setMoveEnemy] = useState([]);
  const [moveArvore, setMoveArvore] = useState([{ mov: [0, 0], vida: 0 }]);
  const [tempo, setTempo] = useState(20);
  const [test, setTest] = useState(1);
  const [pontos, setPontos] = useState(0);
  const speed = 40;
  const changePlayerPosition = x => {
    setMovePlayer([x, 1]);
  };

  var count;
  //movimentação do inimigo e se chegar ao final some
  const changeEnemyPosition = () => {
    let changeMoveEnemy = [...moveEnemy];
    let findEnemy = changeMoveEnemy.findIndex(enemy => {
      if (
        movePlayer[0] === enemy[0] &&
        (movePlayer[1] > enemy[1] - 1 || movePlayer[1] > enemy[1])
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (findEnemy !== -1) {
      setPontos(pontos => pontos + 1);
      changeMoveEnemy.splice(findEnemy, 1);
    }
    changeMoveEnemy.forEach((position, index) => {
      changeMoveEnemy[index] = [position[0], position[1] - 0.1];
    });

    let removedEnemys = changeMoveEnemy.filter(x => {
      if (x[1] >= 1) {
        return true;
      } else {
        let editArvore = [...moveArvore];
        let findArvore = editArvore.findIndex(arvore => {
          if (arvore.mov[0] === x[0]) {
            return true;
          } else {
            setPontos(pontos => pontos - 3);
            return false;
          }
        });
        if (findArvore !== -1) {
          setPontos(pontos => pontos - 20);
          editArvore.splice(findArvore, 1);
        }
        setMoveArvore(editArvore);
        return false;
      }
    });
    const min = 0;
    const max = 7;
    const rand = min + Math.random() * (max - min);
    if (parseInt(test.toFixed(0), 10) % 10 === 0) {
      removedEnemys.push([parseInt(rand.toFixed(0), 10), 7]);
    }
    return removedEnemys;
  };

  //intervalo da movimentação do inimigo
  useEffect(() => {
    const interval = setTimeout(() => {
      setMoveEnemy(changeEnemyPosition());
    }, speed);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      setMoveEnemy(changeEnemyPosition());
      setTest(test => test + 1);
    }, speed);
    return () => clearInterval(interval);
  }, [moveEnemy]);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (tempo > 0) {
        setTempo(tempo => tempo - 1);
      } else {
        props.setScore(pontos)
        props.changeMenu("gameOver");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [tempo]);

  //movimentação do personagem
  const onKeyDown = e => {
    e = e || window.event;
    switch (e.key) {
      case "a":
        changePlayerPosition(0);
        break;
      case "s":
        changePlayerPosition(1);
        break;
      case "d":
        changePlayerPosition(2);
        break;
      case "f":
        changePlayerPosition(3);
        break;
      case "h":
        changePlayerPosition(4);
        break;
      case "j":
        changePlayerPosition(5);
        break;
      case "k":
        changePlayerPosition(6);
        break;
      case "l":
        changePlayerPosition(7);
        break;
      case "q":
        if (movePlayer[0] === 0) {
          regaPlanta(0);
        }
        break;
      case "w":
        if (movePlayer[0] === 1) {
          regaPlanta(1);
        }
        break;
      case "e":
        if (movePlayer[0] === 2) {
          regaPlanta(2);
        }
        break;
      case "r":
        if (movePlayer[0] === 3) {
          regaPlanta(3);
        }
        break;
      case "y":
        if (movePlayer[0] === 4) {
          regaPlanta(4);
        }
        break;
      case "u":
        if (movePlayer[0] === 5) {
          regaPlanta(5);
        }
        break;
      case "i":
        if (movePlayer[0] === 6) {
          regaPlanta(6);
        }
        break;
      case "o":
        if (movePlayer[0] === 7) {
          regaPlanta(7);
        }
        break;
    }
  };

  const regaPlanta = x => {
    let editArvore = [...moveArvore];
    let verifyArvoreExist = editArvore.findIndex(arvore => {
      if (arvore.mov[0] === x && arvore.mov[1] === 0) {
        return true;
      } else {
        return false;
      }
    });
    if (verifyArvoreExist === -1) {
      editArvore.push({ mov: [x, 0], vida: 0 });
    } else {
      editArvore[verifyArvoreExist] = {
        ...editArvore[verifyArvoreExist],
        vida: editArvore[verifyArvoreExist].vida + 1
      };
      let verifyVidaArvore = editArvore.findIndex(arvore => {
        if (arvore.vida === 9) {
          return true;
        } else {
          return false;
        }
      });
      if (verifyVidaArvore !== -1) {
        setPontos(pontos => pontos + 15);
        editArvore.splice(verifyVidaArvore, 1);
        //adicionar no placar
      }
    }
    console.log("final arvore", editArvore);
    setMoveArvore(editArvore);
  };

  React.useEffect(() => {
    document.addEventListener("keypress", onKeyDown);
    return () => {
      document.removeEventListener("keypress", onKeyDown);
    };
  });

  return (
    <div className="game-area">
      <div style={{ position: "absolute", left: "-65px", margin: "0" }}>
        <div>{tempo}</div>
        <div>Tempo</div>
      </div>

      <div style={{ position: "absolute", right: "-80px", margin: "0" }}>
        <div>{pontos}</div>
        <div>Pontos</div>
      </div>
      {moveArvore.map(tree => {
        return <Arvore mov={tree.mov} vida={tree.vida} />;
      })}
      <Player mov={movePlayer} />
      {moveEnemy.map(move => {
        return <Enenmy mov={move} />;
      })}
    </div>
  );
}

export default App;
