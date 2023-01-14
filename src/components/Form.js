import "./FormStyles.css";

import React from 'react';

const Form = () => {
  return (
    <div className="form">

        <form>
            <label> Your Name: </label>
            <input type="text" name="name" />
            <label> EMAIL: </label>
            <input type="text" name="name" />
            <label> SUBJECT: </label>
            <input type="text" name="name" />
            <label> MESSAGE: </label>
            <textarea rows="6"placeholder="Type your message here"> </textarea>
            <button className="btn"> SUBMIT </button>
        </form>
     </div>
  )
}

export default Form;