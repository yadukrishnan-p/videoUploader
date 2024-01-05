import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Trash2 } from "react-feather";
import { deleteHistory, getAllHistories } from "../services/allApis";
import { Link } from "react-router-dom";

function History() {
  const [History, setHistory] = useState([]);
// get 
  const viewHistory = async () => {
    const result = await getAllHistories();
    if (result.status >= 200 && result.status < 300) {
      setHistory(result.data);
    }
  };

  useEffect(() => {
    viewHistory();
  }, []);
  console.log(History);

//   delete
const DeleteHistory =async (id)=>{
    const res = await deleteHistory(id)
    if (res.status>=200 && res.status<300) {
        viewHistory();  
    }
    console.log("delete",res);
}


  return (
    <div>
        <Link to={'/home'} style={{textDecoration:'none'}}>
        <p className="text-white pt-5"><i class="fa-solid fa-arrow-left fa-fade text-info "></i> Back to page</p>
        </Link>
      <h1 className="text-center p-5">Watch-History</h1>
      { 
      History.length>0?(
          
        <Table
        className="w-75 container " 
        striped
        bordered
        hover
        variant="warning"
        size="sm"
      >
        <thead className="text-center fs-5">
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Video URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
    {
    History?.map((i,index) => (
        <tr>
            <td>{index+1}</td>
            <td>{i?.date}</td>
            <td>{i?.video_title}</td>
            <td>{i?.url}</td>
            <td>
              <Trash2 onClick={(e)=>DeleteHistory(i.id)} size={47} className="btn text-danger"></Trash2>
            </td>
          </tr>
    ))}
          
        </tbody>
      </Table>)
      :
      <h1 className="text-center p-5">No histories available!</h1>
      }
    </div>
  );
}

export default History;
