import { useState, useEffect, useRef } from "react";

function InputComponent({
  inputElement: InputElement = "input",
  outputElement: OutputElement = "p",
  classNameContainer,
  classNameInput,
  classNameOutput,
  type = "input",
  placeholder,
  submit,
  setFormData,
  validationError,
  setSubmit
}) {
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(true);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  function handleChange(e) {
    setValue(e.target.value);
    setFormData(e.target.value)
  }
  function handleFocus() {
    setEditMode(true);
  }

  function handleBlur() {
    setEditMode(false);
  }

  function handleClick() {
   
    setEditMode(true);
    setSubmit(false)
  }
  

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    
    }
  }, [editMode]);



  return (
    <div className={classNameContainer}>
      {value !== "" && (!editMode || submit) ? (
        <OutputElement className={classNameOutput} onClick={handleClick}>
          {value}
        </OutputElement>
      ) : validationError ? (
        <InputElement
          ref={inputRef}
          className={classNameInput}
          type={type}
          value={value}
          placeholder= {validationError}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
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

export { InputComponent };
