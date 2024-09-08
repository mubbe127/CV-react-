import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

function ExperienceComponent({ handleDeleteExperience, submit, setSubmit, setFormData, validationError }) {
  const [task, setTask] = useState([]);
  const refIdTask = useRef(0);


  function handleAddTask() {
    const newIdTask = refIdTask.current++;
    setTask([...task, { id: newIdTask }]);
    console.log(task);
  }

  function handleDeleteTask(itemId) {
    setTask(task.filter((task) => task.id !== itemId));
  }
  

  return (
    <div className="experience">
      <InputComponent
        submit={submit}
        inputElement="input"
        classNameContainer="role"
        classNameInput="experienceInput"
        classNameOutput="experienceP"
        type="text"
        placeholder="Add role"
        setSubmit={setSubmit}
      />
      <div className="companyLocation">
        <InputComponent
          submit={submit}
     
          inputElement="input"

          classNameContainer="company"
          classNameInput="experienceInput"
          classNameOutput="experienceP"
          type="text"
          placeholder="Add company"
          setSubmit={setSubmit}
        />
        <p className="comma">,</p>
        <InputComponent
          submit={submit}

          inputElement="input"
          classNameContainer="location"
          classNameInput="experienceInput"
          classNameOutput="experienceP"
          type="text"
          placeholder="Add location"
          setSubmit={setSubmit}
        />
      </div>
      <div className="taskContainer">
        {task.length !== 0 &&
          task.map((task) => (
            <ul className="task" key={task.id}>
              <InputComponent
               submit={submit}
                inputElement="input"
                outputElement="li"
                classNameContainer="task2"
                classNameInput="experienceInput"
                classNameOutput="experienceP"
                type="text"
                placeholder="Add responsibility"
                setSubmit={setSubmit}
              />
              {submit ? null :<button
                className="deleteTask"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button> }
            </ul>
          ))}
      </div>
      {submit ? null :<button className="addTask" onClick={handleAddTask}>
        Add responsibility
      </button> }
      <DateComponent />
      {submit ? null :<button className="deleteButton" onClick={handleDeleteExperience}>
        Delete experience
      </button> }
    </div>
  );
}

export { ExperienceComponent };
