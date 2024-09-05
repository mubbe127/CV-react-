import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { DateComponent } from "./components/dateInputComponent";
import { InputComponent } from "./components/InputComponent";
import { EducationComponent } from "./components/EducationComponent";
import { ExperienceComponent } from "./components/ExperienceComponent";
import "./App.css";

function App() {
  const [experience, setExperience] = useState([]);
  const [educations, setEducations] = useState([]);
  const [editMode, setEditMode] = useState(true);
  const idRefEdu = useRef(0);
  const newIdEdu = idRefEdu.current++;
  const refIdExp = useRef(0);
  const newIdExp = refIdExp.current++;

  function handleAddEducation() {
    setEducations([...educations, { id: newIdEdu }]);
  }

  function handleDeleteEducation(itemId) {
    setEducations(educations.filter((education) => education.id !== itemId));
  }

  function handleAddExperience() {
    setExperience([...experience, { id: newIdExp }]);
  }
  function handleDeleteExperience(itemId) {
    setExperience(experience.filter((experience) => experience.id !== itemId));
  }

  function handleEditState() {
    setEditMode(false);
  }

  return (
    <div className="cvContainer">
      <InputComponent
        inputElement="input"
        outputElement="h1"
        classNameContainer="name"
        classNameInput="input"
        classNameOutput="output"
        placeholder="Fullname"
      />
      <InputComponent
        inputElement="input"
        outputElement="p"
        classNameContainer="adress"
        classNameInput="input"
        classNameOutput="output"
        placeholder="Adress"
      />
      <div className="telEmailContainer">
        <InputComponent
          inputElement="input"
          type="tel"
          outputElement="p"
          classNameContainer="tel"
          classNameInput="input"
          classNameOutput="output"
          placeholder="Add phone"
        />
        <InputComponent
          inputElement="input"
          type="email"
          outputElement="p"
          classNameContainer="email"
          classNameInput="input"
          classNameOutput="output"
          placeholder="Add email"
        />
      </div>
      <div className="summaryContainer">
        <h3>Summary:</h3>
        <InputComponent
          inputElement="textarea"
          type="text"
          outputElement="p"
          classNameContainer="summary"
          classNameInput="input"
          classNameOutput="output"
          placeholder="Add summary text"
        />
      </div>
      <div>
        <div className="educationContainer">
          <h3>Education:</h3>
          <div className="educationContainer2">
            {educations.map((education) => (
              <EducationComponent
                key={education.id}
                handleDeleteEducation={() =>
                  handleDeleteEducation(education.id)
                }
              />
            ))}
          </div>
        </div>
        <div className="addEducation">
          <button onClick={handleAddEducation}>Add education</button>
        </div>
      </div>
      <div>
        <div className="experienceContainer">
          <h3>Experience:</h3>
          <div className="educationContainer2">
            {experience.length !== 0 &&
              experience.map((experience) => (
                <ExperienceComponent
                  key={experience.id}
                  handleDeleteExperience={() =>
                    handleDeleteExperience(experience.id)
                  }
                />
              ))}
          </div>
          </div>
          <button onClick={handleAddExperience}>Add experience:</button>
      </div>
      <button onClick={handleEditState}>Submit</button>
    </div>
  );
}

export default App;
