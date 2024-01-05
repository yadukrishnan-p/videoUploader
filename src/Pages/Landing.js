import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  './Landing.css'
function Landing() {
  return (
    <div>


      
      <Row >
        {/* <video autoPlay loop muted playsInline style={{position:'absolute',right:'0',bottom:'0',zIndex:'-1' , margin:'0',padding:'0'}}>
          <source src="https://player.vimeo.com/external/393624842.sd.mp4?s=e3d0454096ee5ea3c74468ffe6138af82f5df439&profile_id=164&oauth2_token_id=57447761" />
        </video> */}

        <img style={{position:'absolute',right:'0',bottom:'0',zIndex:'-1' , margin:'0',padding:'0'}} src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="" />
        <Col>
        
          <h2 style={{marginTop:'220px',color:'#58c2f7'}} className='ms-5'><span>W</span>elcome <span>T</span>o <span>V</span>ideo <span>U</span>niverse</h2>
          
        </Col>
      
        <Col>
        <h1 className='ms-5 mt-5'>
      
      <b style={{color:'#58c2f7'}}><span>V</span>ideo <span>U</span>ploader</b>
</h1>
        <p  className='ms-5 mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae doloremque illo accusamus inventore vitae molestias atque voluptatibus. Ducimus accusantium, nesciunt sit odio nobis quod velit exercitationem vel dolores enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel numquam incidunt assumenda, omnis perspiciatis rem sit facere aliquid unde nisi dolorem impedit consectetur est qui repellendus adipisci non, exercitationem ipsa! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sunt, nemo autem laboriosam incidunt illo. Dicta, ut! Cupiditate ducimus quod eos cumque nam, molestias quibusdam ullam sunt asperiores doloribus illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, modi reiciendis quia eos maxime magni voluptatum voluptas rerum accusamus incidunt animi at culpa qui non placeat pariatur dolores asperiores similique.</p>
          <Link style={{marginLeft:'200px'}}  to={'/home'}>
          <button class="button"><span>Start </span></button>
          </Link>
        </Col>
      </Row>
      <div>
       <img style={{width:'100%', marginTop:'2px', marginBottom:"-15px"}} src="https://i.postimg.cc/ZRpPT4jV/free-vudu-movies-1.jpg" alt="" />
      </div>

      <div style={{width:'100%',  }}>
        <img className='mt-3' style={{width:'1290px', height:'450px',marginBottom:"-40px" }} src="https://i.postimg.cc/tg1YjkD5/tumblr-static-2012-movies-collage.jpg" alt="" />

      </div>
    </div>

    
  )
}

export default Landing