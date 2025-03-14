
import "./App.css";
// import DateCounter from './DateCounter'
import Body from "./components/Body";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ErrorMassege from "./components/ErrorMassege";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "./contexts/QuizContext";




const App = () => {
  const {status, } = useQuiz()

  
  return (
    <div className="app">
      <Header />

      <Body>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorMassege />}
        {status === "ready" && (
          <StartScreen />
        )}

        {status === "active" && 
        <>

        <Progress />

        <QuestionScreen />

          <Footer>
            <Timer />
            <NextButton/>
          </Footer>
          </>
          }

          {
            status === "finished" && 
            <FinishedScreen />
          }
      </Body>

      
    </div>
  );
};

export default App;
