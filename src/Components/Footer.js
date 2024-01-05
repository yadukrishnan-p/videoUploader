import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Container from 'react-bootstrap'
import { Facebook, GitHub, Instagram, Linkedin } from 'react-feather'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react';
function Footer() {
  return (
    <div>
      <hr className='text-danger m-5' />
      <div className=''>
        <Row>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Col style={{ marginTop: '-38px' }}><img
              alt=""
              src="https://i.postimg.cc/xd92Dt04/playback-icon-7119874-1280.png"
              width="20"
              height="25"
              className="d-inline-block align-top"
            />{' '}
              <b style={{ textShadow: '-1px 0 coral, 0 1px coral, 1px 0 black, 0 -1px coral' }}><span>V</span>ideo <span>U</span>ploader</b></Col>
          </Link>
          <Col> <p style={{ fontFamily: 'cursive', color: 'white' }}>The easy way to upload stunning videos, add subtitles and grow your audience.</p>
            <b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nulla quaerat rerum nihil laborum, sapiente vel facilis iste obcaecati repudiandae voluptatem qui excepturi error quibusdam, sequi molestias nemo cumque nobis?</b>
          </Col>
          <Col>
            <h4 style={{ marginTop: '-38px' }}>QUICK LINKS</h4>

            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col>
            <h4 style={{ marginTop: '-38px' }}>LIBRARIES</h4>
            <ul>

              <li><a style={{ textDecoration: 'none', color: 'white' }} href="https://react-bootstrap.netlify.app/">
                React-Bootstrap
              </a></li>


              <li>
                <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.npmjs.com/package/react-router-dom">
                  React-Router-Dom
                </a>
              </li>


              <li>
                <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.npmjs.com/package/uniqid">
                  Uniqid
                </a>
              </li>


              <li>
                <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.npmjs.com/package/react-toastify">
                  ReactToastify
                </a></li>


              <li>
                <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.npmjs.com/package/date-fns">Date-Fns </a></li>


              <li>  <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.npmjs.com/package/react-feather">React-Feather </a></li>

            </ul>
          </Col>
          <Col>
            <h4 style={{ marginTop: '-38px' }}>CONTACT US</h4>

            <div>
              <input style={{ width: '70%', height: '40px' }} type="email" name="email" id="email" placeholder='Enter email' />
            </div>
            <br />
            <div style={{ width: '50%', height: '60px', backgroundColor: 'white', color: 'black', marginLeft: '3px' }}>
              <h4 style={{ textAlign: 'center', paddingTop: '15px' }}>SUBSCRIBE</h4>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'39px', marginRight:'33px', marginLeft:'-29px'}}>
              
                <a style={{  color: '#125adf' }} href=""><Facebook/></a>
                <a  style={{ color: 'white' }}href=""><GitHub/></a>
                <a style={{  color: '#3894e5' }} href=""><Linkedin/></a>
                <a style={{ color: '#d51bb2' }}href=""><Instagram/></a>
                 <a style={{ fontSize:'26px',marginTop:'-4px', color: '#16d961' }} href=""><i class="fa-brands fa-whatsapp"></i></a>
              
             
            </div>
          </Col>

        </Row>
        <div style={{ textAlign: 'center', fontFamily: 'cursive', color: 'white' }}>Copyright  ©  2023 All Rights Reserved  ®  Website developed by: Yadu Krishnan</div>
      </div>
    </div>
  )
}

export default Footer