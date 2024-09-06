import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

function ExperienceComponent({ handleDeleteExperience, submit, setSubmit, setFormData, validationError }) {
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
  function handleFormData(key) {
    return function setTheData(value) {
      setFormData((prevFormData) => ({
        ...prevFormData,
       experience: {...prevFormData.experience,
        [key]:value
       }
      }));
    };
  }

  return (
    <div className="experience">
      <InputComponent
        submit={submit}
        setFormData= {setFormData}
        validationError = {validationError.experience?.role}
        setFormData={handleFormData("role")}
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
        validationError = {validationError.experience?.company}
          inputElement="input"
          setFormData={handleFormData("company")}
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
          setFormData={handleFormData("location")}
          validationError = {validationError.experience?.location}
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
               setFormData={handleFormData("task")}
               validationError = {validationError.experience?.task}
                inputElement="input"
                outputElement="li"
                classNameContainer="task2"
                classNameInput="experienceInput"
                classNameOutput="experienceP"
                type="text"
                placeholder="Add responsibility"
                setSubmit={setSubmit}
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
      <button className="addTask" onClick={handleAddTask}>
        Add responsibility
      </button>
      <DateComponent />
      <button className="deleteButton" onClick={handleDeleteExperience}>
        Delete experience
      </button>
    </div>
  );
}

export { ExperienceComponent };
