import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";
import "./EducationComponent.css";

/* Consider moving Add function one level up as did with experience component if you wanna add state specific to each education component*/
function EducationComponent({ handleDeleteEducation }) {
  return (
    <div className="education">
      <div className="institutionLocation">
        <InputComponent
          inputElement="input"
          classNameContainer="institution"
          classNameInput="input"
          classNameOutput="output"
          type="text"
          placeholder="Add institution"
        />
        <p className="comma">,</p>
        <InputComponent
          inputElement="input"
          classNameContainer="location"
          classNameInput="input"
          classNameOutput="output"
          type="text"
          placeholder="Add location "
        />
      </div>
      <InputComponent
        inputElement="input"
        classNameContainer="degree"
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
