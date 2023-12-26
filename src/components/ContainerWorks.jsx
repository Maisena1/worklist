import React from "react";
import Work from "./Work";

const ContainerWorks = ({ works, deleteWorks, editWork }) => {
  return (
    <ul>
      {works.length===0 ?(
        <div className="text-center fw-boler fs-1">No hay Tareas</div>
      ):(
        works.map((item) => (
          <Work
            key={item.id}
            item={item}
            deleteWorks={deleteWorks}
            editWork={editWork}
          />
        ))
      )}

    </ul>
  );
};

export default ContainerWorks;
