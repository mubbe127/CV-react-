import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

/* Consider moving Add function one level up as did with experience component if you wanna add state specific to each education component*/
function EducationComponent({
  handleDeleteEducation,
  submit,
  setSubmit
}) {

  return (
    <div className="education">
      <div className="institutionLocation">
        <InputComponent
          submit={submit}
       
          inputElement="input"
          classNameContainer="institution"
          classNameInput="input"
          classNameOutput="output"
          type="text"
          placeholder="Add institution"
          setSubmit={setSubmit}
        />
        <p className="comma">,</p>
        <InputComponent
          submit={submit}
          inputElement="input"
          classNameContainer="location"
          classNameInput="input"
          classNameOutput="output"
          type="text"
          placeholder="Add location "
          setSubmit={setSubmit}
        />
      </div>
      <InputComponent
        submit={submit}
        inputElement="input"
        classNameContainer="degree"
        classNameInput="input"
        classNameOutput="output"
        type="text"
        placeholder="Add degree"
        setSubmit={setSubmit}
      />
      <DateComponent />
      {submit ? null: <button onClick={handleDeleteEducation}>Delete education</button> }
    </div>
  );
}

export { EducationComponent };
