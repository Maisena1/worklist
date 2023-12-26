import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ContainerWorks from "./components/ContainerWorks";
import Form from "./components/Form";
import Work from "./components/Work";

const initialworks = [
  {
    id: 1,
    work: "work 1",
    description: "description 01",
    state: false,
    priority: false,
  },
  {
    id: 2,
    work: "work 2",
    description: "description 02",
    state: false,
    priority: true,
  },
  {
    id: 3,
    work: "work 3",
    description: "description 03",
    state: true,
    priority: false,
  },
];

function App() {
  const [works, setTareas] = useState(initialworks);
  const addworks = (item) => {
    setTareas([...works, item]);
  };
  const deleteWorks = (id) => {
    const arrFilter = works.filter((item) => item.id !== id);
    setTareas(arrFilter);
  };
  const editWork = (id) => {
    const arrEdit = works.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    });
    setTareas(arrEdit);
  };

  return (
    <div className="container my-2">
      <h2 className="text-primary text-center">Form</h2>
      <Form addworks={addworks} />
      <div className="fw-bolder fs-1 text-center">Works</div>
      <ContainerWorks editWork={editWork} deleteWorks={deleteWorks} works={works} />
    </div>
  );
}

export default App;
