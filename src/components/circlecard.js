import React from 'react'

export default function Circlecard(props) {
    return (
        <div className="card-body p-1 "   >
        <div style={{height:'100%'}} className=''>
        <img src={props.image} width='100%' alt='' />
        </div>
        </div>
    )
}
