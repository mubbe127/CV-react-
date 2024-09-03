import { useState, useEffect, useRef } from "react";
import "./InputComponent.css"

function InputComponent({inputElement: InputElement="input", outputElement: OutputElement="p", classNameContainer, classNameInput, classNameOutput, type="input", placeholder}) {
  const [value, setValue] = useState("");
  const [editState, setEditState] = useState(true);
  const inputRef = useRef(null)
  const isFirstRender = useRef(true)

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
  if(isFirstRender.current){
    isFirstRender.current=false
    return
  }
  if(editState && inputRef.current) {

    inputRef.current.focus()
    console.log("jieep")
  }

}, [editState])

  return (
    <div className={classNameContainer}>
      {value !== "" && !editState ? (
        <OutputElement className={classNameOutput} onClick={handleClick}>{value}</OutputElement>
      ) : (
        <InputElement
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