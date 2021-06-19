import React from 'react'

 function MegaDeals(props) {
    return (


        <>
              
             <div className="card-body  border border-warning p-1 ">
                  <div style={{height:'100'}} className='p-0 rounded  '>
                    <img src={props.imageSrc} style={{height:'120px',width:"100%", objectFit:"cover" }} alt='' />
                   <div className=''>
                     <p>{props.title}</p>
                      <p>Arives: {props.date}</p>
                      <h6> AED {props.price}</h6>
                   </div>
                 </div>
           </div>
        
        </>
    )
}

function Recomended(props) {
    return (


        <>
              
             <div className="card-body ">
                  <div style={{height:'100%'}} className='p-1 rounded  '>
                    <img src={props.imageSrc} style={{height:'100%',width:"100%"} } alt='' />
                   <div className='p-2'>
                     <p>{props.title}</p>
                     <h6> AED {props.price}</h6>
                      <p className='text-muted'>{props.description}</p>
                      <p>Arives: {props.date}</p>
                   </div>
                 </div>
           </div>
        
        </>
    )
}


function Tranding(props) {
    return (


        <>
              
             <div className="card-body ">
                  <div style={{height:'100%'}} className='p-1 rounded  '>
                    <img src={props.imageSrc} style={{height:'100%',width:"100%"}} alt='' />
                   <div className='p-2'>
                     <p>{props.title}</p>
                     <h6> AED {props.price}</h6>
                      <p className='text-muted'>{props.description}</p>
                      <p>Arives: {props.date}</p>
                   </div>
                 </div>
           </div>
        
        </>
    )
}


export {
    MegaDeals,
    Recomended,
    Tranding

  }

  