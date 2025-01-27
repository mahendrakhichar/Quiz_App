import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const Questions = ({questions, updateQuestions, currQuestionInd, updateCurrQuestionInd}) => {
  
  const navigate = useNavigate()
  const [warning, setWarning] = useState('');

  const inputHandler = (e, index) => {
    const { name, value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value; // Update the specific field in the state
    updateQuestions(updatedQuestions);
  };

  const addHandler = () => {
    const currentQuestion = questions[currQuestionInd];
  
    if (currentQuestion.a && currentQuestion.b && currentQuestion.c && currentQuestion.d && currentQuestion.question && currentQuestion.rightAnswer) {
      updateQuestions((prevQuestions) => [
        ...prevQuestions,
        { question: '', a: '', b: '', c: '', d: '', rightAnswer: '' },
      ]);
      updateCurrQuestionInd(currQuestionInd + 1);
      setWarning('');
    } else {
      setWarning("Please complete your question first.");
    }
  };
  

  const AllQuestionShow = ()=>{
    navigate('/createQuiz/Questions/AllQuestion', { state:{questions: questions}})
  }


  return (
    <div>
      <form action="">
        <fieldset>
          <legend>Question</legend>
          {/* For the question */}
          <textarea
            name="question" // Added name attribute
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your question"
            value={questions[currQuestionInd].question}
            onChange={(e) => inputHandler(e, currQuestionInd)}
          ></textarea>
          <br></br>
          {/* For option a */}
          <label htmlFor="">a)</label>
          <input
            type="text"
            name="a" // Added name attribute
            placeholder="option 1"
            value={questions[currQuestionInd].a}
            onChange={(e) => inputHandler(e, currQuestionInd)}
          />{' '}
          <br></br>
          {/* For option b */}
          <label htmlFor="">b)</label>
          <input
            type="text"
            name="b" // Added name attribute
            placeholder="option 2"
            value={questions[currQuestionInd].b}
            onChange={(e) => inputHandler(e, currQuestionInd)}
          />{' '}
          <br></br>
          {/* For option c */}
          <label htmlFor="">c)</label>
          <input
            type="text"
            name="c" // Added name attribute
            placeholder="option 3"
            value={questions[currQuestionInd].c}
            onChange={(e) => inputHandler(e, currQuestionInd)}
          />{' '}
          <br></br>
          {/* For option d */}
          <label htmlFor="">d)</label>
          <input
            type="text"
            name="d" // Added name attribute
            placeholder="option 4"
            value={questions[currQuestionInd].d}
            onChange={(e) => inputHandler(e, currQuestionInd)}
          />{' '}
          <br></br>
          {/* For right answer */}
          <label htmlFor="">corect answer)</label>
          <input
            type="text"
            name="rightAnswer" // Added name attribute
            placeholder="rightAnswer"
            value={questions[currQuestionInd].rightAnswer}
            onChange={(e) => inputHandler(e, currQuestionInd)}
          />{' '}
          <br></br>
          {/* Add new question */}
          {warning && <p style={{ color: 'red' }}>{warning}</p>}
          <button type="button" onClick={addHandler}>
            Add Question
          </button>
        </fieldset>
      </form>

      {/* Display the list of all questions */}
      <div>
        <button onClick={AllQuestionShow}>All Questions</button>
      </div>
      
    </div>
  );
};

export default Questions
