import React, { useContext } from 'react'
import Cart from './Cart'
import { contxt } from './Apicontxt'
import { Link } from 'react-router-dom'
// import Marquee from 'react-fast-marquee'

const Navbar = () => {
  let { dataa } = useContext(contxt)
  let sub_total = dataa.reduce((e,j) => { 
    let sum = e+j.total
    return sum
    },0)

  let old_price = dataa.reduce((e,j) =>{
    return e+j.sub
  },0)
  let discount = (sub_total/old_price)*100
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarj" aria-controls="offcanvasNavbarj">
            <img src="../pics/hamburger.png" height={"25px"} width={"25px"} alt="" />
          </button>
          <div className="offcanvas offcanvas-start bg-black text-white" tabindex="-1" id="offcanvasNavbarj" aria-labelledby="offcanvasNavbarLabelj">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white ms-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            </div>
          </div>
          <Link to='/' className='m-auto'><img src='../pics/logo-nav.avif' alt='...' height={"60px"} width={"60px"} /></Link>
          <button className="navbar-toggler border-0 shadow-none position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <img src="../pics/shopping-cart.png" height={"30px"} width={"30px"} alt="" />
            {dataa.length>0?<div className="notification d-flex justify-content-center align-items-center bg-white rounded-circle position-absolute" style={{ height: "20px", width: "20px", position: "absolute", right: "0", bottom: "0" }}>
              <p className='mb-0' style={{ fontSize: "12px" }}>{dataa ? dataa.length : 0}</p>
            </div>:""}
          </button>
          <div className="offcanvas offcanvas-end" style={{ backgroundColor: "rgb(228,228,228)" }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              {dataa.length !== 0 ? <div><h2 className='text-center mb-3'>Your Cart</h2>{dataa.map((e) => <Cart total={e.total} img={e.image} size={e.size} name={e.title} quan={e.quantity} id={e.id} />)}<div className="container-fluid">
                <div className="row bg-white px-3 py-4 rounded-4 mt-3">
                  <div className="row mb-2">
                    <h6 style={{fontSize: "20px"}}>Payment Summary</h6>
                  </div>
                  <div className="row ">
                    <div className="col">Subtotal</div>
                    <div className="col d-flex justify-content-end fw-bold">${old_price.toFixed(2)}</div>
                  </div>
                  <div className="row ">
                    <div className="col">Discount</div>
                    <div className="col d-flex justify-content-end fw-bold">{discount.toFixed(2)}%</div>
                  </div>
                  <div className="row ">
                    <div className="col">Discounted price</div>
                    <div className="col d-flex justify-content-end fw-bold">${sub_total.toFixed(2)}</div>
                  </div>
                  <div className="row">
                    <div className="col">Shipping</div>
                    <div className="col d-flex justify-content-end fw-bold text-success">FREE!</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      You got FREE SHIPPING!
                    </div>
                  </div>
                  <hr className='mt-3 px-5'/>
                  <div className="row">
                    <div className="col fw-bold">TOTAL</div>
                    <div className="col d-flex justify-content-end fw-bold">${sub_total.toFixed(2)}</div>
                  </div>
                </div>
              </div></div> : <div><h3 className='text-center'>Your Cart is Empty</h3></div>}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="jagroop"> */}
      {/* <marquee behavior="slide" direction="right">jagroop did it with rattan's </marquee> */}
      {/* <Marquee direction='right'>jagroop did it with rattan's</Marquee>
        </div>*/}
    </div>

  )
}

export default Navbar
