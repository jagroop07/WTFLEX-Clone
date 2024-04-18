import React, { useContext, useState } from 'react'
import { contxt } from './Apicontxt'
import Card from './Card'

const Allproducts = () => {
    let {data} = useContext(contxt)
    let [filterr,setfilterr] = useState('All_Products')

    function handlechnge(e){
        setfilterr(e.target.value)
    }
  return (
    <div className='container-fluid p-5'>
      <div className="row mt-3">
        <div className="col-lg-12 d-flex align-items-end">
            <h5 className='me-3 mb-0'>Filter: </h5>
            <select onChange={handlechnge} className='bg-transparent border-0' style={{width: "200px", outline: "none"}} name="products" id="para">
            <option value="All_Products">All products</option>
            <option value="feature_products">Feature Products</option>
            <option value="bottom_trends">Bottom Products</option>
            <option value="heavyweight_tshirts">Heavyweight Tshirts</option>
            </select>
        </div>
      </div>
      <div className="row justify-content-center">
        
        {data.filter(e => filterr!=='All_Products'?e.category === filterr: e).map(j => <div className="col-lg-3 col-md-6 col-sm-6 col-10 mt-5"><Card title={j.title} oldprice={j.old_price} newprice={j.new_price} img={j.image} id={j.id}/></div>)}
      </div>
    </div>
  )
}

export default Allproducts
