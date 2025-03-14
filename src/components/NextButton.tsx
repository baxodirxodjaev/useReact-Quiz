import { useQuiz } from "../contexts/QuizContext";





const NextButton = () => {
    const{index, dispatch, answer, numQuestions} = useQuiz()

    if(answer=== null) return null

  if(index < numQuestions -1)  return (
        <button
           className="btn btn-ui"
           onClick={()=> dispatch({type : "NEXT_QUESTION"})}> 
           {'Next Question >'} 
        </button>
  )
  if(index === numQuestions -1)  return (
    <button
       className="btn btn-ui"
       onClick={()=> dispatch({type : "FINISH"})}> 
       Finish
    </button>
)
}

export default NextButton