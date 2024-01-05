import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allApis'
import { Col, Row } from 'react-bootstrap'

function View({updatedState}) {

  const [allVideos, setAllVideos] = useState([])

  // state to update and delete
  const [deleteUpdate,setDeleteUpdate]=useState({})
  
  const AccessAllVideos = async () => {
    const result = await getAllVideos()
    if (result.status >= 200 && result.status < 300) {
      setAllVideos(result.data)
    }
  }

  console.log(allVideos);
  useEffect(() => {
    AccessAllVideos()
  }, [updatedState,deleteUpdate])


  return (
    <Row  className="border bg-dark">
      
        {
          allVideos.length>0?(
            allVideos.map(i=>
      
                <Col>
                  <h1><VideoCard video={i} deleteUpdateFn={setDeleteUpdate}></VideoCard></h1>
                </Col>
      
            )
          ): <h1>No videos!</h1>
        }
      
      
      
    </Row>
  )
}

export default View