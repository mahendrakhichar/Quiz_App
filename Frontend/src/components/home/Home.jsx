import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const createHandler = () => {
    navigate('/CreateQuiz');
  }

  return (
    <div>
      <div>
        <h1>This is the Quiz App, Let's start!!!</h1>
        <p>You can create your own quiz or you can attemp a quiz</p>
      </div>
      <div>
        <button onClick={createHandler}>Create Quiz</button>
        <button>Attemp Quiz</button>
      </div>
    </div>
  );
};

export default Home