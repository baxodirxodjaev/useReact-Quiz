import { createContext,  useContext, useEffect, useReducer } from "react";


type Question = {
    question: string;
    correctOption: number;
    id: number;
    options: string[];
    points : number
  };
  
  type Istate = {
    questions: Question[];
    status: string;
    index: number;
    answer : number | null;
    points : number;
    highScore : number;
    remainedTime : number
  };
  
  type IAction =
    | { type: "DATA_RECIEVED"; payload: Question[] }
    | { type: "DATA_FAILED" }
    | { type: "START" }
    | {type : "NEW_ANSWER"; payload : number}
    | {type : "NEXT_QUESTION"}
    | {type : "FINISH"}
    | {type : "RESTART"}
    | {type : "TIME_UP"}


    interface QuizContextType{
        status : string,
        index : number,
        answer : number | null,
        points : number,
        highScore : number,
        remainedTime : number,
        questions : Question[],
        numQuestions: number,
        maxPoints: number,
   
        dispatch : (value : IAction)=> void;
    }



  
  const initialState: Istate = {
    questions: [],
    status: "loading", //  loading, error, ready, active, finished
    index: 0,
    answer : null,
    points : 0,
    highScore : 0,
    remainedTime : 10
  };

    const SECONDS_FOR_QUESTION = 35


    const reducer = (state: Istate, action: IAction) => {
  
        const curquestion = state.questions[state.index];
        
        switch (action.type) {
          case "DATA_RECIEVED":
            return { ...state, questions: action.payload, status: "ready" };
          case "DATA_FAILED":
            return { ...state, status: "error" };
          case "START":
            return { ...state, status: "active",
              remainedTime : state.questions.length * SECONDS_FOR_QUESTION
            };
          case "NEW_ANSWER": 
            return {...state,
               answer :  action.payload,
               points: 
                action.payload === curquestion.correctOption 
                ? state.points + curquestion.points
                : state.points};
          case 'NEXT_QUESTION' : 
            return { ...state, index: state.index +1, answer : null};
          case 'FINISH' : 
            return{...state,
               status : "finished",
               highScore : 
                 state.points > state.highScore 
                 ? state.points 
                 : state.highScore
              };
            case 'RESTART' :
              return {...initialState , questions: state.questions, highScore : state.highScore  , status : "ready"}
            case "TIME_UP" :
              return {...state, remainedTime : state.remainedTime -1,
                status : state.remainedTime === 0 ? "finished" : state.status
              }
          default:
            throw new Error("Invalid action type");
        }
      
      };


const QuizContext = createContext<QuizContextType | undefined>(undefined)

const QuizProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
  const { status, questions, index, answer, points,highScore, remainedTime} = state;

  const numQuestions = questions.length;
    const maxPoints = questions.reduce((prev, cur) => prev + cur.points ,0)
    
    useEffect(()=>{
         fetch("/questions.json")
         .then((response) => response.json())
         .then((data) => dispatch({ type: "DATA_RECIEVED", payload: data.questions }))
         .catch(() => dispatch({ type: "DATA_FAILED" }));
    },[])
        


    return <QuizContext.Provider
        value={{
            status,
            questions,
            index,
            answer,
            points,
            highScore,
            remainedTime ,
            numQuestions,
            maxPoints ,

            dispatch
        }}>
            {children}
        </QuizContext.Provider>
}



const useQuiz =()=> {
    const context = useContext(QuizContext)
    if (!context) {
        throw new Error('useQuiz must be used within a QuizProvider')
    }
    return context
}

export { QuizProvider, useQuiz }