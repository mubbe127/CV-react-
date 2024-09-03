import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

function ExperienceComponent({handleDeleteExperience}) {
  const [task, setTask] = useState([]);

  const refIdTask = useRef(0);
  const newIdTask = refIdTask.current++;

  function handleAddTask() {
    setTask([...task, { id: newIdTask }]);
  }

  function handleDeleteTask(itemId) {
    setTask(task.filter((task) => task.id !== itemId));
  }

  return (
    <div>
      <h3>Experience:</h3>

      <div>
        <InputComponent
          inputElement="input"
          classNameContainer="experienceContainer"
          classNameInput="experienceInput"
          classNameOutput="experienceP"
          type="text"
          placeholder="Add role"
        />
        <InputComponent
          inputElement="input"
          classNameContainer="experienceContainer"
          classNameInput="experienceInput"
          classNameOutput="experienceP"
          type="text"
          placeholder="Add company"
        />
        <InputComponent
          inputElement="input"
          classNameContainer="experienceContainer"
          classNameInput="experienceInput"
          classNameOutput="experienceP"
          type="text"
          placeholder="Add location"
        />
        {task.length !== 0 &&
          task.map((task) => (
            <div class="taskContainer">
              <InputComponent
                key={task.id}
                inputElement="input"
                classNameContainer="experienceContainer"
                classNameInput="experienceInput"
                classNameOutput="experienceP"
                type="text"
                placeholder="Add responsibility"
              />
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          ))}
        <button onClick={handleAddTask}>Add responsibility</button>
        <DateComponent />
        <button onClick={handleDeleteExperience}>
          Delete experience
        </button>
      </div>
    </div>
  );
}

export { ExperienceComponent };
