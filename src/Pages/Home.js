import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import View from '../Components/View'
import Categories from '../Components/Categories'
import { Link } from 'react-router-dom'



function Home() {

  // state for state-lifting
const [addUpdate,setAddUpdate]=useState({})

// state for creating store dragged-files

//  console.log("fileData",files);
  return (
    <div className='mt-5'>
      <Row>
        <Col>
          <h1 className='ms-5 ps-5 mb-4 '>
           <span>S</span>tart <span>A</span>ploading <span>V</span>ideos
          </h1>
          <div className='m-5 fs-3 ps-5'>
            <Link to={'/watch-history'} style={{textDecoration:'none'}}>
              <a className='border rounded bg-dark p-1' style={{textDecoration:'none', fontFamily:'satisfy , cursive',fontSize:'18px' ,color:'#21e4e4'}} >
                <i className='fa-solid fa-clock fa-spin text-light mt-2'></i>  <b>View watch  History</b></a>
            </Link>
          </div>
        </Col>
        <Col>
        <img  src="https://i.postimg.cc/W1f42GWz/taofv1mbb9t01.gif" width='90px' height='80px' alt="" /></Col>
      </Row>
      <Row>
      <Col lg={1}><Add update={setAddUpdate}></Add></Col>
      <Col lg={7}><View updatedState={addUpdate}></View></Col>
     
      <Col lg={4}><Categories></Categories>
        
      </Col> 
      </Row>
    </div>
  )
}

export default Home