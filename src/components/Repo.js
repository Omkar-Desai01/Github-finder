import React from "react";

export default function Repo(props) {
  let style = {
    backgroundColor: "#f5f5f5",
    margin: "5px 0",
  };
  return (
    <>
      <div className="card col-sm-6" style={style}>
        <div className="card-body">
          <h5 className="card-title">
            <a href={props.data.url}>{props.data.full_name}</a>
          </h5>
          <h6 className="card-subtitle mb-2 text-success">
            {props.data.language}
          </h6>
          <p className="card-text">{props.data.description}</p>
        </div>
      </div>
    </>
  );
}
