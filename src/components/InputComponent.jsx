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
  setSubmit,
}) {
  const [value, setValue] = useState("");
  const [editMode, setEditMode] = useState(true);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  function handleChange(e) {
    setValue(e.target.value);

    if (type === "email") {
      console.log("hej")
      if (e.target.validity.typeMismatch) {
        e.target.setCustomValidity("I am expecting an email address!");
      } else {
        e.target.setCustomValidity("");
      }
    }

  }
  function handleFocus() {
    setEditMode(true);
  }

  function handleBlur(e) {
    if (e.target.checkValidity()) {
      setEditMode(false);
      return;
    }

    console.log("invalid");
  }

  function handleClick() {
    setEditMode(true);
    setSubmit(false);
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
      <div><h1>JALLA MANNEN</h1></div>
      {value !== "" && (!editMode || submit) ? (
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
          required
        />
      )}
    </div>
  );
}

export { InputComponent };
