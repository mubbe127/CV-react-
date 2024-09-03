import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { DateComponent } from "./components/dateInputComponent";
import { InputComponent } from "./components/InputComponent";
import { EducationComponent } from "./components/EducationComponent";
import { ExperienceComponent } from "./components/ExperienceComponent";
import "./App.css";

function App() {
  const [experience, setExperience] = useState([])
  const [educations, setEducations] = useState([])
  const idRef = useRef(0)
  const newID = idRef.current++
  const refIdExp = useRef(0);
  const newIdExp = refIdExp.current++
 
  function handleClick() {

    setEducations([...educations, {id: newID }])
  }

  function handleAddExperience() {
    setExperience([...experience,{id:newIdExp}])
  }
  function handleDeleteExperience(itemId){
      setExperience(experience.filter(experience => experience.id !== itemId))
    }
 
  return (
    <>

  
      <div>
      <h3>Education</h3>
      <EducationComponent/>
      </div>

      <div>
        <h3>Education:</h3>
        {experience.length !== 0 && experience.map(experience => 
        <ExperienceComponent handleDeleteExperience={() => handleDeleteExperience(experience.id)}/>
      )}
        <button onClick={handleAddExperience}>Add experience:</button>    
      </div>
    </>
  );
}

export default App;
