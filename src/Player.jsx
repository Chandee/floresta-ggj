import React from 'react'

export default function Player(props){

    const style={
        left: `${props.mov[0]*32}px`,
        top: `${props.mov[1]*32}px`
    }
    return(
        <div className="character" style={style}>
          {/* <img src={require('./images/player.png')} style={{width: '28px', position: 'absolute', margin: '-8px 2px'}}/>  */}
          <div style={{position: 'relative'}}>
          <div className="char-animate" style={{ margin:'8px 0px'}}/>

          </div>

        </div>
    )

}