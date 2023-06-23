import React, { useState, useEffect,useContext } from "react";
import UserContext from "./UserContext"
import JoblyApi from "./api/api";
import RequestCard from "./RequestsCard"


const Requests = () => {
    const { currentUser } = useContext(UserContext);
    const [requests, setRequests] = useState([]);
    const user = currentUser.username;

    useEffect(function getRequestsOnMount() {
      console.debug("CompanyList useEffect getCompaniesOnMount");
      search(user);
    }, []);

    async function search(user) {
        let requests = await JoblyApi.getRequests(user);
        setRequests(requests);
        if(requests === null){
            requests = [];
        }
      }

    return (
        <>
        <div className="col-md-8 offset-md-2">
                {requests.length
                    ? (
                        <div className="CompanyList-list">
                        {requests.map(c => (
                            <RequestCard
                                key={c.id}
                                request={c.body}
                                response={c.response}
                            />
                        ))}
                        </div>
                    ) : (
                        <p className="lead">When you make a request they will show up here!</p>
                    )}
        </div>
        </>
    )
}

export default Requests;