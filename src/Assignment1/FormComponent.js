
import React, { useState } from 'react';
const FormComponent = () => {
    const [inputValue, setInputValue] = useState(""); 
    const [submittedValue, setSubmittedValue] = useState(""); 
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = () => {
      setSubmittedValue(inputValue);
    };
  
    return (
      <div>
        <h1>React Input Events</h1>
        <div>
          <label>
            Enter Text: 
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange} 
              placeholder="Type Text"
              style={{ marginRight: '10px', padding: '5px' }}
            />
          </label>
          <button 
            onClick={handleSubmit}
            style={{ padding: '5px 10px' }}
          >
            Submit
          </button>
        </div>
        
        <div>
          <span>
            {submittedValue}
          </span>
        </div>
      </div>
    );
  };
  
  export default FormComponent;