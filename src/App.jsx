import { useState, useRef } from "react";
import { DateComponent } from "./components/dateInputComponent";
import { InputComponent } from "./components/InputComponent";
import { EducationComponent } from "./components/EducationComponent";
import { ExperienceComponent } from "./components/ExperienceComponent";
import "./App.css";

function App() {
  const [experience, setExperience] = useState([]);
  const [educations, setEducations] = useState([]);
  const [submit, setSubmit] = useState(false);
  const idRefEdu = useRef(0);
  const newIdEdu = idRefEdu.current++;
  const refIdExp = useRef(0);
  const newIdExp = refIdExp.current++;
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    phone: "",
    email: "",
    summary: "",
    education: {
      institution: "",
      location: "",
      degree: "",
    },
    experience: {
      role: "",
      company: "",
      location: "",
      task: "",
    },
  });
  const [validationError, setValidationError] = useState(false);

  function handleSubmitState() {
    let formstate = true;

    const errors = {
      name: "",
      adress: "",
      phone: "",
      email: "",
      summary: "",
      education: {
        institution: "",
        location: "",
        degree: "",
      },
      experience: {
        role: "",
        company: "",
        location: "",
        task: "",
      },
    };

    if (formData.name?.trim() === "") {
      errors.name = "Fullname is required";
      formstate = false;
    }
    if (formData.adress?.trim() === "") {
      errors.adress = "Address is required";
      formstate = false;
    }
    if (formData.phone?.trim() === "") {
      errors.phone = "Phone is required";
      formstate = false;
    }
    if (formData.email?.trim() === "") {
      errors.email = "Email is required";
      formstate = false;
    }

    if (formData.summary?.trim() === "") {
      errors.summary = "Summary is required";
      formstate = false;
    }

    if (formData.education.institution?.trim() === "") {
      errors.education.institution = "This field is required";
      formstate = false;
    }
    if (formData.education.location?.trim() === "") {
      errors.education.location = "jalla jiep";
      formstate = false;
    }
    if (formData.education.degree?.trim() === "") {
      errors.education.degree = "This field is required";
      formstate = false;
    }

    if (formData.experience.company?.trim() === "") {
      errors.experience.company = "Company name required";
      formstate = false;
    }

    if (formData.experience.location?.trim() === "") {
      errors.experience.location = "Location is required";
      formstate = false;
    }

    if (formData.experience.role?.trim() === "") {
      errors.experience.role = "Role is required";
      formstate = false;
    }

    if (formData.experience.task?.trim() === "") {
      errors.experience.task = "This is required";
      formstate = false;
    }

    if (!formstate) {
      setValidationError(errors);
      setSubmit(false);
    } else {
      setValidationError(false);
      setSubmit(true);
    }
  }

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

  function handleFormData(key) {
    return function setTheData(value) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: value, // Dynamically update the object key with the provided value
      }));
    };
  }
  /* function handleNestedFormData() {
    setFormData((prevFormData) => {
      prevFormData.education.push({
        institution: "",
        location: "",
        degree: "",
      });
    });
  } */

  return (
    <div className="cvContainer">
      <InputComponent
        inputElement="input"
        outputElement="h1"
        classNameContainer="name"
        classNameInput="input"
        classNameOutput="output"
        placeholder="Fullname"
        submit={submit}
        setFormData={handleFormData("name")}
        validationError={validationError.name}
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
        setFormData={handleFormData("adress")}
        validationError={validationError.adress}
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
          setFormData={handleFormData("phone")}
          validationError={validationError.phone}
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
          setFormData={handleFormData("email")}
          validationError={validationError.email}
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
          setFormData={handleFormData("summary")}
          validationError={validationError.summary}
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
                setFormData={setFormData}
                validationError={validationError}
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
          <button
            className={
              educations.length < 1 && validationError
                ? "addEducation invalid"
                : "addEducation"
            }
            onClick={handleAddEducation}
          >
            Add education
          </button>
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
                  setFormData={setFormData}
                  validationError={validationError}
                  submit={submit}
                  key={experience.id}
                  handleDeleteExperience={() =>
                    handleDeleteExperience(experience.id)
                  }
                />
              ))}
          </div>
        </div>
        <button
          className={
            experience.length < 1 && validationError
              ? "addExperience invalid"
              : "addExperience"
          }
          onClick={handleAddExperience}
        >
          Add experience:
        </button>
      </div>
      <button className="submit" onClick={handleSubmitState}>
        Submit
      </button>
    </div>
  );
}

export default App;
