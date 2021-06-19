import React, { useState } from 'react'
import Header from '../layout/header'
import Slideshow from "../layout/home/slider";
import Product from "../layout/home/product";
import CircleCatogary from '../layout/home/CircleCatogary';
import Footer from '../layout/footer';

function Home() {
    const [condition, setCondition] = useState(true)


    return <>
        <Header />
        <div className="container-xl">
            <Slideshow />
            <CircleCatogary/>
        {condition?<Product />:null}
         <CircleCatogary/>
         <Footer/>
        
        </div>

       
        
    </>
}
export default Home