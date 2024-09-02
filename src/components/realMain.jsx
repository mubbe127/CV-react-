import { useState, useRef, useEffect } from "react";
import { date } from "./dateInputComponent";
import { InputComponent } from "./InputComponent";

function Cv() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState([
    { school, location, date, degree },
  ]);
  const [experience, setExperience] = useState([
    { role, workplace, location, date, tasks: [] },
  ]);







}

function EducationComponent() {

  const [education, setEducation] = useState([
    { school, location, date, degree },
  ]);




  return (


    <div>
        <h3>Education:</h3>


    </div>
  )
}