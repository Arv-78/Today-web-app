import React from "react";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";

function Create() {

  // let navigate = useNavigate();

  let [block, setBlock] = React.useState({
    title: "",
    content: "",
  });

  function handleClick(event) {
    let { name, value } = event.target;
    setBlock((prevValue) => {
      return {
             ...prevValue, 
            [name]: value 
            };
    });
  }

  async function handleSubmit(){    
    await fetch("/data",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({...block})
    })
    .catch(function(error){
      console.log(error);
      return;
    })
  }

  return (
    <div style={{height: "100%", width: "100%"}}>
      <Navbar />
        <div className="shadow-lg rounded create-div">
          <input
            name="title"
            className="inputArea"
            type="text"
            onChange={handleClick}
            placeholder="Title..."
            value={block.title}
          />
          <textarea
            name="content"
            className="inputArea"
            type="text"
            onChange={handleClick}
            placeholder="How was your day..?"
            value={block.content}
          />
          <Link to="/" onClick={()=>{handleSubmit()}} className="btn btn-info button">
            Share
          </Link>
        </div>
    </div>
  );
}

export default Create;
