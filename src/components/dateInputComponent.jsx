import { useEffect, useState, useRef } from "react";
import "./dateInputComponent.css"

function DateComponent() {
  const [date, setDate] = useState({ start: "", end: "" });
  const [completedFields, setCompletedFields] = useState({
    start: false,
    end: false,
  });

  const startInputRef = useRef(null);
  const endInputRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setDate({ ...date, [name]: value });
  }

  function handleBlur(e) {
    const { name } = e.target;
    setCompletedFields({
      ...completedFields,
      [name]: true
    });
 

  }
  function onFocus(e) {

    const { name } = e.target;
    setCompletedFields({
      ...completedFields,
      [name]: false
    });

  }

  function handleClick(name) {

    setCompletedFields({...completedFields,
        [name]: false
    })
  }

  useEffect(()=>{
    if(!completedFields.start && startInputRef.current) {

      startInputRef.current.focus()

    }
    else if(!completedFields.end && endInputRef.current) {

      endInputRef.current.focus()
    
    }
  }, [completedFields])

  
  return (
    <div className="dateContainer">
      {date.start !== "" && completedFields.start ? (
        <p className="date start" onClick={()=>handleClick("start")}>{date.start} </p>
      ) : (
        <div className="inputContainer">
          <label htmlFor="start"></label>
          <input
            ref={startInputRef}
            onFocus={onFocus}
            name="start"
            type="text"
            placeholder="Start date:"
            onChange={handleChange}
            onBlur={handleBlur}
            value={date.start}
          />
        </div>
      )}
      <p id="to">to</p>
      {date.end !== "" && completedFields.end ? (
        <p className="date end" onClick={()=>handleClick("end")}>  {date.end} </p>
      ) : (
        <div className="inputContainer">
          <label htmlFor="end"></label>
          <input
            ref={endInputRef}
            onFocus={onFocus}
            name="end"
            type="text"
             placeholder="End date:"
            onChange={handleChange}
            onBlur={handleBlur}
            value={date.end}
          />
        </div>
      )}
    </div>
  );
}

export {DateComponent}