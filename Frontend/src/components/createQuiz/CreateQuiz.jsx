import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = ({name, updateName, code, updateCode}) => {


  const navigate = useNavigate();

  const nextHandler = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    navigate('/createQuiz/questions'); // Navigate to the next page
  };

  return (
    <div>
      <h1>Let's create your Quiz</h1>
      <form onSubmit={nextHandler}>
        {' '}
        {/* Move the onSubmit to the form */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Your Quiz name"
          value={name} // Make sure to set value so it's controlled
          onChange={(e) => updateName(e.target.value)}
        />{' '}
        <br />
        <label htmlFor="code">Code</label>
        <input
          type="text"
          placeholder="Your Quiz code"
          value={code} // Set the value for the input field
          onChange={(e) => updateCode(e.target.value)}
        />{' '}
        <br />
        <button type="submit">Next</button>{' '}
        {/* Keep the button type as submit */}
      </form>
    </div>
  );
};

export default CreateQuiz;
