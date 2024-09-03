import { useState, useEffect, useRef } from "react";
import "./InputComponent.css"

function InputComponent({element: Element="input", valueElement: ValueElement="p", classNameContainer, classNameInput, classNameValue, type="input", placeholder}) {
  const [value, setValue] = useState("");
  const [editState, setEditState] = useState(true);
  const inputRef = useRef(null)

function handleChange(e) {
    setValue(e.target.value)
}
function handleFocus() {
    setEditState(true)
}

function handleBlur(){

    setEditState(false)
}

function handleClick() {
 setEditState(true)
}

useEffect(()=>{
  if(editState && inputRef.current) {

    inputRef.current.focus()
  }

}, [editState])

  return (
    <div className={classNameContainer}>
      {value !== "" && !editState ? (
        <ValueElement className={classNameValue} onClick={handleClick}>{value}</ValueElement>
      ) : (
        <Element
          ref={inputRef}
          className={classNameInput}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
}

export {InputComponent}