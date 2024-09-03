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
  const idRefEdu = useRef(0);
  const newIdEdu = idRefEdu.current++;
  const refIdExp = useRef(0);
  const newIdExp = refIdExp.current++;

  function handleAddEducation() {
    setEducations([...educations, { id: newIdEdu }]);
  }
  
  function handleDeleteEducation(itemId){
    setEducations(educations.filter(education => education.id !== itemId))
    }
  
  function handleAddExperience() {
    setExperience([...experience, { id: newIdExp }]);
  }
  function handleDeleteExperience(itemId) {
    setExperience(experience.filter(experience => experience.id !== itemId));
  }

  return (
    <>
      <InputComponent element="h1" classNameContainer={"name"} classNameInput={"input"} classNameValue={"output"}/>
      <div>
        <h3>Education</h3>
        {educations.map((education) => (
          <EducationComponent key={education.id} handleDeleteEducation={() =>
            handleDeleteEducation(education.id)
          }/>
        ))}
        <button onClick={handleAddEducation}>Add education</button>
      </div>

      <div>
        <h3>Experience:</h3>
        {experience.length !== 0 &&
          experience.map((experience) => (
            <ExperienceComponent key={experience.id}
              handleDeleteExperience={() =>
                handleDeleteExperience(experience.id)
              }
            />
          ))}
        <button onClick={handleAddExperience}>Add experience:</button>
      </div>
    </>
  );
}

export default App;
