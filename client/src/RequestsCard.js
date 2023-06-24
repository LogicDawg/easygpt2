import React from "react";
import "./requestcard.css"

function RequestCard({ request, response }) {
 
    

  return (
      <div className="RequestCard card">
        <div className="card-body">
          <h6 className=" card-title">
            You Asked For:
          </h6>
          <p>{request}</p>
          <h6 className="card-title">
            You Recieved:
          </h6>
          <p>{response}</p>
        </div>
      </div>
      
  );
}

export default RequestCard;