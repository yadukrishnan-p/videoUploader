import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Trash2 } from "react-feather";
import { addHistory, deleteVideo } from "../services/allApis";
import {v4 as uuidv4} from 'uuid';
import { format } from "date-fns";
import { Col, Row } from "react-bootstrap";

function VideoCard({ video, deleteUpdateFn }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{ 
    setShow(true); 
  

  // id
  let id = uuidv4()
  // title
  var video_title = video.caption
  // url
  var url =  video.video_Url
  // date
 var date = format(new Date(),'dd-MM-yyy h:mm:ss a')
 console.log(date);
 // body 
 const body = {id,video_title,url,date}
 if (body) {
  // api call
  await addHistory(body)
 }
  

  }

  const handleDelete = async (id) => {
    const result = await deleteVideo(id);
    
    if (result.status >= 200 && result.status < 300) {
      deleteUpdateFn(result.data);
    }

    console.log(result);
  };


const dragStart =  (e,id) =>{
  console.log("drag started.... source card id -> "+id);

  // store dragged data
  e.dataTransfer.setData("cardId",id)
}

  return (
    
    <div>
  
        <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className="bg-black border p-1 mt-2" style={{ width: "14rem" , height:'25rem' }}>
        <Card.Img style={{ width: "13rem" , height:'25rem' }} onClick={handleShow} variant="top" src={video.cover_image} />
        <Card.Body>
          <Card.Title>
            <p style={{fontSize:'17px', fontFamily:"sans-serif"}}>{video.caption}</p>
          </Card.Title>
          <div className="text-end">
            <Trash2
              onClick={() => handleDelete(video.id)}
              size={56}
              className="btn  text-danger"
            ></Trash2>
          </div>
        </Card.Body>
      </Card>

      
     
     {/* model */}
     <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="bg-black" closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black border">
          <iframe
            className="border rounded-2"
            width="460"
            height="360"
            src={video.video_Url}
            title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer className="bg-black">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={handleClose}>
            Save Changesh
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  );
}

export default VideoCard;
