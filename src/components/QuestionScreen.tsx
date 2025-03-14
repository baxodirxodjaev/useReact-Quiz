
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";



const QuestionScreen = () => {
  
  const {index, questions, } = useQuiz()

  return (
    <div>
      <h4 className="question">{questions[index].question}</h4>
      <Options 
          options={questions[index].options} 
          correctOption = {questions[index].correctOption}/>
    </div>
  );
};

export default QuestionScreen;
