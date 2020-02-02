import React from 'react'

export default function Enenmy(props){

    const style={
        left: `${props.mov[0]*32}px`,
        top: `${props.mov[1]*32}px`
    }
    return(
        <div className="enemy" style={style}>
                      <div className="enemy-animate" style={{ margin:'-6px -1px'}}/>

        </div>
    )

}