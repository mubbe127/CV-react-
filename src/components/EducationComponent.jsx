import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";
import "./EducationComponent.css";

/* Consider moving Add function one level up as did with experience component if you wanna add state specific to each education component*/
function EducationComponent({ handleDeleteEducation }) {
  return (
    <div className="educationContainer">
      <InputComponent
        inputElement="input"
        classNameContainer="institutionContainer"
        classNameInput="input"
        classNameOutput="output"
        type="text"
        placeholder="Add institution"
      />
      <InputComponent
        inputElement="input"
        classNameContainer="locationContainer"
        classNameInput="input"
        classNameOutput="output"
        type="text"
        placeholder="Add location "
      />
      <InputComponent
        inputElement="input"
        classNameContainer="degreeContainer"
        classNameInput="input"
        classNameOutput="output"
        type="text"
        placeholder="Add degree"
      />
      <DateComponent />
      <button onClick={handleDeleteEducation}>Delete education</button>
    </div>
  );
}

export { EducationComponent };
