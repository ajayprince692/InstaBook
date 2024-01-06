import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Postcard from "./Common/Postcard";

function Dashboard() {
  let [posts, setPosts] = useState([]);
  let getPosts = async () => {
    try {
      let res = await axios.get(`${API_URL}`);

      if (res.status === 200) {
        console.log(res.data);
        setPosts(res.data);
      }
    } catch (error) {
      toast.error("oops there must be a error");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container-fluid">
      <TopBar />
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Posted on</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td><img style={{width:"100px"}} src={e.image} alt={e.title} /></td>
                  <td>{e.description}</td>
                  <td>{e.createdAt}</td>

                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
