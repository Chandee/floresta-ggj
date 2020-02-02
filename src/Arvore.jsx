import React from 'react'

export default function Arvore(props){
    const style={
        left: `${props.mov[0]*32}px`,
        top: `${props.mov[1]*32}px`,
    }
    return(
        <div className="arvore" style={style}>
            <div style={{width: '100%', height: '100%'}}>
            {props.vida < 3 ? <img src={require('./images/arvore-pequena.png')} style={{position:'absolute', margin: '-10px 4px'}}/> :
            props.vida < 6 ? <img src={require('./images/arvore-media.png')} style={{position:'absolute', margin: '-20px -10px'}}/> :
            <img src={require('./images/arvore-grande.png')} style={{position:'absolute', margin: '-77px -23px'}}/>
            }
            

            </div>
        </div>
    )

}