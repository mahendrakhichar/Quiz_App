import { useLocation } from "react-router-dom";

const AllQuestion = ({name, code}) => {

  const location = useLocation();
  const {questions} = location.state || {}
  if(!questions){
    return (<div> No Questions present Yet</div>)
  }

  const validQuestions = questions.filter((question) => {
    return question.question && question.a && question.b && question.c && question.d && question.rightAnswer;
  });
  return (
    <div>
      <div>
        <h1>Quiz Name : {name}</h1> <br></br>
        <h2>Quiz code : {code}</h2> <br></br>
      </div>
      <div>
        {validQuestions.map((item, index) => (
          <div key={index}>
            <h3>Question {index + 1}:</h3>
            <p>{item.question}</p>
            <ul>
              <li>a) {item.a}</li>
              <li>b) {item.b}</li>
              <li>c) {item.c}</li>
              <li>d) {item.d}</li>
              <li>answer) {item.rightAnswer}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <button>Create Quiz</button>
      </div>
    </div>
  );
};

export default AllQuestion;
