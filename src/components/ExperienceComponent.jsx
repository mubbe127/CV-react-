import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

function ExperienceComponent({ handleDeleteExperience }) {
  const [task, setTask] = useState([]);
  const refIdTask = useRef(0);
  const newIdTask = refIdTask.current++;

  function handleAddTask() {
    setTask([...task, { id: newIdTask }]);
    console.log(task);
  }

  function handleDeleteTask(itemId) {
    setTask(task.filter((task) => task.id !== itemId));
  }

  return (
    <div className="experience">
      <InputComponent
        inputElement="input"
        classNameContainer="role"
        classNameInput="experienceInput"
        classNameOutput="experienceP"
        type="text"
        placeholder="Add role"
      />
      <div className="companyLocation">
        <InputComponent
          inputElement="input"
          classNameContainer="company"
          classNameInput="experienceInput"
          classNameOutput="experienceP"
          type="text"
          placeholder="Add company"
        />
        <InputComponent
          inputElement="input"
          classNameContainer="location"
          classNameInput="experienceInput"
          classNameOutput="experienceP"
          type="text"
          placeholder="Add location"
        />
      </div>
      <div class="taskContainer">
      {task.length !== 0 &&
        task.map(task => (
          <ul className="task" key={task.id}>
            <InputComponent
              inputElement="input"
              outputElement="li"
              classNameContainer="task2"
              classNameInput="experienceInput"
              classNameOutput="experienceP"
              type="text"
              placeholder="Add responsibility"
            />
            <button
              className="deleteTask"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </ul>
        ))}
           </div>
      <button class="addTask" onClick={handleAddTask}>
        Add responsibility
      </button>
      <DateComponent />
      <button class="deleteButton" onClick={handleDeleteExperience}>
        Delete experience
      </button>
    </div>
  );
}

export { ExperienceComponent };
