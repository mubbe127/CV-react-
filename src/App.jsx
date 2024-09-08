import { useState, useRef } from "react";
import { DateComponent } from "./components/dateInputComponent";
import { InputComponent } from "./components/InputComponent";
import { EducationComponent } from "./components/EducationComponent";
import { ExperienceComponent } from "./components/ExperienceComponent";
import "./App.css";

function App() {
  const [experience, setExperience] = useState([]);
  const [educations, setEducations] = useState([]);
  const [submit, setSubmit] = useState(null);
  const idRefEdu = useRef(0);
  const refIdExp = useRef(0);



  function handleAddEducation(e) {
    e.preventDefault()
    const newIdEdu = idRefEdu.current++;
    setEducations([...educations, { id: newIdEdu }]);
  }

  function handleDeleteEducation(itemId) {
    setEducations(educations.filter((education) => education.id !== itemId));
  }

  function handleAddExperience(e) { 
    e.preventDefault()
    const newIdExp = refIdExp.current++;
    setExperience([...experience, { id: newIdExp }]);
  }
  function handleDeleteExperience(itemId) {
    setExperience(experience.filter((experience) => experience.id !== itemId));
  }

  function handleSubmit(e){

    console.log("jiep")
    if(educations.length<1 || experience.length<1){
      setSubmit(false)
      e.preventDefault()
      return 
    }

  }
  function onSubmit(e){

    e.preventDefault()
    
    if(e.target.reportValidity()) {

      setSubmit(true)
    
    }
  }
  
  return (
    <form onSubmit={onSubmit} className="cvContainer">
      <InputComponent
        inputElement="input"
        outputElement="h1"
        classNameContainer="name"
        classNameInput="input"
        classNameOutput="output"
        placeholder="Fullname"
        submit={submit}
        setSubmit={setSubmit}
      />
      <InputComponent
        inputElement="input"
        outputElement="p"
        classNameContainer="adress"
        classNameInput="input"
        classNameOutput="output"
        placeholder="Adress"
        submit={submit}
        setSubmit={setSubmit}
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
          submit={submit}
          setSubmit={setSubmit}
        />
        <InputComponent
          inputElement="input"
          type="email"
          outputElement="p"
          classNameContainer="email"
          classNameInput="input"
          classNameOutput="output"
          placeholder="Add email"
          submit={submit}
          setSubmit={setSubmit}
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
          submit={submit}
          setSubmit={setSubmit}
        />
      </div>
      <div>
        <div className="educationContainer">
          <h3>Education:</h3>
          <div className="educationContainer2">
            {educations.map((education) => (
              <EducationComponent
                submit={submit}
                setSubmit={setSubmit}
                key={education.id}
                id={education.id}
                handleDeleteEducation={() =>
                  handleDeleteEducation(education.id)
                }
              />
            ))}
          </div>
        </div>
        <div className="addEducation">
          {submit ? null : <button
            className={educations.length<1 && submit===false ? "addEducation invalid" : "addEducation"}
            onClick={handleAddEducation}
          >
            Add education
          </button> }
        </div>
      </div>
      <div>
        <div className="experienceContainer">
          <h3>Experience:</h3>
          <div className="experienceContainer2">
            {experience.length !== 0 &&
              experience.map((experience) => (
                <ExperienceComponent
                  setSubmit={setSubmit}
                  submit={submit}
                  key={experience.id}
                  handleDeleteExperience={() =>
                    handleDeleteExperience(experience.id)
                  }
                />
              ))}
          </div>
        </div> { submit ? null :
        <button
          className={experience.length<1 && submit===false ? "addExperience invalid" : "addExperience"}
          onClick={handleAddExperience}
        >
          Add experience:
        </button> }
      </div> {submit ? null: <button className="submit" type="submit" onClick={handleSubmit} >
        Submit
      </button> }
    </form>
  );
}

export default App;
