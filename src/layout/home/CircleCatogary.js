import React from 'react'
import { useState } from 'react'
import Circlecard from '../../components/circlecard'


export default function CircleCatogary() {
    
      const[catogrycard, SetCatogaryCard]=useState([
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-15.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210618/a97749784ca7b78a938a0aa0531a7479/en_category.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-09.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210609/ab5cd4c757d262915aae67797aa261f0/en_mb-category-01.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-05.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-12.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-02.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-01.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-14.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-03.png',
            
          },
          {
            imgSrc: 'https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-04.png',
            
          },
    ])

    return (<>
        <div className="Product-body p-2 d-flex justify-content-center " >
         <div className='row p-0 m-0'>
            {catogrycard.map((e, i) => {
                return <div key={i} className='col-md-3 p-0' style={{width: '7.2rem'}}>
                    <Circlecard image={e.imgSrc}  />
                </div>
            })}
         </div>
        </div>
      </>
    )
}
