
import { useQuiz } from "../contexts/QuizContext";






const StartScreen = () => {

  const {
    dispatch, numQuestions
    } = useQuiz()

  return (
    <div className='start'>
        <h2>Welcome to the React Quiz</h2>
        <h3> {numQuestions} questions to text your React Mastery</h3>
        <button 
          onClick={()=>dispatch({type: 'START' })}
          className="btn btn-ui">
            Start
        </button>
    </div>
  )
}

export default StartScreen