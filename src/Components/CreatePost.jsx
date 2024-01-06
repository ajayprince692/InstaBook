import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TopBar from "./TopBar";
import Postcard from "./Common/Postcard"
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CreatePost() {
  let[title,setTitle]=useState("")
  let[image,setImage]=useState("")
  let[description,setDescription]=useState("")
  let Navigate=useNavigate()

  const createHandle=async ()=>{
    try{
      let data={
        title,image,description,status:false  
      }
      let res = await axios.post(`${API_URL}`)
      if(res.status===201){
          toast.success("Posted succesfully")
          Navigate('/dashboard')
      }
    }
    catch{error}
  }

  return (
    <div className="container-fluid">
      <TopBar />
      <div className="homeWrapper">
      <div className="formWrapper">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="text" placeholder="Image url" onChange={(e)=>{setImage(e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control as="textarea" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
          </Form.Group>

          <Button variant="primary" onClick={()=>createHandle()}>
            Submit
          </Button>
        </Form>
      </div>
      </div>
      <div className="previeWrapper">
        <h2 style={{textAlign:"center"}}>Preview</h2>
        <Postcard

        title={title}
        image={image}
        description={description}
        
        />
      </div>
    </div>
  );
}

export default CreatePost;
