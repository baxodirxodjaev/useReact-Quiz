import  {  useEffect } from 'react'
import { useQuiz } from '../contexts/QuizContext'



const Timer = () => {
  const {
     remainedTime : time,dispatch
    } = useQuiz()

    const minuts = Math.floor(time /60)
    const seconds = time % 60

    useEffect(()=>{
      const timer =  setInterval(function(){
         dispatch({type : "TIME_UP"})
        },1000)
        return ()=> clearInterval(timer)
    },[dispatch])

  return (
    <span className='timer'>
     {minuts < 10 && "0"}{minuts}:{seconds < 10 && '0'}{seconds}
    </span>
  )
}

export default Timer