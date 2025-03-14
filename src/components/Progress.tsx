import { useQuiz } from "../contexts/QuizContext";




const Progress = () => {

  const {
      index, answer,points, numQuestions, maxPoints
    } = useQuiz()

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)}/>

      <p>Question <strong>{index +1}</strong>/{numQuestions}</p>
      <p>{points}/ {maxPoints}</p>
    </header>
  )
}

export default Progress