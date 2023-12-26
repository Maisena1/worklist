import React, { useState } from "react";
import Swals from "sweetalert2";

const Form = ({ addworks }) => {
  const [workform, setworkform] = useState({
    work: "",
    description: "",
    state: "pendiente",
    priority: false,
  });

  const { work, description, state, priority } = workform;

  const enviarformulario = (e) => {
    e.preventDefault();
    if (!work.trim() || !description.trim()) {
      return Swals.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete los campos correctamente",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    addworks({
      work: work,
      description: description,
      state: state === "Completado" ? true : false,
      priority: priority,
      id: Date.now(),
    });

    Swals.fire({
      title: "Tarea agregada",
      text: "Tarea agregada correctamente",
      icon: "success",
    });
  };
  return (
    <>
      <form onSubmit={(e) => enviarformulario(e)}>
        <input
          type="text"
          placeholder="Ingrese tarea"
          className="form-control mb-2"
          name="title"
          value={work}
          onChange={(e) => setworkform({ ...workform, work: e.target.value })}
        />
        <textarea
          name="description"
          placeholder="Ingrese descripcion"
          className="form-control mb-2"
          value={description}
          onChange={(e) =>
            setworkform({ ...workform, description: e.target.value })
          }
        ></textarea>
        <select
          name="state"
          className="form-select mb-2"
          value={state}
          onChange={(e) =>
            setworkform({ ...workform, state: e.target.value })
          }
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="priority"
            className="form-check-input"
            checked={priority}
            onChange={(e) =>
              setworkform({ ...workform, priority: e.target.checked })
            }
          />
          <label className="form-check-label">Prioridad</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
