function Card(props){
    return <div className="card-body">
        <div style={{height:'100%'}} className='p-1 rounded shadow '>
        <img src={props.imageSrc} style={{height:'100%',width:"100%"}} alt='' />
        <div className='p-3'>
            <p>{props.title}</p>
            <h6> AED {props.price}</h6>
            <p className='text-muted'>{props.description}</p>
            <p>Arives: {props.date}</p>
            
        </div>
    </div></div>
    
    
}
export default Card