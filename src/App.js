import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <div className="card shadow-sm">
            <div className="card-header bg-orange text-white">
              <h4 className="mb-0 text-center">TODO LIST</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group m-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="task"
                      name="task"
                      value={task}
                      onChange={handleTaskChange}
                      placeholder="Enter task"
                    />
                    <button
                      type="submit"
                      className="btn btn-orange"
                      id="addTaskBtn"
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>
              <hr />
              <ul className="list-group" id="taskList">
                {tasks.map((task, index) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    {task}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => handleDelete(index)}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
