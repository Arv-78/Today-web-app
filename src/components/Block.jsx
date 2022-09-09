import React from "react";

function Block(props) {
  return (
    <div className="card m-5 shadow rounded textblock">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <button
          className="btn btn-outline-warning mb-3"
          style={{ float: "right" }}
          onClick={()=>{props.deleteid(props.id);}}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Block;
