import React ,{ useState,useEffect } from 'react'
import TopBar from './TopBar'
import axios from 'axios'
import { API_URL } from '../App'
import { toast } from 'react-toastify'
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

function Dashboard({}) {
  let[posts,setPosts]=useState([])
let getPosts=async()=>{
  try{
    let res= await axios.get(`${API_URL}`)
    console.log(res.data);
    if(res.status===200){
        toast.success("posted succesfully")
        setPosts(res.data)
    }
  }
  catch(error){
        toast.error("oops there must be a error")
  }
}

useEffect(() => {
        getPosts();
        }, []);


  return <div className='container-fluid'>
      <TopBar/>
      <div>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
          <th>Posted on</th>
        </tr>
      </thead>
      <tbody>
        {
          posts.map((e,i)=>{
          {e.name}
          })
        }
      </tbody>
    </Table>
      </div>   
  </div>
}

export default Dashboard