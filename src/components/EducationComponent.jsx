import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

/* Consider moving Add function one level up as did with experience component if you wanna add state specific to each education component*/
function EducationComponent({onClick}) {

  const [educations, setEducations] = useState([])
  const idRef = useRef(0)
  const newID = idRef.current++
 
  function handleClick() {
    setEducations([...educations, {id: newID }])
  }

  function handleDelete(itemId){
  setEducations(educations.filter(education => education.id !== itemId))
  }

  return (

    <div>
        <h3>Education:</h3>
        {educations.map(education =>
        (<div>
          <InputComponent element="input" classNameContainer="educationContainer" classNameInput="educationInput" classNameValue="educationP" type="text" placeholder="Add institution"/>
          <InputComponent element="input" classNameContainer="educationContainer" classNameInput="educationInput" classNameValue="educationP" type="text" placeholder="Add location "/>
          <InputComponent element="input" classNameContainer="educationContainer" classNameInput="educationInput" classNameValue="educationP" type="text" placeholder="Add degree"/>
          <DateComponent/>
          <button onClick={()=>handleDelete(education.id)}>Delete education</button>
        </div>))}
        <button onClick={handleClick}>Add education</button>
    </div>
  )
}


export {EducationComponent}