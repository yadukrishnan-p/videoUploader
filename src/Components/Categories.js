import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import urid from "urid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addCategory,
  deleteCategory,
  deleteDrag,
  getAllCategory,
  getVideo,
  updateCategory,
} from "../services/allApis";
import { Trash } from "react-feather";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";


import { Col, Row } from "react-bootstrap";
function Categories() {
  // state to hold input, id and video array
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: [],
  });

  const setInputs = (e) => {
    const { value, name } = e.target;
    setCatInputs({ ...catInputs, [name]: value });
  };

  const addData = async () => {
    const id = urid();
    console.log(id);
    setCatInputs({ ...catInputs, ["id"]: id });
    const { name } = catInputs;

    if (name == "") {
      toast.error("🦄 please provide caption!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      // api call
      const result = await addCategory(catInputs);
      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        //  refresh page
        AccessAllCategories();

        toast.success(`🦄 ${result.data.name} added!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  console.log(catInputs);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // get cetegory
  const [category, setCategory] = useState({});

  const AccessAllCategories = async () => {
    const result = await getAllCategory();
    if (result.status >= 200 && result.status < 300) {
      setCategory(result.data);
    }
  };

  // delte categories
  const DeleteCategory = async (id) => {
    const result = await deleteCategory(id);
    if (result.status >= 200 && result.status < 300) {
      // refresh category list
      AccessAllCategories();
    }
  };

  console.log("category", category);
  useEffect(() => {
    AccessAllCategories();
  }, []);

  const dragOver = (e) => {
    e.preventDefault();
    console.log("dragged over the category...");
  };

  const dropped = async (e, id) => {
    console.log("dropped...catId -" + id);
    // video id access
    const videoId = e.dataTransfer.getData("cardId");
    console.log(videoId);

    // access video data from backend
    const { data } = await getVideo(videoId);
    console.log(data);

    // select dropped category from all categories
    const selectedCategory = category.find((i) => i.id == id);
    console.log("selectedCategory:", selectedCategory);

    // update category object with video data
    selectedCategory.videos.push(data);
    console.log(selectedCategory);

    // api call to update the changed category in backend
    await updateCategory(id, selectedCategory);
    // refresh
    AccessAllCategories();
  };
  // draggged state
  // const [files, setFiles] = useState({})

  console.log("categorydata :", category);
  
  
    const DeleteDrag = async (id) => {
      const result = await deleteDrag(id);
      if (result.status >= 200 && result.status < 300) {
        // refresh category list
        AccessAllCategories();
      }
    };
  

  return (
    <div>
      <button style={{marginLeft:'22px'}} onClick={handleShow} className="btn btn-warning w-75">
        Categories
      </button>

      {category.length > 0 ? (
        category.map((i) => (
          <div
            droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => dropped(e, i?.id)}
            className="border w-75 p-2 m-4"
          >
            <Accordion className="bg-dark">
              <Accordion.Item  eventKey="0">
                <Accordion.Header className="bg-dark">
                  <p style={{color:'#0e0f10'}} className="fs-3">{i.name}</p>
                </Accordion.Header>
                <Accordion.Body style={{backgroundColor:'#0e0f10',borderRadius:'23px'}}>
                  {i?.videos.map((j) => (
                 
                     <Row className="border p-1 ">
                      <Col className=" text-center  border ">    
                       <img
                              style={{
                                width: "90px",
                                height: "200px",
                                padding: "5px",
                              }}
                              src={j.cover_image}
                              alt=""
                            /></Col>
                      <Col className="border">
                      <p className="text-dark">{j.caption}</p>
                      </Col>
                     </Row>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="text-center p-1 ">
                    <button onClick={() => {
                         DeleteCategory(i.id);
                       }}
                       size={55}
                       className="text-warning btn border bg-danger"> Delete Now!</button>
                   </div> 
          </div>
        ))
      ) : (
        <h3>No categories added yet!</h3>
      )}

    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-black" closeButton>
          <Modal.Title>Add Items</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black border">
          <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3 mt-3 text-dark"
          >
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => setInputs(e)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="bg-black">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default Categories;
