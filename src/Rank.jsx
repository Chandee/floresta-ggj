import React, { useRef, useEffect, useState } from "react";

function Rank(props) {
  const [ranking, setRanking] = useState([])
  const [loading, setLoading] = useState(true)
  const callRank = () =>{
      fetch('http://dreamlo.com/lb/5e3715b0fe232612b8e7f316/json/5', {method: 'get'}).then(response=>{
          response.json().then(res=>{
            setLoading(false)
            setRanking(res.dreamlo.leaderboard.entry)
          }).catch(()=>{
              setLoading(false)
          })
      }).catch(()=>{
          setLoading(false)
      })
  }
  useEffect(()=>{
    callRank()
  },[])
  return (
    <div className="menu-area">
      <div style={{ padding: "10px" }}>
        <div style={{ textAlign: "center" }}>
          <p>Ranking</p>
          <p style={{flexDirection: 'row', display: 'flex'}}><div style={{flex: 1}}>Nome</div> <div  style={{flex: 1}}>Score</div> </p>
          {loading && <img src={require('./images/ampulheta.png')}/>}
          {!loading && ranking.map((rank, index)=>{
              return(
                  <div style={{flexDirection: 'row', display: 'flex', position: 'relative'}}>
                      <div style={{ margin: '3px 0'}}>{index + 1}. </div>
                      <div style={{ margin: '3px 0'}}> {rank.name}</div>
                      <div style={{position:'absolute' , right:0, margin: '3px 0'}}> {rank.score}</div>

                </div>
              )
          })}
          {ranking.length === 0 && !loading &&  <div> sem ranking</div>}
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            className="menu-inicar"
            style={{ margin: '15px 0' }}
            onClick={() =>{ props.changeMenu("menu")}}
          >
            Voltar
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rank;
