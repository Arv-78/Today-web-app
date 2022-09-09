import React from "react";
import Navbar from "./Navbar";
import Block from "./Block";

function Home() {
  const [arrayOfBlocks, setBlocks] = React.useState([]);
//it runs on component mount
  React.useEffect(()=>{
    async function fetchData(){
      const response = await fetch("/data")

      if(!response.ok){
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const Data = await response.json();

      setBlocks(Data);
    }
    
    fetchData();

  },[]);
  

  function deleteBlock(id){

    async function deleteById(){
      await fetch("/delete",{
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({id: id})
      })
    }

    deleteById();

    setBlocks((prevValue)=>{
      return prevValue.filter((item)=>{
        return id !== item._id;
      })
    })
   
  }

  return (
    <div>
      <Navbar />
      {arrayOfBlocks.map((block, index)=>{
        return(
          <Block 
            key={index}
            id={block._id}
            title={block.title}
            content={block.content}
            deleteid={deleteBlock}
          />
        );
      })}
      
    </div>
  );
}

export default Home;
