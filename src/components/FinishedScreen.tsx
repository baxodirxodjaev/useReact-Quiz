
import { useQuiz } from "../contexts/QuizContext";




const FinishedScreen = () => {
  const {points, dispatch, highScore, maxPoints} = useQuiz();

    const percentage = (points/maxPoints) * 100

    let emoji ;
    if(percentage === 100) emoji = "👾" ;
    if(percentage >=80 && percentage <= 100) emoji = "😎";
    if(percentage >=50 && percentage <= 80) emoji = "🫡";
    if(percentage >=20 && percentage <= 50) emoji = "🙂";
    if(percentage >=0 && percentage <= 20) emoji = "🥲";
    if(percentage === 0) emoji = "🦀"





  return (
    <>
        <h4 className="result"> <span>{emoji}</span> You have finished the qouiz and your score is 
           <strong> {points} : ({Math.ceil(percentage)}%)</strong> out of {maxPoints}: (100%)! </h4>
        <p className="highscore">Highscore : {highScore}</p>

        <button
          className="btn btn-ui"
          onClick={()=> dispatch({type : "RESTART"})}> 
          Restart Quiz
    </button>
    </>
  )
}

export default FinishedScreen