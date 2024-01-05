import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({update}) {
  
  // state to hold input datas
  const [inputs,SetInputs]=useState({
    id:"",
    caption:"",
    cover_image:"",
    video_Url:""
  })
// function for Onchange
const setValues = (e)=>{
  let {value,name}=e.target
  SetInputs({...inputs,[name]:value})
  console.log(inputs);
}

// function to extract video url
const extractUrl = (e)=>{
    let videoUrl = e.target.value
  
    if (videoUrl.includes("v=")) {
      // let index = videoUrl.indexOf("v=")
      // console.log(index);
      // let subUrl = videoUrl.slice(index+2,index+13)
      // console.log(subUrl);
       let subUrl = videoUrl.split("v=")[1]
      //  console.log(subUrl);
     let  finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`
     SetInputs({...inputs,["video_Url"]: finalUrl})
    }
}


// function to add button click
 async function  AddHandle (){
  const id = uniqid()
   // console.log(id);
  SetInputs({...inputs,["id"]: id})

  const {caption,cover_image,video_Url} = inputs

  if (caption == ""||cover_image == ""||video_Url == "") {
    toast.error('🦄 All inputs are required!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  } else {
    const result = await addVideo(inputs)
    console.log(result);

    if (result.status>=200 && result.status< 300) {
    

      // update state of home
      update(result.data)
       
      toast.success('🦄 Video added', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     setShow(false);
    }
  }
 
 
  
  
 }

 console.log(inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
  
    <div>
     
      <i onClick={handleShow}  class="fa-solid fa-upload fa-fade fa-3x  text-warning" style={{ marginTop:'-5px'}}></i>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-black' closeButton>
          <Modal.Title>Video Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-black border'>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3 mt-3 text-dark"
      >
        <Form.Control name='caption' type="text" onChange={(e)=>setValues(e)} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput1"
        label="Cover Image URL"
        className="mt-3 text-dark"
      >
        <Form.Control type="text" name='cover_image'  onChange={(e)=>setValues(e)} />
      </FloatingLabel>
      <FloatingLabel
       controlId="floatingInput2"
        label="Ytude Video URL"
        className="mb-3 mt-3 text-dark">
        <Form.Control type="text" onChange={(e)=>extractUrl(e)}  />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className='bg-black'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={AddHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Add