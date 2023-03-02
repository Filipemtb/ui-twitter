import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [ newAnswer, setNewAnswer ] = useState('')
  const [answers, setAnswers] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo'
  ])

  function createNewAnswer(event: FormEvent)  {
    event.preventDefault();

    setAnswers([newAnswer, ...answers ])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers ])
      setNewAnswer('')
    }
  }
  
  return (
    <main className="status">
     <Header title="Tweet" />
    <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque et velit totam repudiandae quod perferendis eius, cum sequi ab dolor veritatis magnam repellendus optio repellat. Quos non nobis molestias!
"/>

   <Separator />

   <form onSubmit={createNewAnswer} className="answer-tweet-form">
     <label htmlFor="tweet">
       <img src="https://github.com/Filipemtb.png" alt="Filipe Mota " />
       <textarea 
       id="tweet" 
       placeholder="Tweet your answer" 
       value={newAnswer}
       onKeyDown={handleHotKeySubmit}
       onChange={(event) => {
        setNewAnswer(event.target.value)
       }}
       />
     </label>

     <button type="submit">
      <PaperPlaneRight />
      <span>Answer</span>
      </button>
   </form>


    {answers.map(answer => {
   return <Tweet key={answer} content={answer} />
   })}
 </main>
  )
}
