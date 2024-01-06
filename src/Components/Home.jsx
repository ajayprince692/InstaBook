import React,{useEffect,useState} from 'react'
import TopBar from './TopBar'
import Postcard from './Common/Postcard'
import { API_URL } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'

function Home() {
  
  let[posts,setPosts]=useState([])
let getPosts=async()=>{
  try{
    let res= await axios.get(`${API_URL}`)
    console.log(res.data);
    if(res.status===200){
        toast.success("posted succesfully")
        setPosts(res.data.filter(e=>e.status))
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
  <div className='homeWrapper'>
        {
          posts.map((e,i)=>{
            return<Postcard title={e.title} image={e.image} description={e.description} key={i} />
          })
        }
  </div>
  </div>
}

export default Home