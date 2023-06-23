import React from "react";
import "./requestcard.css"

function RequestCard({ request, response }) {
 

  return (
      
        <div className="card-body">
          <h6 className="card-title">
            You Asked For: {request}
          </h6>
          <p>You Recieved: {response}</p>
        </div>
      
  );
}

export default RequestCard;