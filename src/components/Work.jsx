import React from "react";

const Work = ({deleteWorks,item,editWork}) => {
  const { work, description, priority, state,id } = item;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-2">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{work}</div>
        {state ? (
          <span className="bg-success text-light badge ms-5 ">Complete</span>
        ) : (
          <span className="bg-info text-dark badge ms-5 ">Incomplete</span>
        )}
        <p>{description}</p>
        <div>
          <button onClick={()=>{deleteWorks(id)}} className="btn btn-danger btn-sm me-1">Delete</button>
          <button onClick={()=>{editWork(id)}} className="btn btn-warning btn-sm me-1">Edit</button>
        </div>
      </div>
      {priority ? (
        <span className="badge bg-primary rounded-pill">Prioritary</span>
      ) : (
        <span className="badge bg-warning rounded-pill">No Prioritary</span>
      )}
    </li>
  );
};

export default Work;
