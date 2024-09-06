import { useState, useRef, useEffect } from "react";
import { DateComponent } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

/* Consider moving Add function one level up as did with experience component if you wanna add state specific to each education component*/
function EducationComponent({
  handleDeleteEducation,
  submit,
  setSubmit,
  setFormData,
  validationError,
  id,
}) {
  function handleFormData(key) {
    return function setTheData(value) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        education: { ...prevFormData.education, [key]: value },
      }));
    };
  }
  /* function handleFormData(key, id) {
    return function setTheData(value) {
      setFormData((prevFormData) => {
        prevFormData.education.map((education, index) => {
          if (index === id) {
            return {
              ...education,
              [key]: value,
            };
          }
        });
      });
    };
  }
*/
  return (
    <div className="education">
      <div className="institutionLocation">
        <InputComponent
          submit={submit}
          setFormData={handleFormData("institution")}
          validationError={validationError.education?.institution}
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
          setFormData={handleFormData("location")}
          validationError={validationError.education?.location}
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
        setFormData={handleFormData("degree")}
        validationError={validationError.education?.degree}
        inputElement="input"
        classNameContainer="degree"
        classNameInput="input"
        classNameOutput="output"
        type="text"
        placeholder="Add degree"
        setSubmit={setSubmit}
      />
      <DateComponent />
      <button onClick={handleDeleteEducation}>Delete education</button>
    </div>
  );
}

export { EducationComponent };
