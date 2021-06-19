import React, { useState } from 'react';
import Card from '../../components/card'
import {MegaDeals,
    Recomended,
    Tranding} from './megadeals';
import { FaClock } from "react-icons/fa";
function Product() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg',
            title: 'IPhone 12 pro max',
            price: 4682,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1606407160/N39843845A_1.jpg',
            title: 'Smart Watch',
            price: 46,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg',
            title: 'Play Station 5',
            price: 8 ,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1588074710/N31981756A_1.jpg',
            title: 'Coffee Machine',
            price: 175 ,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1616131605/N39680721A_1.jpg',
            title: 'lOreal Pairs Hyluron ',
            price: 1999,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega"
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1607494839/N30204449A_1.jpg',
            title: 'some by Mi Miracle',
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega"
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega"
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1613666772/N11202742A_1.jpg',
            title: 'Doice & Gabbna the One',
            price: 1999 ,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega",
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605990090/N39717500A_1.jpg',
            title: 'hp Deskjet 2710',
            price: `49.00`,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()

        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999 ,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString()
        },
        
        
    ])


    const [mega, setmega] = useState([
        
           
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega"
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega"
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega"
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999 ,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
            deals:"mega",
        },
       
        
    ])


    const [tranding, settranding] = useState([
        
           
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814023/N39679792A_1.jpg',
            title: 'sony WH-',
            
            price: 1999,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
            
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620157821/N41394780A_1.jpg',
            title: 'Dell',
            
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1612159035/N44080243A_1.jpg',
            title: 'Sony LED',
           
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1600764010/N40684825A_1.jpg',
            title: 'ilife air plus',
         
            price: 1999 ,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
           
        },
       
        
    ])


    const [recomended, setrecomended] = useState([
        
           
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814228/N40582910A_1.jpg',
            title: 'Samsung LED',
          
            price: 1999,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
            
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1610784898/N43748990A_1.jpg',
            title: 'Samsung LED',
         
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            price: 1999,
            type:"mobile",
            date:new Date().toLocaleDateString(),
            
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1622559216/N37078700A_1.jpg',
            title: 'Samsung LED',
            price: 1999 ,
            Catogary:"elecrtonics",
            type:"mobile",
            date:new Date().toLocaleDateString(),
           
        },
       
        
    ])


    

    

    return <>
    <div className="Product-body    ">
         <div className='row p-0 m-0  '>
         <h4 className="d-flex  justify-content-start"> Recommended For you</h4>
            {recomended.map((e, i) => {
                return <div key={i} className='col-md-3 '  >
                    < Recomended imageSrc={e.imageSrc} title={e.title}  price={e.price} date={e.date} />
                </div>
            })}
         </div>
        </div>


     <div className="Product-body ">
         <div className='row p-0 m-0'>
            {product.map((e, i) => {
                return <div key={i} className='col-md-3'>
                    <Card imageSrc={e.imageSrc} title={e.title}  price={e.price} date={e.date} />
                </div>
            })}
         </div>
        </div>


       
        <div className="Product-body   " style={{backgroundColor:"#FAFE74"}}>
         <div className='row p-3 m-0  '>
         <h4 className="d-flex  justify-content-start"> Megadeals  &nbsp; <FaClock className="m-1"/> &nbsp; 24 hrs only</h4>
            {mega.map((e, i) => {
                return <div key={i} className='col-md-3 '  >
                    <MegaDeals imageSrc={e.imageSrc} title={e.title}  price={e.price} date={e.date} />
                </div>
            })}
         </div>
        </div>



        <div className="Product-body   ">
         <div className='row p-0 m-0  '>
         <h4 className="d-flex  justify-content-start"> Tranding deals  </h4>
            {tranding.map((e, i) => {
                return <div key={i} className='col-md-3 '  >
                    <Tranding imageSrc={e.imageSrc} title={e.title}  price={e.price} date={e.date} />
                </div>
            })}
         </div>
        </div>
        
        
    </>
}
export default Product