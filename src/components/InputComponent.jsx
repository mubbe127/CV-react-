import { useState, useEffect, useRef } from "react";
import "./InputComponent.css";

function InputComponent({
  inputElement: InputElement = "input",
  outputElement: OutputElement = "p",
  classNameContainer,
  classNameInput,
  classNameOutput,
  type = "input",
  placeholder,
  readyToSubmit,
}) {
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(true);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleFocus() {
    setEditMode(true);
  }

  function handleBlur() {
    setEditMode(false);
  }

  function handleClick() {
    setEditMode(true);
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (editMode && inputRef.current) {
      inputRef.current.focus();
      console.log("jieep");
    }
  }, [editMode]);

  return (
    <div className={classNameContainer}>
      {value !== "" && !editMode ? (
        <OutputElement className={classNameOutput} onClick={handleClick}>
          {value}
        </OutputElement>
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
