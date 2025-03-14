
import { useQuiz } from "../contexts/QuizContext";



interface OptionsProp{
    options : string[];
    correctOption : number
}

const Options = ({options, correctOption,  } : OptionsProp) => {
    const{dispatch, answer} = useQuiz()
    const hasAnswered = answer !== null
    

  return (
    <div className="options">
        
    {
        options.map((option, index)=> <button 
        key={option} 
        onClick={()=>dispatch({type : 'NEW_ANSWER', payload : index})}
        disabled={hasAnswered}
        className={`btn btn-option 
            ${index === answer ? "answer" : ""} 
            ${hasAnswered ? index === correctOption ? "correct" : "wrong" : ''}`}>
            {option}
        </button> )
    }
    </div>
  )
}

export default Options